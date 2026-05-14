<template>
  <button
    ref="segmentedButton"
    v-ripple="{ disabled: mergedReadonly || mergedDisabled || !enableRipple }"
    v-hover:desktop="handleHovering"
    :role="role"
    :aria-checked="checked"
    :aria-disabled="mergedDisabled || mergedReadonly"
    :disabled="mergedDisabled"
    :tabindex="mergedDisabled ? undefined : '0'"
    :class="
      classes(
        n(),
        n('$--box'),
        n(`--${size}`),
        [checked, n('--checked'), n('--unchecked')],
        [mergedDisabled, n('--disabled')],
      )
    "
    type="button"
    @click="toggle"
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

    <var-hover-overlay :hovering="!mergedDisabled && hovering" :focusing="!mergedDisabled && isFocusing" />
  </button>
</template>

<script lang="ts">
import { call, isArray } from '@varlet/shared'
import { computed, defineComponent, ref } from 'vue'
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
    const mergedDisabled = computed(() => segmentedButtons.disabled.value || props.disabled || false)
    const mergedReadonly = computed(() => segmentedButtons.readonly.value || props.readonly || false)
    const enableRipple = computed(() => props.ripple ?? segmentedButtons.ripple.value ?? true)
    const checkmark = computed(() => props.checkmark ?? segmentedButtons.checkmark.value ?? true)
    const role = computed(() => (segmentedButtons.multiple.value ? 'checkbox' : 'radio'))
    const size = computed(() => segmentedButtons.size.value)

    const segmentedButtonProvider: SegmentedButtonProvider = {
      checked: computed(() => checked.value),
      disabled: mergedDisabled,
      isFocusing: computed(() => isFocusing.value),
      sync,
      toggle,
      move,
    }

    bindSegmentedButtons(segmentedButtonProvider)

    function toggle(event?: Event) {
      if (mergedDisabled.value) {
        return
      }

      if (event) {
        call(props.onClick, event)
      }

      if (mergedReadonly.value) {
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
      if (mergedDisabled.value) {
        return
      }

      segmentedButton.value!.focus()

      if (selectWhenFocused && !mergedReadonly.value) {
        segmentedButton.value!.click()
      }
    }

    return {
      segmentedButton,
      isFocusing,
      checked,
      hovering,
      mergedDisabled,
      mergedReadonly,
      enableRipple,
      checkmark,
      size,
      role,
      n,
      classes,
      handleHovering,
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
