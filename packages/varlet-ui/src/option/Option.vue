<template>
  <div
    ref="root"
    v-ripple="{ disabled: disabled || !ripple }"
    v-hover:desktop="handleHovering"
    :class="classes(n(), n('$--box'), [optionSelected, n('--selected-color')], [disabled, n('--disabled')])"
    :style="{
      color: optionSelected ? focusColor : undefined,
    }"
    :tabindex="disabled ? undefined : '-1'"
    @focus="isFocusing = true"
    @blur="isFocusing = false"
    @click="handleClick"
  >
    <div
      :class="classes(n('cover'), [optionSelected, n('--selected-background')])"
      :style="{
        background: optionSelected ? focusColor : undefined,
      }"
    ></div>

    <var-checkbox
      v-if="multiple"
      ref="checkbox"
      v-model="optionSelected"
      :checked-color="focusColor"
      :disabled="disabled"
      @click.stop
      @change="handleSelect"
    />

    <slot :selected="optionSelected">
      <div :class="classes(n('text'), n('$--ellipsis'))">
        <maybe-v-node :is="labelVNode" />
      </div>
    </slot>

    <var-hover-overlay :hovering="hovering && !disabled" :focusing="isFocusing && !disabled" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { isFunction, preventDefault } from '@varlet/shared'
import { useEventListener } from '@varlet/use'
import VarCheckbox from '../checkbox'
import Hover from '../hover'
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'
import Ripple from '../ripple'
import { createNamespace, MaybeVNode } from '../utils/components'
import { props } from './props'
import { OptionProvider, useSelect } from './provide'

const { name, n, classes } = createNamespace('option')

export default defineComponent({
  name,
  directives: { Ripple, Hover },
  components: {
    VarCheckbox,
    VarHoverOverlay,
    MaybeVNode,
  },
  props,
  setup(props) {
    const root = ref<HTMLElement>()
    const isFocusing = ref(false)
    const optionSelected = ref(false)
    const selected = computed(() => optionSelected.value)
    const value = computed<any>(() => props.value)
    const disabled = computed(() => props.disabled)
    const ripple = computed(() => props.ripple)
    const { select, bindSelect } = useSelect()
    const { multiple, focusColor, onSelect, computeLabel } = select
    const { hovering, handleHovering } = useHoverOverlay()

    const labelVNode = computed(() =>
      isFunction(props.label)
        ? props.label(
            props.option ?? {
              label: props.label,
              value: props.value,
              disabled: props.disabled,
            },
            optionSelected.value,
          )
        : props.label,
    )

    const optionProvider: OptionProvider = {
      label: labelVNode,
      value,
      disabled,
      ripple,
      selected,
      sync,
    }

    watch([() => props.label, () => props.value], computeLabel)

    bindSelect(optionProvider)

    useEventListener(() => window, 'keydown', handleKeydown)
    useEventListener(() => window, 'keyup', handleKeyup)

    function handleClick() {
      if (props.disabled) {
        return
      }

      handleSelect()
    }

    function handleKeydown(event: KeyboardEvent) {
      if (!isFocusing.value) {
        return
      }

      if (event.key === ' ' || event.key === 'Enter') {
        preventDefault(event)
      }

      if (event.key === 'Enter') {
        root.value!.click()
      }
    }

    function handleKeyup(event: KeyboardEvent) {
      if (!isFocusing.value) {
        return
      }

      if (event.key === ' ') {
        preventDefault(event)
        root.value!.click()
      }
    }

    function handleSelect() {
      if (multiple.value) {
        optionSelected.value = !optionSelected.value
      }

      onSelect(optionProvider)
    }

    function sync(checked: boolean) {
      optionSelected.value = checked
    }

    return {
      root,
      optionSelected,
      multiple,
      focusColor,
      hovering,
      isFocusing,
      labelVNode,
      n,
      classes,
      handleHovering,
      handleClick,
      handleSelect,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../ripple/ripple';
@import '../hover-overlay/hoverOverlay';
@import '../checkbox/checkbox';
@import './option';
</style>
