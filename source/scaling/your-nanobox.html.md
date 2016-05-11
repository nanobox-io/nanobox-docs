---
title: Your Nanobox
---

**EDIT:** Multi-Component Servers

Every Nanobox app starts out inside a single server that we lovingly call...wait for it...your "Nanobox". Each component runs inside a virtualized container inside your Nanobox. The Nanobox acts as a starting point from which you can scale in many different ways:

- You can scale your Nanobox vertically, meaning give it more resources (RAM, CPU, Disk).
- You can split individual components out of the Nanobox into individually scalable Horizontal clusters. More information about this is available in the [Splitting Components out of your Nanobox](/scaling/splitting-components-out) doc.
- You can even split components out into other Nanoboxes within the same app. This is also covered in the [Splitting Components out of your Nanobox](/scaling/splitting-components-out) doc.

### Things to Know About Components in a Nanobox
- Can only be scaled vertically
- Components cannot be redundant
- Components share resources with other components on the same server
- Components cannot be scaled individually
