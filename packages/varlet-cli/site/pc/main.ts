import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import routes from './routes'
// @ts-ignore
import config from '@config'

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

const app = createApp(App as any)
app.config.globalProperties.$config = config
app.use(router).mount('#app')
