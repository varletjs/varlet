import Button from '../button'
import Icon from '../icon'
import { computed, defineComponent, Ref, ref, Teleport, Transition, watch } from 'vue'
import { useClickOutside } from '@varlet/use'
import { call, createNamespace, flatFragment, useTeleport } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { toNumber } from '@varlet/shared'
import { props } from './props'

import '../styles/common.less'
import './fab.less'

const { classes, n } = createNamespace('fab')

export default defineComponent({
  name: 'VarFab',
  inheritAttrs: false,
  props,
  setup(props, { slots, attrs }) {
    const localActive: Ref<boolean> = ref(false)
    const host: Ref<null | HTMLElement> = ref(null)
    const { disabled } = useTeleport()

    const isActive = computed({
      get(): boolean {
        return localActive.value
      },
      set(value: boolean) {
        localActive.value = value
        call(props['onUpdate:active'], value)
      },
    })

    const handleClick = (e: Event, value: boolean) => {
      e.stopPropagation()

      if (props.trigger !== 'click' || props.disabled) {
        return
      }

      isActive.value = value
      call(isActive.value ? props.onOpen : props.onClose)
    }

    const handleMouse = (value: boolean) => {
      if (props.trigger !== 'hover' || props.disabled) {
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

    const renderFab = () => {
      const children = flatFragment(slots.default?.())

      return (
        <div
          class={classes(n(), n(`--position-${props.position}`), n(`--direction-${props.direction}`))}
          style={{
            zIndex: toNumber(props.zIndex),
            top: toSizeUnit(props.top),
            bottom: toSizeUnit(props.bottom),
            left: toSizeUnit(props.left),
            right: toSizeUnit(props.right),
          }}
          ref={host}
          onClick={(e) => handleClick(e, !isActive.value)}
          onMouseleave={() => handleMouse(false)}
          onMouseenter={() => handleMouse(true)}
          {...attrs}
        >
          <Transition name={n(`--active-transition`)}>
            {slots.trigger ? (
              slots.trigger?.()
            ) : (
              <Button
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
            )}
          </Transition>

          <Transition
            name={n(`--actions-transition-${props.direction}`)}
            onAfterEnter={props.onOpened}
            onAfterLeave={props.onClosed}
          >
            <div class={n('actions')} v-show={isActive.value && children.length} onClick={(e) => e.stopPropagation()}>
              {children.map((child) => {
                return <div class={n('action')}>{child}</div>
              })}
            </div>
          </Transition>
        </div>
      )
    }

    watch(
      () => props.active,
      (value) => {
        localActive.value = value
      },
      { immediate: true }
    )

    watch(
      () => props.trigger,
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
