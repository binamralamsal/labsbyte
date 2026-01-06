//  @ts-check
import { tanstackConfig } from "@tanstack/eslint-config";

export default [
  ...tanstackConfig,
  {
    "import-x/order": "off",
    rules: {
      "@typescript-eslint/array-type": "off",
    },
  },
];
