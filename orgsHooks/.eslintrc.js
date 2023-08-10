module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    '@react-native',
  ],
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': 'off',
  },
  'prettier/prettier': [
    'error',
    {
      singleQuote: true,
      semi: 'off',
    },
  ],
}
