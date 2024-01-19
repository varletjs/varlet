import { defineComponent, watch, Transition, Teleport, computed } from 'vue'
import { props } from './props'
import { useLock } from '../context/lock'
import { useZIndex } from '../context/zIndex'
import { useRouteListener, useTeleport, createNamespace } from '../utils/components'
import { usePopupItems } from './provide'
import { useInitialized } from '@varlet/use'
import { call } from '@varlet/shared'

import '../styles/common.less'
import './popup.less'

const { name, n, classes } = createNamespace('popup')

export default defineComponent({
  name,
  inheritAttrs: false,
  props,
  setup(props, { slots, attrs }) {
    const rendered = useInitialized(() => props.show, true)
    const { zIndex } = useZIndex(() => props.show, 3)
    const { disabled } = useTeleport()
    const { bindPopupItems } = usePopupItems()

    useLock(
      () => props.show,
      () => props.lockScroll
    )

    watch(
      () => props.show,
      (newValue: boolean) => {
        newValue ? call(props.onOpen) : call(props.onClose)
      }
    )

    bindPopupItems({ show: computed(() => props.show) })

    // internal for Dialog
    useRouteListener(() => call(props.onRouteChange))

    function hidePopup() {
      const { closeOnClickOverlay, onClickOverlay } = props

      call(onClickOverlay)

      if (!closeOnClickOverlay) {
        return
      }

      call(props['onUpdate:show'], false)
    }

    function renderOverlay() {
      const { overlayClass = '', overlayStyle } = props

      return (
        <div
          class={classes(n('overlay'), overlayClass)}
          style={{
            zIndex: zIndex.value - 1,
            ...overlayStyle,
          }}
          onClick={hidePopup}
        />
      )
    }

    function renderContent() {
      return (
        <div
          class={classes(
            n('content'),
            n(`--${props.position}`),
            [props.defaultStyle, n('--content-background-color')],
            [props.defaultStyle, n('$-elevation--3')],
            [props.safeArea, n('--safe-area')],
            [props.safeAreaTop, n('--safe-area-top')]
          )}
          style={{ zIndex: zIndex.value }}
          {...attrs}
          v-show={props.show}
        >
          {rendered.value && call(slots.default)}
        </div>
      )
    }

    function renderPopup() {
      return (
        <Transition name={n('$-fade')} onAfterEnter={props.onOpened} onAfterLeave={props.onClosed}>
          <div
            class={classes(n('$--box'), n(), [!props.overlay, n('--pointer-events-none')])}
            style={{ zIndex: zIndex.value - 2 }}
            v-show={props.show}
          >
            {props.overlay && renderOverlay()}
            <Transition name={props.transition || n(`$-pop-${props.position}`)}>{renderContent()}</Transition>
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
