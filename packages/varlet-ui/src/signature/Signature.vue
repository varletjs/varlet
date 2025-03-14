<template>
  <div ref="wrap" :class="[n(), n('inner'), { [n('--disabled')]: disabled }]">
    <canvas v-show="isCanvasSupported" ref="canvas" :height="canvasHeight" :width="canvasWidth"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import { useEventListener } from '@varlet/use'
import { useLocale } from '../locale'
import { createNamespace } from '../utils/components'
import { props } from './props'

const { name, n } = createNamespace('signature')

export default defineComponent({
  name,
  props,
  emits: ['start', 'end', 'signing', 'confirm', 'clear', 'update:modelValue'],

  setup(props, { emit, expose }) {
    const { t } = useLocale()
    const translate = (key: string) => t(`signature.${key}`)

    const canvas = ref<HTMLCanvasElement | null>(null)
    const wrap = ref<HTMLElement | null>(null)
    const isCanvasSupported = ref(true)

    onMounted(() => {
      const elem = document.createElement('canvas')
      isCanvasSupported.value = !!(elem.getContext && elem.getContext('2d'))

      if (isCanvasSupported.value && canvas.value && wrap.value) {
        state.ctx = canvas.value.getContext('2d')
        state.canvasWidth = wrap.value.offsetWidth
        state.canvasHeight = wrap.value.offsetHeight
      }
    })

    const state = reactive({
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null as CanvasRenderingContext2D | null,
      events: ['touchstart', 'touchmove', 'touchend', 'touchleave'],
      isDrawing: false,
    })
    const startEventHandler: EventListener = (event: Event) => {
      const e = event as MouseEvent | TouchEvent
      e.preventDefault()
      if (!state.ctx || props.disabled) {
        return
      }

      state.isDrawing = true
      state.ctx.beginPath()
      state.ctx.lineWidth = props.lineWidth
      state.ctx.strokeStyle = props.strokeStyle
      emit('start')
    }

    const moveEventHandler: EventListener = (event: Event) => {
      const e = event as MouseEvent | TouchEvent
      e.preventDefault()
      if (!canvas.value || !state.ctx || !state.isDrawing) {
        return
      }

      let clientX: number
      let clientY: number

      if ('touches' in e) {
        clientX = e.touches[0].clientX
        clientY = e.touches[0].clientY
      } else {
        clientX = (e as MouseEvent).clientX
        clientY = (e as MouseEvent).clientY
      }

      const coverPos = canvas.value.getBoundingClientRect()
      const mouseX = clientX - coverPos.left
      const mouseY = clientY - coverPos.top

      state.ctx.lineTo(mouseX, mouseY)
      state.ctx.stroke()

      emit('signing', { clientX, clientY })
    }

    const endEventHandler: EventListener = (event: Event) => {
      event.preventDefault()
      state.isDrawing = false
      emit('end')
    }

    const leaveEventHandler: EventListener = (event: Event) => {
      event.preventDefault()
      state.isDrawing = false
    }

    useEventListener(canvas, state.events[0], startEventHandler)
    useEventListener(canvas, state.events[1], moveEventHandler)
    useEventListener(canvas, state.events[2], endEventHandler)
    useEventListener(canvas, state.events[3], leaveEventHandler)

    onMounted(() => {
      if (isCanvasSupported.value && canvas.value && wrap.value) {
        state.ctx = canvas.value.getContext('2d')
        state.canvasWidth = wrap.value.offsetWidth
        state.canvasHeight = wrap.value.offsetHeight
      }
    })

    const clear = () => {
      if (!canvas.value || !state.ctx) {
        return
      }

      state.ctx.clearRect(0, 0, state.canvasWidth, state.canvasHeight)
      state.ctx.closePath()

      emit('clear')
      emit('update:modelValue', '')
    }

    const confirm = () => {
      if (!canvas.value) {
        return
      }

      const dataUrl = getDataUrl(canvas.value)
      emit('confirm', canvas.value, dataUrl)
      emit('update:modelValue', dataUrl)
      // 移除验证相关代码
    }

    const isCanvasBlank = (canvas: HTMLCanvasElement) => {
      if (!canvas) {
        return true
      }

      const blank = document.createElement('canvas')
      blank.width = canvas.width
      blank.height = canvas.height

      return canvas.toDataURL() === blank.toDataURL()
    }

    const getDataUrl = (canvas: HTMLCanvasElement) => {
      if (isCanvasBlank(canvas)) {
        return ''
      }

      switch (props.dataUrlType) {
        case 'png':
          return canvas.toDataURL('image/png')
        case 'jpg':
          return canvas.toDataURL('image/jpeg', 0.8)
        default:
          return canvas.toDataURL('image/png')
      }
    }
    expose({
      confirm,
      clear,
      isEmpty: () => (canvas.value ? isCanvasBlank(canvas.value) : true),
    })

    return {
      ...toRefs(state),
      canvas,
      wrap,
      isCanvasSupported,
      confirm,
      clear,
      translate,
      n,
    }
  },
})
</script>

<style lang="less">
@import './signature';
</style>
