import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ViteComponents, { AntDesignVueResolver } from "vite-plugin-components";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       // 全局使用less变量，无需引入
  //       additionalData:
  //         '@import "@baoxiaohe/lib-components/styles/global/value.less";',
  //       javascriptEnabled: true,
  //     },
  //   },
  // },
});
