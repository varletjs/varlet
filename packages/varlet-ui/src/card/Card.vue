<template>
  <div ref="card" :class="n()" @click="onClick">
    <div
      :class="
        classes(
          n('floater'),
          [elevation, `var-elevation--${elevation}`, 'var-elevation--2'],
          [isRow, n('--layout-row')]
        )
      "
      :style="{
        width: floaterWidth,
        height: floaterHeight,
        top: floaterTop,
        left: floaterLeft,
        overflow: floaterOverflow,
        position: floaterPosition,
        borderRadius: floating ? '0px' : undefined,
        zIndex,
        transition: `background-color 250ms, border-radius ${floatingDuration}ms, width ${floatingDuration}ms, height ${floatingDuration}ms, top ${floatingDuration}ms, left ${floatingDuration}ms`,
      }"
    >
      <div
        :class="n('image-row-container')"
        :style="{
          transition: `filter ${floatingDuration}ms, transform ${floatingDuration}ms, width ${floatingDuration}ms`,
          filter: `blur(${imageBlur})`,
          transformOrigin: 'right',
          transform: imageTransform,
          width: imageWidth ? imageWidth : undefined,
        }"
        v-if="isRow"
        v-ripple="{ disabled: !ripple }"
      >
        <slot name="image">
          <img
            :class="n('image-row')"
            :style="{
              objectFit: fit,
              height: toSizeUnit(height),
              width: imageWidth ? imageWidth : toSizeUnit(width),
            }"
            :src="src"
            :alt="alt"
            v-if="src"
          />
        </slot>
      </div>

      <div :class="classes(n('container'), [isRow, n('row-container')])" v-ripple="{ disabled: !ripple }">
        <slot name="image" v-if="!isRow">
          <img
            :class="n('image-column')"
            :style="{
              objectFit: fit,
              height: toSizeUnit(height),
              width: toSizeUnit(width),
            }"
            :src="src"
            :alt="alt"
            v-if="src"
          />
        </slot>
        <slot name="title">
          <div :class="n('title')" v-if="title">{{ title }}</div>
        </slot>
        <slot name="subtitle">
          <div :class="n('subtitle')" v-if="subtitle">{{ subtitle }}</div>
        </slot>
        <slot name="description">
          <div :class="n('description')" v-if="description">{{ description }}</div>
        </slot>
        <div :class="n('footer')" v-if="$slots.extra">
          <slot name="extra" />
        </div>
        <div
          :class="n('content')"
          :style="{
            height: contentHeight,
            opacity: contentOpacity,
            transition: `opacity ${floatingDuration * 2}ms`,
          }"
          v-if="$slots.content && isRow"
        >
          <slot name="content" />
        </div>
      </div>

      <div
        :class="n('content')"
        :style="{
          height: contentHeight,
          opacity: contentOpacity,
          transition: `opacity ${floatingDuration * 2}ms`,
        }"
        v-if="$slots.content && !isRow"
      >
        <slot name="content" />
      </div>
    </div>

    <div
      :class="n('holder')"
      :style="{
        width: holderWidth,
        height: holderHeight,
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import Ripple from '../ripple'
import { ref, defineComponent, watch, computed, nextTick } from 'vue'
import { props } from './props'
import { doubleRaf, toSizeUnit } from '../utils/elements'
import { createNamespace } from '../utils/components'
import { useZIndex } from '../context/zIndex'
import { useLock } from '../context/lock'
import type { Ref } from 'vue'

const { n, classes } = createNamespace('card')

const RIPPLE_DELAY = 300
const IMAGE_BLUR = '10px'
const IMAGE_TRANSFORM = `translate3d(-10%, 0, 0)`
const IMAGE_WIDTH = '30vw'

export default defineComponent({
  name: 'VarCard',
  directives: { Ripple },
  props,
  setup(props) {
    const card: Ref<null | HTMLElement> = ref(null)
    const holderWidth: Ref<string> = ref('auto')
    const holderHeight: Ref<string> = ref('auto')
    const floaterWidth: Ref<string> = ref('auto')
    const floaterHeight: Ref<string> = ref('auto')
    const floaterTop: Ref<string> = ref('auto')
    const floaterLeft: Ref<string> = ref('auto')
    const floaterPosition: Ref<string> = ref('static')
    const floaterOverflow: Ref<string> = ref('hidden')
    const contentHeight: Ref<string> = ref('0px')
    const contentOpacity: Ref<string> = ref('0')
    const imageBlur: Ref<string> = ref('0')
    const imageTransform: Ref<string> = ref('')
    const imageWidth: Ref<string> = ref('')
    const { zIndex } = useZIndex(() => props.floating, 1)
    const isRow = computed(() => props.layout === 'row')
    useLock(props, 'floating')

    let dropdownFloaterTop = 'auto'
    let dropdownFloaterLeft = 'auto'
    let dropper: any = null
    let floater: any = null

    const floating = async () => {
      clearTimeout(floater)
      clearTimeout(dropper)

      floater = setTimeout(
        async () => {
          const { width, height, left, top } = card.value!.getBoundingClientRect()
          holderWidth.value = toSizeUnit(width) as string
          holderHeight.value = toSizeUnit(height) as string
          floaterWidth.value = holderWidth.value
          floaterHeight.value = holderHeight.value
          floaterTop.value = toSizeUnit(top) as string
          floaterLeft.value = toSizeUnit(left) as string
          floaterPosition.value = 'fixed'
          dropdownFloaterTop = floaterTop.value
          dropdownFloaterLeft = floaterLeft.value

          await doubleRaf()

          floaterWidth.value = '100vw'
          floaterHeight.value = '100vh'
          floaterTop.value = '0px'
          floaterLeft.value = '0px'
          contentHeight.value = 'auto'
          contentOpacity.value = '1'
          floaterOverflow.value = 'auto'
          imageBlur.value = IMAGE_BLUR
          imageTransform.value = IMAGE_TRANSFORM
          imageWidth.value = IMAGE_WIDTH
        },
        props.ripple ? RIPPLE_DELAY : 0
      )
    }

    const dropdown = () => {
      clearTimeout(dropper)
      clearTimeout(floater)

      floaterWidth.value = holderWidth.value
      floaterHeight.value = holderHeight.value
      floaterTop.value = dropdownFloaterTop
      floaterLeft.value = dropdownFloaterLeft
      contentHeight.value = '0px'
      contentOpacity.value = '0'
      imageBlur.value = '0'
      imageTransform.value = ''
      imageWidth.value = ''

      dropper = setTimeout(() => {
        holderWidth.value = 'auto'
        holderHeight.value = 'auto'
        floaterWidth.value = 'auto'
        floaterHeight.value = 'auto'
        floaterTop.value = 'auto'
        floaterLeft.value = 'auto'
        dropdownFloaterTop = 'auto'
        dropdownFloaterLeft = 'auto'
        floaterOverflow.value = 'hidden'
        floaterPosition.value = 'static'
      }, props.floatingDuration)
    }

    watch(
      () => props.floating,
      (value) => {
        nextTick(() => {
          value ? floating() : dropdown()
        })
      },
      { immediate: true }
    )

    return {
      n,
      classes,
      toSizeUnit,
      card,
      holderWidth,
      holderHeight,
      floaterWidth,
      floaterHeight,
      floaterTop,
      floaterLeft,
      floaterPosition,
      floaterOverflow,
      contentHeight,
      contentOpacity,
      imageWidth,
      imageBlur,
      imageTransform,
      zIndex,
      isRow,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../ripple/ripple';
@import './card';
</style>
