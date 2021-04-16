<template>
  <div
    class="var-option var--box"
    :class="[optionSelected ? 'var-option--selected-color' : null]"
    :style="{
      width: wrapWidth,
      color: optionSelected ? focusColor : null,
    }"
    v-ripple
    v-bind="$attrs"
    @click="handleClick"
  >
    <div
      class="var-option__cover"
      :class="[optionSelected ? 'var-option--selected-background' : null]"
      :style="{
        background: optionSelected ? focusColor : null,
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

    <div class="var-option__text">
      <slot>
        {{ label }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import Checkbox from '../checkbox'
import Ripple from '../ripple'
import { defineComponent, computed, ComputedRef, ref, Ref, watch } from 'vue'
import { OptionProvider, useSelect } from './provide'
import { props } from './props'

export default defineComponent({
  name: 'VarOption',
  directives: { Ripple },
  components: {
    [Checkbox.name]: Checkbox,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const optionSelected: Ref<boolean> = ref(false)
    const selected: ComputedRef<boolean> = computed(() => optionSelected.value)
    const label: ComputedRef<any> = computed(() => props.label)
    const value: ComputedRef<any> = computed(() => props.value)
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
        if (props.label == null && props.value === null) {
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
@import '../ripple/ripple';
@import '../checkbox/checkbox';
@import './option';
</style>
