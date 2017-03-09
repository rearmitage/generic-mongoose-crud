module.exports = {
  "extends": "airbnb-base/legacy",
  // Rules based on current practices accross codebase to prevent a massive overhaul.
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  "globals": {
    "Promise": true,
    "describe": true,
    "it": true,
    "beforeEach": true,
    "afterEach": true,
    "after" : true
  },
  "rules": {
    "comma-dangle": ["error", "only-multiline"],
    "comma-style": ["error", "last", { "exceptions": { "VariableDeclaration": true } }],
    "consistent-return": "off",
    "eqeqeq": "off",
    "func-names": "off",
    "keyword-spacing": "error",
    "linebreak-style": "off",
    "max-len": "off",
    "no-alert": "off",
    "no-console": "off",
    "no-extra-boolean-cast": "off",
    "no-multiple-empty-lines": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-redeclare": "off",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": "off", //["error", { "vars": "local" }],
    "no-use-before-define": "off",
    "one-var": "off",
    "radix": "off",
    // "space-before-blocks": "off",
    "space-before-function-paren": ["error", { "anonymous": "ignore", "named": "never" }],
    "spaced-comment": "off",
    "quotes": "off",
    "quote-props": "off",
    "vars-on-top": "off"
  }
}
