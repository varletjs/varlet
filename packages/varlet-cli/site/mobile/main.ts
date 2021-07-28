// @ts-ignore
import routes from '@mobile-routes'
// @ts-ignore
import config from '@config'
import App from './App.vue'
import '@varlet/touch-emulator'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { get } from 'lodash'
import { inIframe, isPhone } from '../utils'

const redirect = get(config, 'mobile.redirect')
const defaultLanguage = get(config, 'defaultLanguage')

redirect &&
  routes.push({
    path: '/:pathMatch(.*)',
    redirect,
  })

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: (to, from, savedPosition) => savedPosition || { left: 0, top: 0 },
  routes,
})

router.beforeEach((to) => {
  const language = to.query.language ?? defaultLanguage
  const path = to.path
  const replace = to.query.replace

  if (!isPhone() && !inIframe()) {
    window.location.href = `./#/${language}${path}`
  }

  if (!isPhone() && inIframe()) {
    // @ts-ignore
    window.top.onMobileRouteChange(path, language, replace)
  }
})

const app = createApp(App)
app.use(router).mount('#app')
