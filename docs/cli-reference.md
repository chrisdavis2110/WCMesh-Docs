---
sidebar_position: 4
---

# Repeater & Room Server CLI Reference

You can configure both Repeater and Room Server devices either via **Serial** (terminal app, PuTTY, Serial Monitor) or via the **CLI screen** when accessing remotely. Some commands are **Serial only** as noted.

---

## Serial Only Commands

### `erase`

Erases the device (factory reset). **Serial only.**

**Warning:** This is destructive!

**Usage:**
```
erase
```

---

### `get acl`

Shows the list of authorised nodes in the Access Control List. **Serial only.**

**Usage:**
```
get acl
```

---

### `get prv.key`

Views this node's identity (private key). **Serial only.**

**Usage:**
```
get prv.key
```
**Note:** `set prv.key` is available via serial or remote; requires reboot after setting.

---

### `log`

Prints the captured log to the serial terminal. **Serial only.**

**Usage:**
```
log
```

---

### `set freq <frequency>`

Sets the frequency in MHz. **Serial only.** Requires reboot to apply.

**Parameters:** `frequency` — Frequency in MHz. **Default:** `869.525`

**Usage:**
```
set freq 927.875
```

---

### `stats-core`

System stats: battery, uptime, queue length, debug flags. **Serial only.**

**Usage:**
```
stats-core
```

---

### `stats-packets`

Packet counters: received, sent. **Serial only.**

**Usage:**
```
stats-packets
```

---

### `stats-radio`

Radio stats: noise floor, last RSSI/SNR, airtime, receive errors. **Serial only.**

**Usage:**
```
stats-radio
```

---

## Commands via Serial or Remote

*(Alphabetical. For the various "set ..." commands there is also a "get ..." command unless noted.)*

### `advert`

Sends a flood advert.

**Usage:**
```
advert
```

---

### `get / set adc.multiplier`

Fine-tune the battery reading (0.0–10.0). **Default:** `0.0` (or board-defined). Returns "Error: unsupported by this board" if not supported.

**Usage:**
```
get adc.multiplier
set adc.multiplier 1.0
```

---

### `get / set advert.interval`

Zero-hop advert interval in minutes (rounded to multiple of 2; range 60–240). **Default:** `0`

**Usage:**
```
get advert.interval
set advert.interval 30
```

---

### `get / set af`

Airtime factor (duty cycle limit), 0–9. **Default:** `1.0`

**Usage:**
```
get af
set af 1.0
```

---

### `advert`

Sends a flood advert.

**Usage:**
```
advert
```

---

### `get / set agc.reset.interval`

AGC reset interval in seconds (rounded down to multiple of 4). Set to 0 to disable. **Default:** `0.0`

**Usage:**
```
get agc.reset.interval
set agc.reset.interval 60
```

---

### `get / set allow.read.only`

(Room server) When `on`, blank-password login is allowed but cannot Post (read-only). **Default:** `off`

**Usage:**
```
get allow.read.only
set allow.read.only on
```

---

### `get / set bridge.baud`

Bridge baud rate (RS-232 only). **Default:** `115200`
Rates: `9600`, `19200`, `38400`, `57600`, `115200`

**Usage:**
```
get bridge.baud
set bridge.baud 9600
```

---

### `get / set bridge.channel`

Bridge channel (ESP-Now only). Channel number 1–14.

**Usage:**
```
get bridge.channel
set bridge.channel 1
```

---

### `get / set bridge.delay`

Delay in ms for packets routed through the bridge (0–10000). **Default:** `500`

**Usage:**
```
get bridge.delay
set bridge.delay 100
```

---

### `get / set bridge.enabled`

Enable or disable the bridge. **Default:** `off`

**Usage:**
```
get bridge.enabled
set bridge.enabled on
```

---

### `get / set bridge.secret`

ESP-Now encryption secret (16 characters). **Default:** Varies by board.

