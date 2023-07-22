import '@vue/repl/style.css'
import '@varlet/touch-emulator'
import { createApp } from 'vue'
import App from './App.vue'

Locale.add('en-US', Locale.enUS)
Locale.use('en-US')

createApp(App).mount('#app')
