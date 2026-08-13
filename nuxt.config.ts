import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/test-utils/module'],
  fonts: {
    families: [
      { name: 'Geist Mono', provider: 'google' },
      { name: 'Inter', provider: 'google' }
    ]
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    resend_mail: process.env.RESEND_MAIL,
    resend_api: process.env.RESEND_API_KEY
  }
})
