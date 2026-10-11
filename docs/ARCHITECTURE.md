# Architecture

## Runtime boundaries

The App Router shell is server-rendered by default. The WebGL graph is isolated behind `game-shell.tsx`, a small Client Component that dynamically imports `game-canvas.tsx` with server rendering disabled. This prevents browser-only Three.js and Rapier behavior from entering server rendering while keeping marketing and navigation HTML fast and indexable.

## Modules

- `src/app`: routing, metadata, layouts, and route composition.
- `src/components`: shared application UI. `components/ui` is the shadcn layer; product-specific components live outside it.
- `src/game`: rendering, physics, input mappings, scene composition, game-specific types, and pure utilities.
- `src/store`: Zustand stores for ephemeral session state. Persisted or server-owned data should not be added here by default.
- `src/blockchain`: a future adapter boundary. UI and gameplay code should depend on provider interfaces rather than wagmi/viem directly.
- `public`: optimized static assets with license/source notes when third-party assets are introduced.

## Data flow

UI reads compact, serializable state from Zustand. The render loop owns transient frame-level values and physics bodies. Future backend or chain data will be normalized by adapters before entering game state. NFT metadata must be treated as untrusted input and verified against an approved schema.

## Web3 boundary

The current `TraitEntitlementProvider` interface models queries only. A later integration can implement it with viem and wagmi without coupling the scene graph to wallet libraries. Transaction preparation, explicit player confirmation, chain validation, expiry, revocation, and error recovery belong in the integration layer—not inside 3D components.

## Quality strategy

- Vitest covers pure rules, formatting, and store transitions.
- Testing Library covers accessible UI behavior where useful.
- Playwright covers route and WebGL smoke checks in a real browser.
- Production builds are required because they exercise React Server Component and client-boundary compilation.
