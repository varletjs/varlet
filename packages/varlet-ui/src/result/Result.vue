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
import Info from './Info.vue'
import Error from './Error.vue'
import Warning from './Warning.vue'
import Success from './Success.vue'
import Question from './Question.vue'
import Empty from './Empty.vue'
import { computed, defineComponent } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'

const { name, n, classes } = createNamespace('result')

export default defineComponent({
  name,
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
    const circleSize = computed(
      () => `calc(${props.imageSize ? toSizeUnit(props.imageSize) : 'var(--result-image-size)'} * 0.9)`
    )
    const borderSize = computed(
      () => `calc(${props.imageSize ? toSizeUnit(props.imageSize) : 'var(--result-image-size)'} * 0.05)`
    )

    return {
      circleSize,
      borderSize,
      n,
      classes,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './result';
</style>
