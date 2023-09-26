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
import { computed, defineComponent, ref, type StyleValue } from 'vue'
import { createNamespace, type ExtractPublicPropTypes } from '../utils/components'
import { props } from './props'

const { name, n, classes } = createNamespace('ellipsis')

export default defineComponent({
  name,
  components: { VarTooltip },
  props,
  setup(props) {
    const expanding = ref(false)
    const rootStyles = computed<StyleValue>(() => {
      if (!props.lineClamp) {
        return {}
      }

      return {
        '-webkit-line-clamp': props.lineClamp,
      } as StyleValue
    })
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
