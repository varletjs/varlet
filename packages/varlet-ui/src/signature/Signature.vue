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
    })

    const addEvent = () => {
      if (!canvas.value) {
        return
      }
      canvas.value.addEventListener(state.events[0], startEventHandler as EventListener, false)
    }

    const startEventHandler = (event: MouseEvent | TouchEvent) => {
      event.preventDefault()
      if (!state.ctx || props.disabled) {
        return
      }

      state.ctx.beginPath()
      state.ctx.lineWidth = props.lineWidth
      state.ctx.strokeStyle = props.strokeStyle
      state.isEmpty = false
      emit('start')

      if (!canvas.value) {
        return
      }
      canvas.value.addEventListener(state.events[1], moveEventHandler as EventListener, false)
      canvas.value.addEventListener(state.events[2], endEventHandler as EventListener, false)
      canvas.value.addEventListener(state.events[3], leaveEventHandler as EventListener, false)
    }

    const moveEventHandler = (event: MouseEvent | TouchEvent) => {
      event.preventDefault()
      if (!canvas.value || !state.ctx) {
        return
      }

      const evt = state.isSupportTouch ? (event as TouchEvent).touches[0] : (event as MouseEvent)

      emit('signing', evt)
      const coverPos = canvas.value.getBoundingClientRect()
      const mouseX = evt.clientX - coverPos.left
      const mouseY = evt.clientY - coverPos.top

      state.ctx.lineTo(mouseX, mouseY)
      state.ctx.stroke()
    }

    const endEventHandler = (event: MouseEvent | TouchEvent) => {
      event.preventDefault()
      emit('end')
      if (!canvas.value) {
        return
      }

      canvas.value.removeEventListener(state.events[1], moveEventHandler as EventListener, false)
      canvas.value.removeEventListener(state.events[2], endEventHandler as EventListener, false)

      // 移除验证相关代码
    }

    const leaveEventHandler = (event: MouseEvent | TouchEvent) => {
      event.preventDefault()
      if (!canvas.value) {
        return
      }

      canvas.value.removeEventListener(state.events[1], moveEventHandler as EventListener, false)
      canvas.value.removeEventListener(state.events[2], endEventHandler as EventListener, false)
    }

    const clear = () => {
      if (!canvas.value || !state.ctx) {
        return
      }

      canvas.value.addEventListener(state.events[2], endEventHandler as EventListener, false)
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

    onMounted(() => {
      if (isCanvasSupported && canvas.value && wrap.value) {
        state.ctx = canvas.value.getContext('2d')
        state.canvasWidth = wrap.value.offsetWidth
        state.canvasHeight = wrap.value.offsetHeight
        addEvent()
      }
    })

    // expose methods
    expose({
      confirm,
      clear,
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
