module.exports = {
  launch: {
    headless: true,
  },
  server: {
    command: "yarn serve -s test-build -l 3000",
    port: 3000,
    usedPortAction: "kill",
    launchTimeout: 60000,
    debug: true,
  },
  browser: "chromium",
};
