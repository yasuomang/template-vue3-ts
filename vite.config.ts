import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ViteComponents, { AntDesignVueResolver } from "vite-plugin-components";
const additionalData = `@import "@m-xushu/global-style-lib/dist/style/_variables.less";`;
const modifyVars = {
  hack: `true; @import "${resolve(
    __dirname,
    "./src/assets/style/varibles.less"
  )}";`,
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [
        AntDesignVueResolver({
          importStyle: "less",
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData,
        modifyVars,
        javascriptEnabled: true,
      },
    },
  },
});
