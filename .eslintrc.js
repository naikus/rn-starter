module.exports = {
  root: true,
  extends: "@react-native-community",
  overrides: [
    {
      files: ["*.jsx"],
      parser: "babel-eslint",
      plugins: ["flowtype"],
      rules: {
        // Flow Plugin
        // The following rules are made available via `eslint-plugin-flowtype`
        "flowtype/define-flow-type": 1,
        "flowtype/use-flow-type": 1,
      },
    }
  ],
  rules: {
    "prettier/prettier": [
      "off",
      {
        "bracketSpacing": false,
        "jsxBracketSameLine": true,
        "singleQuote": false,
        "trailingComma": "none",
        "arrowParens": "avoid",
        "tabWidth": 2,
        "printWidth": 120,
        "parser": "flow"
      },
      {
        "usePrettierrc": false
      }
    ],
    "no-bitwise": "off",
    "no-multiple-empty-lines": ["warn", { "max": 4 }],
    "no-empty": 0,
    "comma-dangle": [0, "always-multiline"], // allow or disallow trailing comma
    "max-len": [1, {
      "code": 120,
      "tabWidth": 2,
      "ignoreUrls": true,
      "ignorePattern": "^goog\\.(module|require)"
    }],
    "quotes": [1, "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "indent": ["warn", 2, {
      "SwitchCase": 1, "VariableDeclarator": 1, "MemberExpression": 1, "ObjectExpression": "first"
    }],
    "require-jsdoc": ["warn", {
      "require": {
        "FunctionDeclaration": false,
        "MethodDefinition": true,
        "ClassDeclaration": true
      }
    }],
    "valid-jsdoc": ["warn", {
      "requireParamDescription": false,
      "requireReturnDescription": false,
      "requireReturn": false,
      "prefer": { "returns": "return" }
    }],
    "no-console": "warn"
  }
};
