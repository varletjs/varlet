<template>
  <button
    :class="classes(n(), n('$--box'), [isActive, n('--active')])"
    v-ripple
    :style="{
      color: isActive ? activeColor : inactiveColor,
    }"
    @click="handleClick"
  >
    <slot name="icon" :active="isActive">
      <var-icon v-if="icon" :name="icon" :namespace="namespace" :class="n('icon')" var-bottom-navigation-item-cover />
    </slot>
    <var-badge v-if="badge" v-bind="badgeProps" :class="n('badge')" var-bottom-navigation-item-cover />
    <span :class="n('label')">
      <slot>{{ label }}</slot>
    </span>
  </button>
</template>

<script lang="ts">
import Ripple from '../ripple'
import VarBadge from '../badge'
import VarIcon from '../icon'
import { defineComponent, computed } from 'vue'
import { props } from './props'
import { useBottomNavigation, type BottomNavigationItemProvider } from './provide'
import { createNamespace } from '../utils/components'
import { type BadgeProps } from '../../types'
import { call } from '@varlet/shared'

const { name, n, classes } = createNamespace('bottom-navigation-item')

const defaultBadgeProps = {
  type: 'danger',
  dot: true,
}

export default defineComponent({
  name,
  components: {
    VarBadge,
    VarIcon,
  },
  directives: { Ripple },
  props,
  setup(props) {
    const name = computed<string | undefined>(() => props.name)
    const isActive = computed<boolean>(() => [name.value, index.value].includes(active.value))
    const badgeProps = computed(() => (props.badge === true ? defaultBadgeProps : props.badge) as BadgeProps)
    const { index, bottomNavigation, bindBottomNavigation } = useBottomNavigation()
    const { active, activeColor, inactiveColor } = bottomNavigation
    const bottomNavigationItemProvider: BottomNavigationItemProvider = {
      name,
      index,
    }

    bindBottomNavigation(bottomNavigationItemProvider)

    function handleClick() {
      const active = name.value ?? index.value

      call(props.onClick, active)
      call(bottomNavigation.onToggle, active)
    }

    return {
      activeColor,
      inactiveColor,
      badgeProps,
      isActive,
      n,
      classes,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../ripple/ripple';
@import '../badge/badge';
@import '../icon/icon';
@import './bottomNavigationItem';
</style>
