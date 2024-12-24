<template>
  <var-menu
    ref="menu"
    trigger="hover"
    placement="right-start"
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
      @keyboard-trigger="open"
    />

    <template #menu v-if="options.length">
      <div ref="menuOptions">
        <template v-for="option in options" :key="option[valueKey]">
          <var-menu-children
            v-if="option[childrenKey]"
            :parent-show="parentShow"
            :option="option"
            :options="option[childrenKey]"
            :disabled="option.disabled || !show"
            @keyboard-trigger="close"
          />

          <var-menu-option
            v-else
            :label="option[labelKey]"
            :value="option[valueKey]"
            :option="option"
            :ripple="option.ripple"
            :disabled="option.disabled || !show"
            @keyboard-trigger="close"
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
    ...pickProps(menuSelectProps, ['options', 'valueKey', 'labelKey', 'childrenKey']),
  },
  setup(props) {
    const show = ref(false)
    const menu = ref<InstanceType<typeof VarMenu>>()
    const trigger = ref<InstanceType<typeof VarMenuOption>>()
    const menuOptions = ref<HTMLElement>()

    watch(
      () => props.parentShow,
      (value) => {
        if (!value) {
          show.value = false
        }
      }
    )

    async function open(key: 'ArrowRight' | 'ArrowLeft') {
      call(props.onKeyboardTrigger, key)

      if (key !== 'ArrowRight') {
        return
      }

      menu.value?.open()
      await raf()
      focusChildElementByKey(menu.value!.$el, menuOptions.value!, 'ArrowDown')
    }

    function close(key: 'ArrowRight' | 'ArrowLeft') {
      if (key !== 'ArrowLeft') {
        return
      }

      menu.value?.close()
      trigger.value?.$el.focus()
    }

    return {
      show,
      menu,
      trigger,
      menuOptions,
      n,
      open,
      close,
    }
  },
})
</script>
