---
sidebar_position: 100
---

# Multibyte Paths In MeshCore

In WCMesh we want to get all our devices using 2-byte paths. This requires getting all devices at
least on firmware 1.14 and configured for 2-byte paths.

The current desired state is:
- All devices continue to upgrade to at least firmware 1.14
- Repeaters set to path hash mode 1 (2 byte)
- Companions set to 1 byte path hash size


We can't have companions on 2 byte because many repeaters are physically hard to reach (e.g. mountain top) to upgrade to 1.14+.

## But Why?

Devices in MC are identified by their public key. The public key is shown in [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) which requires two characters (from `0123456789abcdef`) to show a single byte. When a message goes over MC each repeater that handles it adds the first **n** bytes of its public key (key prefix) to part of the message the records the path. This serves two purposes:

   1. A sender can specify a path to take in their message. Each repeater can look at this path and choose not to repeat the message if they aren't part of the path. This reduces mesh congestion
   2. Devices can look at the path a message took which is useful for mesh diagnostics

A single byte can only have 256 possible values, much like a single English letter can only have 26 possible values. Ideally, every repeater has a unique key prefix. This is impossible with more than 256 repeaters. If you have non-unique repeater prefixes it's impossible to know for certain the path a message took. You have to infer based on which repeaters are nearby the previous hop, but we often don't know exactly where a repeater is located (location can be spoofed).

## Firmware upgrades

Prior to firmware 1.14 the key prefix recorded for each hop on the message path could only be one byte. Starting with 1.14, the message has a field that allows the sender to indicate how many prefix bytes should be recorded for each hop of the path. Devices on firmware older than 1.14 can't understand this field and will drop messages configured for two or three byte paths, causing messages with two or three byte paths to not reach parts of the mesh that are served only by repeaters running firmware older than 1.14.

Firmware 1.14 and newer includes a setting allowing the user to specify how the field should be set for path byte size for all messages it *originates*. When set on repeaters, this mode only affects its adverts, since adverts are the only packet type repeaters *originate*. Repeaters on firmware 1.14 or newer will repeat any message with one, two, or three byte paths, regardless of their `path.hash.mode` setting. Companions on firmware 1.14 or newer will receive all messages with one, two, or three byte paths, regardless of their path hash size setting. The one thing about adding more bytes to the path, it reduces the amount of hops a message can take.

| Setting | Path Bytes | Max Hops | Unique Prefixes |
| :-------|------------|----------|-----------------|
| `0`     | 1          | 64       | 254             |
| `1`     | 2          | 32       | 65,536          |
| `2`     | 3          | 21       | 16,777,216      |

## Adjusting settings

On repeaters, remote admin and use the cli command `set path.hash.mode {0|1|2}` with your desired hash size mode.

On companions, when the time comes, go to Settings - Experimental Settings and change Path Hash Size.
