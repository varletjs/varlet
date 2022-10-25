<template>
  <div :class="n()"></div>
</template>

<script lang="ts">
import { props } from './props'
import { createNamespace } from '../utils/components'
import { defineComponent } from 'vue'

const { n } = createNamespace('floating-actions-button')

export default defineComponent({
  name: 'VarFloatingActionsButton',
  props,
  setup() {
    return {
      n,
    }
  },
})
</script>

<style lang="less">
@import './floatingActionsButton.less';
</style>
