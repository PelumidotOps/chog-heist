import { create } from "zustand";

import { RUN_DURATION_SECONDS } from "@/game/config/constants";
import type { RunStatus } from "@/game/types";

interface GameState {
  alertLevel: number;
  crystals: number;
  runStatus: RunStatus;
  timeRemaining: number;
  collectCrystal: () => void;
  resetRun: () => void;
  setAlertLevel: (level: number) => void;
  setRunStatus: (status: RunStatus) => void;
  tick: () => void;
}

const initialState = {
  alertLevel: 0,
  crystals: 0,
  runStatus: "briefing" as const,
  timeRemaining: RUN_DURATION_SECONDS,
};

export const useGameStore = create<GameState>((set) => ({
  ...initialState,
  collectCrystal: () => set((state) => ({ crystals: state.crystals + 1 })),
  resetRun: () => set(initialState),
  setAlertLevel: (level) => set({ alertLevel: Math.min(100, Math.max(0, level)) }),
  setRunStatus: (runStatus) => set({ runStatus }),
  tick: () =>
    set((state) => ({
      timeRemaining: Math.max(0, state.timeRemaining - 1),
      runStatus: state.timeRemaining <= 1 ? "failed" : state.runStatus,
    })),
}));
