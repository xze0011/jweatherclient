import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import jestPlugin from "eslint-plugin-jest";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: { ...globals.browser, process: "readonly" }
    }
  },
  pluginJs.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {
    files: ["**/*.test.js", "**/__tests__/**/*.js"],
    plugins: { jest: jestPlugin },
    languageOptions: {
      globals: { ...globals.jest, ...globals.node }
    }
  }
];
