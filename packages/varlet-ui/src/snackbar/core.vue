<template>
  <div :class="n()" :style="{ pointerEvents: isForbidClick ? 'auto' : 'none', zIndex }" v-show="show">
    <div
      :class="
        classes(
          n('wrapper'),
          n(`wrapper-${position}`),
          n('$-elevation--4'),
          [vertical, n('vertical')],
          [type && SNACKBAR_TYPE.includes(type), n(`wrapper-${type}`)]
        )
      "
      :style="{ zIndex }"
    >
      <div :class="[n('content'), contentClass]">
        <slot>{{ content }}</slot>
      </div>
      <div :class="n('icon')" v-if="iconName || type === 'loading' || $slots.icon">
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
      <div :class="n('action')" v-if="$slots.action">
        <slot name="action" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VarLoading from '../loading'
import VarIcon from '../icon'
import { defineComponent, watch, ref, computed, type Ref, type ComputedRef } from 'vue'
import { useZIndex } from '../context/zIndex'
import { props } from './props'
import { useLock } from '../context/lock'
import { SNACKBAR_TYPE, type SnackbarType } from './index'
import { createNamespace } from '../utils/components'
import { onSmartMounted } from '@varlet/use'
import { call } from '@varlet/shared'

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

    const isForbidClick: ComputedRef<boolean> = computed(() => {
      const { type, forbidClick } = props
      return type === 'loading' || forbidClick
    })

    const iconName: ComputedRef<string> = computed(() => (!props.type ? '' : ICON_TYPE_DICT[props.type]))

    function updateAfterDuration() {
      timer.value = setTimeout(() => {
        if (props.type !== 'loading') {
          call(props['onUpdate:show'], false)
        }
      }, props.duration)
    }

    watch(
      () => props.show,
      (show) => {
        if (show) {
          call(props.onOpen)
          updateAfterDuration()
        } else {
          clearTimeout(timer.value)
          call(props.onClose)
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

    onSmartMounted(() => {
      if (props.show) {
        call(props.onOpen)
        updateAfterDuration()
      }
    })

    return {
      SNACKBAR_TYPE,
      zIndex,
      iconName,
      isForbidClick,
      n,
      classes,
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
