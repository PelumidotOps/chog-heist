import { describe, expect, it } from "vitest";

import { cn } from "@/lib/utils";

describe("cn", () => {
  it("merges conflicting Tailwind utilities", () => {
    expect(cn("px-2 text-white", "px-4")).toBe("text-white px-4");
  });
});
