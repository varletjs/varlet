<template>
  <app-type>{{ pack.baseUse }}</app-type>
  <var-space>
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
  </var-space>

  <app-type>{{ pack.vertical }}</app-type>
  <var-space direction="column" size="large">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
  </var-space>

  <app-type>{{ pack.space }}</app-type>
  <var-space :size="['30px', '10px']">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
  </var-space>

  <app-type>{{ pack.rightAlign }}</app-type>
  <var-space justify="end">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>

  <app-type>{{ pack.around }}</app-type>
  <var-space justify="space-around">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>

  <app-type>{{ pack.center }}</app-type>
  <var-space justify="center">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>

  <app-type>{{ pack.between }}</app-type>
  <var-space justify="space-between">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>
</template>
<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarSpace from '..'
import VarButton from '../../button'
import context from '../../context'
import { pack, use } from './locale'
import { watchLang, watchPlatform, watchDarkMode } from '@varlet/cli/site/utils'
import { onUnmounted } from 'vue'

export default {
  components: { VarSpace, VarButton, AppType },
  setup() {
    watchLang(use)
    watchDarkMode()

    const prevTouchmoveForbid = context.touchmoveForbid
    watchPlatform((platform) => {
      if (platform === 'pc') {
        context.touchmoveForbid = false
      }
    })
    onUnmounted(() => {
      context.touchmoveForbid = prevTouchmoveForbid
    })

    return {
      pack,
    }
  },
}
</script>
