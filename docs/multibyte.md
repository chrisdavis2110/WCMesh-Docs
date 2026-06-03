---
sidebar_position: 98
---

# Multibyte Paths In Meshcore

## TL;DR:

In WCMesh we want to get all our devices using 2-byte paths. This requires getting all devices at
least on firmware 1.14 and configured for 2-byte paths.

The current desired state is:
- All devices at least on firmware 1.14
- Companions set to path mode 0 (1 byte)
- Repeaters set to path mode 1 (2 byte)

We can't have companions on `mode 1` because many repeaters are physically hard to reach (e.g. mountain top) and upgrade to 1.14+.

## But Why?

1. Devices in MC are identified by their public key
   - The public key is shown in [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) which requires two characters (from `0123456789abcdef`) to show a single byte
2. When a message goes over MC each repeater that handles it adds the first `n` bytes of its public key (key prefix) to part of the message the records the path. This serves two purposes:
   1. A sender can specify a path to take in their message. Each repeater can look at this path and choose not to repeat the message if they aren't part of the path. This reduces mesh congestion
   1. Devices that see the message can look at the path a message took which is useful for mesh diagnostics
3. A single byte can only have 256 possible values, much like a single English letter can only have 26 possible values
4. Ideally, every repeater has a unique key prefix. This is impossible with more than 256 repeaters
   - If you have non-unique repeater prefixes it's impossible to know for certain the path a message took.
   - You have to infer based on which repeaters are nearby the previous hop
   - We often don't know exactly where a repeater is located
5. Prior to firmware 1.14 the key prefix recorded for each hop on the message path could only be one byte
6. Starting with 1.14, the message has a field that allows the sender to indicate how many prefix bytes should be recorded for each hop of the path
7. Devices on firmware older than 1.14 can't understand this field and will drop messages configured for two or three byte paths
8. Because of #7 devices sending messages with two or three byte paths can't reach parts of the mesh that are served only by repeaters running firmware older than 1.14
9. Firmware 1.14 and newer includes a setting allowing the user to specify how the field should be set for path byte size for all messages it _originates_

| Setting | Path Bytes | Max Hops | Unique Prefixes | 
| :-------|------------|----------|-----------------|
| `0`     | 1          | 64       | 254             | 
| `1`     | 2          | 32       | 65,536          |
| `2`     | 3          | 21       | 16,777,216      |

10. In contrast to #7, devices on firmware 1.14 or newer can receive messages with one, two, or three byte paths, regardless of their `path.hash.mode` setting
11. Repeaters on firmware 1.14 or newer will repeat messages with one, two, or three byte paths, regardless of their `path.hash.mode` setting