**Usage:**
```
get bridge.secret
set bridge.secret mysecret
```

---

### `get / set bridge.source`

Source of packets bridged: `rx` (received) or `tx` (transmitted). **Default:** `tx`

**Usage:**
```
get bridge.source
set bridge.source rx
```

---

### `board`

Shows the hardware/board name.

**Usage:**
```
board
```

---

### `clear stats`

Clears stats counters.

**Usage:**
```
clear stats
```

---

### `clkreboot`

Resets the clock and reboots the node (you may see "Timeout"—this is normal).

**Usage:**
```
clkreboot
```

---

### `clock`

Displays current time in UTC.

**Usage:**
```
clock
```

---

### `get / set direct.txdelay`

Retransmit delay factor for direct traffic (0–2). **Default:** `0.2`

**Usage:**
```
get direct.txdelay
set direct.txdelay 1.2
```

---

### `get / set flood.advert.interval`

Flood advert interval in hours (3–168). **Default:** `12` (Repeater), `0` (Sensor)

**Usage:**
```
get flood.advert.interval
set flood.advert.interval 24
```

---

### `get / set flood.max`

Maximum flood hop count (0–64). **Default:** `64`

**Usage:**
```
get flood.max
set flood.max 5
```

---

### `get freq`

Views the current frequency in MHz. (`set freq` is Serial only—see Serial Only Commands.)

**Usage:**
```
get freq
```

---

### `get / set guest.password`

Guest password. **Set by build flag:** `ROOM_PASSWORD` (Room Server only). **Default:** &lt;blank&gt;

**Usage:**
```
get guest.password
set guest.password guest123
```

---

### `get / set int.thresh`

Local interference threshold. **Default:** `0.0`

**Usage:**
```
get int.thresh
set int.thresh 14
```

---

### `get / set lat`

Latitude in degrees. **Set by build flag:** `ADVERT_LAT`. **Default:** `0`

**Usage:**
```
get lat
set lat 37.7749
```

---

### `log erase`

Erases the captured log from node storage.

**Usage:**
```
log erase
```

---

### `log start`

Begins capture of RX log to node storage.

**Usage:**
```
log start
```

---

### `log stop`

Ends capture of RX log to node storage.

**Usage:**
```
log stop
```

---

### `get / set lon`

Longitude in degrees. **Set by build flag:** `ADVERT_LON`. **Default:** `0`

**Usage:**
```
get lon
set lon -122.4194
```

---

### `get / set multi.acks`

Multi-Acks support: `0` disable, `1` enable. **Default:** `0`

**Usage:**
```
get multi.acks
set multi.acks 1
```

---

### `get / set name`

Node name. **Set by build flag:** `ADVERT_NAME`. Max length: 24 bytes if location set, 32 otherwise. Emoji/unicode may use more than one byte.

**Usage:**
```
get name
set name MyRepeater
```

---

### `neighbor.remove <pubkey_prefix>`

(Repeater only) Removes a neighbor. **Parameters:** `pubkey_prefix` — Public key (or prefix) of the node to remove.

**Usage:**
```
neighbor.remove a1
```

---

### `neighbors`

(Repeater only) Lists nearby neighbors. Output limited to 8 most recent adverts. Each line: `{pubkey-prefix}:{timestamp}:{snr*4}`.

**Usage:**
```
neighbors
```

---

### `get / set owner.info`

Owner information text. **Default:** &lt;blank&gt;. `|` is translated to newlines. Requires firmware 1.12+.

**Usage:**
```
get owner.info
set owner.info Contact info
```

---

### `password <new_password>`

Changes the admin password. **Set by build flag:** `ADMIN_PASSWORD`. **Default:** `password`. Reply echoes the updated password. Any node using this password is added to the admin ACL.

**Usage:**
```
password mypassword
```

---

### `get / set radio`

