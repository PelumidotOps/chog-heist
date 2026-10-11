"use client";

import dynamic from "next/dynamic";

const GameCanvas = dynamic(
  () => import("@/game/components/game-canvas").then((module) => module.GameCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="grid h-full place-items-center bg-[#07030d]" role="status">
        <div className="text-center">
          <div className="mx-auto size-8 animate-spin rounded-full border-2 border-primary/25 border-t-primary" />
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-violet-200/70">
            Calibrating vault
          </p>
        </div>
      </div>
    ),
  },
);

export function GameShell() {
  return <GameCanvas />;
}
