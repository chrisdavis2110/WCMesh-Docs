---
sidebar_position: 1
---

# MeshBuddy (Discord)

## Commands

MeshBuddy uses `/`(slash) commands. Type the command in a Discord channel and a helper text should appear above the input field.

| Command | Description | Parameters |
|---|---|---|
| `/list` | Outputs a list of all the repeaters that are on the mesh.  | `days` (optional) |
| `/offline` | Outputs a list of repeaters that have not sent an advert in over 3 days. | `days` (optional) |
| `/dupes` | Outputs a list of duplicate repeater prefixes. | `days` (optional) |
| `/open` | Outputs a list of unused hex keys so you can plan your next repeater. | `days` (optional) |
| `/prefix` | Checks if the hex prefix you want to use for your repeater is available. | `hex` |
| `/stats` | Outputs detailed stats of a repeater by hex prefix. | `hex` |
| `/qr` | Creates a qr code to add the node to your contacts list. | `hex` |
| `/reserve` | Reserve a hex prefix for your repeater (check `/open`, `/prefix`, or `/stats` first!). | `prefix`, `name` |
| `/release` | Releases a hex prefix from the reserve list so others can reserve it! | `prefix` |
| `/rlist` | Outputs a list of all the repeaters on the reserved list. |  |
| `/claim` | Claim ownership of a repeater | `hex` |
| `/unclaim` | Unclaim ownership of a repeater (only the person who claimed or the bot owner can use this command) | `hex` |
| `/remove` | Removes a repeater from the repeater list. | `hex` |
| `/keygen` | Generates a public/private key pair. | `prefix` |
| `/help` | Show the help message. | |

## Output Info

✅ = Online repeater (sent an advert within last 3 days)

⚠️ = Repeater has not sent an advert in 3+ days. Better check on it.

❌ = Repeater has not sent an advert in 12+ days and will be removed from the repeater list after 14 days of inactivity.

⏳ = Repeater is on the reserved list