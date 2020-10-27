module.exports = {
  launch: {
    headless: process.env.CI === "true",
    ignoreDefaultArgs: ["--disable-extensions"],
    args: ["--no-sandbox"],
  },
  server: {
    command: "yarn start",
    port: 3000,
    usedPortAction: "kill",
    launchTimeout: 60000,
    debug: true,
  },
  browser: "chromium",
};
