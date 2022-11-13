<template>
  <component
    :is="tag"
    v-bind="customAttrs"
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

    const customAttrs = computed(() => {
      const attrs: {
        href?: string
        target?: string
        to?: string
        replace?: boolean
      } = {}
      const { disabled, href, target, to, replace } = props

      if (disabled) {
        return attrs
      }

      if (href) {
        attrs.href = href
        if (target) {
          attrs.target = target
        }

        return attrs
      }

      if (to) {
        attrs.to = to
        if (target) {
          attrs.target = target
        }
        if (replace) {
          attrs.replace = replace
        }

        return attrs
      }

      return attrs
    })

    return { n, classes, tag, customAttrs }
  },
})
</script>

<style lang="less">
@import '../styles/common.less';
@import './link.less';
</style>
