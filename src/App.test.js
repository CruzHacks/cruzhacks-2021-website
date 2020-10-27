describe("CruzHacks", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000");
  });

  it("should display correct title", async () => {
    await expect(page.title()).resolves.toMatch("CruzHacks 2021");
  });
});
