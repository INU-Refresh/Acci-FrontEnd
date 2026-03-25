import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./src",
  testMatch: ["**/*.playwright.spec.ts", "**/*.playwright.spec.tsx"],
  timeout: 30_000,

  // Next.js 개발 서버를 자동으로 올린 뒤 테스트 실행
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
  },

  use: {
    baseURL: "http://localhost:3000",
    actionTimeout: 10_000,
    navigationTimeout: 20_000,
    trace: "on-first-retry",
    ...devices["Desktop Chrome"],
  },
});

