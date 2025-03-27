// @ts-check
import { defineConfig } from "astro/config";
export default defineConfig({
  site: 'https://jotaemeiuy.github.io/appUtu',
  base: '/appUtu',
  output: 'static',
  devToolbar: {
    enabled: false
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es"]
  }
});