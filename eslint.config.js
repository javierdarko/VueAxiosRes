import pluginVue from "eslint-plugin-vue";
import globals from "globals";

function cleanGlobals(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key.trim(), value])
  );
}

export default [
  // Config recommended de Vue (flat)
  ...pluginVue.configs["flat/recommended"],

  {
    languageOptions: {
      sourceType: "module",
      globals: {
        ...cleanGlobals(globals.browser),
      },
    },
    rules: {
      // Reglas Vue personalizadas
      "vue/html-self-closing": "off",
      "vue/max-attributes-per-line": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/multiline-html-element-content-newline": "off",

      // Otras reglas
      "no-unused-vars": "warn",
      "vue/no-unused-vars": "warn",
      "no-empty": "warn",
    },
  },
];
