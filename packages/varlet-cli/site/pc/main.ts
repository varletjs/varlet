import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import '@varlet/touch-emulator'
// @ts-ignore
import routes from '@pc-routes'
// @ts-ignore
import config from '@config'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App as any)

app.config.globalProperties.$config = config
app.use(router).mount('#app')
