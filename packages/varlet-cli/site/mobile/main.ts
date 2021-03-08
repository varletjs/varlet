// @ts-ignore
import routes from '@mobile-routes'
// @ts-ignore
import config from '@config'
import App from './App.vue'
import AppType from './components/AppType.vue'
import '@varlet/touch-emulator'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { get } from 'lodash'

const redirect = get(config, 'mobile.redirect')
redirect &&
  routes.push({
    path: '/:pathMatch(.*)*',
    redirect,
  })

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App as any)
app.use(router).mount('#app')
