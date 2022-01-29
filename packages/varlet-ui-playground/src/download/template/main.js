import App from './App.vue'
import { createApp } from 'vue'
import VarletUI, { Context } from '@varlet/ui'
import '@varlet/ui/es/style.js'
import '@varlet/touch-emulator'

Context.touchmoveForbid = false

createApp(App).use(VarletUI).mount('#app')
