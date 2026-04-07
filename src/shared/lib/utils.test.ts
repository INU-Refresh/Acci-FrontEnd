import { cn, formatDate } from "./utils";

describe("utils", () => {
  describe("cn", () => {
    it("should merge tailwind classes properly", () => {
      expect(cn("bg-red-500", "text-white")).toBe("bg-red-500 text-white");
    });
  });

  describe("formatDate", () => {
    it("should format date to Korean string", () => {
      const date = new Date("2024-05-15T00:00:00Z");
      expect(formatDate(date)).toMatch(/2024년 5월 15일/);
    });
  });
});
