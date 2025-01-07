const { defineConfig } = require("@configurajs/eslint");

module.export = defineConfig({
  ignores: [
    "lib/**",
    "es/**",
    "umd/**",
    "site/**",
    "public/**",
    "coverage/**",
    "highlight/**",
    "types/index.d.ts",
    ".varlet/**",
  ],
});
