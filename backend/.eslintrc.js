module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'airbnb-base',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
   ]
  },
};
