import {
  defineComponent,
  ref,
  computed,
  watch,
  onMounted,
  onUnmounted,
  Transition,
  Teleport,
  nextTick,
  TeleportProps,
} from 'vue'
import { props } from './props'
import { getLeft, getTop, toSizeUnit } from '../utils/elements'
import { useZIndex } from '../context/zIndex'
import type { Ref } from 'vue'
import { call, createNamespace, exposeApis, useTeleport } from '../utils/components'

import '../styles/common.less'
import '../styles/elevation.less'
import './menu.less'

const { n, classes } = createNamespace('menu')

export default defineComponent({
  name: 'VarMenu',
  props,
  setup(props, { slots }) {
    const host: Ref<null | HTMLElement> = ref(null)
    const menu: Ref<null | HTMLElement> = ref(null)
    const to: Ref<TeleportProps['to']> = ref()
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

      call(props['onUpdate:show'], false)
    }

    // expose
    const resize = () => {
      top.value = computeTop(props.alignment)
      left.value = getLeft(host.value as HTMLElement)
    }

    // Transition style use computed place here
    const transitionStyle = computed(() => {
      return {
        top: `calc(${top.value}px + ${toSizeUnit(props.offsetY)})`,
        left: `calc(${left.value}px + ${toSizeUnit(props.offsetX)})`,
        zIndex: zIndex.value,
      }
    })

    const renderTransition = () => (
      <Transition name={n()} onAfterEnter={props.onOpened} onAfterLeave={props.onClosed}>
        <div
          class={classes(n('menu'), 'var-elevation--3')}
          ref={menu}
          style={transitionStyle.value}
          v-show={props.show}
          onClick={(event) => {
            event.stopPropagation()
          }}
        >
          {call(slots.menu)}
        </div>
      </Transition>
    )

    watch(() => props.alignment, resize)

    watch(
      () => props.show,
      async (newValue: boolean) => {
        const { onOpen, onClose } = props
        if (newValue) {
          await nextTick()
          resize()
        }
        newValue ? call(onOpen) : call(onClose)
      }
    )

    watch(
      () => props.teleport,
      (newValue) => {
        to.value = newValue
      }
    )

    onMounted(() => {
      // Synchronously transfer the state to the mount hook to support server-side rendering to prevent hydration errors
      to.value = props.teleport
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
      <div class={n()} ref={host} onClick={handleClick}>
        {call(slots.default)}

        {to.value ? (
          <Teleport to={to.value} disabled={disabled.value}>
            {renderTransition()}
          </Teleport>
        ) : (
          renderTransition()
        )}
      </div>
    )
  },
})
