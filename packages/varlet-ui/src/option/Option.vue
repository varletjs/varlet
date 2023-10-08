<template>
  <div
    :class="classes(n(), n('$--box'), [optionSelected, n('--selected-color')], [disabled, n('--disabled')])"
    :style="{
      color: optionSelected ? focusColor : undefined,
    }"
    v-ripple="{ disabled }"
    v-hover:desktop="handleHovering"
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

    <slot>
      <div :class="classes(n('text'), n('$--ellipsis'))">
        {{ label }}
      </div>
    </slot>

    <var-hover-overlay :hovering="hovering && !disabled" />
  </div>
</template>

<script lang="ts">
import VarCheckbox from '../checkbox'
import Ripple from '../ripple'
import Hover from '../hover'
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'
import { defineComponent, computed, ref, watch } from 'vue'
import { useSelect, OptionProvider } from './provide'
import { createNamespace } from '../utils/components'
import { props } from './props'

const { name, n, classes } = createNamespace('option')

export default defineComponent({
  name,
  directives: { Ripple, Hover },
  components: {
    VarCheckbox,
    VarHoverOverlay,
  },
  props,
  setup(props) {
    const optionSelected = ref(false)
    const selected = computed(() => optionSelected.value)
    const label = computed<any>(() => props.label)
    const value = computed<any>(() => props.value)
    const { select, bindSelect } = useSelect()
    const { multiple, focusColor, onSelect, computeLabel } = select
    const { hovering, handleHovering } = useHoverOverlay()

    const optionProvider: OptionProvider = {
      label,
      value,
      selected,
      sync,
    }

    watch([() => props.label, () => props.value], computeLabel)

    bindSelect(optionProvider)

    function handleClick() {
      if (props.disabled) {
        return
      }

      handleSelect()
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
      optionSelected,
      multiple,
      focusColor,
      hovering,
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
@import '../checkbox/checkbox';
@import '../select/select';
@import './option';
</style>
