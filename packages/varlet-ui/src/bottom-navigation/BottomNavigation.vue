<template>
  <div
    class="var-bottom-navigation"
    ref="bottomNavigationDom"
    :class="`${fixed ? 'var-bottom-navigation--fixed' : ''} ${border ? 'var-bottom-navigation--border' : ''}`"
    :style="`z-index:${zIndex}`"
  >
    <slot></slot>
    <div v-if="$slots.fab" class="fab">
      <slot name="fab"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import { props } from './props'
import { useBottomNavigationItems } from './provide'
import type { BottomNavigationProvider } from './provide'

export default defineComponent({
  name: 'VarBottomNavigation',
  props,
  setup(props, { slots }) {
    const bottomNavigationDom: Ref<HTMLElement | null> = ref(null)
    const active: ComputedRef<number | string | undefined> = computed(() => props.modelValue)
    const fixed: ComputedRef<boolean> = computed(() => props.fixed)
    const border: ComputedRef<boolean> = computed(() => props.border)
    const zIndex: ComputedRef<number | string> = computed(() => props.zIndex)
    const activeColor: ComputedRef<string | undefined> = computed(() => props.activeColor)
    const inactiveColor: ComputedRef<string | undefined> = computed(() => props.inactiveColor)

    const onToggle = (changedValue: number | string) => {
      if (props.onBeforeChange) {
        handleBeforeChange(changedValue)
      } else {
        handleChange(changedValue)
      }
    }

    function handleBeforeChange(changedValue: number | string) {
      Promise.resolve(props.onBeforeChange?.(changedValue)).then((res) => {
        if (res) {
          handleChange(changedValue)
        }
      })
    }

    function handleChange(changedValue: number | string) {
      props['onUpdate:modelValue']?.(changedValue)
      props.onChange?.(changedValue)
    }

    const { length, bindBottomNavigationItem } = useBottomNavigationItems()

    onMounted(() => {
      if (slots.fab) {
        handlePlaceholderDom()
      }
    })

    function handlePlaceholderDom() {
      watch(length, (newVal: number) => {
        handlePlacehoderDom(bottomNavigationDom.value as HTMLElement, newVal)
      })
    }

    function handlePlacehoderDom(parent: HTMLElement, length: number) {
      removeOldPlaceholderDom(parent, '.var-bottom-navigation-item--placeholder')
      insertFabPlaceholderDom(parent, length)
      handleEndPlaceholderDom(parent, length)
    }

    function removeOldPlaceholderDom(parent: HTMLElement, oldPlaceholderchildSelector: string) {
      const oldPlaceholderDoms = parent.querySelectorAll(oldPlaceholderchildSelector)
      oldPlaceholderDoms.forEach((item: any) => item.remove())
    }

    function insertFabPlaceholderDom(parent: HTMLElement, length: number) {
      const placeholderDom = document.createElement('div')
      placeholderDom.className = 'var-bottom-navigation-item var-bottom-navigation-item--placeholder'
      const BottomNavigationItems = parent.querySelectorAll('.var-bottom-navigation-item')
      parent.insertBefore(placeholderDom, BottomNavigationItems[((length - 1) >> 1) + 1])
    }

    function handleEndPlaceholderDom(parent: HTMLElement, length: number) {
      if (length % 2) {
        const placeholderDom: HTMLElement = document.createElement('div')
        placeholderDom.className = 'var-bottom-navigation-item var-bottom-navigation-item--placeholder'
        parent.appendChild(placeholderDom)
      }
    }

    const bottomNavigationProvider: BottomNavigationProvider = {
      active,
      activeColor,
      inactiveColor,
      onToggle,
    }

    bindBottomNavigationItem(bottomNavigationProvider)

    return {
      bottomNavigationDom,
      fixed,
      border,
      zIndex,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './BottomNavigation';
</style>
