<template>
  <div
    ref="root"
    :class="classes(n(), n('$--box'), [optionSelected, n('--selected-color')], [disabled, n('--disabled')])"
    :style="{
      color: optionSelected ? focusColor : undefined,
    }"
    :tabindex="disabled ? undefined : '-1'"
    v-ripple="{ disabled }"
    v-hover:desktop="handleHovering"
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
import VarCheckbox from '../checkbox'
import Ripple from '../ripple'
import Hover from '../hover'
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'
import { defineComponent, computed, ref, watch } from 'vue'
import { useSelect, OptionProvider } from './provide'
import { createNamespace, MaybeVNode } from '../utils/components'
import { props } from './props'
import { preventDefault, isFunction } from '@varlet/shared'
import { useEventListener } from '@varlet/use'

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
    const labelVNode = computed<any>(() =>
      isFunction(props.label) ? props.label(props.option ?? {}, optionSelected.value) : props.label
    )
    const value = computed<any>(() => props.value)
    const { select, bindSelect } = useSelect()
    const { multiple, focusColor, onSelect, computeLabel } = select
    const { hovering, handleHovering } = useHoverOverlay()

    const optionProvider: OptionProvider = {
      label: labelVNode,
      value,
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
