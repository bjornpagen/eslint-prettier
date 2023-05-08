module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier'
	],
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: [
			'./tsconfig.json'
		],
	},
	rules: {
		'no-var': 'error',
		'no-ternary': 'error',
		'no-else-return': 'error',
		'func-style': [
			'error',
			'expression',
			{
				allowArrowFunctions: true,
			},
		],
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'curly': ['error', 'all'],
		'@typescript-eslint/init-declarations': ['error', 'always'],
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-inferrable-types': 'error',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/no-unnecessary-condition': 'error',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		'@typescript-eslint/no-unnecessary-type-constraint': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-nullish-coalescing': 'error',
		'@typescript-eslint/prefer-readonly': 'error',
		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/require-array-sort-compare': 'error',
		'@typescript-eslint/switch-exhaustiveness-check': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'error',
		'@typescript-eslint/method-signature-style': [
			'error',
			'property'
		],
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				disallowTypeAnnotations: true,
			},
		],
		'@typescript-eslint/consistent-type-definitions': [
			'error',
			'interface'
		],
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{
				allowExpressions: false,
				allowTypedFunctionExpressions: false,
			},
		],
		'@typescript-eslint/no-floating-promises': 'error',
		'@typescript-eslint/strict-boolean-expressions': [
			'error',
		],
		'@typescript-eslint/unified-signatures': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/no-throw-literal': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/promise-function-async': 'error',
		'no-restricted-syntax': [
			'error',
			{
				// Disallow `null`
				selector: 'Literal[value=null]',
				message: 'Use undefined instead of null',
			},
			{
				// Disallow `for in` loops
				selector: 'ForInStatement',
				message: 'Use for of instead of for in',
			},
			{
				// Disallow `throw` statements
				selector: 'ThrowStatement',
				message: 'Use custom error types instead of throw',
			},
			{
				// Disallow `do while` loops
				selector: 'DoWhileStatement',
				message: 'Do while loops are not allowed',
			},
			{
				// Disallow `namespace` declarations
				selector: 'TSModuleDeclaration',
				message: 'Namespaces are not allowed',
			},
			{
				// Disalow `private` access modifiers
				selector: 'TSPrivateKeyword',
				message: 'Use # notation instead of private',
			},
			{
				// Disallow `protected` access modifiers
				selector: 'TSProtectedKeyword',
				message: 'Use private or public instead of protected',
			},
			{
				// Disallow `public` access modifiers
				selector: 'TSPublicKeyword',
				message: 'Fields and methods are public by default',
			},
			{
				// Disallow `enum` declarations
				selector: 'TSEnumDeclaration',
				message: 'Enums are not allowed',
			},
		],
		'@typescript-eslint/array-type': [
			'error',
			{
				default: 'generic',
			},
		],
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				accessibility: 'no-public',
			}
		],
	}
}
