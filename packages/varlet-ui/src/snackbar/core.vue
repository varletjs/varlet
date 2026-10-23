<template>
  <div v-show="show" :class="n()" :style="{ pointerEvents: isForbidClick ? 'auto' : 'none', zIndex }">
    <div
      :class="
        classes(
          n('wrapper'),
          n(`wrapper-${position}`),
          formatElevation(elevation, 4),
          [vertical, n('vertical')],
          [showProgress, n('wrapper--progress')],
          [type && SNACKBAR_TYPE.includes(type), n(`wrapper-${type}`)],
        )
      "
      :style="{ zIndex }"
    >
      <div :class="[n('content'), contentClass]">
        <slot>{{ content }}</slot>
      </div>
      <div v-if="iconName || type === 'loading' || $slots.icon" :class="n('icon')">
        <var-icon v-if="iconName" :name="iconName" />
        <var-loading
          v-if="type === 'loading'"
          :type="loadingType"
          :size="loadingSize"
          :color="loadingColor"
          :radius="loadingRadius"
        />
        <slot name="icon" />
      </div>
      <div v-if="$slots.action" :class="n('action')">
        <slot name="action" />
      </div>
      <div v-if="showProgress" :key="countdown?.id" :class="n('progress')" aria-hidden="true">
        <div :class="n('progress-bar')" :style="progressStyle" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { call } from '@varlet/shared'
import { onSmartMounted } from '@varlet/use'
import { computed, defineComponent, onUnmounted, shallowRef, watch, type ComputedRef } from 'vue'
import { useLock } from '../context/lock'
import { useZIndex } from '../context/zIndex'
import VarIcon from '../icon'
import VarLoading from '../loading'
import { createNamespace, formatElevation } from '../utils/components'
import { SNACKBAR_TYPE, type SnackbarType } from './index'
import { props } from './props'

const { n, classes } = createNamespace('snackbar')

const ICON_TYPE_DICT: Record<SnackbarType, string> = {
  success: 'checkbox-marked-circle',
  warning: 'warning',
  info: 'information',
  error: 'error',
  loading: '',
}

export default defineComponent({
  name: 'VarSnackbarCore',
  components: {
    VarLoading,
    VarIcon,
  },
  props,
  setup(props) {
    let timer: ReturnType<typeof setTimeout> | undefined
    let countdownId = 0
    const countdown = shallowRef<{ id: number; duration: number; startedAt: number }>()
    const { zIndex } = useZIndex(() => props.show, 1)

    useLock(
      () => props.show,
      () => props.lockScroll,
    )

    const isForbidClick: ComputedRef<boolean> = computed(() => {
      const { type, forbidClick } = props
      return type === 'loading' || forbidClick
    })

    const iconName: ComputedRef<string> = computed(() => (!props.type ? '' : ICON_TYPE_DICT[props.type]))

    const showProgress = computed(
      () =>
        props.progress &&
        countdown.value !== undefined &&
        countdown.value.duration > 0 &&
        Number.isFinite(countdown.value.duration),
    )

    const progressStyle = computed(() => {
      if (!props.progress || !countdown.value) {
        return
      }

      const { duration, startedAt } = countdown.value

      return {
        animationDuration: `${duration}ms`,
        animationDelay: `${-Math.max(0, Date.now() - startedAt)}ms`,
      }
    })

    function clearCountdown() {
      clearTimeout(timer)
      timer = undefined
      countdown.value = undefined
    }

    function updateAfterDuration() {
      clearCountdown()

      if (!props.show || props.type === 'loading') {
        return
      }

      countdown.value = { id: countdownId++, duration: props.duration, startedAt: Date.now() }
      timer = setTimeout(() => {
        clearCountdown()
        call(props['onUpdate:show'], false)
      }, props.duration)
    }

    watch(
      () => props.show,
      (show) => {
        if (show) {
          call(props.onOpen)
        } else {
          call(props.onClose)
        }
      },
    )

    watch([() => props.show, () => props.type === 'loading', () => props._update], updateAfterDuration)

    onSmartMounted(() => {
      if (props.show) {
        call(props.onOpen)
        updateAfterDuration()
      }
    })

    onUnmounted(clearCountdown)

    return {
      SNACKBAR_TYPE,
      zIndex,
      iconName,
      isForbidClick,
      countdown,
      showProgress,
      progressStyle,
      n,
      classes,
      formatElevation,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../loading/loading';
@import '../icon/icon';
@import './snackbar';
</style>
