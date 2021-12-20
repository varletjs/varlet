import { computed, defineComponent, ref } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import { props } from './props'
import { useCollapseMenuItem } from './provide'
import type { CollapseMenuProvider } from './provide'
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

    const updateItem = (value: string | number) => {
      props['onUpdate:selectedKeys']?.(value)
    }

    const collapseMenuProvider: CollapseMenuProvider = {
      selectedKeys,
      activeColor: props.activeColor,
      updateItem,
    }
    bindCollapseMenuItem(collapseMenuProvider)

    return () => <div class={'var-collapse-menu'}>{slots.default && slots.default()}</div>
  },
})
