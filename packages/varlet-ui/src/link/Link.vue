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
        [disabled, n('--disabled')],
        [isFocusing && !inMobile(), n('--focusing')],
      )
    "
    :style="{
      color: textColor,
      fontSize: toSizeUnit(textSize),
    }"
    @click="handleClick"
    @focus="isFocusing = true"
    @blur="isFocusing = false"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { call, inMobile } from '@varlet/shared'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props } from './props'

const { name, n, classes } = createNamespace('link')

export default defineComponent({
  name,
  props,
  setup(props) {
    const isFocusing = ref(false)
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
      isFocusing,
      inMobile,
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
