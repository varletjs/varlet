<template>
  <div
    ref="card"
    v-ripple="{ disabled: !ripple || floater }"
    :class="
      classes(
        n(),
        [isRow, n('--layout-row')],
        [variant === 'outlined' || outline, n('--outline')],
        [variant === 'filled', n('--filled')],
        [variant === 'standard' || outline, formatElevation(elevation, 1)],
      )
    "
    :style="{
      zIndex: floated ? zIndex : undefined,
    }"
    @click="handleClick"
  >
    <div
      ref="cardFloater"
      :class="n('floater')"
      :style="{
        width: floaterWidth,
        height: floaterHeight,
        top: floaterTop,
        left: floaterLeft,
        overflow: floaterOverflow,
        position: floaterPosition,
        zIndex: floated ? zIndex : undefined,
        background: outline && !floated ? 'transparent' : undefined,
        transition: floated
          ? `background-color ${floatingDuration}ms, color ${floatingDuration}ms, width ${floatingDuration}ms, height ${floatingDuration}ms, top ${floatingDuration}ms, left ${floatingDuration}ms`
          : undefined,
      }"
    >
      <slot name="image">
        <img
          v-if="src"
          :class="n('image')"
          :style="{
            objectFit: fit,
            height: toSizeUnit(imageHeight),
            width: toSizeUnit(imageWidth),
          }"
          :src="src"
          :alt="alt"
        />
      </slot>

      <div :class="n('container')">
        <slot name="title" :slot-class="n('title')">
          <div v-if="title" :class="n('title')">{{ title }}</div>
        </slot>
        <slot name="subtitle" :slot-class="n('subtitle')">
          <div v-if="subtitle" :class="n('subtitle')">{{ subtitle }}</div>
        </slot>
        <div v-if="$slots.default" :class="n('content')">
          <slot />
        </div>
        <slot name="description" :slot-class="n('description')">
          <div v-if="description" :class="n('description')">{{ description }}</div>
        </slot>
        <div v-if="$slots.extra" :class="n('footer')">
          <slot name="extra" />
        </div>
        <div
          v-if="$slots['floating-content'] && !isRow"
          :class="n('floating-content')"
          :style="{
            height: contentHeight,
            opacity,
            transition: `opacity ${floatingDuration * 2}ms`,
          }"
        >
          <slot name="floating-content" />
        </div>
      </div>

      <div
        v-if="showFloatingButtons"
        :class="classes(n('floating-buttons'), n('$--box'))"
        :style="{
          zIndex,
          opacity,
          transition: `opacity ${floatingDuration * 2}ms`,
        }"
      >
        <slot name="close-button">
          <var-button var-card-cover :class="classes(n('close-button'), n('$-elevation--6'))" @click.stop="close">
            <var-icon var-card-cover name="window-close" :class="n('close-button-icon')" />
          </var-button>
        </slot>
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
import { computed, defineComponent, nextTick, ref, watch } from 'vue'
import { call, doubleRaf, getRect } from '@varlet/shared'
import VarButton from '../button'
import { useLock } from '../context/lock'
import { useZIndex } from '../context/zIndex'
import VarIcon from '../icon'
import Ripple from '../ripple'
import { createNamespace, formatElevation } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props } from './props'

const { name, n, classes } = createNamespace('card')

const RIPPLE_DELAY = 500

export default defineComponent({
  name,
  directives: { Ripple },
  components: {
    VarIcon,
    VarButton,
  },
  props,
  setup(props) {
    const card = ref<null | HTMLElement>(null)
    const cardFloater = ref<null | HTMLElement>(null)
    const holderWidth = ref('auto')
    const holderHeight = ref('auto')
    const floaterWidth = ref('100%')
    const floaterHeight = ref('100%')
    const floaterTop = ref('auto')
    const floaterLeft = ref('auto')
    const floaterPosition = ref<'static' | 'absolute' | 'fixed' | 'relative' | 'sticky' | undefined>(undefined)
    const floaterOverflow = ref('hidden')
    const contentHeight = ref('0px')
    const opacity = ref('0')
    const isRow = computed(() => props.layout === 'row')
    const showFloatingButtons = ref(false)
    const floated = ref(false)
    const { zIndex } = useZIndex(() => props.floating, 1)

    let dropdownFloaterTop = 'auto'
    let dropdownFloaterLeft = 'auto'
    let dropper: any = null
    const floater: any = ref(null)

    useLock(
      () => props.floating,
      () => !isRow.value,
    )

    watch(
      () => props.floating,
      (value) => {
        if (isRow.value) {
          return
        }

        nextTick(() => {
          value ? floating() : dropdown()
        })
      },
      { immediate: true },
    )

    function floating() {
      clearTimeout(floater.value)
      clearTimeout(dropper)

      floater.value = null

      floater.value = setTimeout(
        async () => {
          const { width, height, left, top } = getRect(card.value!)
          holderWidth.value = toSizeUnit(width)!
          holderHeight.value = toSizeUnit(height)!
          floaterWidth.value = holderWidth.value
          floaterHeight.value = holderHeight.value
          floaterTop.value = toSizeUnit(top)!
          floaterLeft.value = toSizeUnit(left)!
          floaterPosition.value = 'fixed'
          dropdownFloaterTop = floaterTop.value
          dropdownFloaterLeft = floaterLeft.value
          showFloatingButtons.value = true

          await doubleRaf()

          floaterTop.value = '0'
          floaterLeft.value = '0'
          floaterWidth.value = '100vw'
          floaterHeight.value = '100vh'
          contentHeight.value = 'auto'
          opacity.value = '1'
          floaterOverflow.value = 'auto'
          floated.value = true
        },
        props.ripple ? RIPPLE_DELAY : 0,
      )
    }

    function dropdown() {
      clearTimeout(dropper)
      clearTimeout(floater.value)
      floater.value = null

      floaterWidth.value = holderWidth.value
      floaterHeight.value = holderHeight.value
      floaterTop.value = dropdownFloaterTop
      floaterLeft.value = dropdownFloaterLeft
      contentHeight.value = '0px'
      opacity.value = '0'
      showFloatingButtons.value = false

      dropper = setTimeout(() => {
        holderWidth.value = 'auto'
        holderHeight.value = 'auto'
        floaterWidth.value = '100%'
        floaterHeight.value = '100%'
        floaterTop.value = 'auto'
        floaterLeft.value = 'auto'
        dropdownFloaterTop = 'auto'
        dropdownFloaterLeft = 'auto'
        floaterOverflow.value = 'hidden'
        floaterPosition.value = undefined
        floated.value = false
      }, props.floatingDuration)
    }

    function close() {
      call(props['onUpdate:floating'], false)
    }

    function handleClick(e: Event) {
      call(props.onClick, e)
    }

    return {
      card,
      cardFloater,
      holderWidth,
      holderHeight,
      floater,
      floaterWidth,
      floaterHeight,
      floaterTop,
      floaterLeft,
      floaterPosition,
      floaterOverflow,
      contentHeight,
      opacity,
      zIndex,
      isRow,
      showFloatingButtons,
      floated,
      n,
      classes,
      toSizeUnit,
      close,
      formatElevation,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../ripple/ripple';
@import '../loading/loading';
@import '../button/button';
@import './card';
</style>
