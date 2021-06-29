<template>
  <app-type>组件调用</app-type>
  <var-style-provider :style-vars="styleVars">
    <var-rate v-model="state.score" />
    <var-switch v-model="state.license" />
    <var-button style="margin-top: 10px" type="primary" block @click="toggleTheme"> 切换样式 </var-button>
  </var-style-provider>

  <app-type>函数调用</app-type>
  <var-button type="primary" block @click="toggleRootTheme"> 切换根节点样式 </var-button>
</template>

<script>
import StyleProvider from '../index'
import Rate from '../../rate'
import Switch from '../../switch'
import Button from '../../button'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { ref, reactive, onUnmounted } from 'vue'

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
      const color = document.documentElement.style.getPropertyValue('--color-primary')
      StyleProvider({
        '--color-primary': color === '#3a7afe' ? '#000' : '#3a7afe',
      })
    }

    onUnmounted(() => {
      StyleProvider({
        '--color-primary': '#3a7afe',
      })
    })

    return {
      state,
      styleVars,
      toggleTheme,
      toggleRootTheme,
    }
  },
}
</script>
