// https://docs.expo.dev/guides/using-eslint/
module.exports = {
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
}
