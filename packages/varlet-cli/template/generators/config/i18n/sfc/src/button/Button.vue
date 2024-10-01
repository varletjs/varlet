<template>
  <button :class="n()" :style="{ background: color }" @click="handleClick">
    {{ t('button') }}
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { createNamespace } from '../utils/components'

// i18n for component's internal
import { t } from '../locale'

const { name, n, classes } = createNamespace('button')

export default defineComponent({
  name,
  props: {
    color: {
      type: String,
    },
    onClick: {
      type: Function as PropType<(e: Event) => void>,
    },
  },
  setup(props) {
    const handleClick = (e: Event) => {
      props.onClick?.(e)
    }

    return {
      t,
      n,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import './button';
</style>
