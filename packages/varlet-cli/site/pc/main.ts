import App from './App.vue'
import '@varlet/touch-emulator'
// @ts-ignore
import routes from '@pc-routes'
// @ts-ignore
import config from '@config'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { get } from 'lodash'

const redirect = get(config, 'pc.redirect')
redirect &&
  routes.push({
    path: '/:pathMatch(.*)*',
    redirect,
  })

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
window['enableWatchURL'] = true
window.top['router'] = router

const app = createApp(App as any)

app.use(router).mount('#app')
