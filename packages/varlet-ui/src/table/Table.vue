<template>
  <div
    :class="
      classes(
        n(),
        [!plain, formatElevation(elevation, 1)],
        n('$--box'),
        [surfaceLow, n('--surface-low')],
        [plain, n('--plain')],
      )
    "
  >
    <div :class="classes(n('main'), n('$--scrollbar'))" :style="{ 'max-height': toSizeUnit(scrollerHeight) }">
      <table :class="n('table')" :style="{ width: toSizeUnit(fullWidth) }">
        <slot />
      </table>
    </div>
    <div v-if="$slots.footer" :class="n('footer')">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { createNamespace, formatElevation } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props } from './props'

const { name, n, classes } = createNamespace('table')

export default defineComponent({
  name,
  props,
  setup(props) {
    const surfaceLow = computed(() => props.surface === 'low')

    return {
      toSizeUnit,
      n,
      classes,
      formatElevation,
      surfaceLow,
      plain: computed(() => props.plain),
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './table';
</style>
