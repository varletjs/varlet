<template>
  <div
    class="var-bottom-navigation-item"
    v-ripple
    :class="`${active === index || active === name ? 'var-bottom-navigation-item--active' : ''}`"
    :style="{
      color: computeColorStyle(),
    }"
    @click="handleClick"
  >
    <var-icon
      v-if="icon && !$slots.icon"
      :name="icon"
      :namespace="namespace"
      class="var-bottom-navigation-item__icon"
      var-bottom-navigation-item-cover
    />
    <slot name="icon" :active="active === index || active === name"></slot>
    <var-badge
      v-if="badge"
      v-bind="badgeProps"
      class="var-bottom-navigation-item__badge"
      var-bottom-navigation-item-cover
    />

    <div class="var-bottom-navigation-item__label">
      <template v-if="!$slots.default">
        {{ label }}
      </template>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { props } from './props'
import Ripple from '../ripple'
import VarBadge from '../badge'
import VarIcon from '../icon'
import type { ComputedRef } from 'vue'
import type { BadgeProps } from '../../types/badge'
import { useBottomNavigation } from './provide'
import type { BottomNavigationItemProvider } from './provide'

const defaultBadgeProps = {
  type: 'danger',
  dot: true,
}

export default defineComponent({
  name: 'VarBottomNavigationItem',
  components: {
    VarBadge,
    VarIcon,
  },
  directives: { Ripple },
  props,
  setup(props) {
    const name: ComputedRef<string | undefined> = computed(() => props.name)
    const badge: ComputedRef<boolean | BadgeProps> = computed(() => props.badge)
    const badgeProps = ref({})
    const { index, bottomNavigation, bindBottomNavigation } = useBottomNavigation()
    const { active, activeColor, inactiveColor } = bottomNavigation
    const bottomNavigationItemProvider: BottomNavigationItemProvider = {
      name,
      index,
    }

    bindBottomNavigation(bottomNavigationItemProvider)

    const computeColorStyle = () => {
      return active.value === name.value || active.value === index.value ? activeColor.value : inactiveColor.value
    }

    const handleClick = () => {
      const active = name.value || index.value

      props.onClick?.(active)

      bottomNavigation?.onToggle(active)
    }

    watch(
      () => badge.value,
      (newValue) => {
        badgeProps.value = newValue === true ? defaultBadgeProps : badge.value
      },
      { immediate: true }
    )

    return {
      index,
      active,
      badge,
      badgeProps,
      computeColorStyle,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import '../ripple/ripple';
@import './BottomNavigationItem';
</style>
