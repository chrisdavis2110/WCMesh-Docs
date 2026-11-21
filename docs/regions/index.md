# Implementing Regions

This document explains how region-based filtering works in MeshCore: how packets are scoped, how repeaters allow or deny traffic by region, and examples about multi-repeater and multi-companion setups.

## How scope works on the wire

### Transport code = scope

Each flood packet can carry two 16-bit **transport codes** in the packet header. The first one is the **flood scope**: it identifies which region the packet is considered to be in.

- **Sender:** When sending with a scope (e.g. on a Companion with a channel scope set), the firmware uses a **TransportKey** tied to that region to compute a code. That code is written into the packet and sent.
- **Receiver:** A repeater reads the packet’s transport code and checks it against its **region map** to decide whether to forward or drop the packet.

So **scope** = which region’s key was used to tag the packet. Different region names (e.g. west, socal, bayarea) produce different keys and therefore different codes. A packet has exactly one scope.

### Regions and allow/deny

On a repeater, each **region** has:

- A **name** (e.g. `west`, `socal`, `*` for unscoped).
- A **TransportKey** derived from that name (e.g. hash of the name).
- **Flags:** in particular `REGION_DENY_FLOOD`. If set, that region is **denied** (no flooding); if clear, it is **allowed**.

Contrary to what you may think, the region `*` applies to packets that have **no** transport codes (plain flood, no scope), not **all** transport codes. All other traffic is matched by comparing the packet’s transport code to the keys of **allowed** regions only.

### Matching on the repeater

When a flood packet arrives, the repeater:

1. **Classifies it**:
   - If the packet has transport codes, it tries to find a match in the region map.
   - Finding a match only considers regions that **allow** flood. The first region whose key matches is the “matched” region. If none match, the result is “no region.”
   - If the packet has no transport codes (plain flood), the packet is treated as `*`; allow/deny is determined by the unscoped’s flags.

2. **Decides whether to forward**:
   - If the packet is flood and the matched region is “none” (unknown scope or only denied regions), the repeater **drops** the packet.
   - Otherwise it may forward (subject to other rules like path length, etc.).

So: **a repeater only forwards a packet if the packet’s scope matches an allowed region on that repeater.** Different scopes (west, socal, etc.) are independent: each scope is either allowed or denied per region.


## Repeater regions and companion scopes

### Multiple regions allowed

A packet’s single transport code is compared against each allowed region’s key; the first match wins.

If you want a repeater to forward traffic:

- Create and allow the region (e.g. `region put socal`).
- Packets with the scope will match and be forwarded; packets with any other scope will not match and will be dropped.
- You can set up hierarchy (e.g. `region put socal`, then `region put losangeles socal`).
- Matching a scope only considers regions that **allow** flood.

### Nested regions (parent/child)

Each region can have a **parent**. The tree is flat in storage; hierarchy is only the parent link. Currently, nesting regions does not have any affect. It is purely organizational.

- **Creation:** Use `region put <name> [parent_name]` or `region load` with indented lines. Indent level (number of leading spaces, max 8) sets the parent: e.g. one space = child of `*`, two spaces = child of the previous one-space region, etc.
- **Removal:** A region cannot be removed if it has children. Remove from the leaves up (e.g. losangeles, then socal, then california).
- **Flags are per region:** Allow/deny is stored per region. The code does **not** “inherit” flood permission from parent to child. If a parent is set to deny, the child does not inheritly deny. The child can be set to allow.

So the hierarchy is for **organization and display** only. Filtering is per region name (per transport key), not “parent allows so child is allowed.”

### Default region

One region can be designated **default** for the node. Repeaters use the default region as the scope for its adverts.

- **Set:** `region default <name>`
- **Read:** `region default`
- **Effect today:** Stored and shown in CLI and in the region tree. Used for setting a scope for the repeater's adverts.

### Home region

One region can be designated **home** for the node. This is used for display (e.g. `region home`, `^` in region list) and is intended for future use; it does **not** currently affect forwarding on repeaters.

- **Set:** `region home <name>`
- **Read:** `region home`
- **Effect today:** Stored and shown in CLI and in the region tree (`^`). Not used for forwarding or for choosing send scope yet (those are planned).

### One scope per packet

- Each companion sends (and receives) with a **channel scope** (e.g. west or socal). That scope fixes the transport code on every packet it sends.
- A packet has **one** scope. It does not belong to “west and socal” at once.


For CLI details (region put, allowf, denyf, home, load, save, etc.), see [CLI Commands – Region Management](../cli-reference.md#region-management-repeater-only).