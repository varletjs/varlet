import Varlet, { Locale } from '@varlet/ui'
import App from './App.vue'
import { createApp } from 'vue'

import '@vue/repl/style.css'
import '@varlet/ui/es/style'
import '@varlet/touch-emulator'

Locale.add('en-US', Locale.enUS)
Locale.use('en-US')

createApp(App).use(Varlet).mount('#app')
