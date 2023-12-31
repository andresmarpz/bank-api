// @ts-check
/** @type {import('eslint')} ESLint */
module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base", "prettier", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "unused-imports"],
  rules: {
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-console": 2,
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "no-restricted-syntax": "off",
    camelcase: "off",
    "no-unused-expressions": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "lines-between-class-members": "off",
    "class-methods-use-this": "off",
    "no-nested-ternary": "off",
    "no-await-in-loop": "off",
    "no-use-before-define": "off",
    "no-underscore-dangle": "off",
    "no-case-declarations": "off",
    "no-param-reassign": "off",
  },
}
