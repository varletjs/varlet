import Button from '../button'
import Icon from '../icon'
import Drag from '../drag'
import { defineComponent, Ref, ref, Transition, watch } from 'vue'
import { useClickOutside } from '@varlet/use'
import { call, createNamespace, flatFragment, useVModel } from '../utils/components'
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
    const isActive = useVModel(props, 'active')
    const host: Ref<null | HTMLElement> = ref(null)
    const dragRef: Ref<InstanceType<typeof Drag> | null> = ref(null)

    const handleClick = (e: Event, value: boolean, childrenLength: number) => {
      e.stopPropagation()

      if (props.trigger !== 'click' || props.disabled) {
        return
      }

      if (childrenLength === 0) {
        call(props.onClick, isActive.value, e)
        return
      }

      // avoid trigger open function after dragging
      if (dragRef.value && dragRef.value.dragging) {
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
          elevation={props.elevation}
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
      const {
        top,
        left,
        right,
        bottom,
        position,
        drag,
        disabled,
        teleport,
        zIndex,
        direction,
        safeArea,
        fixed,
        show,
        onOpened,
        onClosed,
      } = props
      const children = flatFragment(call(slots.default) ?? [])

      // absolute positioning prohibited from dragging
      return (
        <Drag
          ref={dragRef}
          class={classes(n(`--position-${position}`), [!fixed, n('--absolute')])}
          teleport={teleport}
          disabled={!drag || disabled || !fixed}
          style={{
            top: toSizeUnit(top),
            bottom: toSizeUnit(bottom),
            left: toSizeUnit(left),
            right: toSizeUnit(right),
          }}
        >
          <div
            class={classes(n(), n(`--direction-${direction}`), [safeArea, n('--safe-area')])}
            style={{
              zIndex: toNumber(zIndex),
            }}
            ref={host}
            onClick={(e) => handleClick(e, !isActive.value, children.length)}
            onMouseleave={() => handleMouse(false, children.length)}
            onMouseenter={() => handleMouse(true, children.length)}
            {...attrs}
          >
            <Transition name={n(`--active-transition`)}>{renderTrigger()}</Transition>

            <Transition name={n(`--actions-transition-${direction}`)} onAfterEnter={onOpened} onAfterLeave={onClosed}>
              <div
                class={n('actions')}
                v-show={show && isActive.value && children.length}
                onClick={(e) => e.stopPropagation()}
              >
                {children.map((child) => (
                  <div class={n('action')}>{child}</div>
                ))}
              </div>
            </Transition>
          </div>
        </Drag>
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

    watch(
      () => [props.position, props.fixed, props.top, props.bottom, props.left, props.right],
      () => {
        dragRef.value && dragRef.value.reset()
      }
    )

    useClickOutside(host, 'click', handleClickOutside)

    return () => renderFab()
  },
})
