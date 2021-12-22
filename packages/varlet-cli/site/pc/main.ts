import App from './App.vue'
import '@varlet/touch-emulator'
import routes from '@pc-routes'
import config from '@config'

import Icon from '../components/icon'
import Cell from '../components/cell'
import Ripple from '../components/ripple'
import CodeExample from '../components/code-example'
import Snackbar from '../components/snackbar'

import '../components/styles/common.less'
import '../components/styles/elevation.less'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { get } from 'lodash-es'
import { useProgress } from '../useProgress'

const defaultLanguage = get(config, 'defaultLanguage')
const redirect = get(config, 'pc.redirect')
const mobileRedirect = get(config, 'mobile.redirect')

Snackbar.allowMultiple(true)

redirect &&
  routes.push({
    path: '/:pathMatch(.*)*',
    redirect: `/${defaultLanguage}${redirect}`,
  })

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes,
})

let isEnd = true
const { start, end } = useProgress()

router.beforeEach((to, from) => {
  if (to.path === from.path) {
    return false
  }

  isEnd = false
  setTimeout(() => !isEnd && start(), 200)

  // @ts-ignore
  if (window._hmt) {
    if (to.path) {
      // @ts-ignore
      window._hmt.push(['_trackPageview', `/#${to.fullPath}`])
    }
  }
})

router.afterEach(() => {
  isEnd = true
  end()
})

Object.defineProperty(window, 'onMobileRouteChange', {
  value: (path: string, language: string, replace: string) => {
    if (path === mobileRedirect) {
      router.replace(`/${language}/${replace}`)
      return
    }

    router.replace(`/${language}${path}`)
  }
})

Object.defineProperty(window, 'scrollToMenu', {
  value: (docName: string) => {
    setTimeout(() => {
      const cell = document.getElementById(docName) as HTMLElement
      const scroller = cell.parentNode as HTMLElement
      scroller.scrollTo({ top: cell.offsetTop - scroller.offsetHeight / 2 })
    })
  }
})

createApp(App)
  .use(router)
  // @ts-ignore
  .use(Cell)
  .use(Ripple)
  // @ts-ignore
  .use(Icon)
  // @ts-ignore
  .use(CodeExample)
  .use(Snackbar)
  .mount('#app')
