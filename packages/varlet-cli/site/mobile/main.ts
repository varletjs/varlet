import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import AppType from './components/AppType.vue'

import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App as any)
app
  .component(AppType.name, AppType)
  .use(router)
  .mount('#app')

