module.exports = {
  launch: {
    headless: true,
  },
  server: {
    command: "yarn start",
    port: 3000,
    usedPortAction: "kill",
    launchTimeout: 60000,
    debug: true,
  },
  browser: "chromium",
  testTimeout: 60000,
};
