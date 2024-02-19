import Button from '../button'
import Icon from '../icon'
import Drag from '../drag'
import { defineComponent, ref, Transition, watch } from 'vue'
import { useClickOutside, useVModel } from '@varlet/use'
import { isBoolean, call } from '@varlet/shared'
import { createNamespace, flatFragment } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props } from './props'

import '../styles/common.less'
import '../styles/elevation.less'
import '../ripple/ripple.less'
import '../icon/icon.less'
import '../loading/loading.less'
import '../button/button.less'
import '../drag/drag.less'
import './fab.less'

const { name, classes, n } = createNamespace('fab')

export default defineComponent({
  name,
  inheritAttrs: false,
  props,
  setup(props, { slots, attrs }) {
    const isActive = useVModel(props, 'active')
    const host = ref<null | HTMLElement>(null)
    const dragRef = ref<InstanceType<typeof Drag> | null>(null)

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
        dragRef.value?.reset()
      }
    )

    useClickOutside(host, 'click', handleClickOutside)

    function handleClick(e: Event, value: boolean, childrenLength: number) {
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

    function handleMouse(value: boolean, childrenLength: number) {
      if (props.trigger !== 'hover' || props.disabled || childrenLength === 0) {
        return
      }

      isActive.value = value
      call(isActive.value ? props.onOpen : props.onClose)
    }

    function handleClickOutside() {
      if (props.trigger !== 'click' || props.disabled) {
        return
      }

      if (isActive.value !== false) {
        isActive.value = false
        call(props.onClose)
      }
    }

    function renderTrigger() {
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
          elevation={props.elevation}
          iconContainer={true}
        >
          <Icon
            var-fab-cover
            class={classes([isActive.value, n('trigger-active-icon'), n('trigger-inactive-icon')])}
            name={isActive.value ? props.activeIcon : props.inactiveIcon}
            size={isActive.value ? props.activeIconSize : props.inactiveIconSize}
            namespace={isActive.value ? props.activeIconNamespace : props.inactiveIconNamespace}
            transition={200}
            animationClass={n('--trigger-icon-animation')}
          />
        </Button>
      )
    }

    return () => {
      const children = flatFragment(call(slots.default) ?? [])
      const dragProps = isBoolean(props.drag) ? {} : props.drag

      return (
        <Drag
          ref={dragRef}
          class={classes(n(`--position-${props.position}`), [!props.fixed, n('--absolute')])}
          style={{
            top: toSizeUnit(props.top),
            bottom: toSizeUnit(props.bottom),
            left: toSizeUnit(props.left),
            right: toSizeUnit(props.right),
          }}
          zIndex={props.zIndex}
          teleport={props.teleport}
          disabled={props.disabled || !props.drag || !props.fixed}
          direction={dragProps.direction}
          attraction={dragProps.attraction}
          boundary={dragProps.boundary}
          onClick={(e) => handleClick(e, !isActive.value, children.length)}
          {...attrs}
        >
          <div
            class={classes(n(), n(`--direction-${props.direction}`), [props.safeArea, n('--safe-area')])}
            ref={host}
            onMouseleave={() => handleMouse(false, children.length)}
            onMouseenter={() => handleMouse(true, children.length)}
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
                {children.map((child) => (
                  <div class={n('action')}>{child}</div>
                ))}
              </div>
            </Transition>
          </div>
        </Drag>
      )
    }
  },
})
