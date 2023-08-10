<template>
  <div :class="n()">
    <slot />
    <div
      ref="containerRef"
      :class="classes(n('container'), [fullscreen, n('--fullscreen')])"
      :style="{
        backgroundImage: `url(${watermarkUrl})`,
        zIndex: zIndex,
      }"
    >
      <div style="display: none" ref="svgRef">
        <svg
          :viewBox="`0 0 ${width + gapX} ${height + gapY}`"
          :width="`${width + gapX}`"
          :height="`${height + gapY}`"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          :style="{
            padding: `0 ${gapX}px ${gapY}px 0`,
            opacity: opacity,
          }"
        >
          <foreignObject v-if="showContent()" x="0" y="0" :width="width" :height="height">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              :style="{
                transform: `translate(${offsetX}px, ${offsetY}px) rotate(${rotate}deg)`,
                transformOrigin: 'center',
              }"
            >
              <slot name="content">
                <span :style="{ ...font, fontSize: `${font.fontSize}px`, color: textColor }">{{ content }}</span>
              </slot>
            </div>
          </foreignObject>
          <image
            v-if="!$slots.content && image"
            :href="imageUrl"
            :xlink:href="imageUrl"
            :x="offsetX"
            :y="offsetY"
            :width="width"
            :height="height"
            :style="{
              transformOrigin: 'center',
              transform: `rotate(${rotate}deg)`,
            }"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, type Ref, watch, nextTick, onUnmounted, onMounted } from 'vue'

import { createNamespace } from '../utils/components'
import { props } from './props'
import { getStyle } from '../utils/elements'

const { n, classes } = createNamespace('watermark')

export default defineComponent({
  name: 'VarWatermark',
  props,
  setup(props, { slots }) {
    const watermarkUrl: Ref<string> = ref('')
    const imageUrl: Ref<string> = ref('')
    const svgRef: Ref<SVGElement | null> = ref(null)
    const containerRef: Ref<Element | null> = ref(null)
    const textColor: Ref<string> = ref('')

    const showContent = () => {
      // show slot content first
      if (slots.content) {
        return true
      }

      // if image isn't set, content will take effect
      if (props.content && !props.image) {
        return true
      }

      return false
    }

    const imageToBase64 = async (): Promise<string> =>
      new Promise((resolve) => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        if (ctx) {
          const img = new Image()
          img.crossOrigin = 'anonymous'
          img.referrerPolicy = 'no-referrer'
          img.src = props.image

          img.onload = () => {
            canvas.width = img.width
            canvas.height = img.height
            ctx.drawImage(img, 0, 0)
            resolve(canvas.toDataURL())
          }
        }
      })

    const svgToBlobUrl = (svgStr: string) => {
      const svgBlob = new Blob([svgStr], {
        type: 'image/svg+xml',
      })

      return URL.createObjectURL(svgBlob)
    }

    const revokeWatermarkUrl = () => {
      watermarkUrl.value && URL.revokeObjectURL(watermarkUrl.value)
    }

    // expose
    const resize = async () => {
      if (containerRef.value) {
        textColor.value = getStyle(containerRef.value).color
      }

      if (props.image) {
        imageUrl.value = await imageToBase64()
      }

      await nextTick(() => {
        if (svgRef.value) {
          revokeWatermarkUrl()
          watermarkUrl.value = svgToBlobUrl(svgRef.value.innerHTML)
        }
      })
    }

    watch(
      () => [
        props.image,
        props.font,
        props.content,
        props.height,
        props.width,
        props.rotate,
        props.gapX,
        props.gapY,
        props.offsetX,
        props.offsetY,
        props.opacity,
      ],
      resize,
      {
        deep: true,
      }
    )

    onMounted(resize)

    onUnmounted(revokeWatermarkUrl)

    return {
      n,
      classes,
      svgRef,
      containerRef,
      watermarkUrl,
      imageUrl,
      textColor,
      showContent,
      resize,
    }
  },
})
</script>

<style lang="less">
@import './watermark';
</style>
