// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@formkit/nuxt",
    "@nuxtjs/supabase",
    "@pinia/nuxt"
  ],
  googleFonts: {
    families: {
      'DM Sans': [400, 500, 600],
      'Cormorant': [300, 400, 500, 600]
    }
  },
  supabase: {
    redirect: false
  },
  postcss: {
    plugins: {
      cssnano: false 
    }
  }
})