import Icon from '../icon'
import Ripple from '../ripple'
import { computed, defineComponent, h, watch } from 'vue'
import type { ComputedRef } from 'vue'
import { isFunction, isPlainObject, isString } from '../utils/shared'
import { props } from './props'
import '../styles/common.less'
import './index.less'
import { useCollapseMenu } from './provide'
import type { CollapseMenuItemProvider } from './provide'

export default defineComponent({
  name: 'VarCollapseMenuItem',
  directives: { Ripple },
  props,
  setup(props, { slots }) {
    const { bindCollapseMenu, collapseMenu } = useCollapseMenu()
    const itemKey: ComputedRef<string | number> = computed(() => props.itemKey)
    const collapseMenuItemProvider: CollapseMenuItemProvider = {
      itemKey,
    }

    const renderIcon = () => {
      if (slots.icon) {
        return slots.icon()
      }
      if (isFunction(props.icon)) {
        return props.icon(h)
      }
      if (isPlainObject(props.icon)) {
        return <Icon {...props.icon}></Icon>
      }
      if (isString(props.icon)) {
        return <Icon name={props.icon} />
      }
    }
    const renderLabel = () => {
      if (slots.label) {
        return slots.label()
      }
      if (isFunction(props.label)) {
        return props.label(h)
      }
      return <div>{props.label}</div>
    }
    const handleClick = () => {
      if (props.disabled) {
        return
      }
      collapseMenu?.updateItem(props.itemKey)
    }

    bindCollapseMenu?.(collapseMenuItemProvider)

    const calcColor = () => {
      if (props.itemKey === collapseMenu?.selectedKeys.value) {
        return collapseMenu.activeColor as string
      }
      return ''
    }

    return () => {
      const prefix = 'var-collapse-menu-item'
      const { disabled, itemKey } = props
      return (
        <div
          onClick={handleClick}
          class={[prefix, { [prefix + '__disabled']: disabled }]}
          style={{ color: calcColor() }}
          v-ripple={{ disabled }}
          key={itemKey}
        >
          <div class={prefix + '__indent'} style={{ paddingLeft: '20px' }}></div>{' '}
          {
            // 李航宇就靠你了
          }
          <div class={prefix + '__icon'}>{renderIcon()}</div>
          <div class={prefix + '__label'}>{renderLabel()}</div>
        </div>
      )
    }
  },
})
