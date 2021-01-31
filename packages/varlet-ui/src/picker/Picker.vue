<template>
  <div class="var-picker" v-bind="$attrs">
    <div class="var-picker__columns" :style="{ height: `${optionCount * optionHeight}px` }">
      <div
        class="var-picker__column"
        v-for="c in scrollColumns"
        :key="c"
        @touchstart="handleTouchstart($event, c)"
        @touchmove="handleTouchmove($event, c)"
        @touchend="handleTouchend($event, c)"
      >
        <div class="var-picker__scroller" :style="{ transform: `translateY(${c.translate}px)` }">
          <div class="var-picker__option" :style="{ height: `${optionHeight}px` }" v-for="t in c.column.texts" :key="t">
            {{ t }}
          </div>
        </div>
      </div>
      <div
        class="var-picker__picked"
        :style="{
          top: `${center}px`,
          height: `${optionHeight}px`,
        }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, Ref, computed, ComputedRef } from 'vue'
import { NormalColumn, props } from './props'

interface ScrollColumn {
  touching: boolean
  prevY: number | undefined
  column: NormalColumn
  translate: number
}

export default defineComponent({
  name: 'VarPicker',
  inheritAttrs: false,
  props,
  setup(props) {
    const scrollColumns: Ref<ScrollColumn[]> = ref([])
    const center: ComputedRef<number> = computed(
      () => (props.optionCount * props.optionHeight) / 2 - props.optionCount / 2
    )

    const handleTouchstart = (event: TouchEvent, scrollColumn: ScrollColumn) => {
      scrollColumn.touching = true
    }

    const handleTouchmove = (event: TouchEvent, scrollColumn: ScrollColumn) => {
      if (!scrollColumn.touching) {
        return
      }

      const { clientY } = event.touches[0]
      const moveY = scrollColumn.prevY !== undefined ? clientY - scrollColumn.prevY : 0
      scrollColumn.prevY = clientY

      scrollColumn.translate += moveY
    }

    const handleTouchend = () => {
      scrollColumns.value.forEach((scrollColumn: ScrollColumn) => {
        scrollColumn.touching = false
        scrollColumn.prevY = undefined
      })
    }

    watch(
      () => props.columns,
      (newValue: any) => {
        scrollColumns.value = newValue.map((column: NormalColumn) => {
          return {
            prevY: undefined,
            touching: false,
            translate: center.value,
            column,
          }
        })
      },
      { immediate: true }
    )

    return {
      scrollColumns,
      center,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
    }
  },
})
</script>

<style lang="less">
@import './picker';
</style>
