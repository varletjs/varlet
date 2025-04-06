<template>
  <Teleport :to="teleport === false ? undefined : teleport" :disabled="disabled || teleport === false">
    <div v-if="open" :class="classes(n(), n(`--${type}`))">
      <div v-if="mergedOverlay" :class="n('overlay')" :style="{ zIndex }">
        <svg>
          <path :class="n('hollow')" :d="path"></path>
        </svg>
      </div>
      <div ref="popover" :class="n('content')" :style="{ zIndex, ...contentStyle }">
        <var-tour-steps :current="current" @update-total="updateTotal">
          <slot />
        </var-tour-steps>
        <span v-if="mergedArrow" ref="arrowRef" :class="n('arrow')" :style="{ zIndex }"></span>
        <div v-if="mergedCloseable" :class="n('close-icon')" @click="close">
          <slot name="close-button">
            <var-icon name="close-circle" />
          </slot>
        </div>
        <div :class="n('footer')">
          <div :class="n('indicators')">
            <slot name="indicators" v-bind="{ current, total }">
              <span
                v-for="(_, index) in total"
                :key="index"
                :class="classes(n('indicator'), [index === current, n('--active')])"
              ></span>
            </slot>
          </div>
          <div :class="n('buttons')">
            <var-button
              v-if="current > 0"
              :class="classes(n('button'), n('previous-button'))"
              outline
              text
              size="small"
              @click="clickStep(current - 1)"
            >
              {{ (pt ? pt : t)('tourPrevious') }}
            </var-button>
            <var-button
              v-if="current < total"
              :class="classes(n('button'), n('next-button'))"
              :type="type === 'default' ? 'primary' : 'default'"
              size="small"
              @click="clickStep(current + 1)"
            >
              {{ (pt ? pt : t)(isLastStep ? 'tourFinish' : 'tourNext') }}
            </var-button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { call, toNumber } from '@varlet/shared'
import { useWindowSize } from '@varlet/use'
import VarButton from '../button'
import { useLock } from '../context/lock'
import VarIcon from '../icon'
import { t } from '../locale'
import { injectLocaleProvider } from '../locale-provider/provide'
import { createNamespace, useTeleport } from '../utils/components'
import { getTarget } from '../utils/elements'
import { props } from './props'
import { provideTour, TourStepProps } from './provide'
import VarTourSteps from './TourSteps'
import { usePopover } from './usePopover'
import { usePosition } from './usePosition'

const { name, n, classes } = createNamespace('tour')

export default defineComponent({
  name,
  props,
  components: { VarButton, VarIcon, VarTourSteps },
  setup(props) {
    const total = ref(0)
    const stepProps = ref<TourStepProps>()
    const open = computed(() => props.open)
    const current = computed(() => props.current)
    const gap = computed(() => props.gap)
    const mergedOverlay = computed(() => stepProps.value?.overlay ?? props.overlay)
    const mergedArrow = computed(() => (stepProps.value?.arrow ?? props.arrow) && !!host.value)
    const mergedPlacement = computed(() => stepProps.value?.placement ?? props.placement)
    const mergedCloseable = computed(() => stepProps.value?.closeable ?? props.closeable)
    const isLastStep = computed(() => current.value + 1 === total.value)

    const { disabled } = useTeleport()
    const { host, popover, arrowRef, zIndex } = usePopover({
      open,
      arrow: mergedArrow,
      gap,
      placement: mergedPlacement,
    })
    const { posInfo } = usePosition(host, open, gap)
    const { width: visualWidth, height: visualHeight } = useWindowSize()
    const path = computed(() => {
      const vw = visualWidth.value
      const vh = visualHeight.value
      const r = toNumber(posInfo.value?.radius ?? gap.value.radius)
      const basicPath = `M${vw},0 L0,0 L0,${vh} L${vw},${vh} L${vw},0 Z`
      const baseInfo = `a${r},${r} 0 0 1`

      if (posInfo.value) {
        const { left, top, width, height } = posInfo.value
        const { topRight, bottomRight, bottomLeft, topLeft } = {
          topRight: `${baseInfo} ${r},${r}`,
          bottomRight: `${baseInfo} ${-r},${r}`,
          bottomLeft: `${baseInfo} ${-r},${-r}`,
          topLeft: `${baseInfo} ${r},${-r}`,
        }

        return `${basicPath} M${left + r},${top} h${width - r * 2} ${topRight} v${height - r * 2} ${
          bottomRight
        } h${-width + r * 2} ${bottomLeft} v${-height + r * 2} ${topLeft} z`
      }
      return basicPath
    })
    const contentStyle = computed(() => {
      if (host.value) {
        return {}
      }

      return {
        position: 'fixed' as const,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }
    })

    const { t: pt } = injectLocaleProvider()
    useLock(() => open.value)

    function updateStepProps(step: TourStepProps) {
      const { target } = step
      stepProps.value = step
      host.value = target ? getTarget(target, name) : null
    }

    function updateTotal(value: number) {
      total.value = value
    }

    function clickStep(index: number) {
      if (index >= total.value) {
        finish()
        return
      }
      call(props['onUpdate:current'], index)
      call(props.onChange, index)
    }

    function close() {
      call(props['onUpdate:open'], false)
      call(props['onClose'])
    }

    function finish() {
      close()
      call(props.onFinish)
    }

    provideTour({
      updateStepProps,
    })

    return {
      disabled,
      total,
      open,
      current,
      path,
      popover,
      arrowRef,
      mergedArrow,
      mergedOverlay,
      mergedCloseable,
      isLastStep,
      zIndex,
      contentStyle,
      pt,
      t,
      n,
      classes,
      updateTotal,
      clickStep,
      close,
      finish,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './tour';
</style>
