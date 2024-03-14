import { createApp } from "vue";
import {
  createRouter,
  createWebHistory,
} from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import App from "./App.vue";
import 'uno.css'
import './style.less'
const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => setupLayouts(routes),
})
const app = createApp(App)

app.use(router)
  app.mount("#app");
