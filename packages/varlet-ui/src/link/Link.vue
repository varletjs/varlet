<template>
  <component
    :is="tag"
    v-bind="linkProps"
    :class="
      classes(
        n(),
        'var--box',
        'var--inline-flex',
        n(`--${type}`),
        [underline !== 'none', n(`--underline-${underline}`)],
        [disabled, n('--disabled')]
      )
    "
    :style="{
      color: textColor,
      fontSize: toSizeUnit(textSize),
    }"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { props } from './props'
import { call, createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'

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

    const linkProps = computed(() => {
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

      if (disabled) {
        return
      }

      call(onClick, e)
    }

    return { n, classes, tag, linkProps, handleClick, toSizeUnit }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './link';
</style>
