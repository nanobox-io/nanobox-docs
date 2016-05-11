---
title: Splitting Components Out of Your Nanobox
---

For many apps, the Nanobox multi-component server works just fine, but as your app grows and you need to expand, you can "split" components out of your nanobox onto their very own servers.

### Things to Know About Components in a Nanobox
- Can be scaled vertically
- Components cannot be redundant
- Components share resources with other components on the same server
- Components cannot be scaled individually

### Horizontally Scalable Clusters
- Vertically & Horizontally Scalable
- No shared resources
- Redundancy
- Individually scalable components
