<template>
  <div
    class="var-bottom-navigation"
    :class="`${fixed ? 'var-bottom-navigation--fixed' : ''} ${border ? 'var-bottom-navigation--border' : ''}`"
    :style="`z-index:${zIndex}`"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { ComputedRef } from 'vue'
import { props } from './props'
import { useBottomNavigationItem } from './provide'
import type { BottomNavigationProvider } from './provide'
import { isBool } from '../utils/shared'

export default defineComponent({
  name: 'VarBottomNavigation',
  props,
  setup(props) {
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

    const { bindBottomNavigationItem } = useBottomNavigationItem()

    const bottomNavigationProvider: BottomNavigationProvider = {
      active,
      fixed,
      border,
      zIndex,
      activeColor,
      inactiveColor,
      onToggle,
    }

    bindBottomNavigationItem(bottomNavigationProvider)
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './BottomNavigation';
</style>
