import pluginVue from 'eslint-plugin-vue';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

function cleanGlobals(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key.trim(), value])
  );
}

export default [
  // Config recommended de Vue (flat)
  ...pluginVue.configs['flat/recommended'],

  // Config prettier sin extends, se inyecta directamente:
  {
    // prettierConfig es un objeto con configuración, lo incluimos acá:
    ...prettierConfig,

    plugins: {
      prettier: pluginPrettier,
    },
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...cleanGlobals(globals.browser),
      },
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'off',
        },
      ],
      // Sobrescribe reglas de prettier (por ejemplo mostrar errores)
      'prettier/prettier': 'error',

      // Sobrescribe o desactiva reglas que chocan con prettier si quieres
      'vue/html-self-closing': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',

      // Otras reglas tuyas
      'no-unused-vars': 'warn',
      'vue/no-unused-vars': 'warn',
      'no-empty': 'warn',
    },
  },
];
