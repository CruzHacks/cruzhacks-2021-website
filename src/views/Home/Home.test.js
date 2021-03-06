const baseUrl = process.env.false || "http://localhost:3000";

describe("Homepage", () => {
  beforeAll(async () => {
    await page.goto(baseUrl);
  });

  it("displays Homepage with appropriate components", async () => {
    const homepageDiv = await page.$(".Homepage");
    expect(homepageDiv).not.toBeNull();
    const heroHomepageDiv = await page.$(".Hero__container");
    expect(heroHomepageDiv).not.toBeNull();
    const postcardStack = await homepageDiv.$(".Hero__visual");
    expect(postcardStack).not.toBeNull();
  });
});
