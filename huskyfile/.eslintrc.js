module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    __tsconfigRootDir: __dirname,
  },
  plugins: ["prettier", "@typescript-eslint"],
  root: true,
  rules: {
    "import/extensions": "off",
    "prettier/prettier": "error",
    "no-console": "off",
    //"import/prefer-default-export": "off",
    "@typescript-eslint/no-explicit-any": "error", //rss-school
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array",
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
        overrides: {
          accessors: "explicit",
          constructors: "no-public",
          methods: "explicit",
          properties: "off",
          parameterProperties: "explicit",
        },
      },
    ],
    "max-lines-per-function": ["error", 40],
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
  },
};
