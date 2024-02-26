import routes from '@mobile-routes'
import config from '@config'
import App from './App.vue'
import Varlet from '@varlet/ui'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { get } from 'lodash-es'
import { inIframe, isPhone } from '../utils'

import '@varlet/touch-emulator'
import '@varlet/ui/es/style'

const redirect = get(config, 'mobile.redirect')
const defaultLanguage = get(config, 'defaultLanguage')

redirect &&
  routes.push({
    path: '/:pathMatch(.*)',
    redirect,
  })

routes.push({
  path: '/home',
  component: () => import('./AppHome.vue')
})

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: (to: any, from: any, savedPosition: any) => savedPosition || { left: 0, top: 0 },
  routes,
})

router.beforeEach((to: any) => {
  const { path, hash, query } = to
  const language = query.language ?? defaultLanguage
  const replace = query.replace

  if (!isPhone() && !inIframe()) {
    window.location.href = `./#/${language}${path}`
  }

  if (!isPhone() && inIframe()) {
    try {
      // @ts-ignore
      window.parent.onMobileRouteChange(path, language, replace, hash)
    } catch (e) {
      console.log(e)
    }
  }

  // @ts-ignore
  if (window._hmt) {
    if (to.path) {
      // @ts-ignore
      window._hmt.push(['_trackPageview', `/#${to.fullPath}`])
    }
  }
})

createApp(App)
  .use(router)
  .use(Varlet)
  .mount('#app')
