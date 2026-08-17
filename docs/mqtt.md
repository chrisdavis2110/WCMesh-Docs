---
sidebar_position: 8
---

# MQTT Broker

Configure your observers to feed **mqtt.wcmesh.com**. You can continue to feed LetsMesh and add `mqtt.wcmesh.com` as an additional broker.

There are multiple ways to connect:

## WebSockets on port 443 + TLS + JWT (preferred)

This is LetsMesh compatibility mode. Substitute `mqtt.wcmesh.com` for `mqtt-us-v1.letsmesh.net` in your configuration.

If you want to continue feeding LetsMesh, add `mqtt.wcmesh.com` as an additional LetsMesh-compatible broker.

| Setting | Value |
| --- | --- |
| Host | `mqtt.wcmesh.com` |
| Port | `443` |
| Protocol | WebSockets + TLS + JWT |
| Audience | `mqtt.wcmesh.com` |

## Secure MQTT on port 8883

| Setting | Value |
| --- | --- |
| Host | `mqtts://mqtt.wcmesh.com:8883` |
| Username | `wcmesh` |
| Password | `meshcoast` |

## Secure WebSockets on port 2883

| Setting | Value |
| --- | --- |
| Host | `wss://mqtt.wcmesh.com:2883` |
| Username | `wcmesh` |
| Password | `meshcoast` |

## Write-only broker

`mqtt.wcmesh.com` is a **write-only** broker. Observers can publish to it, but you cannot subscribe for your own applications.

If you need MQTT data for your own apps, contact us for read access on `mqtt2.wcmesh.com`.