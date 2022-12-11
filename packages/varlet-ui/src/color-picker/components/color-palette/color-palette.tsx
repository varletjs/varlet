import { defineComponent, ref, onMounted, computed, getCurrentInstance, watch, inject } from 'vue'
import { DOMUtils } from '../../utils/dom-dragger'
import { fromHSVA } from '../../utils/color-utils'
import { clamp } from '../../utils/helpers'
import { colorPickerPaletteProps, ColorPickerPaletteProps } from './color-picker-palette-types'
import { ProvideColorOptions } from '../../utils/color-utils-types'
import './color-palette.less'

type DefaultTransition = { transition: string }
export default defineComponent({
  name: 'ColorPalette',
  props: colorPickerPaletteProps,
  emits: ['update:modelValue', 'changeTextColor'],
  setup(props: ColorPickerPaletteProps, ctx) {
    const DEFAULT_TRANSITION: DefaultTransition = { transition: 'all 0.3s ease' }
    const dotSizeInject = inject('provideData') as ProvideColorOptions

    const clickTransform = ref<DefaultTransition | null>(DEFAULT_TRANSITION)
    const paletteElement = ref<HTMLElement | null>(null)
    const canvasElement = ref<HTMLCanvasElement | null>(null)
    const handlerElement = ref<HTMLElement | null>(null)
    const paletteInstance = getCurrentInstance()

    const cursorTop = ref(0)
    const cursorLeft = ref(0)
    const getDotStyle = computed(() => {
      return {
        width: `${dotSizeInject.dotSize}px`,
        height: `${dotSizeInject.dotSize}px`,
        transform: `translate(-${dotSizeInject?.dotSize || 0 / 2}px,  -${dotSizeInject?.dotSize || 0 / 2}px)`,
      }
    })
    const getCursorStyle = computed(() => {
      return {
        top: cursorTop.value + 'px',
        left: cursorLeft.value + 'px',
        ...clickTransform.value,
      }
    })
    function renderCanvas() {
      if (canvasElement.value) {
        const canvas = canvasElement.value.getContext('2d')
        if (canvas) {
          const parentWidth = paletteElement.value?.offsetWidth || 0
          canvasElement.value.width = parentWidth
          canvasElement.value.height = props.height
          const saturationGradient = canvas.createLinearGradient(0, 0, parentWidth as number, 0)
          saturationGradient.addColorStop(0, 'hsla(0, 0%, 100%, 1)') // white
          saturationGradient.addColorStop(1, `hsla(${props.modelValue.hue}, 100%, 50%, 1)`)
          canvas.fillStyle = saturationGradient
          canvas.fillRect(0, 0, parentWidth, props.height)
          const valueGradient = canvas.createLinearGradient(0, 0, 0, props.height)
          valueGradient.addColorStop(0, 'hsla(0, 0%, 100%, 0)') // transparent
          valueGradient.addColorStop(1, 'hsla(0, 0%, 0%, 1)') // black
          canvas.fillStyle = valueGradient
          canvas.fillRect(0, 0, parentWidth, props.height)
        }
      }
    }

    function handleDrag(event: MouseEvent) {
      const parentWidth = paletteElement.value?.offsetWidth || 0
      if (paletteInstance) {
        const el = canvasElement.value
        const rect = el?.getBoundingClientRect() as DOMRect
        let left = event.clientX - rect.left
        let top = event.clientY - rect.top
        left = clamp(left, 0, parentWidth)
        top = clamp(top, 0, props.height)
        cursorLeft.value = left
        cursorTop.value = top
        const isChangeTextColor = computed(() => {
          if (left > rect.width / 2 || top > rect.height / 2) {
            return true
          } else {
            return false
          }
        })
        ctx.emit(
          'update:modelValue',
          fromHSVA({
            h: props.modelValue.hue,
            s: clamp(event.clientX - rect.left, 0, rect.width) / rect.width,
            v: 1 - clamp(event.clientY - rect.top, 0, rect.height) / rect.height,
            a: props.modelValue.alpha,
          })
        )
        ctx.emit('changeTextColor', isChangeTextColor.value)
      }
    }

    function clickPalette(event: Event) {
      const target = event.target
      if (target !== paletteElement.value) {
        handleDrag(event as MouseEvent)
      }
    }
    function updatePosition() {
      if (paletteInstance) {
        const parentWidth = paletteElement.value?.offsetWidth || 0
        cursorLeft.value = Number(props.modelValue?.hsva.s) * parentWidth
        cursorTop.value = (1 - Number(props.modelValue?.hsva.v)) * props.height
      }
    }
    onMounted(() => {
      renderCanvas()
      if (paletteInstance && paletteInstance.vnode.el && handlerElement.value) {
        DOMUtils.triggerDragEvent(paletteInstance.vnode.el as HTMLElement, {
          drag: (event: Event) => {
            clickTransform.value = null
            handleDrag(event as MouseEvent)
          },
          end: (event) => {
            clickTransform.value = DEFAULT_TRANSITION
            handleDrag(event as MouseEvent)
          },
        })
        updatePosition()
      }
    })
    watch(
      () => props.modelValue,
      () => {
        updatePosition()
      }
    )
    ctx.expose({ renderCanvas })
    return () => {
      return (
        <div class="var-color-picker-palette" ref={paletteElement} onClick={clickPalette}>
          <canvas ref={canvasElement}></canvas>
          <div class="var-color-picker-palette-handler" style={getCursorStyle.value}>
            <div ref={handlerElement} style={getDotStyle.value}></div>
          </div>
        </div>
      )
    }
  },
})
