module.exports = {
  "root": true,
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
    }
  },
  "env": {
    "browser": true,
    "amd": true,
    "es6": true
  },
  "rules": {
    //# Possible Errors
    "for-direction": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",
    //"no-await-in-loop": "off",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    //"no-console": "off",
    "no-constant-condition": "warn",
    //"no-control-regex": "off",
    //"no-debugger": "off",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "warn",
    "no-empty-character-class": "error",
    //"no-ex-assign": "off",
    "no-extra-boolean-cast": "error",
    //"no-extra-parens": "off",
    //"no-extra-semi": "off",
    "no-func-assign": "error",
    //"no-inner-declarations": "off",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-misleading-character-class": "error",
    "no-obj-calls": "error",
    //"no-prototype-builtins": "off",
    //"no-regex-spaces": "off",
    "no-sparse-arrays": "error",
    //"no-template-curly-in-string": "off",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "warn",
    "require-atomic-updates": "error",
    "use-isnan": "error",
    "valid-jsdoc": ["warn", {
      "prefer": { "arg": "param", "argument": "param", "returns": "return", "property": "prop", "virtual": "abstract" },
      "preferType": {
        "array": "Array",
        "Boolean": "boolean",
        "Function": "function",
        "Number": "number",
        "Object": "object",
        "String": "string"
      },
      "requireReturn": false,
      "requireReturnType": true,
      "matchDescription": ".+",
      "requireParamDescription": false,
      "requireReturnDescription": false
    }],
    "valid-typeof": "error",

    //# Best Practices
    //"accessor-pairs": "off",
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "class-methods-use-this": "error",
    //"complexity": "off",
    "consistent-return": "error",
    "curly": ["error", "all"],
    "default-case": "error",
    "dot-location": ["error", "property"],
    //"dot-notation": "off",
    "eqeqeq": ["error", "allow-null"],
    "guard-for-in": "error",
    //"max-classes-per-file": "off",
    "no-alert": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    //"no-div-regex": "off",
    "no-else-return": "error",
    //"no-empty-function": "off",
    "no-empty-pattern": "error",
    //"no-eq-null": "off",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    //"no-fallthrough": "off",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    //"no-implicit-coercion": "off",
    "no-implicit-globals": "warn",
    "no-implied-eval": "error",
    //"no-invalid-this": "off",
    //"no-iterator": "off",
    "no-labels": "error",
    //"no-lone-blocks": "off",
    "no-loop-func": "error",
    //"no-magic-numbers": "off",
    "no-multi-spaces": "warn",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    //"no-param-reassign": "off",
    "no-proto": "error",
    "no-redeclare": "error",
    //"no-restricted-properties": "off",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "warn",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    //"no-unmodified-loop-condition": "off",
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
    //"no-unused-labels": "off",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "warn",
    "no-useless-escape": "warn",
    "no-useless-return": "error",
    //"no-void": "off",
    //"no-warning-comments": "off",
    "no-with": "error",
    "prefer-promise-reject-errors": "warn",
    //"radix": "off",
    "require-await": "error",
    //"require-unicode-regexp": "off",
    //"vars-on-top": "off",
    "wrap-iife": ["error", "outside"],
    "yoda": ["error", "never"],

    //# Strict Mode
    //"strict": "error",

    //# Variables
    //"init-declarations": "error",
    "no-delete-var": "error",
    //"no-label-var": "error",
    //"no-restricted-globals": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-unused-vars": ["error", "all"],
    //"no-use-before-define": "off",

    //# Node.js and CommonJS
    //"callback-return": "off",
    "global-require": "warn",
    //"handle-callback-err": "off",
    //"no-buffer-constructor": "off",
    //"no-mixed-requires": "off",
    //"no-new-require": "off",
    //"no-path-concat": "off",
    //"no-process-env": "off",
    //"no-process-exit": "off",
    //"no-restricted-modules": "off",
    //"no-sync": "off",

    //# Stylistic Issues
    "array-bracket-newline": ["warn", "consistent"],
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": ["warn", "consistent"],
    "block-spacing": ["warn", "always"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "camelcase": ["error", { "properties": "never" }],
    //"capitalized-comments": "off",
    "comma-dangle": ["warn", "always-multiline"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "consistent-this": ["warn", "self"],
    "eol-last": "warn",
    "func-call-spacing": ["error", "never"],
    //"func-name-matching": "off",
    //"func-names": "off",
    //"func-style": "off",
    "function-paren-newline": ["warn", "consistent"],
    //"id-blacklist": "off",
    //"id-length": "off",
    //"id-match": "off",
    "implicit-arrow-linebreak": ["error", "beside"],
    "indent": ["error", 4, { "SwitchCase": 1 }],
    //"jsx-quotes": "off",
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": ["warn", { "before": true, "after": true }],
    //"line-comment-position": "off",
    "linebreak-style": "error",
    //"lines-around-comment": "off",
    "lines-between-class-members": "off",
    "max-depth": ["error", 4],
    //"max-len": "off",
    //"max-lines": "off",
    "max-lines-per-function": ["warn", { "max": 100 }],
    "max-nested-callbacks": ["error", 2],
    "max-params": ["error", 5],
    //"max-statements": "off",
    //"max-statements-per-line": "off",
    //"multiline-comment-style": "off",
    "multiline-ternary": ["error", "never"],
    //"new-cap": "off",
    "new-parens": "error",
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
    "no-array-constructor": "error",
    "no-bitwise": ["error", { allow: ["~"] }],
    //"no-continue": "off",
    //"no-inline-comments": "off",
    "no-lonely-if": "error",
    //"no-mixed-operators": "off",
    "no-mixed-spaces-and-tabs": "error",
    //"no-multiple-empty-lines": "off",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    //"no-plusplus": "off",
    //"no-restricted-syntax": "off",
    "no-tabs": "warn",
    //"no-ternary": "off",
    "no-trailing-spaces": ["warn", { "skipBlankLines": true }],
    //"no-underscore-dangle": "off",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    //"nonblock-statement-body-position": "off",
    //"object-curly-newline": "off",
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": ["warn", { "allowMultiplePropertiesPerLine": true }],
    "one-var": ["error", "never"],
    "one-var-declaration-per-line": ["error", "always"],
    //"operator-assignment": "off",
    "operator-linebreak": ["error", "none"],
    "padded-blocks": ["warn", "never"],
    "padding-line-between-statements": [
      "warn",
      { "blankLine": "always", "prev": "import", "next": "*" },
      { "blankLine": "any", "prev": "import", "next": "import" },
    ],
    //"prefer-object-spread": "off",
    "quote-props": ["error", "as-needed"],
    "quotes": ["warn", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    //"require-jsdoc": "off",
    "semi": "warn",
    "semi-spacing": ["error", { "before": false, "after": true }],
    "semi-style": ["error", "last"],
    //"sort-keys": "off",
    //"sort-vars": "off",
    "space-before-blocks": ["warn", "always"],
    "space-before-function-paren": ["warn", { "anonymous": "never", "named": "never", "asyncArrow": "always" }],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "warn",
    "space-unary-ops": "error",
    //"spaced-comment": "off",
    //"switch-colon-spacing": "off",
    "template-tag-spacing": ["warn", "never"],
    //"unicode-bom": "off",
    //"wrap-regex": "off",

    //# ECMAScript 6
    //"arrow-body-style": "off",
    //"arrow-parens": "off",
    "arrow-spacing": ["error", { "before": true, "after": true }],
    //"constructor-super": "off",
    //"generator-star-spacing": "off",
    //"no-class-assign": "off",
    //"no-confusing-arrow": "off",
    "no-const-assign": "error",
    //"no-dupe-class-members": "off",
    "no-duplicate-imports": ["error", { "includeExports": true }],
    //"no-new-symbol": "off",
    //"no-restricted-imports": "off",
    //"no-this-before-super": "off",
    "no-useless-computed-key": "error",
    //"no-useless-constructor": "off",
    "no-useless-rename": "error",
    //"no-var": "off",
    //"object-shorthand": "off",
    //"prefer-arrow-callback": "off",
    //"prefer-const": "off",
    //"prefer-destructuring": "off",
    //"prefer-numeric-literals": "off",
    "prefer-rest-params": "warn",
    //"prefer-spread": "off",
    "prefer-template": "warn",
    //"require-yield": "off",
    "rest-spread-spacing": ["warn", "never"],
    //"sort-imports": "off",
    //"symbol-description": "off",
    "template-curly-spacing": ["warn", "always"]
    //"yield-star-spacing": "off"
  }
}
