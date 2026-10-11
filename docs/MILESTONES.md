# Development milestones

## M0 — Foundation (current)

- App Router, strict TypeScript, Tailwind, shadcn, test tooling
- Product homepage and route shell
- Client-only Three.js/R3F/Rapier prototype scene
- State and future integration boundaries

## M1 — Playable stealth slice

- Third-person movement and camera
- One small authored vault route
- Guard patrol, sight detection, and alert escalation
- Laser collision, crystal collection, extraction, timer, and score
- Input, pause, accessibility, performance, and failure-state passes

## M2 — Progression and content

- Loadout rules and non-chain progression
- Multiple vault layouts and risk tiers
- Audio, VFX, animation, optimized authored assets, and onboarding
- Server-validated score submission and leaderboards

## M3 — Trait authorization prototype

- Confirm official NFT metadata and trait schema with collection owners
- Threat model and specify lending/revocation/expiry behavior
- Solidity contracts and Foundry tests on a supported Monad test network
- wagmi/viem wallet flow behind the existing provider boundary
- Indexing, validation, consent, transaction previews, and graceful wallet-free play

## M4 — Hardening

- Contract audit and game economy review
- Cross-browser/device performance budgets
- Observability, abuse resistance, content pipeline, and launch operations

Multiplayer is explicitly outside these milestones until the solo experience and operational model are proven.
