<template>
  <var-popup
    :class="n('popup')"
    var-dialog-cover
    :show="popupShow"
    :overlay="overlay"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    :lock-scroll="lockScroll"
    :close-on-click-overlay="popupCloseOnClickOverlay"
    :close-on-key-escape="false"
    :teleport="teleport"
    @open="onOpen"
    @close="onClose"
    @closed="onClosed"
    @opened="onOpened"
    @key-escape="handleKeyEscape"
    @route-change="onRouteChange"
    @click-overlay="handleClickOverlay"
  >
    <div
      :class="classes(n('$--box'), n(), dialogClass)"
      :style="{ width: toSizeUnit(width), ...dialogStyle }"
      v-bind="$attrs"
    >
      <div :class="n('title')">
        <slot name="title">{{ title ?? (pt ? pt : t)('dialogTitle') }}</slot>
      </div>
      <div :class="n('message')" :style="{ textAlign: messageAlign }">
        <slot>
          {{ message }}
        </slot>
      </div>

      <slot name="actions" :slot-class="n('actions')" :cancel="cancel" :confirm="confirm">
        <div :class="n('actions')">
          <var-button
            v-if="cancelButton"
            :class="classes(n('button'), n('cancel-button'))"
            var-dialog-cover
            text
            :text-color="cancelButtonTextColor"
            :color="cancelButtonColor"
            :loading="cancelButtonLoading"
            :disabled="cancelButtonDisabled"
            @click="cancel"
          >
            {{ cancelButtonText ?? (pt ? pt : t)('dialogCancelButtonText') }}
          </var-button>
          <var-button
            v-if="confirmButton"
            :class="classes(n('button'), n('confirm-button'))"
            var-dialog-cover
            text
            :text-color="confirmButtonTextColor"
            :color="confirmButtonColor"
            :loading="confirmButtonLoading"
            :disabled="confirmButtonDisabled"
            @click="confirm"
          >
            {{ confirmButtonText ?? (pt ? pt : t)('dialogConfirmButtonText') }}
          </var-button>
        </div>
      </slot>
    </div>
  </var-popup>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { call } from '@varlet/shared'
import { useVModel } from '@varlet/use'
import VarButton from '../button'
import { t } from '../locale'
import { injectLocaleProvider } from '../locale-provider/provide'
import VarPopup from '../popup'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props } from './props'

const { name, n, classes } = createNamespace('dialog')

export default defineComponent({
  name,
  components: {
    VarPopup,
    VarButton,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const { t: pt } = injectLocaleProvider()

    const popupShow = ref(false)
    const popupCloseOnClickOverlay = ref(false)
    const confirmButtonLoading = useVModel(props, 'confirmButtonLoading')
    const cancelButtonLoading = useVModel(props, 'cancelButtonLoading')
    const confirmButtonDisabled = useVModel(props, 'confirmButtonDisabled')
    const cancelButtonDisabled = useVModel(props, 'cancelButtonDisabled')
    const exposedRefs = {
      confirmButtonLoading,
      cancelButtonLoading,
      confirmButtonDisabled,
      cancelButtonDisabled,
    }

    watch(
      () => props.show,
      (newValue) => {
        popupShow.value = newValue
      },
      { immediate: true },
    )

    watch(
      () => props.closeOnClickOverlay,
      (newValue) => {
        if (props.onBeforeClose != null) {
          popupCloseOnClickOverlay.value = false
          return
        }

        popupCloseOnClickOverlay.value = newValue
      },
      { immediate: true },
    )

    function done() {
      return call(props['onUpdate:show'], false)
    }

    function handleClickOverlay() {
      const { closeOnClickOverlay, onClickOverlay, onBeforeClose } = props

      call(onClickOverlay)

      if (!closeOnClickOverlay) {
        return
      }

      if (onBeforeClose != null) {
        call(onBeforeClose, 'close', done, exposedRefs)
        return
      }

      call(props['onUpdate:show'], false)
    }

    function confirm() {
      const { onBeforeClose, onConfirm } = props

      call(onConfirm)

      if (onBeforeClose != null) {
        call(onBeforeClose, 'confirm', done, exposedRefs)
        return
      }

      call(props['onUpdate:show'], false)
    }

    function cancel() {
      const { onBeforeClose, onCancel } = props

      call(onCancel)

      if (onBeforeClose != null) {
        call(onBeforeClose, 'cancel', done, exposedRefs)
        return
      }

      call(props['onUpdate:show'], false)
    }

    function handleKeyEscape() {
      call(props.onKeyEscape)

      if (!props.closeOnKeyEscape) {
        return
      }

      cancel()
    }

    return {
      popupShow,
      popupCloseOnClickOverlay,
      confirmButtonLoading,
      cancelButtonLoading,
      confirmButtonDisabled,
      cancelButtonDisabled,
      pt,
      t,
      n,
      classes,
      handleClickOverlay,
      confirm,
      cancel,
      toSizeUnit,
      handleKeyEscape,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../popup/popup';
@import '../button/button';
@import './dialog';
</style>
