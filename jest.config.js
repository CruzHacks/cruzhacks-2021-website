module.exports = {
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
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
