import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
export default [
  js.configs.recommended,
  {
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      'prettier/prettier': 'error'
    }
  },
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/src-tauri/**']
  },
  {
    languageOptions: {
      globals: {
        process: 'readonly'
      }
    }
  },
  eslintConfigPrettier
]
