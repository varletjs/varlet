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
  scrollBehavior: (to, from, savedPosition) => savedPosition || { left: 0, top: 0 },
  routes,
})

router.beforeEach((to) => {
  const { query: { language, path }, path: toPath } = to
  const isPhone = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)

  if (!isPhone && window.self === window.top) {
    window.location.href = `./#/${language}/${path}`
  }

  if (!isPhone) {
    const pcPath =
      toPath === '/home' && path
        ? `/${language}/${path}`
        : `/${language}${toPath}`

    window.top['router'].replace(pcPath)
  }
})

const app = createApp(App)
app.use(router).mount('#app')
