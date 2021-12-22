import { computed, defineComponent, nextTick } from 'vue'
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
    const expandedKeys: ComputedRef<Array<string | number>> = computed(() => props.expandedKeys)
    const multiple: ComputedRef<boolean> = computed(() => props.multiple)
    const accordion: ComputedRef<boolean> = computed(() => props.accordion)

    // 选中状态
    const updateItem = (value: string | number) => {
      const values: Array<string | number> = []
      Object.values(selectedKeys.value).forEach((key) => values.push(key))

      if (props.multiple) {
        values.includes(value) ? removeItem(values, value) : values.push(value)
      } else {
        values[0] = value
      }
      props['onUpdate:selectedKeys']?.(values)
    }
    // 展开状态
    // 在menu/group里判断 前者需要多call一次 updateGroup 不需要在group中取accordion
    const updateGroup = (value: string | number) => {
      if (accordion.value) {
        collapseMenuGroup.forEach((group) => {
          if (group.name.value === value) return
          group.expanded.value = false
        })
      }
    }

    // 第一次加载展开
    const handleExpand = () => {
      collapseMenuGroup.forEach((group) => {
        if (expandedKeys.value.includes(group.name.value)) {
          group.expanded.value = true
        }
      })
    }
    nextTick(() => {
      handleExpand()
    })

    const collapseMenuProvider: CollapseMenuProvider = {
      selectedKeys,
      activeColor: props.activeColor,
      multiple,
      accordion,
      updateItem,
      updateGroup,
    }

    bindCollapseMenuItem(collapseMenuProvider)
    bindCollapseMenuGroup(collapseMenuProvider)

    return () => <div class={'var-collapse-menu'}>{slots.default?.()}</div>
  },
})
