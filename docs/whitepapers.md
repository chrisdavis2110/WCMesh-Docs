---
sidebar_position: 12
---

# White Papers

The White Papers were co-developed by [Discord](https://discord.gg/wcmesh) users **submarine_man** (you may be wondering why that is my user name, but I built a two-man submarine as one of my first jobs after graduating from UCLA Engineering), **nerdherder** and **white_lightning** (also UCLA Engineering Graduates and fellow aerospace engineers).

A message from **submarine_man**:

These White Papers cover the various settings for repeater and companion nodes. We have used a simple easily determined value (How many >0 SNR Neighbors does a repeater have) to choose the various settings. We chose this because of the simplicity, that it can be applied to many of the settable parameters in a repeater, but also that this could be relatively easily automated in a future release of the MeshCore firmware (the data already exists in the Neighbor Table of a repeater). I freely admit that I am a newbie to MeshCore (started last October). I was first curious why I could send DMs over 120 miles away, but I could not send one a few miles away. I was curious why the hop count to my destination changed on every message. So, I download the MeshCore firmware source code and started digging. This is what resulted.... There may be things I am unaware of, but this is my current understanding. I welcome comment and suggestions to improve my understanding...


- [Using *rxdelay*, *txdelay* and *direct.txdelay* to Minimize Collisions in a MeshCore Routing](<./assets/whitepapers/White Paper 1 - Using  rxdelay, txdelay and direct.txdelay to Minimize Collisions in a MeshCore Routing.pdf>)
- [How Acks and DMs work together](<./assets/whitepapers/White Paper 2 - How Acks and DMs work together.pdf>)
- [MeshCore Repeater AGC Behavior and Density Based Tuning](<./assets/whitepapers/White Paper 3 - MeshCore Repeater AGC Behavior and Density Based Tuning.pdf>)
- [MeshCore Duplicate Suppression and Randomized Backoff Windows](<./assets/whitepapers/White Paper 4 - Duplicate Suppression and Random Transmit Backoff.pdf>)
- [Why Flood DM Paths Jump](<./assets/whitepapers/White Paper 5 - Why Flood DM Paths Jump.pdf>)
- [Why are Repeater Error Rates so High](<./assets/whitepapers/White Paper 6 - Why are Error Rates so High 50.pdf>)
- [MeshCore Coding Rate (CR) Architecture, Limits, and Operational Behavior](<./assets/whitepapers/White Paper 7 - Coding Rate (CR) Architecture.pdf>)