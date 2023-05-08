module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"prettier"
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json"]
	},
	rules: {
		"no-var": "error",
		"no-ternary": "error",
		"no-else-return": "error",
		"func-style": [
			"error",
			"expression",
			{
				allowArrowFunctions: true
			}
		],
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		curly: ["error", "all"],
		"@typescript-eslint/init-declarations": ["error", "always"],
		"@typescript-eslint/consistent-generic-constructors": "error",
		"@typescript-eslint/consistent-indexed-object-style": "error",
		"@typescript-eslint/consistent-type-assertions": "error",
		"@typescript-eslint/consistent-type-definitions": "error",
		"@typescript-eslint/consistent-type-exports": "error",
		"@typescript-eslint/consistent-type-imports": "error",
		"@typescript-eslint/explicit-function-return-type": [
			"error",
			{
				allowExpressions: false,
				allowTypedFunctionExpressions: false
			}
		],
		"@typescript-eslint/explicit-member-accessibility": [
			"error",
			{
				accessibility: "no-public"
			}
		],
		"@typescript-eslint/method-signature-style": ["error", "property"],
		"@typescript-eslint/no-base-to-string": "error",
		"@typescript-eslint/no-confusing-non-null-assertion": "error",
		"@typescript-eslint/no-confusing-void-expression": "error",
		"@typescript-eslint/no-duplicate-type-constituents": "error",
		"@typescript-eslint/no-empty-interface": "error",
		"@typescript-eslint/no-extra-non-null-assertion": "error",
		"@typescript-eslint/no-extraneous-class": "error",
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-import-type-side-effects": "error",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/no-inferrable-types": "error",
		"@typescript-eslint/no-invalid-void-type": "error",
		"@typescript-eslint/no-meaningless-void-operator": "error",
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-misused-promises": [
			"error",
			{
				checksVoidReturn: true
			}
		],
		"@typescript-eslint/no-namespace": "error",
		"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
		"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
		"@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/no-redundant-type-constituents": "error",
		"@typescript-eslint/no-require-imports": "error",
		"@typescript-eslint/no-this-alias": "error",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		"@typescript-eslint/no-unnecessary-condition": "error",
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		"@typescript-eslint/no-unnecessary-type-arguments": "error",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"@typescript-eslint/no-unnecessary-type-constraint": "error",
		"@typescript-eslint/no-useless-empty-export": "error",
		"@typescript-eslint/prefer-optional-chain": "error",
		"@typescript-eslint/prefer-nullish-coalescing": "error",
		"@typescript-eslint/prefer-readonly": "error",
		"@typescript-eslint/prefer-reduce-type-parameter": "error",
		"@typescript-eslint/require-array-sort-compare": "error",
		"@typescript-eslint/switch-exhaustiveness-check": "error",
		"@typescript-eslint/strict-boolean-expressions": ["error"],
		"@typescript-eslint/unified-signatures": "error",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/no-throw-literal": "error",
		"@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/promise-function-async": "error",
		"no-restricted-syntax": [
			"error",
			{
				// Disallow `null`
				selector: "Literal[value=null]",
				message: "Use undefined instead of null"
			},
			{
				// Disallow `for in` loops
				selector: "ForInStatement",
				message: "Use for of instead of for in"
			},
			{
				// Disallow `throw` statements
				selector: "ThrowStatement",
				message: "Use custom error types instead of throw"
			},
			{
				// Disallow `do while` loops
				selector: "DoWhileStatement",
				message: "Do while loops are not allowed"
			},
			{
				// Disalow `private` access modifiers
				selector: "TSPrivateKeyword",
				message: "Use # notation instead of private"
			},
			{
				// Disallow `protected` access modifiers
				selector: "TSProtectedKeyword",
				message: "Use private or public instead of protected"
			},
			{
				// Disallow `public` access modifiers
				selector: "TSPublicKeyword",
				message: "Fields and methods are public by default"
			},
			{
				// Disallow `enum` declarations
				selector: "TSEnumDeclaration",
				message: "Enums are not allowed"
			}
		],
		"@typescript-eslint/array-type": [
			"error",
			{
				default: "generic"
			}
		]
	}
}
