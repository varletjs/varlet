<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-card :title="pack.title" :desc="pack.description" />
  <app-type>{{ pack.showSubtitle }}</app-type>
  <var-card :title="pack.title" :subtitle="pack.subtitle" :desc="pack.description" />
  <app-type>{{ pack.showImage }}</app-type>
  <var-card :title="pack.title" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
  <app-type>{{ pack.useSlot }}</app-type>
  <var-card
    :title="pack.title"
    :subtitle="pack.subtitle"
    :desc="pack.description"
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
  >
    <template #extra>
      <var-button text outline type="primary">{{ pack.button }}</var-button>
    </template>
  </var-card>
</template>

<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Button from '../../button'
import Card from '..'
import { pack, use } from './locale'
import { watchLang } from '../../utils/components'

export default {
  name: 'CardExample',
  components: {
    [Card.name]: Card,
    [Button.name]: Button,
    AppType,
  },
  setup() {
    watchLang(use)
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
