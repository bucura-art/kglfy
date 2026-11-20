# KGL-Life: Gameplay Integration Audit

We are combining two existing projects:

**Environment (keep this as the foundation):**
- Repository: `bucura-art/kglfy`
- Branch: `livegame`
- Main environment: `src/tour.js`
- Entry point: `tour.html`
- Environment assets: `public/models/` and `public/tour/site.json`

**Gameplay (reuse selected systems):**
- Repository: `bucura-art/slop-kgl`
- Branch: `main`
- Main entry point: `js/main.js`
- Player controls: `js/controllers.js`
- Cameras: `js/cameras.js`
- Vehicle models: `js/actor-models.js`
- Physics: `js/vehicle-physics.js`

## Goal

Keep the BK Arena environment and integrate Slop-KGL gameplay into it.

We want:
- Walking
- Car driving
- Bicycle riding
- Aircraft gameplay (currently helicopter in Slop-KGL)

## Tasks

1. Inspect both projects and their dependencies.
2. Compare Three.js versions, renderers and WebGPU-specific features.
3. Identify how to reuse Slop-KGL vehicle models, controls, physics and cameras.
4. Identify dependencies on Slop-KGL's terrain, road graph, colliders and geodata.
5. Investigate how to adapt player movement and collision detection to the BK Arena environment.
6. Account for the different geographic origins and coordinate systems.
7. Recommend the least destructive integration strategy.

## Strict rules

- BK Arena remains the environment foundation.
- Do not replace it with Slop-KGL's city.
- Do not import Slop-KGL's KICC geodata or city-building systems.
- Do not create duplicate scenes or rendering loops.
- Preserve existing BK Arena models, textures, lighting and environment functionality.
- Do not blindly copy entire modules.
- Do not modify any files yet.

## Deliverable

Create `GAMEPLAY_INTEGRATION_PLAN.md` with:
- Exact files to reuse.
- Exact files to adapt.
- Renderer compatibility solution.
- Coordinate and terrain adaptation strategy.
- Recommended integration architecture.
- A staged implementation plan.

Recommend a first playable milestone: one controllable vehicle inside the BK Arena environment.

Stop after writing the plan.