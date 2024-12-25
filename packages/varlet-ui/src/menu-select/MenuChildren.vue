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
      :highlight="highlightOptions.includes(option)"
      @key-arrow-x="handleArrowRight"
      @mouseenter="handleTriggerMouseenter"
    />

    <template #menu v-if="options.length">
      <div ref="menuOptions">
        <template v-for="option in options" :key="option[valueKey]">
          <var-menu-children
            v-if="option[childrenKey]"
            ref="menuChildren"
            :parent-show="show"
            :option="option"
            :options="option[childrenKey]"
            :highlight-options="highlightOptions"
            :disabled="option.disabled || !show"
            @key-arrow-x="handleArrowLeft"
            @trigger-mouseenter="allowChildrenClose(option)"
          />

          <var-menu-option
            v-else
            :label="option[labelKey]"
            :value="option[valueKey]"
            :option="option"
            :ripple="option.ripple"
            :disabled="option.disabled || !show"
            @keyboard-trigger="handleArrowLeft"
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
    onKeyboardTrigger: defineListenerProp<(trigger: 'ArrowLeft' | 'ArrowRight') => void>(),
    onTriggerMouseenter: defineListenerProp<() => void>(),
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

    async function handleArrowRight(key: 'ArrowRight' | 'ArrowLeft') {
      call(props.onKeyboardTrigger, key)

      if (key !== 'ArrowRight') {
        return
      }

      menu.value?.open()
      await raf()
      focusChildElementByKey(menu.value!.$el, menuOptions.value!, 'ArrowDown')
    }

    function handleArrowLeft(key: 'ArrowRight' | 'ArrowLeft') {
      if (key !== 'ArrowLeft') {
        return
      }

      menu.value?.close()
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

    function handleTriggerMouseenter() {
      call(props.onTriggerMouseenter)
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
      handleTriggerMouseenter,
      allowClose,
      allowChildrenClose,
    }
  },
})
</script>
