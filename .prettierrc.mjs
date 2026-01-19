/** @type {import("prettier").Config} */
export default {
  // Indica a Prettier que use el plugin de Astro
  plugins: ['prettier-plugin-astro'],

  // Configuraciones comunes
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',

  // Configuración específica para archivos .astro
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
