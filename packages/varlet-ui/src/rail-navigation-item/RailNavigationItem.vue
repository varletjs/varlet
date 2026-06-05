<template>
  <div
    v-ripple="{ disabled: !ripple || disabled }"
    :class="classes(n(), [isActive, n('--active')], [disabled, n('--disabled')])"
    :style="{ '--rail-navigation-item-transition-duration-override': allowTransition ? undefined : '0ms' }"
    :aria-disabled="disabled"
    role="button"
    @click="handleClick"
  >
    <span v-if="$slots.icon || icon" :class="n('indicator')">
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
import { call, doubleRaf } from '@varlet/shared'
import { computed, defineComponent, onMounted, ref } from 'vue'
import { type BadgeProps } from '../../types'
import VarBadge from '../badge'
import VarIcon from '../icon'
import Ripple from '../ripple'
import { createNamespace } from '../utils/components'
import { props } from './props'
import { useRailNavigation } from './provide'

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
    const { active, ripple, onToggle } = railNavigation
    const activeValue = computed(() => props.name ?? index.value)
    const isActive = computed(() => active.value === activeValue.value)
    const badgeProps = computed(() => (props.badge === true ? defaultBadgeProps : props.badge) as BadgeProps)
    const allowTransition = ref(false)

    bindRailNavigation(null)

    onMounted(async () => {
      await doubleRaf()
      allowTransition.value = true
    })

    function handleClick() {
      if (props.disabled) {
        return
      }

      call(props.onClick, activeValue.value)
      call(onToggle, activeValue.value)
    }

    return {
      isActive,
      badgeProps,
      ripple,
      allowTransition,
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
@import '../ripple/ripple';
@import './railNavigationItem';
</style>
