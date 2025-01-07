<template>
  <div
    ref="bottomNavigationDom"
    :class="
      classes(
        n(),
        n('$--box'),
        [fixed, n('--fixed')],
        [border, n('--border')],
        [safeArea, n('--safe-area')],
        [variant, n('--variant')],
      )
    "
    :style="`z-index:${zIndex}`"
    v-bind="$attrs"
  >
    <slot />

    <var-button
      v-if="$slots.fab"
      :class="classes(n('fab'), [length % 2, n('--fab-right'), n('--fab-center')])"
      var-bottom-navigation__fab
      v-bind="fabProps"
      @click="handleFabClick"
    >
      <slot name="fab"></slot>
    </var-button>
  </div>

  <div v-if="fixed && placeholder" :class="n('placeholder')" :style="{ height: placeholderHeight }" />
</template>

<script lang="ts">
import { computed, defineComponent, onUpdated, ref, watch } from 'vue'
import { call, getRect, isNumber, normalizeToArray } from '@varlet/shared'
import { onSmartMounted, onWindowResize } from '@varlet/use'
import { type BottomNavigationItemProvider } from '../bottom-navigation-item/provide'
import VarButton from '../button'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props } from './props'
import { useBottomNavigationItems, type BottomNavigationProvider } from './provide'

const { name, n, classes } = createNamespace('bottom-navigation')
const { n: nItem } = createNamespace('bottom-navigation-item')

const RIGHT_HALF_SPACE_CLASS = nItem('--right-half-space')
const LEFT_HALF_SPACE_CLASS = nItem('--left-half-space')
const RIGHT_SPACE_CLASS = nItem('--right-space')
const defaultFabProps = {
  type: 'primary',
}

export default defineComponent({
  name,
  components: { VarButton },
  props,
  setup(props, { slots }) {
    const bottomNavigationDom = ref<HTMLElement | null>(null)
    const active = computed<number | string | undefined>(() => props.active)
    const activeColor = computed<string | undefined>(() => props.activeColor)
    const inactiveColor = computed<string | undefined>(() => props.inactiveColor)
    const variant = computed<boolean | undefined>(() => props.variant)
    const placeholderHeight = ref<string | undefined>()
    const fabProps = ref({})
    const { length, bottomNavigationItems, bindBottomNavigationItem } = useBottomNavigationItems()

    const bottomNavigationProvider: BottomNavigationProvider = {
      active,
      activeColor,
      inactiveColor,
      variant,
      onToggle,
    }

    bindBottomNavigationItem(bottomNavigationProvider)

    watch(() => length.value, matchBoundary)

    watch(
      () => props.fabProps,
      (newValue) => {
        fabProps.value = { ...defaultFabProps, ...newValue }
      },
      { immediate: true, deep: true },
    )

    onWindowResize(resizePlaceholder)

    onSmartMounted(() => {
      resizePlaceholder()

      if (!slots.fab) {
        return
      }

      addMarginClass(length.value)
    })

    onUpdated(() => {
      removeMarginClass()

      if (!slots.fab) {
        return
      }

      addMarginClass(length.value)
    })

    function matchBoundary() {
      if (length.value === 0 || matchName() || matchIndex()) {
        return
      }

      handleActiveIndex()
    }

    function matchName(): BottomNavigationItemProvider | undefined {
      return bottomNavigationItems.find(({ name }: BottomNavigationItemProvider) => active.value === name.value)
    }

    function matchIndex(): BottomNavigationItemProvider | undefined {
      return bottomNavigationItems.find(({ index }: BottomNavigationItemProvider) => active.value === index.value)
    }

    function handleActiveIndex() {
      if (!isNumber(active.value)) {
        return
      }

      if (active.value < 0) {
        call(props['onUpdate:active'], 0)
      } else if (active.value > length.value - 1) {
        call(props['onUpdate:active'], length.value - 1)
      }
    }

    function onToggle(changedValue: number | string) {
      if (active.value === changedValue) {
        return
      }

      props.onBeforeChange ? handleBeforeChange(changedValue) : handleChange(changedValue)
    }

    function handleBeforeChange(changedValue: number | string) {
      const results = normalizeToArray(call(props.onBeforeChange, changedValue))

      Promise.all(results).then((results) => {
        if (results.every(Boolean)) {
          handleChange(changedValue)
        }
      })
    }

    function handleChange(changedValue: number | string) {
      call(props['onUpdate:active'], changedValue)
      call(props.onChange, changedValue)
    }

    function removeMarginClass() {
      const bottomNavigationItems: Element[] = getBottomNavigationItems()
      bottomNavigationItems.forEach((dom: Element) => {
        dom.classList.remove(RIGHT_HALF_SPACE_CLASS, LEFT_HALF_SPACE_CLASS, RIGHT_SPACE_CLASS)
      })
    }

    function addMarginClass(length: number) {
      const bottomNavigationItems: Element[] = getBottomNavigationItems()
      const itemsNum = bottomNavigationItems.length
      const isEven = length % 2 === 0

      bottomNavigationItems.forEach((bottomNavigationItem: Element, i: number) => {
        handleMarginClass(isEven, bottomNavigationItem, i, itemsNum)
      })
    }

    function handleMarginClass(isEven: boolean, dom: Element, i: number, length: number) {
      const isLast = i === length - 1
      if (!isEven && isLast) {
        dom.classList.add(RIGHT_SPACE_CLASS)
        return
      }

      const isFabLeft = i === length / 2 - 1
      const isFabRight = i === length / 2
      if (isFabLeft) {
        dom.classList.add(RIGHT_HALF_SPACE_CLASS)
      } else if (isFabRight) {
        dom.classList.add(LEFT_HALF_SPACE_CLASS)
      }
    }

    function getBottomNavigationItems() {
      return Array.from(bottomNavigationDom.value!.querySelectorAll(`.${nItem()}`))
    }

    function handleFabClick() {
      call(props.onFabClick)
    }

    function resizePlaceholder() {
      if (!props.fixed || !props.placeholder) {
        return
      }

      const { height } = getRect(bottomNavigationDom.value!)
      placeholderHeight.value = toSizeUnit(height)
    }

    return {
      length,
      bottomNavigationDom,
      fabProps,
      placeholderHeight,
      n,
      classes,
      handleFabClick,
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
@import './bottomNavigation';
</style>
