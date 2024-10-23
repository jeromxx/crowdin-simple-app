/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["en", "cs", "vi"],
  sourceLocale: "en",
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}",
      include: ["<rootDir>"],
      exclude: ["**/node_modules/**"],
    },
  ],
  format: "po",
}
