import { createApp } from 'vue'
import VarletUI from '@varlet/ui'
import App from './App.vue'
import '@varlet/ui/es/style'
import '@varlet/touch-emulator'

createApp(App).use(VarletUI).mount('#app')
