import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";

import eslintPluginUnicorn from "eslint-plugin-unicorn";

export default [
  // …
  eslintPluginUnicorn.configs.recommended,
  {
    rules: {
      "unicorn/better-regex": "warn",
    },
  },
];
