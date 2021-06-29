<template>
  <app-type>{{ pack.componentCall }}</app-type>
  <var-style-provider :style-vars="styleVars">
    <var-rate v-model="state.score" />
    <var-switch v-model="state.license" />
    <var-button style="margin-top: 10px" type="primary" block @click="toggleTheme">{{ pack.toggleTheme }}</var-button>
  </var-style-provider>

  <app-type>{{ pack.functionCall }}</app-type>
  <var-button type="primary" block @click="toggleRootTheme">{{ pack.toggleRootTheme }}</var-button>
</template>

<script>
import StyleProvider from '../index'
import Rate from '../../rate'
import Switch from '../../switch'
import Button from '../../button'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import context from '../../context'
import { ref, reactive, onUnmounted } from 'vue'
import { watchLang, watchPlatform } from '../../utils/components'
import { use, pack } from './locale'

export default {
  name: 'StyleProviderExample',
  components: {
    [StyleProvider.Component.name]: StyleProvider.Component,
    [Rate.name]: Rate,
    [Switch.name]: Switch,
    [Button.name]: Button,
    AppType,
  },
  setup() {
    const state = reactive({
      score: 5,
      license: true,
    })
    const primaryTheme = {
      '--theme-name': 'primary',
      '--rate-primary-color': 'var(--color-primary)',
      '--button-primary-color': 'var(--color-primary)',
      '--switch-handle-active-background': 'var(--color-primary)',
      '--switch-track-active-background': 'var(--color-primary)',
    }
    const successTheme = {
      '--theme-name': 'success',
      '--rate-primary-color': 'var(--color-success)',
      '--button-primary-color': 'var(--color-success)',
      '--switch-handle-active-background': 'var(--color-success)',
      '--switch-track-active-background': 'var(--color-success)',
    }
    const styleVars = ref(primaryTheme)

    const toggleTheme = () => {
      styleVars.value = styleVars.value['--theme-name'] === 'primary' ? successTheme : primaryTheme
    }

    const toggleRootTheme = () => {
      const color = window.getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim()
      StyleProvider({
        '--color-primary': color === '#3a7afe' ? '#000' : '#3a7afe',
      })
    }

    watchLang(use)

    const prevTouchmoveForbid = context.touchmoveForbid
    watchPlatform((platform) => {
      if (platform === 'pc') {
        context.touchmoveForbid = false
      }
    })
    onUnmounted(() => {
      context.touchmoveForbid = prevTouchmoveForbid
    })

    onUnmounted(() => {
      StyleProvider({
        '--color-primary': '#3a7afe',
      })
    })

    return {
      pack,
      state,
      styleVars,
      toggleTheme,
      toggleRootTheme,
    }
  },
}
</script>
