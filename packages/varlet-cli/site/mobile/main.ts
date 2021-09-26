// @ts-ignore
import routes from '@mobile-routes'
// @ts-ignore
import config from '@config'
import App from './App.vue'
import '@varlet/touch-emulator'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import { Icon, AppBar, Button, Menu, Cell, Ripple } from '@varlet/ui'
import '@varlet/ui/es/icon/style'
import '@varlet/ui/es/app-bar/style'
import '@varlet/ui/es/button/style'
import '@varlet/ui/es/menu/style'
import '@varlet/ui/es/cell/style'
import '@varlet/ui/es/ripple/style'

import { get } from 'lodash-es'
import { inIframe, isPhone } from '../utils'

const redirect = get(config, 'mobile.redirect')
const defaultLanguage = get(config, 'defaultLanguage')

redirect &&
  routes.push({
    path: '/:pathMatch(.*)',
    redirect,
  })

routes.push({
  path: '/home',
  component: () => import('./components/AppHome.vue')
})

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: (to, from, savedPosition) => savedPosition || { left: 0, top: 0 },
  routes,
})

router.beforeEach((to, from) => {
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
  .use(Icon)
  .use(AppBar)
  .use(Cell)
  .use(Ripple)
  .use(Button)
  .use(Menu)
  .mount('#app')
