---
sidebar_position: 0
---

# Getting Started

This section will help you set up your first MeshCore device and get connected to the mesh network.

## Quick Start Guide

Follow these steps to get your device up and running on the mesh network:

### 1. Flash Your Device

The first step is to flash your device with MeshCore firmware using the web-based flasher tool.

**[Get started with flashing your device →](./flashing-devices.md)**

This guide covers:
- Accessing the MeshCore Web Flasher
- Selecting your device type
- Choosing the appropriate device role (Companion Bluetooth, Companion USB, Repeater, or Room Server)
- Flashing the firmware onto your device

### 2. Configure Your Device

After flashing, you'll need to configure your device based on its role:

#### For Repeaters and Room Servers

**[Set up your repeater or room server →](./setting-up-repeater.md)**

This guide covers:
- Accessing the configuration portal
- Setting device name and location
- Configuring passwords (guest and admin)
- Setting up radio parameters for your region
- Using the console for advanced configuration

#### For Companion Devices

If you flashed a Companion Bluetooth device:
- Use the [MeshCore App](../meshcore-app/index.md) to connect and start chatting
- Pair your device using the default PIN (usually `123456` or as shown on the device screen)

## Device Roles Explained

| Role | Description | Use Case |
|---|---|---|
| **Companion Bluetooth** | Chat client that pairs with your phone via Bluetooth | Personal messaging and mesh communication |
| **Companion USB** | Chat client that connects to a computer via USB | Desktop mesh communication (no Bluetooth) |
| **Repeater** | Infrastructure node that relays messages | Extends network range and improves connectivity |
| **Room Server** | Node that stores messages like a bulletin board | Message storage and retrieval (can also act as a repeater) |

## Regional Settings

West Coast Mesh operates across multiple regions, each with specific radio settings:

| Region | Frequency | Bandwidth | Spreading Factor | Coding Rate* |
|---|---|---|---|---|
| **SoCal** | 927.875 | 62.5 | 7 | 5 |
| **Bay Area** | 910.525 | 62.5 | 7 | 5 |
| **Sacramento-Foothills** | 909.875 | 62.5 | 9 | 5 |
| **Central Valley** | 910.525 | 62.5 | 7 | 5 |
| **Pacific Northwest** | 910.525 | 62.5 | 7 | 5 |

**Coding Rate* is per device specific. You can be on a different coding rate and still reach the mesh. Every other parameter has to match.

Make sure to configure your device with the correct settings for your region to ensure proper mesh connectivity.

## Need Help?

- Join our [Discord community](https://discord.gg/wcmesh) for support and discussions
- Check out the [MeshCore App documentation](../meshcore-app/index.md) for app-specific guides
- Review the [CLI reference](../cli-reference.md) for advanced configuration commands

## Next Steps

Once your device is set up:
1. **Test connectivity**: Send a message in the public channel to verify your device is on the mesh
2. **Add contacts**: Discover and add other mesh nodes to your contact list
3. **Explore channels**: Join or create channels for group communication
4. **Monitor your device**: Use the configuration portal or app to monitor device status

Happy meshing! 🎉
