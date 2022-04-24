<template>
  <div
    ref="freshNode"
    :class="n()"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
    @touchcancel="touchEnd"
  >
    <div :class="classes(n('control'), 'var-elevation--2', [isSuccess, n('control-success')])" :style="controlStyle">
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
import { defineComponent, ref, computed, watch, onMounted } from 'vue'
import { getParentScroller, getScrollTop } from '../utils/elements'
import { props } from './props'
import { toNumber } from '../utils/shared'
import { createNamespace } from '../utils/components'
import type { Ref } from 'vue'
import type { RefreshStatus } from './props'

const { n, classes } = createNamespace('pull-refresh')

const MAX_DISTANCE = 100
const CONTROL_POSITION = -50
const ICON_TRANSITION = 150

export default defineComponent({
  name: 'VarPullRefresh',
  components: {
    VarIcon,
  },
  props,
  setup(props) {
    let scroller: HTMLElement | Window
    let changeResult: Promise<void>

    const freshNode: Ref<HTMLElement | null> = ref(null)
    const startPosition: Ref<number> = ref(0)
    const distance: Ref<number> = ref(CONTROL_POSITION)
    const iconName: Ref<string> = ref('arrow-down')
    const refreshStatus: Ref<RefreshStatus> = ref('default')
    const isEnd: Ref<boolean> = ref(false)
    const iconHasChanged: Ref<boolean> = ref(true)

    const isTouchable = computed(
      () => refreshStatus.value !== 'loading' && refreshStatus.value !== 'success' && !props.disabled
    )

    const controlStyle = computed(() => ({
      transform: `translate3d(0px, ${distance.value}px, 0px) translate(-50%, 0)`,
      transition: isEnd.value ? `transform ${props.animationDuration}ms` : undefined,
      background: props.successBgColor || props.bgColor,
      color: props.successColor || props.color,
    }))

    const isSuccess = computed(() => refreshStatus.value === 'success')

    const changeIcon = (): Promise<void> => {
      return new Promise((resolve) => {
        window.setTimeout(() => {
          iconHasChanged.value = true
          resolve()
        }, ICON_TRANSITION)
      })
    }

    const touchStart = (event: TouchEvent) => {
      if (!isTouchable.value) return

      refreshStatus.value = 'pulling'
      startPosition.value = event.touches[0].clientY
    }

    const touchMove = (event: TouchEvent) => {
      const scrollTop = getScrollTop(scroller)
      if (scrollTop > 0 || !isTouchable.value) return

      if (scrollTop === 0 && distance.value > CONTROL_POSITION) event.cancelable && event.preventDefault()

      const moveDistance = (event.touches[0].clientY - startPosition.value) / 2 + CONTROL_POSITION

      distance.value = moveDistance >= MAX_DISTANCE ? MAX_DISTANCE : moveDistance

      if (distance.value >= MAX_DISTANCE * 0.2) {
        iconHasChanged.value = false
        iconName.value = 'refresh'
        changeResult = changeIcon()
      } else {
        iconName.value = 'arrow-down'
      }
    }

    const touchEnd = async () => {
      if (!isTouchable.value) return

      isEnd.value = true

      if (distance.value >= MAX_DISTANCE * 0.2) {
        await changeResult
        refreshStatus.value = 'loading'
        distance.value = MAX_DISTANCE * 0.3

        props['onUpdate:modelValue']?.(true)
        props.onRefresh?.()
      } else {
        refreshStatus.value = 'loosing'
        iconName.value = 'arrow-down'
        distance.value = CONTROL_POSITION

        setTimeout(() => {
          isEnd.value = false
        }, toNumber(props.animationDuration))
      }
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
            distance.value = CONTROL_POSITION
            reset()
          }, toNumber(props.successDuration))
        }
      }
    )

    onMounted(() => {
      scroller = getParentScroller(freshNode.value as HTMLElement)
    })

    return {
      n,
      classes,
      iconHasChanged,
      ICON_TRANSITION,
      refreshStatus,
      freshNode,
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
