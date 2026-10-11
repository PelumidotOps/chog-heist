import type { Metadata } from "next";

import { GameShell } from "@/game/components/game-shell";

export const metadata: Metadata = {
  title: "Play",
  description: "Enter the Chog Heist vault prototype.",
};

export default function PlayPage() {
  return (
    <main id="main-content" className="relative h-[calc(100dvh-4.5rem)] min-h-[34rem] overflow-hidden bg-black">
      <GameShell />
    </main>
  );
}
