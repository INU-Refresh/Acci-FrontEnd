import { test, expect } from "@playwright/test";

test("HomePage loads and shows header navigation", async ({ page }) => {
  // PC 레이아웃(md 이상)에서 헤더 내비게이션이 보이도록
  await page.setViewportSize({ width: 1024, height: 768 });

  await page.goto("/home/HomePage", { waitUntil: "domcontentloaded" });

  await expect(page.locator("header")).toBeVisible();
  await expect(page.getByRole("link", { name: "분석" })).toBeVisible();
});

