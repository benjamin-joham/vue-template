// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    requireConfigFile: false, // Fixes an exception on sub folder eslintrc.js files
    parser: '@typescript-eslint/parser', // Don't use on upper scope as documented by ESLint. The Vue plugin already defines itself as parser.
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: [
    'valantic/vue3',
    '@vue/typescript'
  ],
  // Uses eslint-import-resolver-webpack
  settings: {
    'import/resolver': 'webpack',
  },
  // add your custom rules here
  rules: {
    'vue/no-unsupported-features': ['error', {
      version: ">= 3.2",
    }],

    // Fix and enable again
    'import/extensions': 'off',
    'vue/require-emit-validator': 'off',
  },
  overrides: [
    {
      'files': ['tests/**/*.*'],
      'rules': {
        'vue/require-name-property': 'off'
      }
    }
  ]
};
