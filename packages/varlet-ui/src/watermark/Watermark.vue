<template>
  <div :class="n()">
    <slot />
    <div
      :class="classes(n('wrapper'), [fullScreen, n('full')])"
      :style="{
        backgroundImage: `url(${WatermarkUrl})`,
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
          <foreignObject
            v-if="showContent"
            x="0"
            y="0"
            :width="width"
            :height="height"
            :style="{
              position: 'relative',
            }"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              :style="{
                position: 'absolute',
                top: `${offsetY}px`,
                left: `${offsetX}px`,
                transform: `rotate(${rotate}deg)`,
                transformOrigin: 'center',
              }"
            >
              <slot name="content">
                <span :style="{ color, ...fontStyle }">{{ content }}</span>
              </slot>
            </div>
          </foreignObject>
          <image
            v-if="showImage"
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
import { defineComponent, ref, watchEffect, onUnmounted, type Ref, watch, nextTick, computed } from 'vue'
import { toNumber } from '@varlet/shared'
import { createNamespace } from '../utils/components'
import { props } from './props'

const { n, classes } = createNamespace('watermark')

export default defineComponent({
  name: 'VarWatermark',
  props,
  setup(props, { slots }) {
    const WatermarkUrl: Ref<string> = ref('')
    const imageUrl: Ref<string> = ref('')
    const svgRef: Ref<SVGElement | null> = ref(null)
    const isImageLoaded: Ref<boolean> = ref(false)

    const imageToBase64 = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      if (ctx && props.image) {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.referrerPolicy = 'no-referrer'
        img.src = props.image

        img.onload = () => {
          canvas.width = img.width
          canvas.height = img.height
          ctx.drawImage(img, 0, 0)
          imageUrl.value = canvas.toDataURL()
          isImageLoaded.value = true
        }

        img.onerror = () => {
          isImageLoaded.value = false
        }
      }
    }

    const svgToBlobUrl = (svgStr: string) => {
      const svgBlob = new Blob([svgStr], {
        type: 'image/svg+xml',
      })

      return URL.createObjectURL(svgBlob)
    }

    const fontStyle = computed(() =>
      Object.assign(props.font, {
        fontSize: `${toNumber(props.font.fontSize)}px`,
      })
    )

    const showImage = computed(() => {
      // show slot content first
      if (slots.content) {
        return false
      }

      if (props.image && isImageLoaded.value) {
        return true
      }

      return false
    })

    const showContent = computed(() => {
      if (slots.content) {
        return true
      }

      // if image loading failed and content isn't empty, content will take effect
      if (props.content && (!props.image || !isImageLoaded.value)) {
        return true
      }

      return false
    })

    watch(
      () => [imageUrl.value, props.content, props.height, props.width, props.rotate, props.gapX, props.gapY],
      () => {
        nextTick(() => {
          if (svgRef.value) {
            WatermarkUrl.value && URL.revokeObjectURL(WatermarkUrl.value)
            WatermarkUrl.value = svgToBlobUrl(svgRef.value.innerHTML)
          }
        })
      },
      {
        immediate: true,
      }
    )

    watchEffect(() => {
      if (props.image) {
        imageToBase64()
      }
    })

    onUnmounted(() => {
      if (WatermarkUrl.value) {
        URL.revokeObjectURL(WatermarkUrl.value)
      }
    })

    return {
      svgRef,
      WatermarkUrl,
      imageUrl,
      isImageLoaded,
      fontStyle,
      showImage,
      showContent,
      n,
      classes,
    }
  },
})
</script>

<style lang="less">
@import './Watermark.less';
</style>
