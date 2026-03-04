---
sidebar_position: 3
---

# SoCal Regions

Recommended region hierarchy for Southern California: wildcard → US → California → SoCal → counties.

## Hierarchy

| Level   | Region name | Parent |
|--------|-------------|--------|
| Global | `*`         | —      |
| Country| `us`        | `*`    |
| State  | `ca`        | `us`   |
| Area   | `socal`     | `ca`   |
| County | `la`        | `socal`|
| County | `oc`        | `socal`|
| County | `sd`        | `socal`|
| County | `ie`        | `socal`|
| County | `sb`        | `socal`|
| County | `vta`       | `socal`|

- **la** — Los Angeles County
- **oc** — Orange County
- **sd** — San Diego County
- **ie** — Inland Empire
- **sb** — Santa Barbara County
- **vta** — Ventura County

## Add via region put

Add each region with its parent, then allow flood. Use `*` for a top-level region.

```text
region put us *
region allowf us
region put ca us
region allowf ca
region put socal ca
region allowf socal
region put la socal
region allowf la
region put oc socal
region allowf oc
region put sd socal
region allowf sd
region put ie socal
region allowf ie
region put sb socal
region allowf sb
region put vta socal
region allowf vta
region save
```

## Load via CLI

Use [region load](adding-regions.md#load-multiple-regions-with-hierarchy) with this hierarchy (indentation sets parent; `F` = flood allowed). Then run `region save`.

```text
region load
* F
 us F
  ca F
   socal F
    la F
    oc F
    sd F
    ie F
    sb F
    vta F

region save
```