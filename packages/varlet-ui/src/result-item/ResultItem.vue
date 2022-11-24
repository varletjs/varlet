<template>
  <div
    :class="classes(n(), n(`--${status}`))"
    :style="{
      width: toSizeUnit(imageSize),
      height: toSizeUnit(imageSize),
    }"
  >
    <component :is="status" :duration="duration" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import Info from './Info.vue'
import Error from './Error.vue'
import Warning from './Warning.vue'
import Success from './Success.vue'
import Question from './Question.vue'
import { props } from './props'

const { n, classes } = createNamespace('result-item')

export default defineComponent({
  components: {
    Info,
    Success,
    Warning,
    Error,
    Question,
  },
  props,
  setup() {
    return {
      n,
      classes,
      toSizeUnit,
    }
  },
})
</script>

<style lang="less">
@import './resultItem.less';
</style>
