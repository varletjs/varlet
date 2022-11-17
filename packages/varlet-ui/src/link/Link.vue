<template>
  <component
    :is="tag"
    v-bind="linkAttrs"
    :class="
      classes(
        n(),
        'var--box',
        'var--inline-flex',
        n(`--${type}`),
        [underline !== 'none', n(`--underline-${underline}`)],
        [disabled, n('--disabled')],
        [defaultStyle, n('--rest')]
      )
    "
    :style="{
      color: textColor,
    }"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'

const { n, classes } = createNamespace('link')

export default defineComponent({
  name: 'VarLink',
  props,
  setup(props) {
    const tag = computed<'a' | 'router-link' | 'span'>(() => {
      if (props.disabled) {
        return 'span'
      }
      if (props.href) {
        return 'a'
      }
      if (props.to) {
        return 'router-link'
      }
      return 'a'
    })

    const linkAttrs = computed(() => {
      const { disabled, href, target, to, replace } = props

      if (disabled) {
        return {}
      }

      if (href) {
        return { href, target }
      }

      if (to) {
        return { to, target, replace }
      }

      return {}
    })

    const handleClick = (e: Event) => {
      const { disabled, onClick } = props

      if (!onClick || disabled) {
        return
      }

      onClick(e)
    }

    return { n, classes, tag, linkAttrs, handleClick }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './link';
</style>
