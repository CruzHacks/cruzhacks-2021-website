const baseUrl = "http://localhost:3000";

describe("CruzHacks", () => {
  beforeAll(async () => {
    await page.goto(baseUrl);
  });

  it("should display correct title", async () => {
    await expect(page.title()).resolves.toMatch("CruzHacks 2021");
  });
});
