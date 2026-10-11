import { expect, test } from "@playwright/test";

test("homepage introduces the heist and links to play", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /steal smart/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /enter the vault/i })).toHaveAttribute("href", "/play");
});

test("play route mounts a WebGL canvas without page errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("/play");
  await expect(page.getByLabel("Interactive 3D vault prototype")).toBeVisible({ timeout: 30_000 });
  await expect(page.getByText("Prototype online")).toBeVisible();
  expect(errors).toEqual([]);
});
