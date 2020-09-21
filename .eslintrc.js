module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  "plugins": ["jest", "prettier"],
  "rules": {
    "no-unused-vars": [
      "error",
      {
        "args": "after-used",
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
      }
    ],
    "no-var": "error",
    "prettier/prettier": "error",
  },
  "extends": [
    "react-app",
    "plugin:jest/recommended",
    "prettier",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ]
}
