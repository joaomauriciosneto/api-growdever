export default {
  clearMocks: true,

  collectCoverageFrom: ["<rootDir>/src/app/**/*.ts"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],

  preset: "ts-jest",

  testEnvironment: "node",

  transform: {
    ".+\\.ts$": "ts-jest",
  },

  roots: ["<rootDir>/tests"],
};
