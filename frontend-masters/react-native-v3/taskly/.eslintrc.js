// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // Enforce single quotes
        semi: false, // Disable semicolons
      },
    ],
  },
  ignorePatterns: ['/dist/*'],
}
