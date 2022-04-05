<template>
  <button
    :class="classes(n(), [active === index || active === name, n('--active')])"
    v-ripple
    :style="{
      color: computeColorStyle(),
    }"
    @click="handleClick"
  >
    <var-icon
      v-if="icon && !$slots.icon"
      :name="icon"
      :namespace="namespace"
      :class="classes(n('icon'))"
      var-bottom-navigation-item-cover
    />
    <slot name="icon" :active="active === index || active === name"></slot>
    <var-badge v-if="badge" v-bind="badgeProps" :class="classes(n('badge'))" var-bottom-navigation-item-cover />
    <span :class="classes(n('label'))">
      <template v-if="!$slots.default">
        {{ label }}
      </template>
      <slot></slot>
    </span>
  </button>
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
import { createNamespace, call } from '../utils/components'

const { n, classes } = createNamespace('bottom-navigation-item')

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

      call(props.onClick, active)

      call(bottomNavigation.onToggle, active)
    }

    watch(
      () => badge.value,
      (newValue) => {
        badgeProps.value = newValue === true ? defaultBadgeProps : badge.value
      },
      { immediate: true }
    )

    return {
      n,
      classes,
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
@import './bottomNavigationItem';
</style>
