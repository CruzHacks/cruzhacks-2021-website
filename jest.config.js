module.exports = {
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  moduleNameMapper: {
    "\\.(css|sass|scss|erb)$": "<rootDir>/src/__mocks__/fileMock.ts",
    "\\.svg$": "<rootDir>/src/__mocks__/svgMock.ts",
  },
  modulePaths: ["src/"],
  reporters: [
    "default",
    [
      "jest-junit",
      { suiteName: "jest", outputDirectory: "<rootDir>/tmp/test-results" },
    ],
  ],
  setupFilesAfterEnv: ["jest-enzyme", "<rootDir>/src/setupTests.ts"],
  testEnvironment: "enzyme",
  testPathIgnorePatterns: ["node_modules"],
};
