// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config')
const expoConfig = require('eslint-config-expo/flat')

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
    extends: ['expo', 'prettier'],
    plugins: ['prettier', 'react-native'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true, // Enforce single quotes
          semi: false, // Disable semicolons
          trailingComma: 'false',
        },
      ],
      'react-native/no-unused-styles': 'error',
    },
    ignorePatterns: ['/dist/*'],
  },
])
