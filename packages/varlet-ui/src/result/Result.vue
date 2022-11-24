<template>
  <div
    :class="classes(n())"
    :style="{
      opacity,
      transition: `opacity ${toNumber(duration) * 2}ms`,
    }"
  >
    <slot name="image">
      <result-item v-if="status" :status="status" :duration="duration" :image-size="imageSize" />
    </slot>
    <slot name="title">
      <div v-if="title" :class="n('title')">{{ title }}</div>
    </slot>
    <slot name="description">
      <div v-if="description" :class="n('description')">{{ description }}</div>
    </slot>
    <div :class="n('footer')" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { Ref } from 'vue'
import { toNumber } from '@varlet/shared'
import { props } from './props'
import { createNamespace } from '../utils/components'
import ResultItem from '../result-item'

const { n, classes } = createNamespace('result')

export default defineComponent({
  name: 'VarResult',
  components: {
    ResultItem,
  },
  props,
  setup() {
    const opacity: Ref<number> = ref(0)

    setTimeout(() => {
      opacity.value = 1
    })

    return {
      n,
      classes,
      toNumber,
      opacity,
    }
  },
})
</script>

<style lang="less">
@import './result.less';
</style>
