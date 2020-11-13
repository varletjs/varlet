import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import routes from './routes'

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

const app = createApp(App as any)
app.use(router).mount('#app')
