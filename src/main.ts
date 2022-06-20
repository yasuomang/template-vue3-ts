import { createApp } from "vue";
import { createPinia } from "pinia";
import Router from "./route/index";
import App from "./App.vue";
import "@/assets/style/main.less";

createApp(App).use(Router).use(createPinia()).mount("#app");
