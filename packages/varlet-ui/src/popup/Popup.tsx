import { defineComponent, watch, Transition, Teleport } from 'vue'
import { props } from './props'
import { useLock } from '../context/lock'
import { useZIndex } from '../context/zIndex'
import { addRouteListener, useTeleport } from '../utils/components'

import '../styles/common.less'
import './popup.less'

export default defineComponent({
  name: 'VarPopup',
  inheritAttrs: false,
  props,
  setup(props, { slots, attrs }) {
    const { zIndex } = useZIndex(() => props.show, 3)
    const { disabled } = useTeleport()

    const hidePopup = () => {
      const { closeOnClickOverlay, onClickOverlay } = props

      onClickOverlay?.()

      if (!closeOnClickOverlay) {
        return
      }

      props['onUpdate:show']?.(false)
    }

    useLock(props, 'show', 'lockScroll')

    watch(
      () => props.show,
      (newValue: boolean) => {
        const { onOpen, onClose } = props
        newValue ? onOpen?.() : onClose?.()
      }
    )

    // internal for Dialog
    addRouteListener(() => props.onRouteChange?.())

    const renderOverlay = () => {
      const { overlayClass, overlayStyle } = props

      return (
        <div
          class={['var-popup__overlay', overlayClass]}
          style={{
            zIndex: zIndex.value - 1,
            ...overlayStyle,
          }}
          onClick={hidePopup}
        />
      )
    }

    const renderContent = () => {
      return (
        <div
          class={['var-popup__content', 'var-elevation--3', `var-popup--${props.position}`]}
          style={{ zIndex: zIndex.value }}
          {...attrs}
        >
          {slots.default?.()}
        </div>
      )
    }

    const renderPopup = () => {
      const { onOpened, onClosed, show, overlay, transition, position } = props

      return (
        <Transition name="var-fade" onAfterEnter={onOpened} onAfterLeave={onClosed}>
          <div class="var--box var-popup" style={{ zIndex: zIndex.value - 2 }} v-show={show}>
            {overlay && renderOverlay()}
            <Transition name={transition || `var-pop-${position}`}>{show && renderContent()}</Transition>
          </div>
        </Transition>
      )
    }

    return () => {
      const { teleport } = props

      if (teleport) {
        return (
          <Teleport to={teleport} disabled={disabled.value}>
            {renderPopup()}
          </Teleport>
        )
      }

      return renderPopup()
    }
  },
})
