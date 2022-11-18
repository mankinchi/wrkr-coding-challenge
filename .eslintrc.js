module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		"react-app",
		"react-app/jest",
		"airbnb",
		"airbnb-typescript",
		"prettier",
	],
	overrides: [
		{
			files: ["./src/**/*.tsx"],
			rules: {
				"react/react-in-jsx-scope": "off",
				"react/function-component-definition": "off",
				"react/require-default-props": "off",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: "./tsconfig.json",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		"import/prefer-default-export": "off",
	},
};
