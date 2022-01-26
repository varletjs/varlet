<template>
  <div
    class="var-option var--box"
    :class="[optionSelected ? 'var-option--selected-color' : null]"
    :style="{
      width: wrapWidth,
      color: optionSelected ? focusColor : undefined,
    }"
    v-ripple
    @click="handleClick"
  >
    <div
      class="var-option__cover"
      :class="[optionSelected ? 'var-option--selected-background' : null]"
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

    <div class="var-option__text var--ellipsis">
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
import { props } from './props'
import type { Ref, ComputedRef } from 'vue'
import type { OptionProvider } from './provide'

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
    const { wrapWidth, multiple, focusColor, onSelect } = select

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

    watch(
      [() => props.label, () => props.value],
      () => {
        if (props.label == null && props.value == null) {
          throw Error("Props label and value can't both be undefined\n")
        }
      },
      { immediate: true }
    )

    bindSelect(optionProvider)

    return {
      optionSelected,
      wrapWidth,
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
