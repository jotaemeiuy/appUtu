// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
// https://astro.build/config
export default defineConfig({
  site: 'https://jotaemeiuy.github.io',
  base: '/appUtu',
  output: "static",
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    env: {
      BASE_URL: process.env.NODE_ENV === 'production' ? '/appUtu' : '',
    },
    inlineStylesheets: "always",
  },
  devToolbar: {
    enabled: false,
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },
});