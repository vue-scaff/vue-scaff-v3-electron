// Use Config from Vite
import { defineConfig } from "vite";

// Plugin Vue
import vue from "@vitejs/plugin-vue";

// Plugin Scaff
import scaff from "@scaff/vite-plugin-node";

// Set Scaff Conf
const vueScaffConf = {};

/**
 * docs: https://vitejs.dev/config/
 * ========== ========== ==========
 */
export default defineConfig({
  plugins: [vue(), scaff(vueScaffConf)],

  base: process.env.ELECTRON == "true" ? "./" : ".",

  optimizeDeps: {
    exclude: [`@scaff/vite-plugin-node`, `@scaff/vite`],
  },
});
