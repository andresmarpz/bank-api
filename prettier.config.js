/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 80,
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  // This plugin's options
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "<TYPES>",
    "^@api/(.*)$",
    "",
    "^@server/(.*)$",
  ],
  importOrderParserPlugins: ["typescript", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
}
