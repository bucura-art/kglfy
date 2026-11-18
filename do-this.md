## **KGL-Life development strategy**

**BK Arena Tickets** (`https://github.com/bucura-art/kglfy`)

Keep

- 3D environment
- Buildings and roads
- Trees and vegetation
- Textures and lighting

**Slop Kigali** (`https://github.com/bucura-art/slop-kgl`)

Keep

- Bike gameplay
- Car gameplay
- Airplane gameplay
- Camera mechanics
- Movement and controls

**KGL-Life**

Realistic Kigali environment + Slop Cities gameplay

## **Your milestones**

|1 Clean BK Arena repository, remove ticketing functionality, preserve environment.
|2 Integrate Slop Cities gameplay into the BK Arena environment.
|3 Fix vehicle positioning, terrain alignment, collisions and camera.
|4 Polish gameplay and introduce KGL-Life branding.
|5 Expand the playable environment and add features.

## **What you should do RIGHT NOW**

Since you've already cloned BK Arena:

1. Create a Git branch of clean environment called `livegame`.
2. Identify and remove ticket-selection UI, seat selection, booking logic and payment-related functionality, if present.
3. Preserve the Three.js scene, Blender assets, models, textures, environment generation and exploration code.
4. Make sure the cleaned project still runs.
5. Commit this as your clean environment foundation.

**Important:** Don't delete `tour.html` or `src/tour.js` wholesale. They contain the environment rendering and exploration functionality we want.

## **One architectural decision**

Keep the two original repositories separate for now:

- `bk-arena-tickets`: source of the environment.
- `slop-kgl`: source of gameplay.

Once the environment is clean, we'll study the Slop-KGL gameplay architecture and port its mechanics into the BK Arena project.
**The goal is not to merge two repositories blindly. It's to transfer the gameplay systems into the environment while preserving what makes each project good.**
