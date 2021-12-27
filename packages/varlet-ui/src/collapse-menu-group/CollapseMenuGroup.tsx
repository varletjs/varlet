import VarIcon from '../icon'
import Ripple from '../ripple'
import { defineComponent, ref, watch, nextTick, computed } from 'vue'
import { props } from './props'
import { isFunction, isPlainObject, isString } from '../utils/shared'
import type { Ref, ComputedRef } from 'vue'
import { CollpaseMenuGroupProvider, useCollapseMenu } from './provide'

import '../icon/icon.less'
import '../styles/common.less'
import '../ripple/ripple.less'
import './collapseMenuGroup.less'

export default defineComponent({
  name: 'VarCollapseMenuGroup',
  components: {
    VarIcon,
  },
  directives: { Ripple },
  props,
  setup(props, { slots }) {
    // TODO var-collapse-menu-item disabled 状态传递
    const contentEl: Ref<HTMLDivElement | null> = ref(null)
    const expanded: Ref<boolean> = ref(props.status === 'open')
    const show: Ref<boolean> = ref(props.status === 'open')
    const name: ComputedRef<string | number> = computed(() => props.name)

    const { bindCollapseMenu, collapseMenu } = useCollapseMenu()

    const handleClick = () => {
      if (props.disabled) return
      expanded.value = !expanded.value

      // TODO 完成其他逻辑
    }

    const openPanel = async () => {
      if (!contentEl.value) return
      ;(contentEl.value as HTMLDivElement).style.height = ''
      show.value = true
      await nextTick()

      const { offsetHeight } = contentEl.value as HTMLDivElement
      ;(contentEl.value as HTMLDivElement).style.height = 0 + 'px'

      requestAnimationFrame(() => {
        ;(contentEl.value as HTMLDivElement).style.height = offsetHeight + 'px'
      })
    }

    const closePanel = () => {
      if (!contentEl.value) return
      const { offsetHeight } = contentEl.value as HTMLDivElement
      ;(contentEl.value as HTMLDivElement).style.height = offsetHeight + 'px'

      requestAnimationFrame(() => {
        ;(contentEl.value as HTMLDivElement).style.height = 0 + 'px'
      })
    }

    const transitionend = () => {
      if (!expanded.value) {
        show.value = false
        ;(contentEl.value as HTMLDivElement).style.height = ''
      }
    }

    watch(expanded, (value) => {
      if (value) {
        openPanel()
        collapseMenu.updateGroup(name.value)
      } else {
        closePanel()
      }
    })

    const collapseMenuGroup: CollpaseMenuGroupProvider = {
      name,
      expanded,
    }

    bindCollapseMenu(collapseMenuGroup)

    return () => {
      const prefix = 'var-collapse-menu-group'
      const { title, icon, disabled } = props
      const { activeColor } = collapseMenu

      const renderIcon = () => {
        if (slots.icon) {
          return slots.icon()
        }

        if (isFunction(icon)) {
          return icon()
        }

        if (isPlainObject(icon)) {
          return <VarIcon {...icon} />
        }

        if (isString(icon)) {
          return <VarIcon name={icon} />
        }
      }

      return (
        <div class={[prefix, { [prefix + '__disable']: disabled }]}>
          <div
            v-ripple={disabled}
            class={[prefix + '-header']}
            style={{ color: expanded.value ? activeColor : '' }}
            onClick={handleClick}
          >
            <div class={prefix + '-header__icon-l'}>{renderIcon()} </div>
            <div class={prefix + '-header__title'}>{title}</div>
            <div class={prefix + '-header__icon'}>
              <var-icon
                name="menu-down"
                transition={250}
                class={[
                  [prefix + '-header__icon'],
                  { [prefix + '-header__open']: expanded.value },
                  { [prefix + '-header__disable']: disabled },
                ]}
              />
            </div>
          </div>
          <div ref={contentEl} v-show={show.value} class={prefix + '-content'} onTransitionend={transitionend}>
            <div class={prefix + '__wrap'}>{slots.default && slots.default()}</div>
          </div>
        </div>
      )
    }
  },
})
