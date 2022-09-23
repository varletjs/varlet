<template>
  <div :class="n()" :style="{ pointerEvents: isForbidClick ? 'auto' : 'none', zIndex }" v-show="show">
    <div
      :class="
        classes(
          n('wrapper'),
          n(`wrapper-${position}`),
          'var-elevation--4',
          [vertical, n('vertical')],
          [type && SNACKBAR_TYPE.includes(type), n(`wrapper-${type}`)]
        )
      "
      :style="{ zIndex }"
    >
      <div :class="[n('content'), contentClass]">
        <slot>{{ content }}</slot>
      </div>
      <div :class="n('action')">
        <var-icon v-if="iconName" :name="iconName" />
        <var-loading
          v-if="type === 'loading'"
          :type="loadingType"
          :size="loadingSize"
          :color="loadingColor"
          :radius="loadingRadius"
        />
        <slot name="action" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, onMounted, computed } from 'vue'
import VarLoading from '../loading'
import VarIcon from '../icon'
import { useZIndex } from '../context/zIndex'
import { props } from './props'
import { useLock } from '../context/lock'
import { SNACKBAR_TYPE } from './index'
import type { Ref, ComputedRef } from 'vue'
import type { SnackbarType } from './index'
import { createNamespace } from '../utils/components'

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
    const timer: Ref = ref(null)
    const { zIndex } = useZIndex(() => props.show, 1)

    useLock(
      () => props.show,
      () => props.lockScroll
    )

    const isForbidClick: ComputedRef<boolean> = computed(() => props.type === 'loading' || props.forbidClick)

    const iconName: ComputedRef<string> = computed(() => {
      if (!props.type) return ''

      return ICON_TYPE_DICT[props.type]
    })

    const updateAfterDuration = () => {
      timer.value = setTimeout(() => {
        props.type !== 'loading' && props['onUpdate:show']?.(false)
      }, props.duration)
    }

    watch(
      () => props.show,
      (show) => {
        if (show) {
          props.onOpen?.()
          updateAfterDuration()
        } else if (show === false) {
          clearTimeout(timer.value)
          props.onClose?.()
        }
      }
    )

    watch(
      () => props._update,
      () => {
        clearTimeout(timer.value)
        updateAfterDuration()
      }
    )

    onMounted(() => {
      if (props.show) {
        props.onOpen?.()
        updateAfterDuration()
      }
    })

    return {
      SNACKBAR_TYPE,
      n,
      classes,
      zIndex,
      iconName,
      isForbidClick,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../loading/loading';
@import '../button/button';
@import '../icon/icon';
@import './snackbar';
</style>
