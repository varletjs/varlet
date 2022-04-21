<template>
  <div
    ref="card"
    :class="classes(n(), [elevation, `var-elevation--${elevation}`, 'var-elevation--2'])"
    v-ripple="{ disabled: !ripple }"
    @click="onClick"
  >
    <div
      :class="n('floater')"
      :style="{
        width: floaterWidth,
        height: floaterHeight,
        top: floaterTop,
        left: floaterLeft,
        overflow: floaterOverflow,
        position: floaterPosition,
        zIndex: floating ? zIndex : 1,
        transition: `background-color 250ms, width ${floatingDuration}ms, top ${floatingDuration}ms, left ${floatingDuration}ms`,
      }"
    >
      <slot name="image">
        <img
          :class="n('image-row')"
          :style="{
            objectFit: fit,
            height: toSizeUnit(height),
            width: toSizeUnit(width),
          }"
          :src="src"
          :alt="alt"
          v-if="src && isRow"
        />
      </slot>

      <div :class="classes(n('container'), [isRow, n('container-row')])">
        <slot name="image">
          <img
            :class="n('image-column')"
            :style="{
              objectFit: fit,
              height: toSizeUnit(height),
              width: toSizeUnit(width),
            }"
            :src="src"
            :alt="alt"
            v-if="src && !isRow"
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
        <div :class="n('content')" :style="{ height: contentHeight }" v-if="$slots.content">
          <slot name="content" />
        </div>
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
import { ref, defineComponent, watch, computed } from 'vue'
import { props } from './props'
import { doubleRaf, toSizeUnit } from '../utils/elements'
import { createNamespace } from '../utils/components'
import { useZIndex } from '../context/zIndex'
import { useLock } from '../context/lock'
import type { Ref } from 'vue'

const { n, classes } = createNamespace('card')

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
    const { zIndex } = useZIndex(() => props.floating, 1)
    const isRow = computed(() => props.direction === 'row' && !props.floating)
    useLock(props, 'floating')

    let dropdownFloaterTop = 'auto'
    let dropdownFloaterLeft = 'auto'
    let dropper: any = null

    const floating = async () => {
      clearTimeout(dropper)

      const { width, height, left, top } = card.value!.getBoundingClientRect()
      holderWidth.value = toSizeUnit(width) as string
      holderHeight.value = toSizeUnit(height) as string
      floaterWidth.value = holderWidth.value
      floaterHeight.value = holderHeight.value
      floaterTop.value = toSizeUnit(top) as string
      floaterLeft.value = toSizeUnit(left) as string
      floaterPosition.value = 'fixed'
      floaterOverflow.value = 'auto'
      dropdownFloaterTop = floaterTop.value
      dropdownFloaterLeft = floaterLeft.value

      await doubleRaf()

      floaterWidth.value = '100vw'
      floaterHeight.value = '100vh'
      floaterTop.value = '0px'
      floaterLeft.value = '0px'
      contentHeight.value = 'auto'
    }

    const dropdown = () => {
      clearTimeout(dropper)

      floaterWidth.value = holderWidth.value
      floaterHeight.value = holderHeight.value
      floaterTop.value = dropdownFloaterTop
      floaterLeft.value = dropdownFloaterLeft
      contentHeight.value = '0px'

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
        value ? floating() : dropdown()
      }
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
