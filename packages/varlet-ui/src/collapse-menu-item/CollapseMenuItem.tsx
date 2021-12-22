import Icon from '../icon'
import Ripple from '../ripple'
import { computed, defineComponent } from 'vue'
import type { ComputedRef } from 'vue'
import { isFunction, isPlainObject, isString } from '../utils/shared'
import { toPxNum } from '../utils/elements'
import { useCollapseMenu } from './provide'
import type { CollapseMenuItemProvider } from './provide'
import { props } from './props'
import '../styles/common.less'
import './CollapseMenuItem.less'

export default defineComponent({
  name: 'VarCollapseMenuItem',
  directives: { Ripple },
  props,
  setup(props, { slots }) {
    const { bindCollapseMenu, collapseMenu } = useCollapseMenu()
    const name: ComputedRef<string | number> = computed(() => props.name)
    const collapseMenuItemProvider: CollapseMenuItemProvider = {
      name,
    }

    bindCollapseMenu(collapseMenuItemProvider)

    const handleClick = () => {
      if (props.disabled) {
        return
      }
      collapseMenu.updateItem(props.name)
    }

    const getColor = () => {
      if (collapseMenu.selectedKeys.value.includes(props.name)) {
        return collapseMenu.activeColor
      }
    }

    return () => {
      const prefix = 'var-collapse-menu-item'
      const { disabled, name, icon, label, indent } = props

      const renderIcon = () => {
        if (slots.icon) {
          return slots.icon()
        }

        if (isFunction(icon)) {
          return icon()
        }

        if (isPlainObject(icon)) {
          return <Icon {...icon} />
        }

        if (isString(icon)) {
          return <Icon name={icon} />
        }
      }

      const renderLabel = () => {
        if (slots.label) {
          return slots.label()
        }

        if (isFunction(label)) {
          return label()
        }

        return <div>{label}</div>
      }

      const getWidth = () => {
        if (typeof indent === 'number') return `${indent}px`
        return toPxNum(indent)
      }

      return (
        <div
          onClick={handleClick}
          class={[prefix, { [prefix + '__disabled']: disabled }]}
          style={{ color: getColor() }}
          v-ripple={{ disabled }}
          key={name}
        >
          <div style={{ width: getWidth() }} />
          <div class={prefix + '__icon'}>{renderIcon()}</div>
          <div class={prefix + '__label'}>{renderLabel()}</div>
        </div>
      )
    }
  },
})
