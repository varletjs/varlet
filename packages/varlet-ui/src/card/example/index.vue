<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-card :title="pack.title" :description="pack.description" />
  <app-type>{{ pack.showSubtitle }}</app-type>
  <var-card :title="pack.title" :subtitle="pack.subtitle" :description="pack.description" />
  <app-type>{{ pack.showImage }}</app-type>
  <var-card
    :title="pack.title"
    :subtitle="pack.subtitle"
    :description="pack.description"
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
  />
  <app-type>{{ pack.useSlot }}</app-type>
  <var-card
    :title="pack.title"
    :subtitle="pack.subtitle"
    :description="pack.description"
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
  >
    <template #extra>
      <var-button type="primary" style="margin-right: 10px">{{ pack.button }}</var-button>
      <var-button type="warning">{{ pack.button }}</var-button>
    </template>
  </var-card>
  <app-type>{{ pack.showRipple }}</app-type>
  <var-card :title="pack.title" :subtitle="pack.subtitle" :description="pack.description" ripple />
</template>

<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Button from '../../button'
import Card from '..'
import context from '../../context'
import { pack, use } from './locale'
import { watchLang, watchPlatform } from '../../utils/components'
import { onUnmounted } from 'vue'

export default {
  name: 'CardExample',
  components: {
    [Card.name]: Card,
    [Button.name]: Button,
    AppType,
  },
  setup() {
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

    return {
      pack,
    }
  },
}
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
