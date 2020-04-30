module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/quotes": [
      "error",
      "double",
      { allowTemplateLiterals: true },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
    "@typescript-eslint/interface-name-prefix": [
      "error",
      { prefixWithI: "always" },
    ],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/ban-ts-ignore": "warn",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      { allowExpressions: true },
    ],
  },
};
