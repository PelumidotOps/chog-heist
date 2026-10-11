"use client";

import { Clock3, Gem, Radio, Shield } from "lucide-react";

import { formatRunTime } from "@/game/utils/format-run-time";
import { useGameStore } from "@/store/game-store";

export function GameHud() {
  const { alertLevel, crystals, timeRemaining } = useGameStore();

  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="rounded-2xl border border-white/10 bg-black/55 p-3 shadow-xl backdrop-blur-md">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-violet-200/65">Mission clock</p>
          <p className="mt-1 flex items-center gap-2 font-mono text-2xl font-bold tabular-nums text-white">
            <Clock3 className="size-5 text-primary" /> {formatRunTime(timeRemaining)}
          </p>
        </div>
        <div className="rounded-2xl border border-emerald-300/15 bg-black/55 p-3 text-right backdrop-blur-md">
          <p className="flex items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300">
            <Radio className="size-3" /> Prototype online
          </p>
          <p className="mt-1 text-sm font-semibold text-white">Sector 07 · Training vault</p>
        </div>
      </div>

      <div className="flex items-end justify-between gap-4">
        <div className="rounded-2xl border border-white/10 bg-black/55 p-3 backdrop-blur-md">
          <p className="flex items-center gap-2 text-sm font-bold text-white">
            <Gem className="size-4 text-fuchsia-300" /> {crystals} crystals
          </p>
          <p className="mt-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <Shield className="size-3" /> Alert {alertLevel}%
          </p>
        </div>
        <p className="hidden rounded-full border border-white/10 bg-black/40 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-white/55 backdrop-blur sm:block">
          Drag to inspect · Scroll to zoom
        </p>
      </div>
    </div>
  );
}
