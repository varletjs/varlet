import { createApp } from 'vue'
import { Locale } from '@varlet/ui'
import '@vue/repl/style.css'
import App from './App.vue'

Locale.add('en-US', Locale.enUS)
Locale.use('en-US')

createApp(App).mount('#app')
