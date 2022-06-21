import { Http } from "@m-xushu/axios";
import { App } from "vue";
const $api = new Http().getRequestMethod;
console.log($api);

export default {
  install: (app: App) => {
    app.config.globalProperties.$api = $api;
  },
  requestMethod: $api,
};
