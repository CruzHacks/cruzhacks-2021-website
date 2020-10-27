module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js, ts, jsx, tsx}",
    "!<rootDir>/node_modules/",
  ],
  modulePaths: ["src/"],
  reporters: [
    "default",
    [
      "jest-junit",
      { suiteName: "jest", outputDirectory: "<rootDir>/tmp/test-results" },
    ],
  ],
  preset: "jest-puppeteer",
  testPathIgnorePatterns: ["node_modules"],
  testTimeout: 10000,
};
