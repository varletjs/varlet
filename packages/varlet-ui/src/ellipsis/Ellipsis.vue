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
import VarTooltip, { tooltipProps } from '../tooltip'
import { computed, defineComponent, type CSSProperties } from 'vue'
import { createNamespace, useVModel, type ExtractPublicPropTypes } from '../utils/components'
import { props } from './props'

const { name, n, classes } = createNamespace('ellipsis')

export default defineComponent({
  name,
  components: { VarTooltip },
  props,
  setup(props) {
    const expanding = useVModel(props, 'expand')
    const rootStyles = computed<CSSProperties>(() => (props.lineClamp ? { '-webkit-line-clamp': props.lineClamp } : {}))
    const tooltip = computed<ExtractPublicPropTypes<typeof tooltipProps>>(() => {
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

    function handleClick() {
      if (!props.expandTrigger) {
        return
      }

      expanding.value = !expanding.value
    }

    return {
      tooltip,
      expanding,
      rootStyles,
      n,
      classes,
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
