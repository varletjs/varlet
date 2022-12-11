import { computed, defineComponent, ref, onMounted } from 'vue'
import { colorPickerAlphaSliderProps } from './color-picker-alpha-slider-types'
import { DOMUtils } from '../../utils/dom-dragger'
import { RGBtoCSS, fromHSVA } from '../../utils/color-utils'
import './color-alpha-slider.scss'
export default defineComponent({
  name: 'ColorAlphaSlider',
  props: colorPickerAlphaSliderProps,
  emits: ['update:modelValue'],
  setup(props: colorPickerAlphaSliderProps, ctx) {
    const DEFAULT_TRANSITION = { transition: 'all 0.3s ease' }
    const clickTransform = ref<{ transition: string } | null>(DEFAULT_TRANSITION)
    const barElement = ref<HTMLElement | null>(null)
    const cursorElement = ref<HTMLElement | null>(null)

    const onMoveBar = (event: MouseEvent) => {
      event.stopPropagation()
      if (barElement.value && cursorElement.value) {
        const rect = barElement.value.getBoundingClientRect()
        const offsetWidth = cursorElement.value.offsetWidth
        let left = event.clientX - rect.left
        left = Math.max(offsetWidth / 2, left)
        left = Math.min(left, rect.width - offsetWidth / 2)
        const alpha = Math.round(((left - offsetWidth / 2) / (rect.width - offsetWidth)) * 100)
        ctx.emit('update:modelValue', fromHSVA({ ...props.modelValue.hsva, a: alpha / 100 }))
      }
    }

    const onClickSider = (event: Event) => {
      const target = event.target
      if (target !== barElement.value) {
        onMoveBar(event as MouseEvent)
      }
    }

    const getBackgroundStyle = computed(() => {
      return {
        background: `linear-gradient(to right, transparent , ${RGBtoCSS(props.modelValue.rgba)})`,
      }
    })

    const getCursorLeft = computed(() => {
      if (barElement.value && cursorElement.value) {
        const alpha = props.modelValue.rgba.a
        const rect = barElement.value.getBoundingClientRect()
        const offsetWidth = cursorElement.value.offsetWidth
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
      if (barElement.value && cursorElement.value) {
        DOMUtils.triggerDragEvent(barElement.value, dragConfig)
      }
    })
    const alphaClass = computed(() => {
      return ['devui-color-picker-alpha-slider', 'transparent']
    })
    return () => {
      return (
        <div class={alphaClass.value}>
          <div
            ref={barElement}
            class="devui-color-picker-alpha-slider__bar"
            style={getBackgroundStyle.value}
            onClick={onClickSider}
          >
            <div
              class={['devui-color-picker-alpha-slider__bar-pointer']}
              ref={cursorElement}
              style={getCursorStyle.value}
            >
              <div class="devui-color-picker-alpha-slider__bar-handle"></div>
            </div>
          </div>
        </div>
      )
    }
  },
})
