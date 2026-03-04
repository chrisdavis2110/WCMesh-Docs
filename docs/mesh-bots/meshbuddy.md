---
sidebar_position: 1
---

# MeshBuddy (Discord)

MeshBuddy uses `/` (slash) commands. Type the command in a Discord channel and helper text should appear above the input field.

## Commands

### `/list`

Outputs a list of all repeaters that are on the mesh.

**Usage:**
```
/list [days]
```

**Parameters:**
- `days` (optional) - Limit results to repeaters active within this many days

**Response:** List of repeaters with status indicators (✅ online, ⚠️ inactive 3+ days, ❌ inactive 12+ days, ⏳ reserved).

---

### `/offline`

Outputs a list of repeaters that have not sent an advert in over 3 days.

**Usage:**
```
/offline [days]
```

**Parameters:**
- `days` (optional) - Number of days of inactivity to consider offline

**Response:** List of repeaters that have not advertised within the specified period.

---

### `/dupes`

Outputs a list of duplicate repeater prefixes.

**Usage:**
```
/dupes [days]
```

**Parameters:**
- `days` (optional) - Time window to consider for duplicate detection

**Response:** List of hex prefixes that appear more than once.

---

### `/open`

Outputs a list of unused hex keys so you can plan your next repeater.

**Usage:**
```
/open [days]
```

**Parameters:**
- `days` (optional) - Time window for determining availability

**Response:** List of available hex prefixes that are not in use or reserved.

---

### `/prefix`

Checks if the hex prefix you want to use for your repeater is available.

**Usage:**
```
/prefix hex:<hex>
```

**Parameters:**
- `hex` - The two-character hex prefix to check

**Response:** Whether the prefix is available, in use, or reserved.

---

### `/stats`

Outputs detailed stats of a repeater by hex prefix.

**Usage:**
```
/stats hex:<hex>
```

**Parameters:**
- `hex` - The repeater's hex prefix

**Response:** Detailed repeater information including status, last seen, and related data.

---

### `/qr`

Creates a QR code to add the node to your contacts list.

**Usage:**
```
/qr hex:<hex>
```

**Parameters:**
- `hex` - The repeater's hex prefix

**Response:** A QR code image that can be scanned to add the node to contacts.

---

### `/reserve`

Reserve a hex prefix for your repeater. Check `/open`, `/prefix`, or `/stats` first.

**Usage:**
```
/reserve prefix:<prefix> name:<name>
```

**Parameters:**
- `prefix` - The hex prefix to reserve
- `name` - Name for your repeater

**Response:** Confirmation that the prefix has been reserved.

---

### `/release`

Releases a hex prefix from the reserve list so others can reserve it.

**Usage:**
```
/release prefix:<prefix>
```

**Parameters:**
- `prefix` - The reserved hex prefix to release

**Response:** Confirmation that the prefix has been released.

---

### `/rlist`

Outputs a list of all repeaters on the reserved list.

**Usage:**
```
/rlist
```

**Response:** List of all reserved prefixes and their associated names.

---

### `/claim`

Claim ownership of a repeater.

**Usage:**
```
/claim hex:<hex>
```

**Parameters:**
- `hex` - The repeater's hex prefix to claim

**Response:** Confirmation of ownership claim.

---

### `/unclaim`

Unclaim ownership of a repeater. Only the person who claimed it or the bot owner can use this command.

**Usage:**
```
/unclaim hex:<hex>
```

**Parameters:**
- `hex` - The repeater's hex prefix to unclaim

**Response:** Confirmation that the repeater has been unclaimed.

---

### `/remove`

Removes a repeater from the repeater list.

**Usage:**
```
/remove hex:<hex>
```

**Parameters:**
- `hex` - The repeater's hex prefix to remove

**Response:** Confirmation that the repeater has been removed.

---

### `/keygen`

Generates a public/private key pair.

**Usage:**
```
/keygen prefix:<prefix>
```

**Parameters:**
- `prefix` - The hex prefix to use for key generation

**Response:** Generated public/private key pair.

---

### `/help`

Show the help message.

**Usage:**
```
/help
```

**Response:** List of available commands and usage information.

---

## Output Info

✅ = Online repeater (sent an advert within last 3 days)

⚠️ = Repeater has not sent an advert in 3+ days. Better check on it.

❌ = Repeater has not sent an advert in 12+ days and will be removed from the repeater list after 14 days of inactivity.

⏳ = Repeater is on the reserved list
