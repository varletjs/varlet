import routes from '@mobile-routes'
import config from '@config'
import App from './App.vue'
import '@varlet/touch-emulator'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import Icon from '../components/icon'
import AppBar from './components/app-bar'
import Button from '../components/button'
import Cell from '../components/cell'
import Ripple from '../components/ripple'
import '../components/styles/common.less'
import '../components/styles/elevation.less'

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
  scrollBehavior: (to: any, from: any, savedPosition: any) => savedPosition || { left: 0, top: 0 },
  routes,
})

router.beforeEach((to: any) => {
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

// @ts-ignore
createApp(App)
  .use(router)
  // @ts-ignore
  .use(Icon)
  // @ts-ignore
  .use(AppBar)
  // @ts-ignore
  .use(Cell)
  .use(Ripple)
  // @ts-ignore
  .use(Button)
  .mount('#app')
