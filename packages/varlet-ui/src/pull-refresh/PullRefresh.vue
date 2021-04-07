<template>
  <div
    ref="freshNode"
    class="var-pull-refresh"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
    @touchcancel="touchEnd"
  >
    <div
      class="var-pull-refresh__control var-elevation--2"
      :class="[isSuccess ? 'var-pull-refresh__control-success' : null]"
      :style="controlStyle"
    >
      <var-icon :name="iconName" :transition="200" :class="iconClass" var-pull-refresh-cover />
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed, watch, onMounted } from 'vue'
import Icon from '../icon'
import { getParentScroller, getScrollTop } from '../utils/elements'
import { props, RefreshStatus } from './props'
import { toNumber } from '../utils/shared'

const MAX_DISTANCE = 100
const CONTROL_POSITION = -50

let scroller: HTMLElement | Window = window

export default defineComponent({
  name: 'VarPullRefresh',
  components: {
    [Icon.name]: Icon,
  },
  props,
  setup(props) {
    const freshNode: Ref<HTMLElement | null> = ref(null)
    const startPosition: Ref<number> = ref(0)
    const distance: Ref<number> = ref(CONTROL_POSITION)
    const iconName: Ref<string> = ref('arrow-down')
    const refreshStatus: Ref<RefreshStatus> = ref('default')
    const isEnd: Ref<boolean> = ref(false)

    const isTouchable = computed(
      () => refreshStatus.value !== 'loading' && refreshStatus.value !== 'success' && !props.disable
    )

    const iconClass = computed(() => ({
      'var-pull-refresh__icon': true,
      'var-pull-refresh__animation': refreshStatus.value === 'loading',
    }))

    const controlStyle = computed(() => ({
      transform: `translate3d(0px, ${distance.value}px, 0px) translate(-50%, 0)`,
      transition: isEnd.value ? `transform ${props.animationDuration}ms` : null,
      background: props.successBgColor || props.bgColor,
      color: props.successColor || props.color,
    }))

    const isSuccess = computed(() => refreshStatus.value === 'success')

    const touchStart = (event: TouchEvent) => {
      if (!isTouchable.value) return
      refreshStatus.value = 'pulling'
      startPosition.value = event.touches[0].clientY
    }

    const touchMove = (event: TouchEvent) => {
      const scrollTop = getScrollTop(scroller)
      if (scrollTop > 0 || !isTouchable.value) return
      if (scrollTop === 0 && distance.value !== CONTROL_POSITION) event.cancelable && event.preventDefault()

      const moveDistance = (event.touches[0].clientY - startPosition.value) / 2 + CONTROL_POSITION

      distance.value = moveDistance >= MAX_DISTANCE ? MAX_DISTANCE : moveDistance
      iconName.value = distance.value >= MAX_DISTANCE * 0.2 ? 'refresh' : 'arrow-down'
    }

    const touchEnd = () => {
      if (!isTouchable.value) return
      isEnd.value = true
      if (distance.value >= MAX_DISTANCE * 0.2) {
        refreshStatus.value = 'loading'
        distance.value = MAX_DISTANCE * 0.3
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
      freshNode,
      touchStart,
      touchMove,
      touchEnd,
      iconName,
      iconClass,
      controlStyle,
      isSuccess,
    }
  },
})
</script>

<style lang="less">
@import '../icon/icon';
@import './pullRefresh';
</style>
