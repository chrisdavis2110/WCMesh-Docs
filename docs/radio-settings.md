---
sidebar_position: 2
---

# Radio Settings

|Region|Frequency|Bandwidth|Spreading Factor|Coding Rate*|
|---|---|---|---|---|
| **SoCal** |927.875|62.5|7|5|
| **Bay Area (default)** |910.525|62.5|7|5|
| **Sacramento-Foothills** |909.875|62.5|9|5|
| **Central Valley (default)** |910.525|62.5|7|5|
| **Central Coast (default)** |910.525|62.5|7|5|
| **Pacific Northwest (default)** |910.525|62.5|7|5|

**Coding Rate* is per device specific. You can be on a different coding rate and still reach the mesh. Every other parameter has to match.

Below are recommended settings to set on repeaters:

|Command|Description|
|---|---|
|`set path.hash.mode 1`|Sets the repeater to 2 byte mode|
|`set txdelay 1.6`|Sets a delay for repeating a flood packet. Checkout the [whitepaper](whitepapers.md)|
|`set direct.txdelay 0.8`|Sets a delay for direct packets|
|`set loop.detect moderate`|Tells repeater to look for its ID in the path before forwarding packet|
|`set flood.advert.interval 47`| Sets advert interval to 47h. Higher the better|
|`set advert.interval 0`|Turns off direct adverts|