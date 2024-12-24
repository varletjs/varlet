<template>
  <var-menu
    ref="menu"
    tabindex="-1"
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
    :close-on-key-escape="false"
    v-model:show="show"
    @open="onOpen"
    @opened="onOpened"
    @close="onClose"
    @closed="onClosed"
    @click-outside="onClickOutside"
  >
    <slot />

    <template #menu>
      <div
        ref="menuOptionsRef"
        :class="classes(n('menu'), formatElevation(elevation, 3), [scrollable, n('--scrollable')])"
      >
        <template v-if="options.length">
          <template v-for="option in options" :key="option[valueKey]">
            <var-menu-children
              v-if="option[childrenKey]"
              :option="option"
              :options="option[childrenKey]"
              :highlight-options="highlightOptions"
              :disabled="option.disabled"
            />

            <var-menu-option
              v-else
              :label="option[labelKey]"
              :value="option[valueKey]"
              :option="option"
              :ripple="option.ripple"
              :disabled="option.disabled"
            />
          </template>
        </template>

        <slot name="options" />
      </div>
    </template>
  </var-menu>
</template>

<script lang="ts">
import VarMenu from '../menu'
import VarMenuOption from '../menu-option'
import VarMenuChildren from './MenuChildren.vue'
import { defineComponent, computed, ref } from 'vue'
import { props, MenuSelectOption } from './props'
import { createNamespace, formatElevation } from '../utils/components'
import { useMenuOptions, type MenuSelectProvider } from './provide'
import { useSelectController } from '../select/useSelectController'
import { call, preventDefault } from '@varlet/shared'
import { useEventListener, useVModel } from '@varlet/use'
import { focusChildElementByKey } from '../utils/elements'
import { type MenuOptionProvider } from '../menu-option/provide'
import { type Reference } from '../menu/usePopover'

const { name, n, classes } = createNamespace('menu-select')

export default defineComponent({
  name,
  components: { VarMenu, VarMenuOption, VarMenuChildren },
  props,
  setup(props) {
    const menu = ref<null | typeof VarMenu>(null)
    const menuOptionsRef = ref<null | HTMLElement>(null)
    const show = useVModel(props, 'show')

    const { menuOptions, length, bindMenuOptions } = useMenuOptions()

    const { computeLabel, getSelectedValue } = useSelectController({
      modelValue: () => props.modelValue,
      multiple: () => props.multiple,
      optionProviders: () => menuOptions,
      optionProvidersLength: () => length.value,
      optionIsIndeterminate(optionProvider) {
        const option = flattenOptions.value.find((option) => option.value === optionProvider.value.value)
        if (!option) {
          return false
        }

        const children = getOptionChildren(option) ?? []
        const selectedChildren = children.filter((option) => props.modelValue.includes(option.value))

        return selectedChildren.length > 0 && selectedChildren.length < children.length
      },
    })

    const flattenOptions = computed(() => flatten(props.options))

    const highlightOptions = computed(() => {
      const { multiple, modelValue } = props

      if (multiple) {
        return []
      }

      const selectedOption = flattenOptions.value.find((option) => option.value === modelValue)
      const highlightOptions: MenuSelectOption[] = []
      let parent = selectedOption?._parent

      while (parent) {
        highlightOptions.push(parent)
        parent = parent._parent
      }

      return highlightOptions
    })

    const menuSelectProvider: MenuSelectProvider = {
      size: computed(() => props.size),
      multiple: computed(() => props.multiple),
      computeLabel,
      onSelect,
    }

    bindMenuOptions(menuSelectProvider)

    useEventListener(() => window, 'keydown', handleKeydown)

    function getOptionChildren(option: MenuSelectOption) {
      return option[props.childrenKey] as MenuSelectOption[] | undefined
    }

    function flatten(options: MenuSelectOption[]) {
      const flattenOptions: MenuSelectOption[] = []

      baseFlatten(options)

      function baseFlatten(options: MenuSelectOption[], parent?: MenuSelectOption) {
        options.forEach((option) => {
          if (parent) {
            option._parent = parent
          }

          flattenOptions.push(option)

          const children = getOptionChildren(option)
          if (children) {
            baseFlatten(children, option)
          }
        })
      }

      return flattenOptions
    }

    function onSelect(optionProvider: MenuOptionProvider) {
      const { multiple, closeOnSelect } = props
      const { value, selected } = optionProvider
      const option = flattenOptions.value.find((option) => option.value === value.value)

      if (option) {
        const children = flatten(getOptionChildren(option) ?? [])
        const relationChildrenValues = children.map((option) => option.value)

        if (multiple && selected.value) {
          menuOptions.forEach((optionProvider) => {
            if (relationChildrenValues.includes(optionProvider.value.value)) {
              optionProvider.sync(true, false)
            }
          })

          broadcastParentOption(option)
        }

        if (multiple && !selected.value) {
          menuOptions.forEach((optionProvider) => {
            if (relationChildrenValues.includes(optionProvider.value.value)) {
              optionProvider.sync(false, false)
            }
          })

          broadcastParentOption(option)
        }
      }

      const selectedValue = getSelectedValue(optionProvider)
      call(props['onUpdate:modelValue'], selectedValue)
      call(props.onSelect, selectedValue)

      if (!multiple && closeOnSelect) {
        menu.value!.$el.focus()
        close()
      }
    }

    function broadcastParentOption(option: MenuSelectOption) {
      let parentOption = option._parent

      while (parentOption) {
        const parentOptionProvider = menuOptions.find(
          (optionProvider) => optionProvider.value.value === parentOption!.value
        )!

        const parentOptionChildren = getOptionChildren(parentOption)!

        const isAllChildrenUnselected = parentOptionChildren.every((option) => {
          const optionProvider = menuOptions.find((optionProvider) => optionProvider.value.value === option.value)!
          return !optionProvider.selected.value
        })

        const isAllChildrenSelected = parentOptionChildren.every((option) => {
          const optionProvider = menuOptions.find((optionProvider) => optionProvider.value.value === option.value)!
          return optionProvider.selected.value
        })

        if (isAllChildrenUnselected) {
          parentOptionProvider.sync(false, false)
        } else if (isAllChildrenSelected) {
          parentOptionProvider.sync(true, false)
        } else {
          parentOptionProvider.sync(false, true)
        }

        parentOption = parentOption._parent
      }
    }

    function handleKeydown(event: KeyboardEvent) {
      if (props.disabled || !show.value) {
        return
      }

      const { key } = event

      if (['Escape', 'ArrowDown', 'ArrowUp'].includes(key)) {
        preventDefault(event)
      }

      if (key === 'Escape') {
        menu.value!.$el.focus()
        close()
        call(props.onKeyEscape)
        return
      }

      if (key === 'ArrowDown' || key === 'ArrowUp') {
        focusChildElementByKey(menu.value!.$el, menuOptionsRef.value!, key)
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

    // expose
    function setReference(reference: Reference) {
      menu.value?.setReference(reference)
    }

    return {
      show,
      menu,
      menuOptionsRef,
      highlightOptions,
      n,
      classes,
      formatElevation,
      open,
      close,
      resize,
      setReference,
    }
  },
})
</script>

<style lang="less">
@import '../styles/elevation';
@import '../styles/common';
@import '../menu/menu';
@import '../menu-option/menuOption';
@import './menuSelect';
</style>
