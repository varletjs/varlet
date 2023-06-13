<template>
  <div
    :class="classes(n(), n('$--box'), [optionSelected, n('--selected-color')])"
    :style="{
      color: optionSelected ? focusColor : undefined,
    }"
    v-ripple
    @click="handleClick"
  >
    <div
      :class="classes(n('cover'), [optionSelected, n('--selected-background')])"
      :style="{
        background: optionSelected ? focusColor : undefined,
      }"
    ></div>
    <var-checkbox
      ref="checkbox"
      :checked-color="focusColor"
      v-if="multiple"
      v-model="optionSelected"
      @click.stop
      @change="handleSelect"
    />

    <div :class="classes(n('text'), n('$--ellipsis'))">
      <slot>
        {{ label }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import VarCheckbox from '../checkbox'
import Ripple from '../ripple'
import { defineComponent, computed, ref, watch } from 'vue'
import { useSelect } from './provide'
import { createNamespace } from '../utils/components'
import { props } from './props'
import type { Ref, ComputedRef } from 'vue'
import type { OptionProvider } from './provide'

const { n, classes } = createNamespace('option')

export default defineComponent({
  name: 'VarOption',
  directives: { Ripple },
  components: {
    VarCheckbox,
  },
  props,
  setup(props) {
    const optionSelected: Ref<boolean> = ref(false)
    const selected: ComputedRef<boolean> = computed(() => optionSelected.value)
    const label: ComputedRef = computed(() => props.label)
    const value: ComputedRef = computed(() => props.value)
    const { select, bindSelect } = useSelect()
    const { multiple, focusColor, onSelect, computeLabel } = select

    const handleClick = () => {
      optionSelected.value = !optionSelected.value
      onSelect(optionProvider)
    }

    const handleSelect = () => onSelect(optionProvider)

    const sync = (checked: boolean) => {
      optionSelected.value = checked
    }

    const optionProvider: OptionProvider = {
      label,
      value,
      selected,
      sync,
    }

    watch([() => props.label, () => props.value], computeLabel)

    bindSelect(optionProvider)

    return {
      n,
      classes,
      optionSelected,
      multiple,
      focusColor,
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
