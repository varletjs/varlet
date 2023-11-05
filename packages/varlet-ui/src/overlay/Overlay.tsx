import { defineComponent, Teleport, Transition } from 'vue'
import { props } from './props'
import { useLock } from '../context/lock'
import { useZIndex } from '../context/zIndex'
import { createNamespace, useTeleport } from '../utils/components'
import { call } from '@varlet/shared'

import '../styles/common.less'
import './overlay.less'

const { name, n } = createNamespace('overlay')

export default defineComponent({
  name,
  inheritAttrs: false,
  props,
  setup(props, { slots, attrs }) {
    const { zIndex } = useZIndex(() => props.show, 1)
    const { disabled } = useTeleport()

    useLock(
      () => props.show,
      () => props.lockScroll
    )

    function handleClickOverlay() {
      call(props.onClick)
      call(props['onUpdate:show'], false)
    }

    function renderOverlay() {
      return (
        <div
          class={n()}
          style={{
            zIndex: zIndex.value - 1,
          }}
          {...attrs}
          onClick={handleClickOverlay}
        >
          {call(slots.default)}
        </div>
      )
    }

    function renderTransitionOverlay() {
      return <Transition name={n('--fade')}>{props.show && renderOverlay()}</Transition>
    }

    return () => {
      const { teleport } = props

      if (teleport) {
        return (
          <Teleport to={teleport} disabled={disabled.value}>
            {renderTransitionOverlay()}
          </Teleport>
        )
      }

      return renderTransitionOverlay()
    }
  },
})
