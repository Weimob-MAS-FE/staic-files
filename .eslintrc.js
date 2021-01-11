module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
  },
  extends: [
    // "eslint:recommended",
    "plugin:vue/essential",
    "airbnb-base",
    // "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    semi: [1, "never"],
    quotes: [1, "double"],
    "no-console": 0,
    "func-names": 0,
    "no-param-reassign": 0,
    "no-restricted-globals": 0,
    "max-len": 0,
    "prefer-rest-params": 0,
    "no-unused-vars": 1,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    // "react/react-in-jsx-scope": 1,
    // "react/jsx-filename-extension": 1,
    "no-undef": 1,
  },
}
