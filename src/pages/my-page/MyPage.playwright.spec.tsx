import { expect, test } from "@playwright/test";

test("MyPage redirects unauthenticated user to auth page", async ({ page }) => {
  await page.goto("/my-page");

  await expect(page).toHaveURL(/\/auth(\?.*)?$/);
  await expect(page.getByRole("button", { name: "Google로 계속하기" })).toBeVisible();
});
