<template>
  <var-menu
    ref="menu"
    trigger="hover"
    placement="right-start"
    cascade-optimization
    var-menu-children-cover
    :class="n()"
    :disabled="disabled"
    :teleport="false"
    :close-on-click-reference="false"
    v-model:show="show"
  >
    <var-menu-option
      ref="trigger"
      children-trigger
      :label="option[labelKey]"
      :value="option[valueKey]"
      :option="option"
      :ripple="option.ripple"
      :disabled="option.disabled"
      :highlight="highlightOptions.some((_option) => _option.value === option.value)"
      @key-arrow-x="handleArrowRight"
      @mouseenter="handleMouseenter"
    />

    <template #menu v-if="options.length">
      <div ref="menuOptions">
        <template v-for="menuOption in options" :key="menuOption[valueKey]">
          <var-menu-children
            v-if="menuOption[childrenKey]"
            ref="menuChildren"
            :parent-show="show"
            :option="menuOption"
            :options="menuOption[childrenKey]"
            :highlight-options="highlightOptions"
            :disabled="menuOption.disabled"
            @key-arrow-x="handleArrowLeft"
            @key-arrow-right-open="allowChildrenClose(menuOption)"
            @mouseenter="allowChildrenClose(menuOption)"
          />
          <var-menu-option
            v-else
            :label="menuOption[labelKey]"
            :value="menuOption[valueKey]"
            :option="menuOption"
            :ripple="menuOption.ripple"
            :disabled="menuOption.disabled"
            @key-arrow-x="handleArrowLeft"
            @mouseenter="allowChildrenClose()"
          />
        </template>
      </div>
    </template>
  </var-menu>
</template>

<script lang="ts">
import VarMenu from '../menu/Menu.vue'
import VarMenuOption from '../menu-option/MenuOption.vue'
import { type PropType, defineComponent, ref, watch } from 'vue'
import { createNamespace, defineListenerProp, pickProps } from '../utils/components'
import { type MenuSelectOption, props as menuSelectProps } from './props'
import { focusChildElementByKey } from '../utils/elements'
import { call, raf } from '@varlet/shared'
import { type MenuOptionKeyArrowX } from '../menu-option/props'

const { name, n } = createNamespace('menu-children')

export default defineComponent({
  name,
  components: {
    VarMenu,
    VarMenuOption,
  },
  props: {
    parentShow: Boolean,
    disabled: Boolean,
    option: {
      type: Object as PropType<MenuSelectOption>,
      required: true,
    },
    highlightOptions: pickProps(menuSelectProps, 'options'),
    onKeyArrowX: defineListenerProp<(trigger: 'ArrowLeft' | 'ArrowRight') => void>(),
    onKeyArrowRightOpen: defineListenerProp<() => void>(),
    onMouseenter: defineListenerProp<() => void>(),
    ...pickProps(menuSelectProps, ['options', 'valueKey', 'labelKey', 'childrenKey']),
  },
  setup(props) {
    const show = ref(false)
    const menu = ref<InstanceType<typeof VarMenu>>()
    const trigger = ref<InstanceType<typeof VarMenuOption>>()
    const menuOptions = ref<HTMLElement>()
    const menuChildren = ref<{ option: MenuSelectOption; allowClose(): void; close(): void }[]>()

    watch(
      () => props.parentShow,
      (value) => {
        if (!value) {
          show.value = false
        }
      },
      { immediate: true }
    )

    async function handleArrowRight(key: MenuOptionKeyArrowX) {
      call(props.onKeyArrowX, key)

      if (key !== 'ArrowRight') {
        return
      }

      call(props.onKeyArrowRightOpen)
      menu.value?.open()
      await raf()
      focusChildElementByKey(menu.value!.$el, menuOptions.value!, 'ArrowDown')
    }

    function handleArrowLeft(key: MenuOptionKeyArrowX) {
      if (key !== 'ArrowLeft') {
        return
      }

      allowClose()
      close()
      trigger.value?.$el.focus()
    }

    function close() {
      menu.value?.close()
    }

    function allowClose() {
      menu.value?.allowClose()
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

    function handleMouseenter() {
      call(props.onMouseenter)
    }

    return {
      show,
      menu,
      trigger,
      menuOptions,
      menuChildren,
      n,
      close,
      handleArrowLeft,
      handleArrowRight,
      handleMouseenter,
      allowClose,
      allowChildrenClose,
    }
  },
})
</script>
