<template>
  <div ref="root" :class="n()">
    <canvas ref="canvas" :height="canvasHeight" :width="canvasWidth"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { call, getRect, getStyle } from '@varlet/shared'
import { onWindowResize, useEventListener } from '@varlet/use'
import { createNamespace } from '../utils/components'
import { props } from './props'

const { name, n } = createNamespace('signature')

export default defineComponent({
  name,
  props,
  setup(props) {
    const root = ref<HTMLElement>()
    const canvas = ref<HTMLCanvasElement>()
    const canvasWidth = ref(0)
    const canvasHeight = ref(0)
    let isSigning = false
    let ctx: CanvasRenderingContext2D | null = null

    useEventListener(canvas, 'touchstart', handleTouchstart)
    useEventListener(canvas, 'touchmove', handleTouchmove)
    useEventListener(canvas, 'touchend', handleTouchend)

    onWindowResize(resize)
    onMounted(resize)

    function resize() {
      if (!canvas.value || !root.value) {
        return
      }

      ctx = canvas.value.getContext('2d')
      canvasWidth.value = root.value.offsetWidth
      canvasHeight.value = root.value.offsetHeight
    }

    function handleTouchstart(event: TouchEvent) {
      if (!ctx || !root.value) {
        return
      }

      event.preventDefault()
      isSigning = true

      ctx.beginPath()
      ctx.lineWidth = props.lineWidth
      ctx.strokeStyle = props.strokeStyle === 'currentColor' ? getStyle(root.value).color : props.strokeStyle

      call(props.onStart)
    }

    function handleTouchmove(event: TouchEvent) {
      event.preventDefault()
      if (!canvas.value || !ctx || !isSigning) {
        return
      }

      const clientX = event.touches[0].clientX
      const clientY = event.touches[0].clientY
      const rect = getRect(canvas.value)
      const x = clientX - rect.left
      const y = clientY - rect.top

      ctx.lineTo(x, y)
      ctx.stroke()

      call(props.onSigning, { clientX, clientY, x, y })
    }

    function handleTouchend(event: Event) {
      event.preventDefault()
      isSigning = false
      call(props.onEnd)
    }

    function getDataUrl(canvas: HTMLCanvasElement) {
      switch (props.dataUrlType) {
        case 'png':
          return canvas.toDataURL('image/png')
        case 'jpg':
          return canvas.toDataURL('image/jpeg')
        default:
          return canvas.toDataURL('image/png')
      }
    }

    function isCanvasEmpty(canvas: HTMLCanvasElement) {
      if (!canvas) {
        return true
      }

      const emptyCanvas = document.createElement('canvas')
      emptyCanvas.width = canvas.width
      emptyCanvas.height = canvas.height

      return canvas.toDataURL() === emptyCanvas.toDataURL()
    }

    // expose
    function reset() {
      if (!ctx) {
        return
      }

      isSigning = false
      ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value)
      ctx.closePath()
    }

    // expose
    function confirm() {
      if (!canvas.value) {
        return
      }

      if (isCanvasEmpty(canvas.value)) {
        return ''
      }

      return getDataUrl(canvas.value)
    }

    return {
      root,
      canvas,
      canvasWidth,
      canvasHeight,
      n,
      confirm,
      reset,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './signature';
</style>
