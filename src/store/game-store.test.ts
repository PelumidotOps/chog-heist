import { beforeEach, describe, expect, it } from "vitest";

import { RUN_DURATION_SECONDS } from "@/game/config/constants";
import { useGameStore } from "@/store/game-store";

describe("game store", () => {
  beforeEach(() => useGameStore.getState().resetRun());

  it("collects crystals and clamps alert level", () => {
    useGameStore.getState().collectCrystal();
    useGameStore.getState().setAlertLevel(140);

    expect(useGameStore.getState()).toMatchObject({ crystals: 1, alertLevel: 100 });
  });

  it("restores a fresh three-minute run", () => {
    useGameStore.setState({ crystals: 4, timeRemaining: 20 });
    useGameStore.getState().resetRun();

    expect(useGameStore.getState()).toMatchObject({
      crystals: 0,
      runStatus: "briefing",
      timeRemaining: RUN_DURATION_SECONDS,
    });
  });
});
