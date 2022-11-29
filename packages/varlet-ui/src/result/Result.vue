<template>
  <div
    :class="classes(n(), n('$--box'))"
    :style="{
      opacity,
      transition: `opacity ${duration * 2}ms`,
    }"
  >
    <slot name="image">
      <div :class="n('image-container')" v-if="status">
        <div
          :class="classes(n('image'), n(status))"
          :style="{
            width: circleSize,
            height: circleSize,
            borderWidth: borderSize,
          }"
        >
          <component :is="status" :duration="duration" :border-size="borderSize" />
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
import { computed, ComputedRef, defineComponent, onMounted, ref } from 'vue'
import type { Ref } from 'vue'
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
    const opacity: Ref<number> = ref(0)

    onMounted(() => {
      opacity.value = 1
    })

    const circleSize: ComputedRef<string> = computed(() => {
      const { imageSize } = props

      return `calc(${imageSize ? toSizeUnit(imageSize) : 'var(--result-image-size)'} * 0.9)`
    })

    const borderSize: ComputedRef<string> = computed(() => {
      const { imageSize } = props

      return `calc(${imageSize ? toSizeUnit(imageSize) : 'var(--result-image-size)'} * 0.05)`
    })

    return {
      n,
      classes,
      toNumber,
      toPxNum,
      toSizeUnit,
      opacity,
      circleSize,
      borderSize,
    }
  },
})
</script>

<style lang="less">
@import './result.less';
</style>
