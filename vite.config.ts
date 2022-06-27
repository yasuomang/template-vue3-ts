import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const additionalData = `@import "@m-xushu/global-style-lib/dist/style/_variables.less";`;
const modifyVars = {
  hack: `true; @import "${resolve(
    __dirname,
    './src/assets/style/varibles.less'
  )}";`,
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
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
  //启动服务配置
  server: {
    host: '0.0.0.0',
    port: 1234,
    open: false,
    https: false,
  },
});
