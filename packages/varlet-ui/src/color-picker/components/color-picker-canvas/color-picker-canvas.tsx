import { defineComponent, ref, onMounted, computed, getCurrentInstance, watch } from 'vue'
import { createNamespace, call } from '../../../utils/components'
import { DOMUtils } from '../../utils/dom-dragger'
import { clamp, convertToUnit } from '../../utils/helpers'
import { colorPickerPaletteProps, ColorPickerPaletteProps } from './color-picker-canvas-types'
import './color-picker-canvas.less'

type DefaultTransition = { transition: string }
export default defineComponent({
  name: 'VarColorCanvas',
  props: colorPickerPaletteProps,
  setup(props: ColorPickerPaletteProps) {
    const { n } = createNamespace('color-picker-canvas')
    const DEFAULT_TRANSITION: DefaultTransition = { transition: 'all 0.3s ease' }
    const clickTransform = ref<DefaultTransition | null>(DEFAULT_TRANSITION)
    const paletteElement = ref<HTMLElement | null>(null)
    const canvasElement = ref<HTMLCanvasElement | null>(null)
    const handlerElement = ref<HTMLElement | null>(null)
    const paletteInstance = getCurrentInstance()
    const height = Number(props.height)
    const width = Number(props.width)
    const cursorTop = ref(0)
    const cursorLeft = ref(0)

    const getDotStyle = computed(() => {
      return {
        top: cursorTop.value + 'px',
        left: cursorLeft.value + 'px',
      }
    })

    function renderCanvas() {
      if (canvasElement.value) {
        const canvas = canvasElement.value.getContext('2d')
        if (canvas) {
          const parentWidth = paletteElement.value?.offsetWidth || 0
          canvasElement.value.width = width
          canvasElement.value.height = height
          const saturationGradient = canvas.createLinearGradient(0, 0, parentWidth as number, 0)
          saturationGradient.addColorStop(0, 'hsla(0, 0%, 100%, 1)') // white
          saturationGradient.addColorStop(1, `hsla(${props.color?.h ?? 0}, 100%, 50%, 1)`)
          canvas.fillStyle = saturationGradient
          canvas.fillRect(0, 0, parentWidth, height)
          const valueGradient = canvas.createLinearGradient(0, 0, 0, height)
          valueGradient.addColorStop(0, 'hsla(0, 0%, 100%, 0)') // transparent
          valueGradient.addColorStop(1, 'hsla(0, 0%, 0%, 1)') // black
          canvas.fillStyle = valueGradient
          canvas.fillRect(0, 0, parentWidth, height)
        }
      }
    }

    function handleDrag(event: MouseEvent) {
      event.preventDefault()
      if (props.disabled || !paletteInstance) return
      const parentWidth = paletteElement.value?.offsetWidth || 0
      const el = canvasElement.value
      const rect = el?.getBoundingClientRect() as DOMRect
      let left = event.clientX - rect.left
      let top = event.clientY - rect.top
      left = clamp(left, 0, parentWidth)
      top = clamp(top, 0, height)
      cursorLeft.value = left
      cursorTop.value = top
      const hsv = {
        h: props.color?.h ?? 0,
        s: clamp(event.clientX - rect.left, 0, width) / width,
        v: 1 - clamp(event.clientY - rect.top, 0, height) / height,
        a: props.color?.a,
      }
      call(props['onUpdate:color'], hsv)
    }

    function clickPalette(event: Event) {
      if (event.target !== paletteElement.value && !props.disabled) {
        handleDrag(event as MouseEvent)
      }
    }

    function updatePosition() {
      if (paletteInstance) {
        cursorLeft.value = props.color!.s * parseInt(`${props.width}`, 10)
        cursorTop.value = (1 - props.color!.v) * parseInt(`${props.height}`, 10)
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
      }
    })

    watch(() => props.color, updatePosition, { immediate: true, deep: true })

    watch(() => props.color?.h, renderCanvas, { immediate: true })

    return () => {
      return (
        <div
          class={n()}
          style={{
            width: convertToUnit(props.width),
            height: convertToUnit(props.height),
          }}
          ref={paletteElement}
          onClick={clickPalette}
        >
          <canvas ref={canvasElement}></canvas>
          <div style={getDotStyle.value} class={n('dot')} ref={handlerElement}></div>
        </div>
      )
    }
  },
})
