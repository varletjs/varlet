import { computed, defineComponent, getCurrentInstance, toRaw } from 'vue'
import { props } from './props'
import { useCollapseMenuItem } from './provide'
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

    const selectedKeys: ComputedRef<null | string | number | Array<string | number>> = computed(
      () => props.selectedKeys
    )
    const multiple: ComputedRef<boolean> = computed(() => props.multiple)

    const updateItem = (value: string | number) => {
      if (props.multiple) {
        // TODO copy values to array
        const values: Array<number | string> = toRaw(props.selectedKeys) as Array<number | string>
        values.includes(value) ? removeItem(values, value) : values.push(value)

        props['onUpdate:selectedKeys']?.([...values])
      } else {
        props['onUpdate:selectedKeys']?.(value)
      }
    }

    const collapseMenuProvider: CollapseMenuProvider = {
      selectedKeys,
      activeColor: props.activeColor,
      multiple,
      updateItem,
    }
    bindCollapseMenuItem(collapseMenuProvider)

    return () => <div class={'var-collapse-menu'}>{slots.default && slots.default()}</div>
  },
})
