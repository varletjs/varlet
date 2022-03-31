<template>
  <div
    class="var-bottom-navigation-item"
    v-ripple
    :class="`${active === index || active === name ? 'var-bottom-navigation-item__active' : ''}`"
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
import { isBool } from '../utils/shared'
import type { BadgeProps } from '../../types/badge'
import { useBottomNavigation } from './provide'
import type { BottomNavigationItemProvider } from './provide'

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

    watch(
      badge,
      (newValue) => {
        if (!newValue) {
          badgeProps.value = {}
        }
        if (isBool(newValue)) {
          badgeProps.value = {
            type: 'danger',
            dot: true,
          }
        } else {
          badgeProps.value = badge.value
        }
      },
      { immediate: true }
    )

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

      const { onClick } = props
      if (onClick) {
        onClick(active)
      }

      bottomNavigation?.onToggle(active)
    }

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
