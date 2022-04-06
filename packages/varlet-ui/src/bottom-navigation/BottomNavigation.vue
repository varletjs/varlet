<template>
  <div
    :class="classes(n(), [fixed, n('--fixed')], [border, n('--border')])"
    ref="bottomNavigationDom"
    :style="`z-index:${zIndex}`"
  >
    <slot></slot>

    <var-button
      v-if="$slots.fab"
      :class="classes(n('fab'), [length % 2, n('--fab-right'), n('--fab-center')])"
      var-bottom-navigation__fab
      @click="handleFabClick"
      v-bind="fabProps"
      round
    >
      <slot name="fab"></slot>
    </var-button>
  </div>
</template>

<script lang="ts">
import VarButton from '../button'
import { defineComponent, ref, computed, onMounted, onUpdated, watch } from 'vue'
import { props } from './props'
import { useBottomNavigationItems } from './provide'
import { createNamespace, call } from '../utils/components'
import { isNumber } from '../utils/shared'
import type { BottomNavigationProvider } from './provide'
import type { BottomNavigationItemProvider } from '../bottom-navigation-item/provide'
import type { Ref, ComputedRef } from 'vue'

const { n, classes } = createNamespace('bottom-navigation')
const { n: nItem } = createNamespace('bottom-navigation-item')

const RIGHT_HALF_SPACE_CLASS = nItem('--right-half-space')
const LEFT_HALF_SPACE_CLASS = nItem('--left-half-space')
const RIGHT_SPACE_CLASS = nItem('--right-space')
const defaultFabProps = {
  type: 'primary',
}

export default defineComponent({
  name: 'VarBottomNavigation',
  components: { VarButton },
  props,
  setup(props, { slots }) {
    const bottomNavigationDom: Ref<HTMLElement | null> = ref(null)
    const active: ComputedRef<number | string | undefined> = computed(() => props.active)
    const activeColor: ComputedRef<string | undefined> = computed(() => props.activeColor)
    const inactiveColor: ComputedRef<string | undefined> = computed(() => props.inactiveColor)
    const fabProps = ref({})
    const { length, bottomNavigationItems, bindBottomNavigationItem } = useBottomNavigationItems()

    const matchBoundary = (): void => {
      if (length.value === 0 || matchName() || matchIndex()) {
        return
      }

      handleActiveIndex()
    }

    const matchName = (): BottomNavigationItemProvider | undefined => {
      return bottomNavigationItems.find(({ name }: BottomNavigationItemProvider) => {
        return active.value === name.value
      })
    }

    const matchIndex = (): BottomNavigationItemProvider | undefined => {
      return bottomNavigationItems.find(({ index }: BottomNavigationItemProvider) => {
        return active.value === index.value
      })
    }

    const handleActiveIndex = () => {
      if (!isNumber(active.value)) {
        return
      }

      if (active.value < 0) {
        call(props['onUpdate:active'], 0)
      } else if (active.value > length.value - 1) {
        call(props['onUpdate:active'], length.value - 1)
      }
    }

    const onToggle = (changedValue: number | string) => {
      props.onBeforeChange ? handleBeforeChange(changedValue) : handleChange(changedValue)
    }

    const handleBeforeChange = (changedValue: number | string) => {
      Promise.resolve(call(props.onBeforeChange, changedValue)).then((res) => res && handleChange(changedValue))
    }

    const handleChange = (changedValue: number | string) => {
      call(props['onUpdate:active'], changedValue)
      call(props.onChange, changedValue)
    }

    const removeMarginClass = () => {
      const bottomNavigationItems: Element[] = getBottomNavigationItems()
      bottomNavigationItems.forEach((dom: Element) => {
        dom.classList.remove(RIGHT_HALF_SPACE_CLASS, LEFT_HALF_SPACE_CLASS, RIGHT_SPACE_CLASS)
      })
    }

    const addMarginClass = (length: number) => {
      const bottomNavigationItems: Element[] = getBottomNavigationItems()
      const itemsNum = bottomNavigationItems.length
      const isEven = length % 2 === 0

      bottomNavigationItems.forEach((bottomNavigationItem: Element, i: number) => {
        handleMarginClass(isEven, bottomNavigationItem, i, itemsNum)
      })
    }

    const handleMarginClass = (isEven: boolean, dom: Element, i: number, length: number) => {
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

    const getBottomNavigationItems = () => {
      return Array.from(bottomNavigationDom.value!.querySelectorAll(`.${nItem()}`))
    }

    const handleFabClick = () => {
      call(props.onFabClick)
    }

    const bottomNavigationProvider: BottomNavigationProvider = {
      active,
      activeColor,
      inactiveColor,
      onToggle,
    }

    bindBottomNavigationItem(bottomNavigationProvider)

    watch(() => length.value, matchBoundary)

    watch(
      () => props.fabProps,
      (newValue) => {
        fabProps.value = { ...defaultFabProps, ...newValue }
      },
      { immediate: true, deep: true }
    )

    onMounted(() => {
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

    return {
      n,
      classes,
      length,
      bottomNavigationDom,
      handleFabClick,
      fabProps,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../button/button';
@import './bottomNavigation';
</style>
