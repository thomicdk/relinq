/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/config/toGenerate.ts"],
  testEnvironment: 'node',
  testMatch: null,
  testRegex: "(/__tests__/.*\\.(test|spec))\\.(ts|tsx)$",
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: false,
      },
    ],
  },
};