Radio parameters: `get radio` or `set radio <freq>,<bw>,<sf>,<cr>`. **Parameters:** freq (MHz), bw (kHz), sf (5–12), cr (5–8). **Set by build flag:** `LORA_FREQ`, `LORA_BW`, `LORA_SF`, `LORA_CR`. **Default:** `869.525,250,11,5`. Requires reboot to apply.

**Usage:**
```
get radio
set radio 915.8,62.5,7,5
```

---

### `reboot`

Reboots the node (you may see "Timeout"—this is normal).

**Usage:**
```
reboot
```

---

### `get / set repeat`

Repeat flag: enable/disable repeater role. **Default:** `on`

**Usage:**
```
get repeat
set repeat on
```

---

### `get / set rxdelay`

[Experimental] Processing delay base for received traffic (0–20). **Default:** `0.0`

**Usage:**
```
get rxdelay
set rxdelay 2
```

---

### `sensor get <key>`

(When sensor support is compiled in) Views the value of a sensor. **Parameters:** `key` — Sensor setting name.

**Usage:**
```
sensor get temperature
```

---

### `sensor list [start]`

(When sensor support is compiled in) Lists sensors. **Parameters:** `start` — Optional starting index (default 0). Output format: `<var_name>=<value>\n`

**Usage:**
```
sensor list
```

---

### `sensor set <key> <value>`

(When sensor support is compiled in) Sets a sensor value. **Parameters:** `key`, `value`

**Usage:**
```
sensor set key value
```

---

### `setperm <pubkey> <permissions>`

Add, update or remove companion permissions. **Parameters:** `pubkey` — Companion public key; `permissions` — `0` Guest, `1` Read-only, `2` Read-write, `3` Admin. Omitting `permissions` removes the entry.

**Usage:**
```
setperm a1b2c3d4 3
```

---

### `set prv.key <private_key>`

Sets this node's identity (private key). **Parameters:** `private_key` — 64 hex characters. Requires reboot after setting.

**Usage:**
```
set prv.key <hex>
```

---

### `start ota`

Starts an Over-The-Air (OTA) firmware update.

**Usage:**
```
start ota
```

---

### `tempradio <freq>,<bw>,<sf>,<cr>,<timeout_mins>`

Temporary radio parameters for the given minutes; not saved (clears on reboot). **Parameters:** freq (MHz 300–2500), bw (kHz 7.8–500), sf (5–12), cr (5–8), timeout_mins &gt; 0.

**Usage:**
```
tempradio 915.8,62.5,7,5,10
```

---

### `time <epoch_seconds>`

Sets the time to a specific timestamp. **Parameters:** `epoch_seconds` — Unix epoch time.

**Usage:**
```
time 1738242833
```

---

### `get / set tx`

Transmit power in dBm (1–22). **Set by build flag:** `LORA_TX_POWER`. Controls LoRa chip only; some nodes have an extra PA. Refer to node manual; too high may violate regulations.

**Usage:**
```
get tx
set tx 20
```

---

### `get / set txdelay`

Retransmit delay factor for flood traffic (0–2). **Default:** `0.5`

**Usage:**
```
get txdelay
set txdelay 1.5
```

---

### `ver`

Returns the firmware version (and build date).

**Usage:**
```
ver
```

---

## Region Management

*(v1.10+. Alphabetical.)*

### `region`

Dumps all defined regions and flood permissions. **Serial only** for firmware older than 1.12.0.

**Usage:**
```
region
```

---

### `region allowf <name>`

Allows a region. **Parameters:** `name` — Region name or `*` for wildcard. On wildcard `*`, allows packets without region transport codes.

**Usage:**
```
region allowf *
```

---

### `region denyf <name>`

Blocks a region. **Parameters:** `name` — Region name or `*` for wildcard. On wildcard `*`, drops packets without region transport codes. Use with caution.

**Usage:**
```
region denyf MyRegion
```

---

### `region get <name>`

