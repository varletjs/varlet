<template>
  <div
    class="var-bottom-navigation"
    ref="bottomNavigationDom"
    :class="`${fixed ? 'var-bottom-navigation__fixed' : ''} ${border ? 'var-bottom-navigation__border' : ''}`"
    :style="`z-index:${zIndex}`"
  >
    <slot></slot>
    <div v-if="$slots.fab" class="var-bottom-navigation__fab">
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
        watchPlaceholderDom()
      }
    })

    function watchPlaceholderDom() {
      watch(length, (newVal: number) => {
        handlePlaceholderDom(bottomNavigationDom.value as HTMLElement, newVal)
      })
    }

    const childClassName = 'var-bottom-navigation-item'
    const placeholderChildClassName = 'var-bottom-navigation-item--placeholder'

    function handlePlaceholderDom(parent: HTMLElement, length: number) {
      removeOldPlaceholderDom(parent, placeholderChildClassName)
      insertFabPlaceholderDom(parent, length, childClassName)
      handleEndPlaceholderDom(parent, length)
    }

    function removeOldPlaceholderDom(parent: HTMLElement, placeholderChildClassName: string) {
      const oldPlaceholderDoms = parent.querySelectorAll(`.${placeholderChildClassName}`)
      oldPlaceholderDoms.forEach((item: any) => item.remove())
    }

    function insertFabPlaceholderDom(parent: HTMLElement, length: number, childClassName: string) {
      const placeholderDom = createPlaceholderDom()
      const BottomNavigationItems = parent.querySelectorAll(`.${childClassName}`)
      parent.insertBefore(placeholderDom, BottomNavigationItems[((length - 1) >> 1) + 1])
    }

    function handleEndPlaceholderDom(parent: HTMLElement, length: number) {
      if (length % 2) {
        const placeholderDom = createPlaceholderDom()
        parent.appendChild(placeholderDom)
      }
    }

    function createPlaceholderDom() {
      const placeholderDom: HTMLElement = document.createElement('div')
      placeholderDom.className = `${childClassName} ${placeholderChildClassName}`
      return placeholderDom
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
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './BottomNavigation';
</style>
