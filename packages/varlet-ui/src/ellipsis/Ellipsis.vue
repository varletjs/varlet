<template>
  <var-tooltip
    ref="rootRef"
    :class="
      classes(n(), [lineClamp, n('--clamp'), n('--line')], [clickable, n('--cursor')], [expanding, n('--expand')])
    "
    var-ellipsis-cover
    :style="rootStyles"
    v-bind="tooltipProps"
    @click="handleClick"
  >
    <span>
      <slot />
    </span>

    <template #content>
      <slot name="tooltip-content">
        <span v-if="tooltipProps?.content">{{ tooltipProps.content }}</span>
        <slot v-else />
      </slot>
    </template>
  </var-tooltip>
</template>

<script lang="ts">
import { onSmartMounted, useResizeObserver, useVModel } from '@varlet/use'
import { computed, defineComponent, onUpdated, ref, watch, type CSSProperties, type RendererNode } from 'vue'
import VarTooltip, { tooltipProps as _tooltipProps } from '../tooltip'
import { createNamespace, type ExtractPublicPropTypes } from '../utils/components'
import { props } from './props'

const { name, n, classes } = createNamespace('ellipsis')

export default defineComponent({
  name,
  components: { VarTooltip },
  props,
  setup(props) {
    const rootRef = ref<HTMLElement | RendererNode | null>(null)
    const truncated = ref(false)
    const expanding = useVModel(props, 'expand')
    const clickable = computed(() => !!props.expandTrigger && (!props.expandOnOverflow || truncated.value))
    const rootStyles = computed<CSSProperties>(() => (props.lineClamp ? { '-webkit-line-clamp': props.lineClamp } : {}))
    const tooltipProps = computed<ExtractPublicPropTypes<typeof _tooltipProps>>(() => {
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

    function getRootElement() {
      if (!rootRef.value) {
        return null
      }

      return ((rootRef.value as RendererNode).$el ?? rootRef.value) as HTMLElement | null
    }

    function checkTruncated() {
      const element = getRootElement()

      if (!element) {
        return
      }

      const next = props.lineClamp
        ? element.scrollHeight > element.clientHeight
        : element.scrollWidth > element.clientWidth

      if (next !== truncated.value) {
        truncated.value = next
      }
    }

    function handleClick() {
      if (!clickable.value) {
        return
      }

      expanding.value = !expanding.value
    }

    useResizeObserver(getRootElement, checkTruncated)

    watch(() => props.lineClamp, checkTruncated)

    onSmartMounted(checkTruncated)
    onUpdated(checkTruncated)

    return {
      rootRef,
      truncated,
      clickable,
      tooltipProps,
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
