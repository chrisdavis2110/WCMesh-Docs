---
sidebar_position: 0
---

# OTA Updates

This section will help you update your MeshCore device firmware over-the-air (OTA) without needing to physically connect it to a computer or use the web flasher.

## What are OTA Updates?

Over-the-air (OTA) updates allow you to upgrade your MeshCore device firmware wirelessly, directly from your phone. This is especially useful for devices that are already deployed in the field, such as repeaters or room servers that may be difficult to access physically.

## When to Use OTA Updates

OTA updates are ideal when:
- Your device is already deployed and running MeshCore
- You want to update firmware without physical access to the device
- You need to update a repeater or room server that's mounted in a remote location
- You want a quick update process using just your phone

## Prerequisites

Before starting an OTA update, make sure you have:

- **Admin access** to your repeater or room server
- **MeshCore app** installed on your phone for connectivity
- **MeshCore companion device** in a known good state for communication
- **Physical proximity** to the device (the update process requires close range)
- **Firmware file** downloaded from the [MeshCore Web Flasher](https://flasher.meshcore.co.uk/)

## Device-Specific Guides

The OTA update process differs depending on your device's hardware platform. Choose the guide that matches your device:

### nRF-based Boards (RAK, T114, Seed XIAO)

**[Update nRF-based boards →](./nrf.md)**

This guide covers:
- Downloading the firmware (.ZIP file)
- Activating Bluetooth OTA mode
- Using nRF Connect or nRF Device Firmware Update apps
- Uploading firmware over Bluetooth

**Requirements:**
- BLE antenna installed
- nRF Connect or nRF Device Firmware Update app installed
- MeshCore firmware downloaded and saved on your phone

### ESP32-based Boards (Heltec, etc.)

**[Update ESP32-based boards →](./esp.md)**

This guide covers:
- Downloading the firmware (.bin file, non-merged)
- Activating WiFi OTA mode
- Connecting to the MeshCore-OTA WiFi network
- Uploading firmware via web browser

**Requirements:**
- WiFi antenna installed
- Browser app (Chrome, etc.) installed
- MeshCore firmware downloaded and saved on your phone

## Quick Comparison

| Platform | Connection Method | File Format | App Required |
|---|---|---|---|
| **nRF (RAK, T114, Seed XIAO)** | Bluetooth | .ZIP | nRF Connect or nRF DFU |
| **ESP32 (Heltec, Station G2)** | WiFi | .bin (non-merged) | Web Browser |

## General OTA Update Process

While the specific steps vary by platform, the general process is:

1. **Download firmware** from the [MeshCore Web Flasher](https://flasher.meshcore.co.uk/)
   - Select your device and role (Repeater or Room Server)
   - Download the appropriate file format for your platform

2. **Connect to your device** using the MeshCore app
   - Log in with admin credentials
   - Navigate to the Command Line interface

3. **Activate OTA mode** by typing `start ota`
   - For nRF boards: You'll see a Bluetooth MAC address
   - For ESP32 boards: You'll see a WiFi network and URL

4. **Upload the firmware** using the platform-specific method
   - Follow the detailed steps in your device's guide

5. **Verify the update** through the MeshCore app after the device reboots

## Important Notes

- ⚠️ **Always ensure** you have admin access before attempting an OTA update
- ⚠️ **Physical proximity** is required - OTA updates work over short-range wireless connections
- ⚠️ **Download the correct file format** - nRF boards need .ZIP files, ESP32 boards need non-merged .bin files
- ⚠️ **Keep your companion device nearby** - You'll need it to communicate with your repeater during the process
- ⚠️ **Don't interrupt the process** - Let the update complete fully before disconnecting

## Troubleshooting

If you encounter issues during the OTA update:

- **Can't see the device**: Make sure you're physically close and OTA mode is active
- **Upload fails**: Verify you downloaded the correct file format for your platform
- **Connection drops**: Ensure your companion device maintains connection to the repeater
- **Device doesn't reboot**: Wait a few minutes, then check the device status via the MeshCore app

For additional help, visit our [Discord community](https://discord.gg/wcmesh).

## Alternative: Web Flasher

If OTA updates aren't suitable for your situation, you can always use the [MeshCore Web Flasher](https://flasher.meshcore.co.uk/) with a physical connection. See the [Getting Started guide](../getting-started/flashing-devices.md) for more information.
