import { describe, expect, it } from "vitest";

import { formatRunTime } from "@/game/utils/format-run-time";

describe("formatRunTime", () => {
  it.each([
    [180, "3:00"],
    [61, "1:01"],
    [9, "0:09"],
    [-1, "0:00"],
  ])("formats %i seconds as %s", (seconds, expected) => {
    expect(formatRunTime(seconds)).toBe(expected);
  });
});
