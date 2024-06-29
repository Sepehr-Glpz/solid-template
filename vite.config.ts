import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import eslint from "vite-plugin-eslint2";
import stylelint from "vite-plugin-stylelint";
import path from "path";

export default defineConfig({
  plugins: [
    eslint({ fix: true, lintOnStart: true }),
    stylelint({ fix: true, lintOnStart: true }),
    solidPlugin(),
  ],
  server: {
    hmr: true,
    port: 3000,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    target: "esnext",
  },
});
