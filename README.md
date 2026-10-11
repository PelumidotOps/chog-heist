# Chog Heist

Chog Heist is a browser-based 3D third-person stealth-extraction game prototype for the Chogathon on Monad. Players infiltrate a futuristic vault, collect crystals, avoid security, and extract before a three-minute timer expires.

The game is free to play. A future Web3 layer is planned to let Chog Genesis NFT owners authorize other players to use individual NFT-derived gameplay traits for limited periods without transferring the NFT itself. This repository currently contains no wallet connection, blockchain transaction, collection metadata, or claims about verified traits.

## Current foundation

- Polished responsive homepage and complete placeholder navigation
- Client-only React Three Fiber scene at `/play`
- Illuminated vault room, physics colliders, collectible placeholders, and a placeholder character
- Zustand game-session store with a three-minute run model
- Dark-purple neon shadcn design system
- Strict TypeScript, ESLint, Vitest, Testing Library, and Playwright configuration
- Chain-agnostic interfaces reserved for future trait authorization

## Quick start

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The game prototype is at [http://localhost:3000/play](http://localhost:3000/play).

## Commands

```bash
npm run dev        # Start the development server
npm run lint       # Run ESLint
npm run typecheck  # Run strict TypeScript checks
npm run test       # Run Vitest once
npm run test:watch # Run Vitest in watch mode
npm run test:e2e   # Run Playwright browser tests
npm run build      # Create a production build
npm run check      # Run lint, types, unit tests, and build
```

## Structure

```text
src/
  app/          App Router pages and global styles
  blockchain/   Future chain integration contracts (no live transactions)
  components/   Shared layout, product, and shadcn UI components
  game/         3D scene, game components, configuration, types, and utilities
  lib/          Cross-cutting helpers
  store/        Zustand client state
docs/           Concept, architecture, and milestone documentation
e2e/            Playwright smoke tests
public/         Static assets
```

See [docs/GAME_CONCEPT.md](docs/GAME_CONCEPT.md), [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md), and [docs/MILESTONES.md](docs/MILESTONES.md) for product and technical direction.

## Environment

Copy `.env.example` to `.env.local` when integrations are introduced. The current prototype requires no secrets.

## Status

This is a production-structured foundation, not the completed game. Character locomotion, guard AI, laser interactions, the extraction loop, persistence, wallet connectivity, smart contracts, real trait data, audio, and final assets remain future work.
