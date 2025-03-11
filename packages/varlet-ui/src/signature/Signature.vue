<template>
  <div :class="n()">
    <div ref="wrap" :class="[n('inner'), { [n('--disabled')]: disabled }]">
      <canvas v-show="isCanvasSupported" ref="canvas" :height="canvasHeight" :width="canvasWidth"></canvas>
      <p v-if="!isCanvasSupported" :class="n('unsupport')">{{ unsupportText }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
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

    const elem = document.createElement('canvas')
    const isCanvasSupported = !!(elem.getContext && elem.getContext('2d'))

    const unsupportText = computed(() => props.unsupportText || translate('unsupportText'))

    const state = reactive({
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null as CanvasRenderingContext2D | null,
      isSupportTouch: 'ontouchstart' in window,
      events:
        'ontouchstart' in window
          ? ['touchstart', 'touchmove', 'touchend', 'touchleave']
          : ['mousedown', 'mousemove', 'mouseup', 'mouseleave'],
      isEmpty: true,
      isDrawing: false, // 添加绘制状态控制
    })

    // 修改事件处理函数的类型声明
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
      state.isEmpty = false
      emit('start')
    }

    const moveEventHandler: EventListener = (event: Event) => {
      const e = event as MouseEvent | TouchEvent
      e.preventDefault()
      if (!canvas.value || !state.ctx || !state.isDrawing) {
        return
      }

      const evt = state.isSupportTouch ? (e as TouchEvent).touches[0] : (e as MouseEvent)
      emit('signing', evt)

      const coverPos = canvas.value.getBoundingClientRect()
      const mouseX = evt.clientX - coverPos.left
      const mouseY = evt.clientY - coverPos.top

      state.ctx.lineTo(mouseX, mouseY)
      state.ctx.stroke()
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

    // 使用 useEventListener
    useEventListener(canvas, state.events[0], startEventHandler)
    useEventListener(canvas, state.events[1], moveEventHandler)
    useEventListener(canvas, state.events[2], endEventHandler)
    useEventListener(canvas, state.events[3], leaveEventHandler)

    onMounted(() => {
      if (isCanvasSupported && canvas.value && wrap.value) {
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
      state.isEmpty = true

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

      switch (props.type) {
        case 'png':
          return canvas.toDataURL('image/png')
        case 'jpg':
          return canvas.toDataURL('image/jpeg', 0.8)
        default:
          return canvas.toDataURL('image/png')
      }
    }

    // expose methods
    expose({
      confirm,
      clear,
      isEmpty: () => state.isEmpty, // 暴露 isEmpty
    })

    return {
      ...toRefs(state),
      canvas,
      wrap,
      isCanvasSupported,
      confirm,
      clear,
      translate,
      unsupportText,
      n,
    }
  },
})
</script>

<style lang="less">
@import './signature';
</style>
