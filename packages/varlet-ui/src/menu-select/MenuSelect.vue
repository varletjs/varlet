<template>
  <var-menu
    ref="menu"
    :class="n()"
    :disabled="disabled"
    :trigger="trigger"
    :reference="reference"
    :placement="placement"
    :strategy="strategy"
    :offset-x="offsetX"
    :offset-y="offsetY"
    :teleport="teleport"
    :same-width="sameWidth"
    :elevation="elevation"
    :default-style="false"
    :popover-class="popoverClass"
    :close-on-click-reference="closeOnClickReference"
    v-model:show="show"
    @open="onOpen"
    @opened="onOpened"
    @close="onClose"
    @closed="onClosed"
    @click-outside="onClickOutside"
  >
    <slot />

    <template #menu>
      <div :class="classes(n('menu'), formatElevation(elevation, 3), [scrollable, n('--scrollable')])">
        <slot name="options" />
      </div>
    </template>
  </var-menu>
</template>

<script lang="ts">
import VarMenu from '../menu'
import { defineComponent, computed, ref } from 'vue'
import { props } from './props'
import { createNamespace, formatElevation } from '../utils/components'
import { useMenuOptions, type MenuSelectProvider } from './provide'
import { useSelectController } from '../select/useSelectController'
import { type MenuOptionProvider } from '../menu-option/provide'
import { call } from '@varlet/shared'
import { useVModel } from '@varlet/use'

const { name, n, classes } = createNamespace('menu-select')

export default defineComponent({
  name,
  components: { VarMenu },
  props,
  setup(props) {
    const menu = ref<null | typeof VarMenu>(null)
    const show = useVModel(props, 'show')
    const { menuOptions, length, bindMenuOptions } = useMenuOptions()
    const { computeLabel, getSelectedValue } = useSelectController({
      modelValue: () => props.modelValue,
      multiple: () => props.multiple,
      optionProviders: () => menuOptions,
      optionProvidersLength: () => length.value,
    })

    const menuSelectProvider: MenuSelectProvider = {
      size: computed(() => props.size),
      multiple: computed(() => props.multiple),
      computeLabel,
      onSelect,
    }

    bindMenuOptions(menuSelectProvider)

    function onSelect(option: MenuOptionProvider) {
      const { multiple, closeOnSelect } = props

      call(props['onUpdate:modelValue'], getSelectedValue(option))

      if (!multiple && closeOnSelect) {
        show.value = false
      }
    }

    // expose
    function open() {
      menu.value?.open()
    }

    // expose
    function close() {
      menu.value?.close()
    }

    // expose
    function resize() {
      menu.value?.resize()
    }

    return {
      show,
      menu,
      n,
      classes,
      formatElevation,
      open,
      close,
      resize,
    }
  },
})
</script>

<style lang="less">
@import '../styles/elevation';
@import '../styles/common';
@import '../menu/menu';
@import './menuSelect';
</style>
