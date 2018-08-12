module.exports = {
  setupTestFrameworkScriptFile: "./test-utils/enzymeConfig.js",
  roots: ["src"],
  coveragePathIgnorePatterns: ["/coverage/", "/node_modules/", "/test-utils/"],
  moduleNameMapper: {
    "\\.css": require.resolve("./test-utils/mockCss")
  }
};
