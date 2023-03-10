import { computed, defineComponent, ref, onMounted, toRefs } from 'vue'
import { colorPickerAlphaSliderProps } from './color-picker-alpha-slider-types'
import { DOMUtils } from '../../utils/dom-dragger'
import { HSVtoHex, nullColor } from '../../utils/color-utils'
import { HSV } from '../../utils/color-utils-types'
import { call, createNamespace } from '../../../utils/components'
import './color-picker-alpha-slider.less'

export default defineComponent({
  name: 'ColorAlphaSlider',
  props: colorPickerAlphaSliderProps,
  emits: ['update:color'],
  setup(props: colorPickerAlphaSliderProps) {
    const DEFAULT_TRANSITION = { transition: 'all 0.3s ease' }
    const { n } = createNamespace('color-picker-alpha-slider')
    const clickTransform = ref<{ transition: string } | null>(DEFAULT_TRANSITION)
    const barElement = ref<HTMLElement | null>(null)
    const cursorElement = ref<HTMLElement | null>(null)
    const { color } = toRefs(props)

    const onMoveBar = (event: MouseEvent) => {
      event.stopPropagation()
      if (props.disabled || !barElement.value || !cursorElement.value) return
      const rect = barElement.value.getBoundingClientRect()
      const { offsetWidth } = cursorElement.value
      let left = event.clientX - rect.left
      left = Math.max(offsetWidth / 2, left)
      left = Math.min(left, rect.width - offsetWidth / 2)
      const alpha = Math.round(((left - offsetWidth / 2) / (rect.width - offsetWidth)) * 100)
      const hsv = {
        h: props.color?.h,
        s: (props.color as HSV).s,
        v: (props.color as HSV).v,
        a: alpha / 100,
      }
      call(props['onUpdate:color'], hsv ?? nullColor)
    }

    const onClickSlider = (event: Event) => {
      if (event.target !== barElement.value) {
        onMoveBar(event as MouseEvent)
      }
    }

    const getCursorLeft = computed(() => {
      if (barElement.value && cursorElement.value) {
        const alpha = props.color?.a ?? 1
        const rect = barElement.value.getBoundingClientRect()
        const { offsetWidth } = cursorElement.value
        return Math.round(alpha * (rect.width - offsetWidth) + offsetWidth / 2)
      }
      return 0
    })

    const getCursorStyle = computed(() => {
      const left = getCursorLeft.value
      return {
        left: left + 'px',
        top: 0,
        ...clickTransform.value,
      }
    })

    onMounted(() => {
      const dragConfig = {
        drag: (event: Event) => {
          clickTransform.value = null
          onMoveBar(event as MouseEvent)
        },
        end: (event: Event) => {
          clickTransform.value = DEFAULT_TRANSITION
          onMoveBar(event as MouseEvent)
        },
      }
      if (barElement.value && cursorElement.value && !props.disabled) {
        DOMUtils.triggerDragEvent(barElement.value, dragConfig)
      }
    })

    const alphaClass = computed(() => {
      return [n(), 'transparent']
    })

    const barStyle: any = computed(() => {
      return { '--color-picker-alpha-slider': HSVtoHex(color.value) }
    })

    return () => {
      return (
        <div class={alphaClass.value}>
          <div
            ref={barElement}
            class={[n('bar'), props.disabled ? n('disabled') : null]}
            style={barStyle.value}
            onClick={onClickSlider}
          >
            <div class={n('bar-pointer')} ref={cursorElement} style={getCursorStyle.value}>
              <div class={n('bar-handle')}></div>
            </div>
          </div>
        </div>
      )
    }
  },
})
