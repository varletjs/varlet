// @ts-ignore
import routes from '@mobile-routes'
// @ts-ignore
import config from '@config'
import App from './App.vue'
import '@varlet/touch-emulator'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { get } from 'lodash'
import { isPhone } from '../utils'

const redirect = get(config, 'mobile.redirect')
const redirectComponent = routes.find((c: RouteRecordRaw) => c.path === redirect)?.component
redirect && redirectComponent &&
  routes.push({
    path: '/:pathMatch(.*)',
    redirect,
    component: routes.find((c: RouteRecordRaw) => c.path === redirect).component,
  })

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: (to, from, savedPosition) => savedPosition || { left: 0, top: 0 },
  routes,
})

router.beforeEach((to) => {
  const { query: { language, path }, path: toPath } = to

  if (!language || !path) {
    return false
  }

  if (!isPhone() && window.self === window.top) {
    window.location.href = `./#/${language}/${path}`
  }

  if (!isPhone()) {
    const pcPath = toPath === redirect && path
        ? `/${language}/${path}`
        : `/${language}${toPath}`

    // @ts-ignore
    window.top['router'].replace(pcPath)
  }
})

const app = createApp(App)
app.use(router).mount('#app')
