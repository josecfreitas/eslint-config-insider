# Eslint Standard Configs

This is a standard configuration for eslint and prettier. It also has an .editorconfig file that you can put into your project.

## How to use
Install this package:

NPM
```bash
npm install @josecfreitas/eslint-config-insider eslint@^7.31.0 eslint-config-airbnb-base@^14.2.1 eslint-config-prettier@^8.3.0 eslint-plugin-import@^2.23.4 eslint-plugin-prettier@^3.4.0 prettier@^2.3.2 -D
```

YARN
```bash
yarn add @josecfreitas/eslint-config-insider eslint@^7.31.0 eslint-config-airbnb-base@^14.2.1 eslint-config-prettier@^8.3.0 eslint-plugin-import@^2.23.4 eslint-plugin-prettier@^3.4.0 prettier@^2.3.2 -D
```

Then, create a .eslintrc.js (or .eslintrc.json) file in the root of your project's directory and put this:
```json
{
  "extends": ["@josecfreitas/eslint-config-insider"]
}
```

## How to add typescript

Install the following dependencies:

NPM
```bash
npm install @typescript-eslint/parser @typescript-eslint -D
```

YARN
```bash
yarn add @typescript-eslint/parser @typescript-eslint -D
```

Update your .eslintrc file to look like this:
```json
{
  "extends": ["@josecfreitas/eslint-config-insider"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
  }
}
```
