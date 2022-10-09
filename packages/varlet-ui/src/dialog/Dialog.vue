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
      :class="classes('var--box', n(), dialogClass)"
      :style="{ ...dialogStyle, width: toSizeUnit(dialogWidth) }"
      v-bind="$attrs"
    >
      <div :class="n('title')">
        <slot name="title">{{ dt(title, pack.dialogTitle) }}</slot>
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
          {{ dt(cancelButtonText, pack.dialogCancelButtonText) }}
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
          {{ dt(confirmButtonText, pack.dialogConfirmButtonText) }}
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
import { dt } from '../utils/shared'
import { pack } from '../locale'
import type { Ref } from 'vue'
import { call, createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'

const { n, classes } = createNamespace('dialog')

export default defineComponent({
  name: 'VarDialog',
  components: {
    VarPopup,
    VarButton,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const popupShow: Ref<boolean> = ref(false)
    const popupCloseOnClickOverlay: Ref<boolean> = ref(false)

    const done = () => call(props['onUpdate:show'], false)

    const handleClickOverlay = () => {
      const { closeOnClickOverlay, onClickOverlay, onBeforeClose } = props

      call(onClickOverlay)

      if (!closeOnClickOverlay) {
        return
      }

      if (onBeforeClose != null) {
        onBeforeClose('close', done)
        return
      }

      call(props['onUpdate:show'], false)
    }

    const confirm = () => {
      const { onBeforeClose, onConfirm } = props

      call(onConfirm)

      if (onBeforeClose != null) {
        onBeforeClose('confirm', done)
        return
      }

      call(props['onUpdate:show'], false)
    }

    const cancel = () => {
      const { onBeforeClose, onCancel } = props

      call(onCancel)

      if (onBeforeClose != null) {
        onBeforeClose('cancel', done)
        return
      }

      call(props['onUpdate:show'], false)
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
      n,
      classes,
      pack,
      dt,
      popupShow,
      popupCloseOnClickOverlay,
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
