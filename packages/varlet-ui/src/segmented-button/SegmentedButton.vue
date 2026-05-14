<template>
  <button
    ref="segmentedButton"
    v-ripple="{ disabled: formReadonly || readonly || formDisabled || disabled || !ripple }"
    v-hover:desktop="handleHovering"
    :role="role"
    :aria-checked="checked"
    :aria-disabled="formDisabled || disabled || formReadonly || readonly"
    :disabled="formDisabled || disabled"
    :tabindex="formDisabled || disabled ? undefined : '0'"
    :class="
      classes(
        n(),
        n('$--box'),
        n(`--${size}`),
        [checked, n('--checked'), n('--unchecked')],
        [formDisabled || disabled, n('--disabled')],
      )
    "
    type="button"
    @click="handleClick"
    @focus="isFocusing = true"
    @blur="isFocusing = false"
  >
    <div :class="n('content')">
      <template v-if="checkmark && checked">
        <slot name="checkmark">
          <var-icon :class="n('icon')" var-segmented-button-cover name="check" />
        </slot>
      </template>

      <slot />
    </div>

    <var-hover-overlay
      :hovering="!formDisabled && !disabled && hovering"
      :focusing="!formDisabled && !disabled && isFocusing"
    />
  </button>
</template>

<script lang="ts">
import { call, isArray } from '@varlet/shared'
import { computed, defineComponent, ref } from 'vue'
import { useForm } from '../form/provide'
import Hover from '../hover'
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'
import VarIcon from '../icon'
import Ripple from '../ripple'
import { createNamespace } from '../utils/components'
import { props } from './props'
import { type SegmentedButtonProvider, useSegmentedButtons } from './provide'

const { name, n, classes } = createNamespace('segmented-button')

export default defineComponent({
  name,
  directives: { Ripple, Hover },
  components: { VarHoverOverlay, VarIcon },
  props,
  setup(props) {
    const segmentedButton = ref<HTMLButtonElement>()
    const isFocusing = ref(false)
    const checked = ref(false)
    const { segmentedButtons, bindSegmentedButtons } = useSegmentedButtons()
    const { hovering, handleHovering } = useHoverOverlay()
    const { form } = useForm()
    const role = computed(() => (segmentedButtons.multiple.value ? 'checkbox' : 'radio'))
    const size = computed(() => segmentedButtons.size.value)

    const segmentedButtonProvider: SegmentedButtonProvider = {
      checked: computed(() => checked.value),
      disabled: computed(() => form?.disabled.value || props.disabled),
      isFocusing: computed(() => isFocusing.value),
      sync,
      toggle,
      move,
    }

    bindSegmentedButtons(segmentedButtonProvider)

    function handleClick(event: Event) {
      if (form?.disabled.value || props.disabled) {
        return
      }

      call(props.onClick, event)

      toggle()
    }

    function toggle() {
      if (form?.disabled.value || props.disabled) {
        return
      }

      if (form?.readonly.value || props.readonly) {
        return
      }

      segmentedButtons.onClick(props.checkedValue, checked.value)
    }

    function sync(v: any) {
      const nextChecked = isArray(v) ? v.includes(props.checkedValue) : v === props.checkedValue
      checked.value = nextChecked
      return nextChecked
    }

    function move(selectWhenFocused: boolean) {
      if (form?.disabled.value || props.disabled) {
        return
      }

      segmentedButton.value!.focus()

      if (selectWhenFocused && !form?.readonly.value && !props.readonly) {
        segmentedButton.value!.click()
      }
    }

    return {
      segmentedButton,
      isFocusing,
      checked,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      hovering,
      size,
      role,
      n,
      classes,
      handleHovering,
      handleClick,
      toggle,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../ripple/ripple';
@import '../hover-overlay/hoverOverlay';
@import './segmentedButton';
</style>
