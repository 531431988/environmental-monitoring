import { createApp } from "vue";
import {
  createRouter,
  createWebHistory,
  DataLoaderPlugin,
} from 'vue-router/auto'
import App from "./App.vue";
import "./styles.css";
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => {
    // routes.find((r) => r.name === '/')!.meta = {}
    return routes
  },
})
app.use(DataLoaderPlugin, { router })
app.use(router)
  app.mount("#app");
