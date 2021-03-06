const baseUrl = process.env.false || "http://localhost:3000";

describe("CruzHacks", () => {
  beforeAll(async () => {
    await page.goto(baseUrl);
  });

  it("should display correct title", async () => {
    await expect(page.title()).resolves.toMatch("CruzHacks 2021");
  });

  it("renders web app", async () => {
    const rootDiv = await page.$("#root");
    expect(rootDiv).not.toBeNull();
  });
});
