---
sidebar_position: 15
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
|`set owner.info {information}`|Sets owner info so guests can see who owns the repeater|

Recommended region hierarchy for Southern California: `*` → `us` → `california` → `socal` → counties and other local areas. You can reference [this map](https://regions.wcmesh.com) or you can set up and copy the commands into your repeater using [this page](https://matkam.github.io/meshcore-settings/#socal). Think about how your repeater services the area, and which local public hashtag channels will travel through your repeater and select the proper regions. 
