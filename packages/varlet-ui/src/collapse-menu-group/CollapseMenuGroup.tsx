import VarIcon from '../icon'
import Ripple from '../ripple'
import { defineComponent, ref, watch, nextTick, computed, onMounted } from 'vue'
import { props } from './props'
import { isFunction, isPlainObject, isString } from '../utils/shared'
import type { Ref, ComputedRef } from 'vue'
import {
  CollpaseMenuGroupProvider,
  useCollapseMenu,
  useCollapseMenuGroupChildren,
  useCollapseMenuGroupParent,
  collapseMenuGroupParentProvider,
  collapseMenuGroupChildrenProvider,
} from './provide'

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
    const contentHeight: Ref<number> = ref(0)
    let updateParentContentHeight: any

    const { bindCollapseMenu, collapseMenu } = useCollapseMenu()

    const handleClick = () => {
      if (props.disabled) return
      expanded.value = !expanded.value

      // TODO 完成其他逻辑
    }

    const extendContent = async () => {
      if (!contentEl.value) return

      contentHeight.value = -1
      show.value = true

      await nextTick()

      contentHeight.value = 0
      const { offsetHeight } = contentEl.value as HTMLDivElement

      requestAnimationFrame(() => {
        contentHeight.value = offsetHeight
      })
    }

    const reduceContent = () => {
      if (!contentEl.value) return

      const { offsetHeight } = contentEl.value as HTMLDivElement
      contentHeight.value = offsetHeight

      requestAnimationFrame(() => {
        contentHeight.value = 0
      })
    }

    const transitionend = () => {
      if (!expanded.value) {
        show.value = false
        contentHeight.value = -1
      }
    }

    watch(expanded, (value) => {
      if (value) {
        extendContent()
        collapseMenu.updateGroup(name.value)
      } else {
        reduceContent()
      }
    })

    const collapseMenuGroup: CollpaseMenuGroupProvider = {
      name,
      expanded,
    }

    bindCollapseMenu(collapseMenuGroup)

    const updateContentHeight = (height: any) => {
      requestAnimationFrame(() => {
        contentHeight.value += height
      })
    }

    watch(contentHeight, (newValue, oldValue) => {
      if (updateParentContentHeight) {
        const fixNewValue = newValue === -1 ? 0 : newValue
        const fixOldValue = oldValue === -1 ? 0 : oldValue
        updateParentContentHeight(fixNewValue - fixOldValue)
      }
    })

    const groupParentProvider: collapseMenuGroupParentProvider = {
      name,
      updateContentHeight,
    }
    const groupChildrenProvider: collapseMenuGroupChildrenProvider = {
      name,
    }

    const { bindGroupParent, groupParent } = useCollapseMenuGroupParent()
    const { bindGroupChildren } = useCollapseMenuGroupChildren()

    bindGroupChildren && bindGroupChildren(groupParentProvider)
    bindGroupParent && bindGroupParent(groupChildrenProvider)

    const init = () => {
      if (groupParent) {
        updateParentContentHeight = groupParent.updateContentHeight
      }
    }

    onMounted(init)

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
            <div class={prefix + '-header__icon-l'}>{renderIcon()}</div>
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
          <div
            ref={contentEl}
            v-show={show.value}
            class={prefix + '-content'}
            style={{ height: contentHeight.value >= 0 ? `${contentHeight.value}px` : '' }}
            onTransitionend={transitionend}
          >
            <div class={prefix + '__wrap'}>{slots.default && slots.default()}</div>
          </div>
        </div>
      )
    }
  },
})
