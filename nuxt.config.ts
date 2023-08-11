// https://nuxt.com/docs/api/configuration/nuxt-config


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['vuetify/lib/styles/main.sass',

    '@mdi/font/css/materialdesignicons.min.css',

  ],
  modules: ['nuxt-icon','nuxt-swiper',  ['@nuxtjs/google-fonts', {
    families: {
      'Lobster': true,
      download: true,
      inject: true
    }
  }]],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
