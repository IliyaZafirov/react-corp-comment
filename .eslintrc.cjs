module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    indent: ["error", 4, { SwitchCase: 1, offsetTernaryExpressions: true }],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
      "prettier",
    ],
  },
};