Shows information for a region. **Parameters:** `name` — Region name or `*` for wildcard.

**Usage:**
```
region get *
```

---

### `region home` / `region home <name>`

Views or sets the home region for this node. **Parameters:** `name` — Region name.

**Usage:**
```
region home
region home MyRegion
```

---

### `region list <filter>`

Lists regions. **Parameters:** `filter` — `allowed` | `denied`. **Serial only.** Requires firmware 1.12+.

**Usage:**
```
region list allowed
```

---

### `region load` / `region load <name> [flood_flag]`

Bulk-load region lists. **Parameters:** `name` — Region name (`*` = wildcard); `flood_flag` — Optional `F` to allow flooding. Indentation defines parent-child relationships (max 8 levels). `region load` with no name is interactive and does not work remotely.

**Usage:**
```
region load
* F
  #NorthAmerica
    #USA
<blank line to end>
```

---

### `region put <name> [parent_name]`

Creates or updates a region. **Parameters:** `name` — Region name; `parent_name` — Parent region (optional; defaults to wildcard).

**Usage:**
```
region put MyRegion *
```

---

### `region remove <name>`

Removes a region. **Parameters:** `name` — Region name. All child regions must be removed first.

**Usage:**
```
region remove MyRegion
```

---

### `region save`

Saves any region changes made since reboot.

**Usage:**
```
region save
```

---

### Region Examples

**Example 1: Named public region with F flag**
```
region load
#Europe F
<blank line to end region load>
region save
```
Creates `#Europe` with flooding enabled.

**Example 2: Wildcard with F flag**
```
region load
* F
<blank line to end region load>
region save
```
Wildcard `*` with flooding; applies to packets without transport codes.

**Example 3: Wildcard without F flag**
```
region load
*
<blank line to end region load>
region save
```
Wildcard exists but does not affect packet distribution.

**Example 4: Nested regions with F flag**
```
region load
#Europe F
  #UK
    #London
    #Manchester
  #France
    #Paris
    #Lyon
<blank line to end region load>
region save
```
Nested children inherit parent's flooding.

**Example 5: Wildcard with nested public regions**
```
region load
* F
  #NorthAmerica
    #USA
      #NewYork
      #California
    #Canada
      #Ontario
      #Quebec
<blank line to end region load>
region save
```
Global flooding with regional hierarchy.

---

## GPS Management

*(When GPS support is compiled in. Alphabetical.)*

### `gps` / `gps <state>`

Views or changes GPS state. **Parameters:** `state` — `on` | `off`. **Default:** `off`. When enabled, output format: `{status}, {fix}, {sat count}`

**Usage:**
```
gps
gps on
```

---

### `gps advert` / `gps advert <policy>`

Views or changes GPS advert policy. **Parameters:** `policy` — `none` | `share` | `prefs` (none: don't include location; share: from SensorManager; prefs: node lat/lon). **Default:** `prefs`

**Usage:**
```
gps advert
gps advert share
```

---

### `gps setloc`

Sets this node's location from GPS coordinates and saves to preferences.

**Usage:**
```
gps setloc
```

---

### `gps sync`

Syncs this node's clock with GPS time.

**Usage:**
```
gps sync
```

---

## Power Management

*(Repeater only. Alphabetical.)*

### `powersaving` / `powersaving <state>`

Views or changes the power saving flag. **Parameters:** `state` — `on` | `off`. **Default:** `on`. When enabled, device enters sleep between radio transmissions.

**Usage:**
```
powersaving
powersaving on
```

---

## Commands via T-Deck Only

*(Alphabetical.)*

### `clock sync`

Syncs the device's clock with the T-Deck's clock. Available when using a T-Deck.

**Usage:**
```
clock sync
```

---

## Reference

This reference is based on [MeshCore CLI Commands](https://github.com/meshcore-dev/MeshCore/blob/main/docs/cli_commands.md).
