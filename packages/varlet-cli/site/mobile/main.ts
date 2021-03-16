// @ts-ignore
import routes from '@mobile-routes'
// @ts-ignore
import config from '@config'
import App from './App.vue'
import AppType from './components/AppType.vue'
import '@varlet/touch-emulator'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { get } from 'lodash'

const redirect = get(config, 'mobile.redirect')
redirect &&
  routes.push({
    path: '/:pathMatch(.*)*',
    redirect,
  })

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach((to) => {
  console.log(1)
  let isPhone = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
  if (!isPhone && window.self === window.top) {
    window.location.href = `/#/${to.query.language}/${to.query.path}`
  }
})

router.afterEach((to) => {
  console.log(to)
  if (to.path === '/home' && to.query.path) {
    console.log(to.path, to.query.path)
    window.top['router'].replace(`/${to.query.language}/${to.query.path}`)
  } else {
    window.top['router'].replace(`/${to.query.language}${to.path}`)
  }
})

const app = createApp(App as any)
app.use(router).mount('#app')
