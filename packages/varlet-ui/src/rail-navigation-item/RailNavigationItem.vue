<template>
  <div
    v-ripple="{ disabled: !railNavigation.ripple.value || isDisabled }"
    :class="classes(n(), [isActive, n('--active')], [isDisabled, n('--disabled')])"
    :aria-disabled="isDisabled"
    :aria-current="isActive ? 'page' : undefined"
    :tabindex="isDisabled ? undefined : 0"
    role="button"
    @click="handleClick"
    @keydown.enter.space.prevent="handleClick"
  >
    <span v-if="$slots.icon || icon" :class="n('icon-container')">
      <var-badge v-if="badge" v-bind="badgeProps" :class="n('badge')" var-rail-navigation-item-cover>
        <slot name="icon" :active="isActive">
          <var-icon :class="n('icon')" :name="icon" :namespace="namespace" var-rail-navigation-item-cover />
        </slot>
      </var-badge>
      <slot v-else name="icon" :active="isActive">
        <var-icon :class="n('icon')" :name="icon" :namespace="namespace" var-rail-navigation-item-cover />
      </slot>
    </span>

    <span v-if="$slots.default || label" :class="n('label')">
      <slot :active="isActive">{{ label }}</slot>
    </span>
  </div>
</template>

<script lang="ts">
import { call } from '@varlet/shared'
import { computed, defineComponent } from 'vue'
import { type BadgeProps } from '../../types'
import VarBadge from '../badge'
import VarIcon from '../icon'
import Ripple from '../ripple'
import { createNamespace } from '../utils/components'
import { props } from './props'
import { useRailNavigation, type RailNavigationItemProvider } from './provide'

const { name, n, classes } = createNamespace('rail-navigation-item')

const defaultBadgeProps = {
  type: 'primary',
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
    const { index, railNavigation, bindRailNavigation } = useRailNavigation()
    const activeValue = computed(() => props.name ?? index.value)
    const isActive = computed(() => railNavigation.active.value === activeValue.value)
    const isDisabled = computed(() => props.disabled)
    const badgeProps = computed(() => (props.badge === true ? defaultBadgeProps : props.badge) as BadgeProps)
    const railNavigationItemProvider: RailNavigationItemProvider = {
      disabled: isDisabled,
    }

    bindRailNavigation(railNavigationItemProvider)

    function handleClick() {
      if (isDisabled.value) {
        return
      }

      call(props.onClick, activeValue.value)
      railNavigation.onToggle(activeValue.value)
    }

    return {
      isActive,
      isDisabled,
      badgeProps,
      railNavigation,
      n,
      classes,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../badge/badge';
@import '../icon/icon';
@import './railNavigationItem';
</style>
