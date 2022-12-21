module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ["standard", "plugin:vue/vue3-essential", "eslint-config-prettier"],
    parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module"
    },
    rules: {
        "no-undef": "off",
        semi: ["error", "always"],
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "space-before-function-paren": 0,
        "vue/array-bracket-spacing": "error",
        "vue/arrow-spacing": "error",
        "vue/block-spacing": "error",
        "vue/brace-style": "error",
        "vue/camelcase": "off",
        "vue/comma-dangle": "error",
        "vue/component-name-in-template-casing": "error",
        "vue/eqeqeq": "error",
        "vue/key-spacing": "error",
        "vue/match-component-file-name": "error",
        "vue/object-curly-spacing": "off",
        "no-useless-escape": "off",
        "no-unused-vars": "off",
        "vue/attribute-hyphenation": "off",
        "vue/custom-event-name-casing": "off",
        "vue/multi-word-component-names": "off",
        "vue/comment-directive": "off"
    },
    plugins: ["vue", "@typescript-eslint"]
};
