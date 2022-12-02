<template>
  <div :class="classes(n(), n('$--box'))">
    <slot name="image">
      <div :class="n('image-container')" v-if="type">
        <div
          :class="classes(n('image'), n(type))"
          :style="{
            width: circleSize,
            height: circleSize,
            borderWidth: borderSize,
          }"
        >
          <component :is="type" :border-size="borderSize" :animation="animation" />
        </div>
      </div>
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
import { computed, ComputedRef, defineComponent } from 'vue'
import { toNumber } from '@varlet/shared'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { toPxNum, toSizeUnit } from '../utils/elements'
import Info from './Info.vue'
import Error from './Error.vue'
import Warning from './Warning.vue'
import Success from './Success.vue'
import Question from './Question.vue'
import Empty from './Empty.vue'

const { n, classes } = createNamespace('result')

export default defineComponent({
  name: 'VarResult',
  components: {
    Info,
    Success,
    Warning,
    Error,
    Question,
    Empty,
  },
  props,
  setup(props) {
    const circleSize: ComputedRef<string> = computed(() => {
      const { imageSize } = props

      return `calc(${imageSize ? toSizeUnit(imageSize) : 'var(--result-image-size)'} * 0.9)`
    })

    const borderSize: ComputedRef<string> = computed(() => {
      const { imageSize } = props

      return `calc(${imageSize ? toSizeUnit(props.imageSize) : 'var(--result-image-size)'} * 0.05)`
    })

    return {
      n,
      classes,
      toNumber,
      toPxNum,
      toSizeUnit,
      circleSize,
      borderSize,
    }
  },
})
</script>

<style lang="less">
@import './result.less';
</style>
