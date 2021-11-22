<template>
  <app-type>{{ pack.toggleTheme }}</app-type>
  <var-button block @click="toggleTheme">{{ pack.toggleTheme }}</var-button>
</template>

<script>
import VarButton from '../../button'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { use, pack } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

export default {
  components: {
    AppType,
    VarButton,
  },
  setup() {
    const toggleTheme = () => window.toggleTheme()

    watchLang(use)
    watchDarkMode(dark)

    return {
      pack,
      toggleTheme,
    }
  },
}
</script>
