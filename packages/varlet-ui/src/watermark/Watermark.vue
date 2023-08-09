<template>
  <div :class="n()">
    <slot />
    <div
      ref="containerRef"
      :class="classes(n('container'), [fullscreen, n('full')])"
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
          <foreignObject v-if="showContent" x="0" y="0" :width="width" :height="height">
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
import { defineComponent, ref, watchEffect, type Ref, watch, nextTick, computed } from 'vue'
import { onSmartMounted, onSmartUnmounted } from '@varlet/use'

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
        }
      }
    }

    const svgToBlobUrl = (svgStr: string) => {
      const svgBlob = new Blob([svgStr], {
        type: 'image/svg+xml',
      })

      return URL.createObjectURL(svgBlob)
    }

    const showContent = computed(() => {
      // show slot content first
      if (slots.content) {
        return true
      }

      // if image isn't set, content will take effect
      if (props.content && !props.image) {
        return true
      }

      return false
    })

    // expose
    const resize = () => {
      if (containerRef.value) {
        textColor.value = getStyle(containerRef.value).color
      }
      nextTick(() => {
        if (svgRef.value) {
          watermarkUrl.value && URL.revokeObjectURL(watermarkUrl.value)
          watermarkUrl.value = svgToBlobUrl(svgRef.value.innerHTML)
        }
      })
    }

    watch(
      () => [
        imageUrl.value,
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
      () => {
        nextTick(() => {
          if (svgRef.value) {
            watermarkUrl.value && URL.revokeObjectURL(watermarkUrl.value)
            watermarkUrl.value = svgToBlobUrl(svgRef.value.innerHTML)
          }
        })
      },
      {
        immediate: true,
        deep: true,
      }
    )

    watchEffect(() => {
      props.image && imageToBase64()
    })

    onSmartMounted(() => {
      if (containerRef.value) {
        textColor.value = getStyle(containerRef.value).color
      }
    })

    onSmartUnmounted(() => {
      if (watermarkUrl.value) {
        URL.revokeObjectURL(watermarkUrl.value)
      }
    })

    return {
      n,
      classes,
      svgRef,
      containerRef,
      watermarkUrl,
      imageUrl,
      showContent,
      textColor,
      resize,
    }
  },
})
</script>

<style lang="less">
@import './watermark';
</style>
