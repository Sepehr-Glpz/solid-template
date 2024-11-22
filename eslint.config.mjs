import globals from "globals";
import js from "@eslint/js";
import tsEslint from "typescript-eslint";
import solid from "eslint-plugin-solid/configs/typescript";
import prettier from "eslint-plugin-prettier/recommended";

export default [
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
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
