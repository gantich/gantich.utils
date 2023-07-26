# ESLINT

## Default ESLint

[eslint](https://www.npmjs.com/package/eslint)

install through 
`npm i eslint -D`
and configure with 
`./node-modules/.bin/eslint --init`

This will create a `.eslintrc.cjs `in the project root path.
Example:
```javascript
module.exports = {
  env: { 
    browser: true, 
    es2020: true, 
    commonjs: true, 
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
}

```



## StandardJS
An option is to use a version using eslint already configured, called [StandardJS](https://github.com/standard/standard)

install with

```shell
npm i standard -D

npm i standard --global
```
