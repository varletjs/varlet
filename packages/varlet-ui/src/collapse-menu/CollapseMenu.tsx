import { computed, defineComponent } from 'vue'
import { props } from './props'
import { useCollapseMenuItem, useCollapseMenuGroup } from './provide'
import type { CollapseMenuProvider } from './provide'
import type { ComputedRef } from 'vue'
import { removeItem } from '../utils/shared'
import '../styles/common.less'
import './collapseMenu.less'

export default defineComponent({
  name: 'VarCollapseMenu',
  props,
  setup(props, { slots }) {
    const { collapseMenuItem, bindCollapseMenuItem } = useCollapseMenuItem()
    const { collapseMenuGroup, bindCollapseMenuGroup } = useCollapseMenuGroup()

    const selectedKeys: ComputedRef<Array<string | number>> = computed(() => props.selectedKeys)
    const multiple: ComputedRef<boolean> = computed(() => props.multiple)
    const accordion: ComputedRef<boolean> = computed(() => props.accordion)

    const updateItem = (value: string | number) => {
      const values: Array<string | number> = []
      Object.keys(selectedKeys.value).forEach((key) => values.push(key))

      if (props.multiple) {
        values.includes(value) ? removeItem(values, value) : values.push(value)
      } else {
        values[0] = value
      }
      props['onUpdate:selectedKeys']?.(values)
    }

    const collapseMenuProvider: CollapseMenuProvider = {
      selectedKeys,
      activeColor: props.activeColor,
      multiple,
      accordion,
      updateItem,
    }

    bindCollapseMenuItem(collapseMenuProvider)
    bindCollapseMenuGroup(collapseMenuProvider)

    return () => <div class={'var-collapse-menu'}>{slots.default && slots.default()}</div>
  },
})
