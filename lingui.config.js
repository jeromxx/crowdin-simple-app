/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["en", "cs", "vi"],
  sourceLocale: "en",
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}", // Path for .po files
      include: ["<rootDir>"],
      exclude: ["**/node_modules/**"],
    },
    {
      path: "<rootDir>/src/locales/locales-enstack/{locale}", // Path for .json files
      include: ["<rootDir>"],
      exclude: ["**/node_modules/**"],
    },
  ],
  format: "po", // You can keep this if you're only using .po format for certain catalogs
}
