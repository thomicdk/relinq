module.exports = {
  testRegex: "(/__tests__/.*\\.(test|spec))\\.(ts|tsx)$",
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/config/toGenerate.ts"],
};
