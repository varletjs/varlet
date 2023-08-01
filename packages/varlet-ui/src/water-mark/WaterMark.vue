<template>
  <div :class="n()">
    <slot />
    <div
      :class="classes(n('wrapper'), [fullScreen, n('full')])"
      :style="{ backgroundImage: `url(${waterMarkUrl})`, zIndex: zIndex }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, type Ref } from 'vue'
import { toNumber } from '@varlet/shared'
import { createNamespace } from '../utils/components'
import { props, Font } from './props'

const { n, classes } = createNamespace('water-mark')

export default defineComponent({
  name: 'VarWaterMark',
  props,
  setup(props) {
    const waterMarkUrl: Ref<string> = ref('')

    const getPixelRatio = () => window.devicePixelRatio || 1

    const drawText = (
      text: string,
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D,
      rotate: string | number,
      opacity: string | number,
      font: Font
    ) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.rotate((toNumber(rotate) * Math.PI) / 180)
      ctx.globalAlpha = toNumber(opacity)
      ctx.textAlign = 'center'
      ctx.font = `${font.fontStyle} ${font.fontWeight} ${font.fontSize} ${font.fontFamily}`
      ctx.fillStyle = `${font.fontColor}`
      ctx.fillText(`${text}`, 0, 0)
      waterMarkUrl.value = canvas.toDataURL()
    }

    const drawImage = (
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D,
      img: HTMLImageElement,
      rotate: string | number
    ) => {
      const ratio = getPixelRatio()
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.rotate((toNumber(rotate) * Math.PI) / 180)
      ctx.drawImage(img, 0, 0, canvas.width * ratio, canvas.height * ratio)
    }

    const canvasToBase64 = () => {
      const {
        width,
        height,
        content,
        rotate,
        gapX,
        gapY,
        image,
        opacity,
        font = {
          fontColor: 'gray',
          fontSize: '16px',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: 'sans-serif',
        },
      } = props
      const canvas = document.createElement('canvas')
      canvas.width = width + gapX
      canvas.height = height + gapY
      const ctx = canvas.getContext('2d')
      canvas.style.transform = 'scale(0.5, 0.5)'
      canvas.style.transformOrigin = '0 0'

      if (ctx) {
        content && drawText(content, canvas, ctx, rotate, opacity, font)

        if (image) {
          const img = new Image()
          img.crossOrigin = 'anonymous'
          img.referrerPolicy = 'no-referrer'
          img.onload = () => {
            drawImage(canvas, ctx, img, rotate)
            waterMarkUrl.value = canvas.toDataURL()
          }
          img.onerror = () => {
            content && drawText(content, canvas, ctx, rotate, opacity, font)
          }
          img.src = image
        }
      }
    }

    watchEffect(() => {
      if (props.image || props.content) {
        canvasToBase64()
      }
    })

    return {
      waterMarkUrl,
      n,
      classes,
    }
  },
})
</script>

<style lang="less">
@import './waterMark.less';
</style>
