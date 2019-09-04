module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
      'eslint:recommended',
      'plugin:prettier/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'prettier'
    ],
    'rules': {
        'prettier/prettier': ['error', {
          'arrowParens': 'always',
          'bracketSpacing': true,
          'endOfLine': 'lf',
          'jsxBracketSameLine': false,
          'semi': true,
          'singleQuote': true,
          'tabWidth': 2,
        }],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error'
    }
};