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
    :teleport="teleport"
    @open="onOpen"
    @close="onClose"
    @closed="onClosed"
    @opened="onOpened"
    @route-change="onRouteChange"
    @click-overlay="handleClickOverlay"
  >
    <div
      :class="classes(n('$--box'), n(), dialogClass)"
      :style="{ width: toSizeUnit(width), ...dialogStyle }"
      v-bind="$attrs"
    >
      <div :class="n('title')">
        <slot name="title">{{ title ?? t('dialogTitle') }}</slot>
      </div>
      <div :class="n('message')" :style="{ textAlign: messageAlign }">
        <slot>
          {{ message }}
        </slot>
      </div>
      <div :class="n('actions')">
        <var-button
          :class="classes(n('button'), n('cancel-button'))"
          var-dialog-cover
          text
          :text-color="cancelButtonTextColor"
          :color="cancelButtonColor"
          v-if="cancelButton"
          @click="cancel"
        >
          {{ cancelButtonText ?? t('dialogCancelButtonText') }}
        </var-button>
        <var-button
          :class="classes(n('button'), n('confirm-button'))"
          var-dialog-cover
          text
          :text-color="confirmButtonTextColor"
          :color="confirmButtonColor"
          v-if="confirmButton"
          @click="confirm"
        >
          {{ confirmButtonText ?? t('dialogConfirmButtonText') }}
        </var-button>
      </div>
    </div>
  </var-popup>
</template>

<script lang="ts">
import VarPopup from '../popup'
import VarButton from '../button'
import { props } from './props'
import { defineComponent, ref, watch } from 'vue'
import { t } from '../locale'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { call } from '@varlet/shared'

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
    const popupShow = ref(false)
    const popupCloseOnClickOverlay = ref(false)

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
        call(onBeforeClose, 'close', done)
        return
      }

      call(props['onUpdate:show'], false)
    }

    function confirm() {
      const { onBeforeClose, onConfirm } = props

      call(onConfirm)

      if (onBeforeClose != null) {
        call(onBeforeClose, 'confirm', done)
        return
      }

      call(props['onUpdate:show'], false)
    }

    function cancel() {
      const { onBeforeClose, onCancel } = props

      call(onCancel)

      if (onBeforeClose != null) {
        call(onBeforeClose, 'cancel', done)
        return
      }

      call(props['onUpdate:show'], false)
    }

    return {
      t,
      popupShow,
      popupCloseOnClickOverlay,
      n,
      classes,
      handleClickOverlay,
      confirm,
      cancel,
      toSizeUnit,
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
