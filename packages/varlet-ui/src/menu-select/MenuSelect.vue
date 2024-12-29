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
        <template v-for="option in options" :key="option[valueKey]">
          <var-menu-children
            ref="menuChildren"
            v-if="option[childrenKey]"
            :parent-show="show"
            :option="option"
            :options="option[childrenKey]"
            :highlight-options="highlightOptions"
            :disabled="option.disabled"
            @key-arrow-right-open="allowChildrenClose(option)"
            @mouseenter="allowChildrenClose(option)"
          />
          <var-menu-option
            v-else
            :label="option[labelKey]"
            :value="option[valueKey]"
            :option="option"
            :ripple="option.ripple"
            :disabled="option.disabled"
            @mouseenter="allowChildrenClose()"
          />
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
    const show = useVModel(props, 'show')
    const menu = ref<InstanceType<typeof VarMenu>>()
    const menuOptionsRef = ref<HTMLElement>()
    const menuChildren = ref<InstanceType<typeof VarMenuChildren>[]>()
    const enhancedOptions = computed(() => enhance(props.options))

    const { menuOptions, length, bindMenuOptions } = useMenuOptions()

    const { computeLabel, getSelectedValue, getOptionProviderKey } = useSelectController({
      modelValue: () => props.modelValue,
      multiple: () => props.multiple,
      optionProviders: () => menuOptions,
      optionProvidersLength: () => length.value,
      optionIsIndeterminate(optionProvider) {
        const enhancedOption = getEnhancedOption(optionProvider.value.value)
        if (!enhancedOption) {
          return false
        }

        const children = (enhancedOption._children ?? []).filter((option) => !option.disabled)
        const selectedChildren = children.filter((option) => props.modelValue.includes(option.value))

        return selectedChildren.length > 0 && selectedChildren.length < children.length
      },
    })

    const highlightOptions = computed(() => {
      const { multiple, modelValue } = props

      if (multiple) {
        return []
      }

      const selectedOption = enhancedOptions.value.find((option) => option.value === modelValue)
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

    function getEnhancedOption(value: any) {
      return enhancedOptions.value.find((option) => option.value === value)
    }

    function getOptionProvider(value: any) {
      return menuOptions.find((optionProvider) => optionProvider.value.value === value)
    }

    function getOptionChildren(option: MenuSelectOption) {
      return option[props.childrenKey] as MenuSelectOption[] | undefined
    }

    function flatten(options: MenuSelectOption[]) {
      const flattenOptions: MenuSelectOption[] = []

      baseFlatten(options)

      function baseFlatten(options: MenuSelectOption[]) {
        options.forEach((option) => {
          flattenOptions.push(option)

          const children = getOptionChildren(option)
          if (children) {
            baseFlatten(children)
          }
        })
      }

      return flattenOptions
    }

    function enhance(options: MenuSelectOption[]) {
      function baseEnhance(options: MenuSelectOption[], parent?: MenuSelectOption) {
        return options.map((option) => {
          option = { ...option, _rawOption: option }

          if (parent) {
            option._parent = parent
          }

          const children = getOptionChildren(option)

          if (children) {
            const enhancedChildren = baseEnhance(children, option)
            option[props.childrenKey] = enhancedChildren
            option._children = flatten(enhancedChildren)
          }

          return option
        })
      }

      return flatten(baseEnhance(options))
    }

    function onSelect(optionProvider: MenuOptionProvider) {
      const { multiple, closeOnSelect } = props
      const { value, label, selected, disabled, ripple } = optionProvider
      const enhancedOption = getEnhancedOption(value.value)

      if (enhancedOption) {
        const childrenValues = (enhancedOption._children ?? [])
          .filter((option) => !option.disabled)
          .map((option) => option.value)

        if (multiple && selected.value) {
          menuOptions.forEach((optionProvider) => {
            if (childrenValues.includes(optionProvider.value.value)) {
              optionProvider.sync(true, false)
            }
          })

          broadcastParentOption(enhancedOption)
        }

        if (multiple && !selected.value) {
          menuOptions.forEach((optionProvider) => {
            if (childrenValues.includes(optionProvider.value.value)) {
              optionProvider.sync(false, false)
            }
          })

          broadcastParentOption(enhancedOption)
        }
      }

      const selectedValue = getSelectedValue(optionProvider)
      const selectedOption: MenuSelectOption = enhancedOption?._rawOption ?? {
        value: value.value,
        label: label.value,
        disabled: disabled.value,
        ripple: ripple.value,
      }

      call(props.onSelect, getOptionProviderKey(optionProvider), selectedOption)
      call(props['onUpdate:modelValue'], selectedValue)

      if (!multiple && closeOnSelect) {
        menu.value!.$el.focus()
        close()
      }
    }

    function broadcastParentOption(enhancedOption: MenuSelectOption) {
      let parentOption = enhancedOption._parent

      while (parentOption) {
        const parentOptionProvider = getOptionProvider(parentOption.value)!
        const parentOptionChildren = getOptionChildren(parentOption)!.filter((option) => !option.disabled)

        const isAllChildrenUnselected = parentOptionChildren.every((option) => {
          const optionProvider = getOptionProvider(option.value)!
          return !optionProvider.selected.value
        })

        const isAllChildrenSelected = parentOptionChildren.every((option) => {
          const optionProvider = getOptionProvider(option.value)!
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

    function allowChildrenClose(option?: MenuSelectOption) {
      menuChildren.value?.forEach((child) => {
        child.allowClose()

        if (option == null) {
          child.close()
          return
        }

        if (child.option.value === option.value) {
          // skip active option
          return
        }

        child.close()
      })
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
      menuChildren,
      highlightOptions,
      n,
      classes,
      allowChildrenClose,
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
