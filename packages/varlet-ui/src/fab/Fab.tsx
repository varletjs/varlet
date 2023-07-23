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

type VarTouch = {
  clientX: number
  clientY: number
  timestamp: number
  target: HTMLElement
}

const DISTANCE_OFFSET = 12
const EVENT_DELAY = 200
const TAP_DELAY = 350

export default defineComponent({
  name: 'VarFab',
  inheritAttrs: false,
  props,
  setup(props, { slots, attrs }) {
    const isActive = useVModel(props, 'active')
    const host: Ref<null | HTMLElement> = ref(null)
    const hasMoved: Ref<boolean> = ref(false)
    let startTouch: VarTouch | null = null
    let prevTouch: VarTouch | null = null
    let closeRunner: number | null = null

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
      if (hasMoved.value) {
        hasMoved.value = false
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

    const createVarTouch = (touches: Touch, target: HTMLElement): VarTouch => ({
      clientX: touches.clientX,
      clientY: touches.clientY,
      timestamp: performance.now(),
      target,
    })

    const getDistance = (touch: VarTouch, target: VarTouch): number => {
      const { clientX: touchX, clientY: touchY } = touch
      const { clientX: targetX, clientY: targetY } = target

      return Math.abs(Math.sqrt((targetX - touchX) ** 2 + (targetY - touchY) ** 2))
    }

    const isTapTouch = (target: HTMLElement) => {
      if (!target || !startTouch || !prevTouch) {
        return false
      }

      return (
        getDistance(startTouch, prevTouch) <= DISTANCE_OFFSET && performance.now() - prevTouch.timestamp < TAP_DELAY
      )
    }

    const handleTouchStart = (event: TouchEvent) => {
      window.clearTimeout(closeRunner as number)

      const currentTouch: VarTouch = createVarTouch(event.touches[0], event.currentTarget as HTMLElement)
      startTouch = currentTouch
      prevTouch = currentTouch
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (!prevTouch) {
        return
      }

      const target = event.currentTarget as HTMLElement
      const currentTouch: VarTouch = createVarTouch(event.touches[0], target)
      prevTouch = currentTouch
    }

    const handleTouchend = (event: Event) => {
      const isTap = isTapTouch(event.target as HTMLElement)
      hasMoved.value = !isTap
      closeRunner = window.setTimeout(() => {
        startTouch = null
      }, EVENT_DELAY)
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
        draggable,
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

      return (
        <Drag
          class={n(`--position-${position}`)}
          teleport={teleport}
          disabled={!draggable || disabled}
          style={{ top: toSizeUnit(top), bottom: toSizeUnit(bottom), left: toSizeUnit(left), right: toSizeUnit(right) }}
        >
          <div
            class={classes(n(), n(`--direction-${direction}`), [!fixed, n('--absolute')], [safeArea, n('--safe-area')])}
            style={{
              zIndex: toNumber(zIndex),
            }}
            ref={host}
            onTouchstart={(e) => handleTouchStart(e)}
            onTouchmove={(e) => handleTouchMove(e)}
            onTouchend={(e) => handleTouchend(e)}
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

    useClickOutside(host, 'click', handleClickOutside)

    return () => renderFab()
  },
})
