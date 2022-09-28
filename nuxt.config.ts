// https://v3.nuxtjs.org/api/configuration/nuxt.config
import auth from "~/middleware/auth";

export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
});
