<template>
  <var-tooltip v-bind="tooltip">
    <span
      :class="
        classes(n(), [lineClamp, n('--clamp'), n('--line')], [expandTrigger, n('--cursor')], [expanding, n('--expand')])
      "
      :style="rootStyles"
      @click="handleClick"
    >
      <slot />
    </span>

    <template #content>
      <slot name="tooltip-content">
        <span v-if="tooltip?.content">{{ tooltip.content }}</span>
        <slot v-else />
      </slot>
    </template>
  </var-tooltip>
</template>

<script lang="ts">
import VarTooltip from '../tooltip'
import { props as tooltipProps } from '../tooltip/props'
import { computed, defineComponent, ref, type Ref, type ComputedRef, type StyleValue } from 'vue'
import { createNamespace, type ExtractPublicPropTypes } from '../utils/components'
import { props } from './props'

const { n, classes } = createNamespace('ellipsis')

export default defineComponent({
  name: 'VarEllipsis',
  components: { VarTooltip },
  props,
  setup(props) {
    const expanding: Ref<boolean> = ref(false)
    const rootStyles: ComputedRef<StyleValue> = computed(() => {
      if (!props.lineClamp) {
        return {}
      }

      return {
        '-webkit-line-clamp': props.lineClamp,
      } as StyleValue
    })

    const tooltip: ComputedRef<ExtractPublicPropTypes<typeof tooltipProps>> = computed(() => {
      if (props.tooltip === false) {
        return {
          disabled: true,
        }
      }

      if (props.tooltip === true) {
        return {
          sameWidth: true,
        }
      }

      return { sameWidth: true, ...props.tooltip }
    })

    const handleClick = () => {
      if (!props.expandTrigger) {
        return
      }

      expanding.value = !expanding.value
    }

    return {
      n,
      classes,
      tooltip,
      expanding,
      rootStyles,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../tooltip/tooltip';
@import './ellipsis';
</style>
