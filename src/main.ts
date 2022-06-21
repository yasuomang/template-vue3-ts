import { createApp } from "vue";
import { createPinia } from "pinia";
import Router from "./route/index";
import App from "./App.vue";
import Request from "./api";
import "@/assets/style/main.less";

createApp(App).use(Router).use(Request).use(createPinia()).mount("#app");
