import { defineComponent, Teleport, useAttrs } from 'vue'
import { props } from './props'
import { useZIndex } from '../context/zIndex'
import { createNamespace, useTeleport } from '../utils/components'

import '../styles/common.less'
import './overlay.less'

interface attrsAttribute {
  class?: string
  style?: StyleSheet
}

const { n, classes } = createNamespace('overlay')

export default defineComponent({
  name: 'VarOverlay',
  inheritAttrs: false,
  props,
  setup(props, { slots }) {
    const { zIndex } = useZIndex(() => props.show, 1)
    const { disabled } = useTeleport()
    const attrs: attrsAttribute = useAttrs()
    const hideOverlay = () => {
      const { onClickOverlay } = props
      onClickOverlay?.()
      props['onUpdate:show']?.(false)
    }

    const renderOverlay = () => {
      const { show } = props
      if (show) {
        return (
          <div
            class={classes(n(), attrs.class)}
            style={{
              zIndex: zIndex.value - 1,
              ...attrs.style,
            }}
            onClick={hideOverlay}
          >
            {slots.default?.()}
          </div>
        )
      }
    }
    return () => {
      const { teleport } = props
      if (teleport) {
        return (
          <Teleport to={teleport} disabled={disabled.value}>
            {renderOverlay()}
          </Teleport>
        )
      }
      return renderOverlay()
    }
  },
})
