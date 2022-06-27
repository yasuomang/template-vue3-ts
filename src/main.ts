import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Router from './route/index';
import App from './App.vue';
import Request from './api';
import '@/assets/style/main.less';
import Antd from 'ant-design-vue';

createApp(App)
  .use(Router)
  .use(Antd)
  .use(Request)
  .use(createPinia())
  .mount('#app');
