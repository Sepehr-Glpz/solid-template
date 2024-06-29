import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import solid from "eslint-plugin-solid/configs/typescript.js";
import * as tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier/recommended";

export default [
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    ...solid,
    settings: {
      "import/resolver": {
        alias: {
          map: [["@", "./src"]],
        },
      },
    },
  },
  prettier,
];
