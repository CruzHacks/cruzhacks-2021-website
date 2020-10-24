module.exports = {
  launch: {
    headless: process.env.CI === "true",
    ignoreDefaultArgs: ["--disable-extensions"],
    args: ["--no-sandbox"],
  },
  server: {
    command: "yarn run serve",
    port: 5000,
    launchTimeout: 180000,
  },
};
