import { defineComponent, Teleport, Transition } from 'vue'
import { props } from './props'
import { useLock } from '../context/lock'
import { useZIndex } from '../context/zIndex'
import { createNamespace, useTeleport } from '../utils/components'
import { call, preventDefault } from '@varlet/shared'
import { useStack } from '../context/stack'
import { useEventListener } from '@varlet/use'

import '../styles/common.less'
import './overlay.less'

const { name, n } = createNamespace('overlay')

export default defineComponent({
  name,
  inheritAttrs: false,
  props,
  setup(props, { slots, attrs }) {
    const { zIndex } = useZIndex(() => props.show, 3)
    const { onStackTop } = useStack(() => props.show, zIndex)
    const { disabled } = useTeleport()

    useLock(
      () => props.show,
      () => props.lockScroll
    )

    useEventListener(() => window, 'keydown', handleKeydown)

    function handleKeydown(event: KeyboardEvent) {
      if (!onStackTop() || event.key !== 'Escape' || !props.show) {
        return
      }

      call(props.onKeyEscape)

      if (!props.closeOnKeyEscape) {
        return
      }

      preventDefault(event)
      call(props['onUpdate:show'], false)
    }

    function handleClickOverlay() {
      call(props.onClick)
      call(props['onUpdate:show'], false)
    }

    function renderOverlay() {
      return (
        <div
          class={n()}
          style={{
            zIndex: zIndex.value - 2,
          }}
          {...attrs}
        >
          <div
            class={n('overlay')}
            style={{
              zIndex: zIndex.value - 1,
            }}
            onClick={handleClickOverlay}
          />
          <div
            class={n('content')}
            style={{
              zIndex: zIndex.value,
            }}
          >
            {call(slots.default)}
          </div>
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
