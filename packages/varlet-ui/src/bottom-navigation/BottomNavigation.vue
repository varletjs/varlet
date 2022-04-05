<template>
  <div
    :class="classes(n(), [fixed, n('--fixed')], [border, n('--border')])"
    ref="bottomNavigationDom"
    :style="`z-index:${zIndex}`"
  >
    <slot></slot>
    <div
      v-if="$slots.fab"
      v-ripple
      :class="classes(n('fab'), 'var-elevation--6', [length % 2, n('--fab-right'), n('--fab-center')])"
    >
      <slot name="fab"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUpdated } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import { props } from './props'
import { useBottomNavigationItems } from './provide'
import type { BottomNavigationProvider } from './provide'
import { createNamespace, call } from '../utils/components'

const { n, classes } = createNamespace('bottom-navigation')
const { n: nItem } = createNamespace('bottom-navigation-item')

const RIGHT_HALF_SPACE_CLASS = nItem('--right-half-space')
const LEFT_HALF_SPACE_CLASS = nItem('--left-half-space')
const RIGHT_SPACE_CLASS = nItem('--right-space')

export default defineComponent({
  name: 'VarBottomNavigation',
  props,
  setup(props, { slots }) {
    const bottomNavigationDom: Ref<HTMLElement | null> = ref(null)
    const active: ComputedRef<number | string | undefined> = computed(() => props.modelValue)
    const activeColor: ComputedRef<string | undefined> = computed(() => props.activeColor)
    const inactiveColor: ComputedRef<string | undefined> = computed(() => props.inactiveColor)

    const onToggle = (changedValue: number | string) => {
      if (props.onBeforeChange) {
        handleBeforeChange(changedValue)
      } else {
        handleChange(changedValue)
      }
    }

    const handleBeforeChange = (changedValue: number | string) => {
      Promise.resolve(call(props.onBeforeChange, changedValue)).then((res) => {
        if (res) {
          handleChange(changedValue)
        }
      })
    }

    const handleChange = (changedValue: number | string) => {
      call(props['onUpdate:modelValue'], changedValue)
      call(props.onChange, changedValue)
    }

    const { length, bindBottomNavigationItem } = useBottomNavigationItems()

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

    const bottomNavigationProvider: BottomNavigationProvider = {
      active,
      activeColor,
      inactiveColor,
      onToggle,
    }

    bindBottomNavigationItem(bottomNavigationProvider)

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
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './bottomNavigation';
</style>
