# Kigali Sports Complex

An interactive 3D exploration of Remera, Kigali. Fly over the BK Arena, Amahoro Stadium, Zaria Court, Petit Stade and nearby outdoor courts, or drive and walk around the grounds.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The root page opens the explorer; `/tour` is also available.

## Build

```bash
npm run build
npm run preview
```

The project uses Three.js and Vite. Blender source scripts and assets are in `blender/`; the exported venue and city models, Draco decoder, generated tour data and textures are in `public/`. The neighborhood is based on OpenStreetMap street geometry, with venue assets built by the scripts in `blender/py`.

The explorer supports keyboard, touch controls and game controllers. It includes fly, walk and drive modes, venue discovery, a mini-map and collectible coins.
