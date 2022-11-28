import { defineComponent, Teleport } from 'vue'
import { props } from './props'
import { useZIndex } from '../context/zIndex'
import { createNamespace, useTeleport } from '../utils/components'

import '../styles/common.less'
import './overlay.less'

const { n, classes } = createNamespace('overlay')

export default defineComponent({
  name: 'VarOverlay',
  inheritAttrs: false,
  props,
  setup(props, { slots }) {
    const { zIndex } = useZIndex(() => props.show, 1)
    const { disabled } = useTeleport()
    const hideOverlay = () => {
      const { onClickOverlay } = props
      onClickOverlay?.()
      props['onUpdate:show']?.(false)
    }

    const renderOverlay = () => {
      return (
        <div
          class={classes(n('overlay'), props.class)}
          style={{
            zIndex: zIndex.value - 1,
            ...props.style,
          }}
          onClick={hideOverlay}
        >
          {slots.default?.()}
        </div>
      )
    }
    return () => {
      const { show, teleport } = props
      if (teleport) {
        return (
          <Teleport to={teleport} disabled={disabled.value}>
            {show && renderOverlay()}
          </Teleport>
        )
      }
      return show && renderOverlay()
    }
  },
})
