<template>
  <div
    :class="classes(n())"
    :style="{
      opacity,
      transition: `opacity ${toNumber(duration) * 2}ms`,
    }"
  >
    <slot name="image">
      <div :class="n('image-container')" v-if="status" ref="image">
        <div
          :class="classes(n('image'), n(status))"
          :style="{
            width: circleSize ? toSizeUnit(circleSize) : null,
            height: circleSize ? toSizeUnit(circleSize) : null,
            borderWidth: `${borderSize}px`,
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
import { computed, defineComponent, onMounted, ref, onBeforeUnmount, ComputedRef } from 'vue'
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
    const image: Ref<null | HTMLElement> = ref(null)
    const borderSize = ref()

    const circleSize: ComputedRef<number | null> = computed(() => {
      if (props.imageSize) {
        return toPxNum(props.imageSize) - 2 * borderSize.value
      }
      if (image.value?.offsetHeight) {
        return image.value!.offsetHeight - 2 * borderSize.value
      }

      return null
    })

    onMounted(() => {
      opacity.value = 1
      const height = image.value!.offsetHeight
      borderSize.value = height * 0.05
    })

    const setBorder = () => {
      const height = image.value!.offsetHeight
      borderSize.value = height * 0.05
    }

    window.addEventListener('resize', setBorder)

    onBeforeUnmount(() => {
      window.removeEventListener('resize', setBorder)
    })

    return {
      n,
      classes,
      toNumber,
      image,
      borderSize,
      circleSize,
      opacity,
      toSizeUnit,
    }
  },
})
</script>

<style lang="less">
@import './result.less';
</style>
