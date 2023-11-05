<template>
  <div
    ref="freshNode"
    :class="n()"
    @touchstart="handleTouchstart"
    @touchend="handleTouchend"
    @touchcancel="handleTouchend"
  >
    <div
      ref="controlNode"
      :class="classes(n('control'), n('$-elevation--2'), [isSuccess, n('control-success')])"
      :style="controlStyle"
    >
      <var-icon
        :name="iconName"
        :transition="ICON_TRANSITION"
        :class="classes(n('icon'), [refreshStatus === 'loading', n('animation')])"
        var-pull-refresh-cover
      />
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import { defineComponent, ref, computed, watch, nextTick } from 'vue'
import { getParentScroller, getTarget } from '../utils/elements'
import { props, type RefreshStatus } from './props'
import { isNumber, isString, toNumber, getRect, preventDefault, getScrollTop, call } from '@varlet/shared'
import { createNamespace } from '../utils/components'
import { useEventListener, onSmartMounted, useTouch } from '@varlet/use'

const { name, n, classes } = createNamespace('pull-refresh')

const ICON_TRANSITION = 150

export default defineComponent({
  name,
  components: { VarIcon },
  props,
  setup(props) {
    const controlPosition = ref(0)
    const freshNode = ref<HTMLElement | null>(null)
    const controlNode = ref<HTMLElement | null>(null)
    const startPosition = ref(0)
    const distance = ref<number | string>('-125%')
    const iconName = ref('arrow-down')
    const refreshStatus = ref<RefreshStatus>('default')
    const isEnd = ref(false)
    const maxDistance = computed(() => Math.abs(2 * controlPosition.value))
    const isSuccess = computed(() => refreshStatus.value === 'success')
    const isTouchable = computed(
      () => refreshStatus.value !== 'loading' && refreshStatus.value !== 'success' && !props.disabled
    )
    const controlStyle = computed(() => ({
      transform: `translate3d(0px, ${
        isString(distance.value) ? distance.value : `${distance.value}px`
      }, 0px) translate(-50%, 0)`,
      transition: isEnd.value ? `transform ${props.animationDuration}ms` : undefined,
      background: isSuccess.value ? props.successBgColor : props.bgColor,
      color: isSuccess.value ? props.successColor : props.color,
    }))
    const { startTouch, moveTouch, endTouch, isReachTop } = useTouch()

    let scroller: HTMLElement | Window
    let eventTargetScroller: HTMLElement | Window | null

    watch(
      () => props.modelValue,
      (newValue) => {
        if (newValue === false) {
          isEnd.value = true
          refreshStatus.value = 'success'
          iconName.value = 'checkbox-marked-circle'
          setTimeout(() => {
            distance.value = controlPosition.value
            reset()
          }, toNumber(props.successDuration))
        }
      }
    )

    onSmartMounted(setScroller)

    useEventListener(freshNode, 'touchmove', handleTouchmove)

    async function startIconTransition(name: string) {
      if (iconName.value === name) {
        return
      }

      iconName.value = name
      return new Promise((resolve) => {
        window.setTimeout(resolve, ICON_TRANSITION)
      })
    }

    function lockEvent(action: 'add' | 'remove') {
      const el = 'classList' in scroller ? scroller : document.body

      el.classList[action](`${n()}--lock`)
    }

    function handleTouchstart(event: TouchEvent) {
      startTouch(event)

      if (controlPosition.value === 0) {
        const { width } = getRect(controlNode.value as HTMLElement)
        controlPosition.value = -(width + width * 0.25)
      }

      eventTargetScroller = getParentScroller(event.target as HTMLElement)
    }

    function handleTouchmove(event: TouchEvent) {
      moveTouch(event)

      if (!isTouchable.value || !eventTargetScroller) {
        return
      }

      if (eventTargetScroller !== scroller && getScrollTop(eventTargetScroller!) > 0) {
        return
      }

      const scrollTop = getScrollTop(scroller)
      if (scrollTop > 0) {
        return
      }

      if (isReachTop(scroller)) {
        preventDefault(event)
      }

      if (refreshStatus.value !== 'pulling') {
        refreshStatus.value = 'pulling'
        startPosition.value = event.touches[0].clientY
      }

      if (isReachTop(scroller) && isNumber(distance.value) && distance.value > controlPosition.value) {
        lockEvent('add')
      }

      const moveDistance = (event.touches[0].clientY - startPosition.value) / 2 + controlPosition.value
      distance.value = moveDistance >= maxDistance.value ? maxDistance.value : moveDistance
      startIconTransition(distance.value >= maxDistance.value * 0.2 ? 'refresh' : 'arrow-down')
    }

    async function handleTouchend() {
      endTouch()

      if (!isTouchable.value) {
        return
      }

      isEnd.value = true

      if (toNumber(distance.value) >= maxDistance.value * 0.2) {
        await startIconTransition('refresh')
        refreshStatus.value = 'loading'
        distance.value = maxDistance.value * 0.3

        call(props['onUpdate:modelValue'], true)
        nextTick(() => {
          call(props.onRefresh)
        })
        lockEvent('remove')
      } else {
        refreshStatus.value = 'loosing'
        iconName.value = 'arrow-down'
        distance.value = controlPosition.value

        setTimeout(() => {
          isEnd.value = false
          lockEvent('remove')
        }, toNumber(props.animationDuration))
      }

      eventTargetScroller = null
    }

    function setScroller() {
      scroller = props.target ? getTarget(props.target, 'PullRefresh') : getParentScroller(freshNode.value!)
    }

    function reset() {
      setTimeout(() => {
        refreshStatus.value = 'default'
        iconName.value = 'arrow-down'
        isEnd.value = false
      }, toNumber(props.animationDuration))
    }

    return {
      ICON_TRANSITION,
      refreshStatus,
      freshNode,
      controlNode,
      iconName,
      controlStyle,
      isSuccess,
      n,
      classes,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../icon/icon';
@import './pullRefresh';
</style>
