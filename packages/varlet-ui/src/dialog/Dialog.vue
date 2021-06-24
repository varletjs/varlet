<template>
  <var-popup
    class="var-dialog__popup-radius"
    var-dialog-cover
    :show="popupShow"
    :overlay="overlay"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    :lock-scroll="lockScroll"
    :close-on-click-overlay="popupCloseOnClickOverlay"
    :teleport="teleport"
    @open="onOpen"
    @close="onClose"
    @closed="onClosed"
    @opened="onOpened"
    @route-change="onRouteChange"
    @click-overlay="handleClickOverlay"
  >
    <div class="var--box var-dialog" v-bind="$attrs">
      <div class="var-dialog__title">
        <slot name="title">{{ dt(title, pack.dialogTitle) }}</slot>
      </div>
      <div class="var-dialog__message" :style="{ textAlign: messageAlign }">
        <slot>
          {{ message }}
        </slot>
      </div>
      <div class="var-dialog__actions">
        <var-button
          class="var-dialog__button var-dialog__cancel-button"
          var-dialog-cover
          text
          :text-color="cancelButtonTextColor"
          :color="cancelButtonColor"
          v-if="cancelButton"
          @click="cancel"
        >
          {{ dt(cancelButtonText, pack.dialogCancelButtonText) }}
        </var-button>
        <var-button
          class="var-dialog__button var-dialog__confirm-button"
          var-dialog-cover
          text
          :text-color="confirmButtonTextColor"
          :color="confirmButtonColor"
          v-if="confirmButton"
          @click="confirm"
        >
          {{ dt(confirmButtonText, pack.dialogConfirmButtonText) }}
        </var-button>
      </div>
    </div>
  </var-popup>
</template>

<script lang="ts">
import Popup from '../popup'
import Button from '../button'
import { props } from './props'
import { defineComponent, ref, Ref, watch } from 'vue'
import { dt } from '../utils/shared'
import { pack } from '../locale'

export default defineComponent({
  name: 'VarDialog',
  components: {
    [Popup.name]: Popup,
    [Button.name]: Button,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const popupShow: Ref<boolean> = ref(false)
    const popupCloseOnClickOverlay: Ref<boolean> = ref(false)

    const done = () => props['onUpdate:show']?.(false)

    const handleClickOverlay = () => {
      const { closeOnClickOverlay, onClickOverlay, onBeforeClose } = props

      onClickOverlay?.()

      if (!closeOnClickOverlay) {
        return
      }

      if (onBeforeClose != null) {
        onBeforeClose('close', done)
        return
      }

      props['onUpdate:show']?.(false)
    }

    const confirm = () => {
      const { onBeforeClose, onConfirm } = props

      onConfirm?.()

      if (onBeforeClose != null) {
        onBeforeClose('confirm', done)
        return
      }

      props['onUpdate:show']?.(false)
    }

    const cancel = () => {
      const { onBeforeClose, onCancel } = props

      onCancel?.()

      if (onBeforeClose != null) {
        onBeforeClose('cancel', done)
        return
      }

      props['onUpdate:show']?.(false)
    }

    watch(
      () => props.show,
      (newValue) => {
        popupShow.value = newValue
      },
      { immediate: true }
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
      { immediate: true }
    )

    return {
      pack,
      dt,
      popupShow,
      popupCloseOnClickOverlay,
      handleClickOverlay,
      confirm,
      cancel,
    }
  },
})
</script>

<style lang="less">
@import '../popup/popup';
@import '../button/button';
@import './dialog';
</style>
