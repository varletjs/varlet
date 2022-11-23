<template>
  <div
    :class="n()"
    :style="{
      width: toSizeUnit(imageSize),
      height: toSizeUnit(imageSize),
    }"
  >
    <span :class="classes(n('--line'), n('--line-long'))" />
    <span :class="classes(n('--line'), n('--line-tip'))" />
    <span :class="n('--circle')" />
    <span :class="n('--fix')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'

const { n, classes } = createNamespace('result__success')

export default defineComponent({
  name: 'VarResult',
  props: {
    imageSize: {
      type: [String, Number],
    },
  },
  setup(props) {
    return {
      n,
      classes,
      toSizeUnit,
    }
  },
})
</script>

<style lang="less">
@import './result.less';
</style>
