<template>
  <component
    :is="tag"
    v-bind="linkProps"
    :class="
      classes(
        n(),
        n('$--box'),
        n('$--inline-flex'),
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
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { call } from '@varlet/shared'

const { name, n, classes } = createNamespace('link')

export default defineComponent({
  name,
  props,
  setup(props) {
    const tag = computed<'a' | 'router-link' | 'span'>(() => {
      const { disabled, href, to } = props

      if (disabled) {
        return 'span'
      }

      if (href) {
        return 'a'
      }

      if (to) {
        return 'router-link'
      }

      return 'a'
    })
    const linkProps = computed(() => {
      const { disabled, href, target, to, replace, rel } = props

      if (disabled) {
        return {}
      }

      if (href) {
        return { href, target, rel }
      }

      if (to) {
        return { to, target, replace }
      }

      return {}
    })

    function handleClick(e: Event) {
      if (props.disabled) {
        return
      }

      call(props.onClick, e)
    }

    return {
      tag,
      linkProps,
      n,
      classes,
      handleClick,
      toSizeUnit,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './link';
</style>
