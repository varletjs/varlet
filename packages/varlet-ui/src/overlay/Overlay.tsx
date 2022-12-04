import { defineComponent, Teleport, Transition } from 'vue'
import { props } from './props'
import { useLock } from '../context/lock'
import { useZIndex } from '../context/zIndex'
import { createNamespace, useTeleport, call } from '../utils/components'

import '../styles/common.less'
import './overlay.less'

const { n, classes } = createNamespace('overlay')

export default defineComponent({
  name: 'VarOverlay',
  inheritAttrs: false,
  props,
  setup(props, { slots, attrs }) {
    const { zIndex } = useZIndex(() => props.show, 1)
    const { disabled } = useTeleport()
    const hideOverlay = () => {
      call(props.onClick)
      call(props['onUpdate:show'], false)
    }

    useLock(
      () => props.show,
      () => props.lockScroll
    )

    const renderOverlay = () => {
      return (
        <div
          class={classes(n())}
          style={{
            zIndex: zIndex.value - 1,
          }}
          {...attrs}
          onClick={hideOverlay}
        >
          {call(slots.default)}
        </div>
      )
    }

    const renderTransitionOverlay = () => {
      const { show } = props
      return <Transition name={n('$-fade')}>{show && renderOverlay()}</Transition>
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
