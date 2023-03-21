import Button from '../button'
import Icon from '../icon'
import { defineComponent, Ref, ref, Teleport, Transition, watch } from 'vue'
import { useClickOutside, useVModel } from '@varlet/use'
import { call, createNamespace, flatFragment, useTeleport } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { toNumber } from '@varlet/shared'
import { props } from './props'

import '../styles/common.less'
import '../styles/elevation.less'
import '../ripple/ripple.less'
import '../icon/icon.less'
import '../loading/loading.less'
import '../button/button.less'
import './fab.less'

const { classes, n } = createNamespace('fab')

export default defineComponent({
  name: 'VarFab',
  inheritAttrs: false,
  props,
  setup(props, { slots, attrs }) {
    const isActive = useVModel(props, 'active', (event, value) => call(props['onUpdate:active'], value))
    const host: Ref<null | HTMLElement> = ref(null)
    const { disabled } = useTeleport()

    const handleClick = (e: Event, value: boolean, childrenLength: number) => {
      e.stopPropagation()

      if (props.trigger !== 'click' || props.disabled) {
        return
      }

      if (childrenLength === 0) {
        call(props.onClick, isActive.value, e)
        return
      }

      isActive.value = value
      call(props.onClick, isActive.value, e)
      call(isActive.value ? props.onOpen : props.onClose)
    }

    const handleMouse = (value: boolean, childrenLength: number) => {
      if (props.trigger !== 'hover' || props.disabled || childrenLength === 0) {
        return
      }

      isActive.value = value
      call(isActive.value ? props.onOpen : props.onClose)
    }

    const handleClickOutside = () => {
      if (props.trigger !== 'click' || props.disabled) {
        return
      }

      if (isActive.value !== false) {
        isActive.value = false
        call(props.onClose)
      }
    }

    const renderTrigger = () => {
      if (slots.trigger) {
        return props.show ? slots.trigger({ active: isActive.value }) : null
      }

      return (
        <Button
          v-show={props.show}
          var-fab-cover
          class={n('trigger')}
          type={props.type}
          color={props.color}
          disabled={props.disabled}
          round
        >
          <Icon
            var-fab-cover
            class={classes([isActive.value, n('trigger-active-icon'), n('trigger-inactive-icon')])}
            name={isActive.value ? props.activeIcon : props.inactiveIcon}
            size={isActive.value ? props.inactiveIconSize : props.activeIconSize}
            transition={200}
            animationClass={n('--trigger-icon-animation')}
          />
        </Button>
      )
    }

    const renderFab = () => {
      const children = flatFragment(slots.default?.() ?? [])

      return (
        <div
          class={classes(n(), n(`--position-${props.position}`), n(`--direction-${props.direction}`), [
            props.fixed,
            n('--fixed'),
            n('--absolute'),
          ])}
          style={{
            zIndex: toNumber(props.zIndex),
            top: toSizeUnit(props.top),
            bottom: toSizeUnit(props.bottom),
            left: toSizeUnit(props.left),
            right: toSizeUnit(props.right),
          }}
          ref={host}
          onClick={(e) => handleClick(e, !isActive.value, children.length)}
          onMouseleave={() => handleMouse(false, children.length)}
          onMouseenter={() => handleMouse(true, children.length)}
          {...attrs}
        >
          <Transition name={n(`--active-transition`)}>{renderTrigger()}</Transition>

          <Transition
            name={n(`--actions-transition-${props.direction}`)}
            onAfterEnter={props.onOpened}
            onAfterLeave={props.onClosed}
          >
            <div
              class={n('actions')}
              v-show={props.show && isActive.value && children.length}
              onClick={(e) => e.stopPropagation()}
            >
              {children.map((child) => {
                return <div class={n('action')}>{child}</div>
              })}
            </div>
          </Transition>
        </div>
      )
    }

    watch(
      () => props.trigger,
      () => {
        isActive.value = false
      }
    )

    watch(
      () => props.disabled,
      () => {
        isActive.value = false
      }
    )

    useClickOutside(host, 'click', handleClickOutside)

    return () => {
      const { teleport } = props

      if (teleport) {
        return (
          <Teleport to={teleport} disabled={disabled.value}>
            {renderFab()}
          </Teleport>
        )
      }

      return renderFab()
    }
  },
})
