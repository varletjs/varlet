<template>
  <div
    ref="root"
    :class="
      classes(n(), n('$--box'), n(`--${size}`), [optionSelected, n('--selected-color')], [disabled, n('--disabled')])
    "
    v-ripple="{ disabled: disabled || !ripple }"
    v-hover:desktop="handleHovering"
    :tabindex="disabled ? undefined : '-1'"
    @click="handleClick"
    @focus="isFocusing = true"
    @blur="isFocusing = false"
  >
    <div :class="classes(n('cover'), [optionSelected, n('--selected-background')])"></div>

    <var-checkbox
      v-if="multiple"
      ref="checkbox"
      v-model="optionSelected"
      :disabled="disabled"
      @click.stop
      @change="handleSelect"
    />

    <slot>
      <div :class="classes(n('text'))">
        <maybe-v-node :class="n('$--ellipsis')" :is="labelVNode" />
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
import { useMenuSelect, type MenuOptionProvider } from './provide'
import { createNamespace, MaybeVNode } from '../utils/components'
import { props } from './props'
import { preventDefault, isFunction } from '@varlet/shared'
import { useEventListener } from '@varlet/use'

const { name, n, classes } = createNamespace('menu-option')

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
    const labelVNode = computed(() =>
      isFunction(props.label)
        ? props.label(
            props.option ?? {
              label: props.label,
              value: props.value,
              disabled: props.disabled,
              ripple: props.ripple,
            },
            optionSelected.value
          )
        : props.label
    )
    const value = computed<any>(() => props.value)
    const { menuSelect, bindMenuSelect } = useMenuSelect()
    const { size, multiple, onSelect, computeLabel } = menuSelect
    const { hovering, handleHovering } = useHoverOverlay()

    const menuOptionProvider: MenuOptionProvider = {
      label: labelVNode,
      value,
      selected,
      sync,
    }

    watch([() => props.label, () => props.value], computeLabel)

    bindMenuSelect(menuOptionProvider)

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

      onSelect(menuOptionProvider)
    }

    function sync(checked: boolean) {
      optionSelected.value = checked
    }

    return {
      root,
      optionSelected,
      size,
      multiple,
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
@import '../checkbox/checkbox';
@import './menuOption';
</style>
