import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintReact from 'eslint-plugin-react'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import eslintReactRefresh from 'eslint-plugin-react-refresh'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			react: eslintReact,
			'react-hooks': eslintReactHooks,
			'react-refresh': eslintReactRefresh,
			prettier: prettierPlugin,
		},
	},
	{
		ignores: ['dist', 'node_modules', 'coverage', 'eslint.config.js'],
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2020,
			},
			parserOptions: {
				project: ['tsconfig.json', 'tsconfig.node.json'],
			},
		},
	},
	{
		rules: {
			...prettierPlugin.configs.recommended.rules,
			...eslintConfigPrettier.rules,
		},
	},
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		rules: {
			'no-mixed-spaces-and-tabs': 'off',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'prettier/prettier': [
				'off',
				{
					useTabs: true,
					singleQuote: true,
					semi: false,
				},
			],
		},
	}
)
