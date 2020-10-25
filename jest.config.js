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
  testPathIgnorePatterns: ["node_modules"],
};
