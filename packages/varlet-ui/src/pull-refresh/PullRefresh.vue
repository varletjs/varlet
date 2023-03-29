<template>
  <div ref="freshNode" :class="n()" @touchstart="touchStart" @touchend="touchEnd" @touchcancel="touchEnd">
    <div
      ref="controlNode"
      :class="classes(n('control'), n('$-elevation--2'), [isSuccess, n('control-success')])"
      :style="controlStyle"
    >
      <var-icon
        :name="iconName"
        :transition="ICON_TRANSITION"
        :class="classes(n('icon'), [refreshStatus === 'loading' && iconHasChanged, n('animation')])"
        var-pull-refresh-cover
      />
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import { defineComponent, ref, computed, watch, nextTick, type Ref } from 'vue'
import { getParentScroller, getScrollTop, getTarget } from '../utils/elements'
import { props, type RefreshStatus } from './props'
import { isString, toNumber } from '@varlet/shared'
import { call, createNamespace } from '../utils/components'
import { useEventListener, useMounted } from '@varlet/use'

const { n, classes } = createNamespace('pull-refresh')

const ICON_TRANSITION = 150

export default defineComponent({
  name: 'VarPullRefresh',
  components: {
    VarIcon,
  },
  props,
  setup(props) {
    const controlPosition: Ref<number> = ref(0)
    const freshNode: Ref<HTMLElement | null> = ref(null)
    const controlNode: Ref<HTMLElement | null> = ref(null)
    const startPosition: Ref<number> = ref(0)
    const distance: Ref<number | string> = ref('-125%')
    const iconName: Ref<string> = ref('arrow-down')
    const refreshStatus: Ref<RefreshStatus> = ref('default')
    const isEnd: Ref<boolean> = ref(false)

    let scroller: HTMLElement | Window
    let eventTargetScroller: HTMLElement | Window | null
    let changing: Promise<void>
    let startY = 0
    let deltaY = 0

    // https://github.com/varletjs/varlet/issues/509
    const iconHasChanged: Ref<boolean> = ref(true)

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

    const maxDistance = computed(() => Math.abs(2 * controlPosition.value))

    const isSuccess = computed(() => refreshStatus.value === 'success')

    const changeIcon = (): Promise<void> => {
      return new Promise((resolve) => {
        window.setTimeout(() => {
          iconHasChanged.value = true
          resolve()
        }, ICON_TRANSITION)
      })
    }

    const lockEvent = (action: 'add' | 'remove') => {
      const el = 'classList' in scroller ? scroller : document.body

      el.classList[action](`${n()}--lock`)
    }

    const touchStart = (event: TouchEvent) => {
      if (controlPosition.value === 0) {
        const { width } = (controlNode.value as HTMLElement).getBoundingClientRect()
        controlPosition.value = -(width + width * 0.25)
      }

      startY = event.touches[0].clientY
      deltaY = 0
      eventTargetScroller = getParentScroller(event.target as HTMLElement)
    }

    const touchMove = (event: TouchEvent) => {
      if (!isTouchable.value) {
        return
      }

      if (eventTargetScroller !== scroller && getScrollTop(eventTargetScroller) > 0) {
        return
      }

      const scrollTop = getScrollTop(scroller)
      if (scrollTop > 0) {
        return
      }

      const isReachTop = scrollTop === 0
      const touch = event.touches[0]
      deltaY = touch.clientY - startY

      if (isReachTop && deltaY >= 0) {
        event.preventDefault()
      }

      if (refreshStatus.value !== 'pulling') {
        refreshStatus.value = 'pulling'
        startPosition.value = event.touches[0].clientY
      }

      if (isReachTop && distance.value > controlPosition.value) {
        lockEvent('add')
      }

      const moveDistance = (event.touches[0].clientY - startPosition.value) / 2 + controlPosition.value

      distance.value = moveDistance >= maxDistance.value ? maxDistance.value : moveDistance

      if (distance.value >= maxDistance.value * 0.2) {
        iconHasChanged.value = false
        iconName.value = 'refresh'
        changing = changeIcon()
      } else {
        iconName.value = 'arrow-down'
      }
    }

    const touchEnd = async () => {
      if (!isTouchable.value) return

      isEnd.value = true

      if (distance.value >= maxDistance.value * 0.2) {
        await changing
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

    const setScroller = () => {
      scroller = props.target ? getTarget(props.target, 'PullRefresh') : getParentScroller(freshNode.value!)
    }

    const reset = () => {
      setTimeout(() => {
        refreshStatus.value = 'default'
        iconName.value = 'arrow-down'
        isEnd.value = false
      }, toNumber(props.animationDuration))
    }

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

    useMounted(setScroller)

    useEventListener(freshNode, 'touchmove', touchMove)

    return {
      n,
      classes,
      iconHasChanged,
      ICON_TRANSITION,
      refreshStatus,
      freshNode,
      controlNode,
      touchStart,
      touchMove,
      touchEnd,
      iconName,
      controlStyle,
      isSuccess,
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
