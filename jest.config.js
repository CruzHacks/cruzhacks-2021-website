module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  moduleNameMapper: {
    "\\.(css|sass|scss|erb)$": "<rootDir>/src/__mocks__/fileMock.js",
    "\\.svg$": "<rootDir>/src/__mocks__/svgMock.js",
  },
  modulePaths: ["src/"],
  reporters: [
    "default",
    [
      "jest-junit",
      { suiteName: "jest", outputDirectory: "<rootDir>/tmp/test-results" },
    ],
  ],
  setupFilesAfterEnv: ["jest-enzyme", "<rootDir>/src/setupTests.js"],
  testEnvironment: "enzyme",
  testPathIgnorePatterns: ["node_modules"],
};
