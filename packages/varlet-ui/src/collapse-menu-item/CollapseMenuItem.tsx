import Icon from '../icon'
import Ripple from '../ripple'
import { computed, defineComponent } from 'vue'
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
    const name: ComputedRef<string | number> = computed(() => props.name)
    const collapseMenuItemProvider: CollapseMenuItemProvider = {
      name,
    }

    bindCollapseMenu(collapseMenuItemProvider)

    const handleClick = () => {
      if (props.disabled) {
        return
      }
      collapseMenu?.updateItem(props.name)
    }

    const { multiple } = collapseMenu

    const getColor = () => {
      if (collapseMenu?.selectedKeys.value.includes(props.name)) {
        return collapseMenu.activeColor
      }
    }

    return () => {
      const prefix = 'var-collapse-menu-item'
      const { disabled, name, icon, label } = props

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

      return (
        <div
          onClick={handleClick}
          class={[prefix, { [prefix + '__disabled']: disabled }]}
          style={{ color: getColor() }}
          v-ripple={{ disabled }}
          key={name}
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
