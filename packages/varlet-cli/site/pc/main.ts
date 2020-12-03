import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import routes from './routes'
// @ts-ignore
import config from '@config'

const defaultConfig = require('../../varlet.default.config.js')

const mergeConfig = {
	...defaultConfig,
	...config,
}
const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

const app = createApp(App as any)

app.config.globalProperties.$config = mergeConfig
app.use(router).mount('#app')
