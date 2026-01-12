import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactRefresh from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import pluginImport from 'eslint-plugin-import';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
	{ ignores: ['dist', 'node_modules', 'eslint.config.ts'] },
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	reactRefresh.configs.flat.recommended,
	prettierRecommended,
	{
		plugins: { 'react-hooks': reactHooks, import: pluginImport },
		settings: { react: { version: 'detect' } },
		rules: {
			...reactHooks.configs.recommended.rules,
			'import/order': ['warn', { 'newlines-between': 'always' }],
			'react/react-in-jsx-scope': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
				},
			],
			'prettier/prettier': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-misused-promises': 'off',
			'@typescript-eslint/no-floating-promises': 'off',
		},
	},
	{
		files: ['src/**/*.{ts,tsx,js,jsx}'],
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
];
