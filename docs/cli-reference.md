---
sidebar_position: 4
---

# Repeater & Room Server CLI Reference

You can configure both Repeater and Room Server devices either via Serial (and terminal app/putty/Serial Monitor), or via the CLI screen when accessing remotely.

## Serial-only Commands

### `set freq {frequency}`

Sets the frequency.

**Usage:**
```
set freq 927.875
```

---

### `time {epoch-secs}`

Sets the time.

**Usage:**
```
time 1738242833
```

---

### `erase`

Completely erases the device's local file system.

**Usage:**
```
erase
```

---

### `log`

Show complete packet log contents.

**Usage:**
```
log
```

---

### `get acl`

Show list of authorised nodes in the Access Control List.

**Usage:**
```
get acl
```

---

## Commands via Serial or Remote

NOTE: For the various "set ..." commands, there is also a "get ..." command.

### `advert`

Sends an advertisement packet.

**Usage:**
```
advert
```

---

### `reboot`

Reboots the device (note, you'll prob get 'Timeout' which is normal).

**Usage:**
```
reboot
```

---

### `clkreboot`

Resets the internal clock, then reboots the device (note, you'll prob get 'Timeout' which is normal).

**Usage:**
```
clkreboot
```

---

### `clock`

Displays current time per device's clock.

**Usage:**
```
clock
```

---

### `password {new-password}`

Sets a new admin password for the device.

**Usage:**
```
password mypassword
```

---

### `set af {air-time-factor}`

Sets the air-time-factor.

**Usage:**
```
set af 1.0
```

---

### `set tx {tx-power-dbm}`

Sets LoRa transmit power in dBm (reboot to apply).

**Usage:**
```
set tx 20
```

---

### `set repeat {on|off}`

Enables or disables the repeater role for this node.

**Usage:**
```
set repeat on
```

---

### `set allow.read.only {on|off}`

(Room server) If 'on', then login with blank password will be allowed, but cannot Post to room (just read only).

**Usage:**
```
set allow.read.only on
```

---

### `set flood.max {max-hops}`

Sets the maximum number of hops of inbound flood packet (if >= max, packet is not forwarded).

**Usage:**
```
set flood.max 5
```

---

### `set int.thresh {db}`

Sets the Interference Threshold (in DB). Default is 14. Set to 0 to disable channel interference detection.

**Usage:**
```
set int.thresh 14
```

---

### `set agc.reset.interval {seconds}`

Sets the interval to reset the Auto Gain Controller. Set to 0 to disable.

**Usage:**
```
set agc.reset.interval 60
```

---

### `set multi.acks {0|1}`

Enables or disables the 'double ACKs' feature.

**Usage:**
```
set multi.acks 1
```

---

### `set advert.interval {minutes}`

Sets the timer interval in minutes to send a local (zero-hop) advertisement packet. Set to 0 to disable.

**Usage:**
```
set advert.interval 30
```

---

### `set flood.advert.interval {hours}`

Sets the timer interval in hours to send a flood advertisement packet. Set to 0 to disable.

**Usage:**
```
set flood.advert.interval 24
```

---

### `set guest.password {guest-password}`

Sets/updates the guest password (for repeaters, guest logins can send the 'Get Stats' request).

**Usage:**
```
set guest.password guest123
```

---

### `set name {name}`

Sets the advertisement name.

**Usage:**
```
set name MyRepeater
```

---

### `set owner.info {info}`

(Since ver 1.12.+) Sets owner information (Note: '|' characters get translated to newline chars when displayed).

**Usage:**
```
set owner.info Contact info
```

---

### `set lat {latitude}`

Sets the advertisement map latitude (decimal degrees).

**Usage:**
```
set lat 37.7749
```

---

### `set lon {longitude}`

Sets the advertisement map longitude (decimal degrees).

**Usage:**
```
set lon -122.4194
```

---

### `set radio {freq},{bw},{sf},{cr}`

Sets completely new radio params, and saves to preferences. Requires a "reboot" command to apply.

**Usage:**
```
set radio 915.8,62.5,7,5
```

---

### `set rxdelay {base}`

Sets (experimental) base (must be > 1 for effect) for applying slight delay to received packets, based on signal strength/score. Set to 0 to disable.

**Usage:**
```
set rxdelay 2
```

---

### `set txdelay {factor}`

Sets a factor multiplied with time-on-air for a flood-mode packet and with a randomized slot system, to delay its forwarding (to decrease likelihood of collisions).

**Usage:**
```
set txdelay 1.5
```

---

### `set direct.txdelay {factor}`

Same as txdelay, but for applying a random delay to the forwarding of direct-mode packets.

**Usage:**
```
set direct.txdelay 1.2
```

---

### `set bridge.enabled {on|off}`

Enable/Disable bridge.

**Usage:**
```
set bridge.enabled on
```

---

### `set bridge.delay {0-10000}`

Set delay before retransmitting packets.

**Usage:**
```
set bridge.delay 100
```

---

### `set bridge.source {rx|tx}`

Choose whether the bridge will retransmit received packets or transmitted packets.

**Usage:**
```
set bridge.source rx
```

---

### `set bridge.baud {speed}`

Set serial link baudrate for rs232 bridges.

**Usage:**
```
set bridge.baud 9600
```

---

### `set bridge.secret {shared-secret}`

Set bridge secret for espnow bridges.

**Usage:**
```
set bridge.secret mysecret
```

---

### `set adc.multiplier {factor}`

Sets custom factor to adjust reported battery voltage (only supported on select boards).

**Usage:**
```
set adc.multiplier 1.0
```

---

### `get bridge.type`

Gets bridge type: `none`, `rs232`, `espnow`.

**Usage:**
```
get bridge.type
```

---

### `log start`

Starts packet logging to file system.

**Usage:**
```
log start
```

---

### `log stop`

Stops packet logging to file system.

**Usage:**
```
log stop
```

---

### `log erase`

Erases the packet logs from file system.

**Usage:**
```
log erase
```

---

### `ver`

Shows the device version and firmware build date.

**Usage:**
```
ver
```

---

### `neighbors`

(Repeater only) Shows a list of other repeater nodes heard via zero-hop adverts. Each line is `{id-prefix-hex}:{timestamp}:{snr-times-4}`.

**Usage:**
```
neighbors
```

---

### `neighbor.remove {pubkey-prefix}`

(Repeater only) Removes first matching entry (by pubkey prefix (hex)), from neighbors list.

**Usage:**
```
neighbor.remove a1
```

---

### `clear stats`

Resets various stats counters to zero.

**Usage:**
```
clear stats
```

---

### `tempradio {freq},{bw},{sf},{cr},{minutes}`

Sets temporary radio params for the given number of &#123;minutes&#125;, reverting to original radio params afterward (does NOT save to preferences).

**Usage:**
```
tempradio 915.8,62.5,7,5,10
```

---

### `setperm {pubkey-hex} {permissions}`

Modifies the ACL. Removes matching entry (by pubkey prefix) if 'permissions' is zero. Adds new entry if pubkey-hex is full length and is not currently in ACL. Updates entry by matching pubkey prefix. Permission bits vary per firmware role, but low 2 bits are: 0 (Guest), 1 (Read only), 2 (Read write), 3 (Admin).

**Usage:**
```
setperm a1b2c3d4 3
```

---

## Region Management (Repeater Only)

`region` commands have been introduced to manage region definitions and permissions.

### `region`

(Serial only) Lists all defined regions and current flood permissions.

**Usage:**
```
region
```

---

### `region load`

NOTE: this is a special multi-command invocation. Each subsequent command is a region name (indented with spaces to indicate parent hierarchy, with one space at minimum). Terminated by sending a blank line/command.

**Usage:**
```
region load
* F
 US F
  California F
   SoCal F
    LAX F
    SNA F
    SAN F

```

---

### `region get {* | name-prefix}`

Searches for region with given name prefix (or '*' for the global scope). Replies with "-> &#123;region-name&#125; (&#123;parent-name&#125;) &#123;'F'&#125;".

**Usage:**
```
region get *
```

---

### `region put {name} {* | parent-name-prefix}`

Adds or updates a region definition with given name. Optional define parent name

**Usage:**
```
region put MyRegion *
```

---

### `region remove {name}`

Removes a region definition with given name (must match exactly, and have no child regions).

**Usage:**
```
region remove MyRegion
```

---

### `region allowf {* | name-prefix}`

Sets the 'F'lood permission for the given region ('*' for the global/legacy scope).

**Usage:**
```
region allowf *
```

---

### `region denyf {* | name-prefix}`

Removes the 'F'lood permission for the given region (NOTE: at this stage NOT advised to use this on the global/legacy scope!!).

**Usage:**
```
region denyf MyRegion
```

---

### `region home`

Replies with the current 'home' region (Note applied anywhere yet, reserved for future).

**Usage:**
```
region home
```

---

### `region home {* | name-prefix}`

Sets the 'home' region.

**Usage:**
```
region home MyRegion
```

---

### `region list {allowed|denied}`

(Since ver 1.12.+) Lists names of configured regions, filtering either just ones with flood permission, or those that do NOT have flood permission.

**Usage:**
```
region list allowed
```

---

### `region save`

Persists the region list/map to storage.

**Usage:**
```
region save
```

---

## GPS Management

`gps` command has been introduced to manage location related topics.

### `gps`

Gives status of gps. When gps is off, it replies only `off`, if on it replies with `on, {status}, {fix}, {sat count}`.

**Usage:**
```
gps
```

---

### `gps {on|off}`

Toggles gps power state.

**Usage:**
```
gps on
```

---

### `gps sync`

Syncs node time with gps clock.

**Usage:**
```
gps sync
```

---

### `gps setloc`

Sets node's position to gps coordinates and save preferences.

**Usage:**
```
gps setloc
```

---

### `gps advert`

Gives location advert configuration of the node: `none`: don't include location in adverts, `share`: share gps location (from SensorManager), `prefs`: advert the location stored in preferences.

**Usage:**
```
gps advert
```

---

### `gps advert {none|share|prefs}`

Sets location advert configuration.

**Usage:**
```
gps advert share
```

---

## Power Management (Repeater Only)

`powersaving` commands have been introduced (from v1.12.0 onwards).

### `powersaving {on|off}`

Changes the current power saving mode (persisted to prefs).

**Usage:**
```
powersaving on
```

---

### `powersaving`

Returns the current power saving mode (on or off).

**Usage:**
```
powersaving
```

---

## Commands Only via T-Deck

### `clock sync`

Syncs device's clock with T-Deck's clock.

**Usage:**
```
clock sync
```

---

## Reference

This reference is based on the [MeshCore Wiki - Repeater & Room Server CLI Reference](https://github.com/meshcore-dev/MeshCore/wiki/Repeater-&-Room-Server-CLI-Reference).
