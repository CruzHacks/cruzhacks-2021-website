const baseUrl = process.env.false || "http://localhost:3000";

describe("Homepage", () => {
  beforeAll(async () => {
    await page.goto(baseUrl);
  });

  it("displays Homepage", async () => {
    const homepageDiv = await page.$(".Homepage");
    expect(homepageDiv).not.toBeNull();
    const postcardStack = await homepageDiv.$(".PostcardStack");
    expect(postcardStack).not.toBeNull();
  });
});
