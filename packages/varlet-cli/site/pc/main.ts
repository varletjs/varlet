import App from './App.vue'
import '@varlet/touch-emulator'
// @ts-ignore
import routes from '@pc-routes'
// @ts-ignore
import config from '@config'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { get } from 'lodash'
import { useProgress } from '../useProgress'

const defaultLanguage = get(config, 'defaultLanguage')
const redirect = get(config, 'pc.redirect')
const mobileRedirect = get(config, 'mobile.redirect')

redirect &&
  routes.push({
    path: '/:pathMatch(.*)*',
    redirect: `/${defaultLanguage}${redirect}`,
  })

const router = createRouter({
  history: createWebHashHistory(),
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
})

router.afterEach(() => {
  isEnd = true
  end()
})

Object.defineProperty(window, 'onMobileRouteChange', {
  value: (path: string, language: string, replace: string) => {
    console.log(path, language, replace)
    if (path === mobileRedirect) {
      router.replace(`/${language}/${replace}`)
      return
    }

    router.replace(`/${language}${path}`)
  }
})

const app = createApp(App)
app.use(router).mount('#app')
