<template>
  <div
    ref="card"
    v-ripple="{ disabled: normalizedRipple.disabled || floater, color: normalizedRipple.color }"
    v-hover:desktop="handleHovering"
    :class="
      classes(
        n(),
        [isRow, n('--layout-row')],
        [variant === 'outlined' || outline, n('--outline')],
        [variant === 'filled', n('--filled')],
        [surfaceLow, n('--surface-low')],
        [!normalizedHoverable.disabled, n('--cursor')],
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

      <var-hover-overlay
        :hovering="!normalizedHoverable.disabled && !floated ? hovering : false"
        :color="normalizedHoverable.color"
      />

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
import { call, doubleRaf, getRect, isPlainObject } from '@varlet/shared'
import { computed, defineComponent, nextTick, ref, watch } from 'vue'
import VarButton from '../button'
import { useLock } from '../context/lock'
import { useZIndex } from '../context/zIndex'
import Hover from '../hover'
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'
import VarIcon from '../icon'
import Ripple from '../ripple'
import { createNamespace, formatElevation } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { type CardHoverable, type CardRipple, props } from './props'

const { name, n, classes } = createNamespace('card')

const RIPPLE_DELAY = 500

export default defineComponent({
  name,
  directives: { Ripple, Hover },
  components: {
    VarIcon,
    VarButton,
    VarHoverOverlay,
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
    const floaterPosition = ref<'fixed' | undefined>(undefined)
    const floaterOverflow = ref('hidden')
    const contentHeight = ref('0px')
    const opacity = ref('0')
    const isRow = computed(() => props.layout === 'row')
    const surfaceLow = computed(() => props.surface === 'low' && props.variant !== 'filled')
    const { hovering, handleHovering } = useHoverOverlay()
    const showFloatingButtons = ref(false)
    const floated = ref(false)
    const { zIndex } = useZIndex(() => props.floating, 1)
    const normalizedRipple = computed(() => normalizeRipple(props.ripple))
    const normalizedHoverable = computed(() => normalizeHoverable(props.hoverable))

    let dropdownFloaterTop = 'auto'
    let dropdownFloaterLeft = 'auto'
    let dropper: any = null
    const floater: any = ref(null)
    let hasEnteredFloating = false

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
          if (value) {
            hasEnteredFloating = true
            floating()
          } else if (hasEnteredFloating) {
            dropdown()
          }
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
        normalizedRipple.value.disabled ? 0 : RIPPLE_DELAY,
      )
    }

    function normalizeRipple(value: boolean | CardRipple) {
      if (isPlainObject(value)) {
        return {
          disabled: !!value.disabled,
          color: value.color,
        }
      }

      return {
        disabled: !value,
        color: undefined,
      }
    }

    function normalizeHoverable(value: boolean | CardHoverable) {
      if (isPlainObject(value)) {
        return {
          disabled: !!value.disabled,
          color: value.color,
        }
      }

      return {
        disabled: !value,
        color: undefined,
      }
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
      surfaceLow,
      normalizedRipple,
      normalizedHoverable,
      hovering,
      handleHovering,
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
@import '../hover-overlay/hoverOverlay';
@import '../ripple/ripple';
@import '../loading/loading';
@import '../button/button';
@import './card';
</style>
