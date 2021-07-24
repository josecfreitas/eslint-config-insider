module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: true,
        singleQuote: false,
        printWidth: 120,
        tabWidth: 2,
        trailingComma: "all",
        arrowParens: "avoid",
        endOfLine: "auto",
      },
    ],
  },
};
