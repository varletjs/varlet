import { defineComponent, ref, watch, onMounted, onUnmounted, Transition, Teleport } from 'vue'
import { props } from './props'
import { getLeft, getTop, toSizeUnit } from '../utils/elements'
import { useZIndex } from '../context/zIndex'
import type { Ref } from 'vue'
import { exposeApis, useTeleport } from '../utils/components'

import '../styles/common.less'
import '../styles/elevation.less'
import './menu.less'

export default defineComponent({
  name: 'VarMenu',
  props,
  setup(props, { slots }) {
    const host: Ref<null | HTMLElement> = ref(null)
    const menu: Ref<null | HTMLElement> = ref(null)
    const top: Ref<number> = ref(0)
    const left: Ref<number> = ref(0)
    const { zIndex } = useZIndex(() => props.show, 1)
    const { disabled } = useTeleport()
    let clickSelf = false

    const computeTop = (alignment: string): number => {
      return alignment === 'top'
        ? getTop(host.value as HTMLElement)
        : getTop(host.value as HTMLElement) - (menu.value as HTMLElement).offsetHeight
    }

    const handleClick = () => {
      clickSelf = true
    }

    const handleMenuClose = () => {
      if (clickSelf) {
        clickSelf = false
        return
      }

      if (!props.show) {
        return
      }

      props['onUpdate:show']?.(false)
    }

    // expose
    const resize = () => {
      top.value = computeTop(props.alignment)
      left.value = getLeft(host.value as HTMLElement)
    }

    const renderTransition = () => (
      <Transition name="var-menu" onAfterEnter={props.onOpen} onAfterLeave={props.onClosed}>
        <div
          class="var-menu__menu var-elevation--3"
          ref={menu}
          style={{
            top: `calc(${top.value}px + ${toSizeUnit(props.offsetY)})`,
            left: `calc(${left.value}px + ${toSizeUnit(props.offsetX)})`,
            zIndex: zIndex.value,
          }}
          v-show={props.show}
          onClick={(event) => {
            event.stopPropagation()
          }}
        >
          {slots.menu?.()}
        </div>
      </Transition>
    )

    watch(() => props.alignment, resize)

    watch(
      () => props.show,
      async (newValue: boolean) => {
        const { onOpen, onClose } = props
        newValue && resize()
        newValue ? onOpen?.() : onClose?.()
      }
    )

    onMounted(() => {
      resize()

      document.addEventListener('click', handleMenuClose)
      window.addEventListener('resize', resize)
    })

    onUnmounted(() => {
      document.removeEventListener('click', handleMenuClose)
      window.removeEventListener('resize', resize)
    })

    exposeApis({ resize })

    return () => (
      <div class="var-menu" ref={host} onClick={handleClick}>
        {slots.default?.()}

        {props.teleport ? (
          <Teleport to={props.teleport} disabled={disabled.value}>
            {renderTransition()}
          </Teleport>
        ) : (
          renderTransition()
        )}
      </div>
    )
  },
})
