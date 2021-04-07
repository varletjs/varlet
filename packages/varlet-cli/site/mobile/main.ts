// @ts-ignore
import routes from '@mobile-routes'
// @ts-ignore
import config from '@config'
import App from './App.vue'
import '@varlet/touch-emulator'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { get } from 'lodash'

const redirect = get(config, 'mobile.redirect')
redirect &&
  routes.push({
    path: '/:pathMatch(.*)',
    redirect,
    component: routes.find((c) => c.path === redirect).component,
  })

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  },
  routes,
})

router.beforeEach((to) => {
  const isPhone = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
  if (!isPhone && window.self === window.top) {
    window.location.href = `./#/${to.query.language}/${to.query.path}`
  }

  if (!isPhone) {
    const pcPath =
      to.path === '/home' && to.query.path
        ? `/${to.query.language}/${to.query.path}`
        : `/${to.query.language}${to.path}`

    window.top['enableWatchURL'] = false
    window.top['router'].replace(pcPath)
  }
})

const app = createApp(App as any)
app.use(router).mount('#app')
