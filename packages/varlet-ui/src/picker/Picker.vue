<template>
  <div class="var-picker" v-bind="$attrs">
    <div class="var-picker__columns" :style="{ height: `${columnHeight}px` }">
      <div
        class="var-picker__column"
        v-for="c in scrollColumns"
        :key="c"
        @touchstart="handleTouchstart($event, c)"
        @touchmove="handleTouchmove($event, c)"
        @touchend="handleTouchend($event, c)"
      >
        <div
          class="var-picker__scroller"
          :style="{
            transform: `translateY(${c.translate}px)`,
            transitionDuration: `${c.duration}ms`,
            transitionProperty: c.duration ? 'transform' : 'none',
          }"
          @transitionend="handleTransitionend(c)"
        >
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
      <div class="var-picker__mask" :style="{ backgroundSize: `100% ${(columnHeight - optionHeight) / 2}px` }"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, Ref, computed, ComputedRef } from 'vue'
import { NormalColumn, props } from './props'

interface ScrollColumn {
  touching: boolean
  prevY: number | undefined
  momentumPrevY: number | undefined
  translate: number
  index: number
  scrollIndex: number
  fromIndex: number
  duration: number
  momentumTime: number
  doMomentum: boolean
  column: NormalColumn
}

const MOMENTUM_RECORD_TIME = 300
const MOMENTUM_ALLOW_DISTANCE = 15

export default defineComponent({
  name: 'VarPicker',
  inheritAttrs: false,
  props,
  setup(props) {
    const scrollColumns: Ref<ScrollColumn[]> = ref([])
    const center: ComputedRef<number> = computed(
      () => (props.optionCount * props.optionHeight) / 2 - props.optionCount / 2
    )
    const columnHeight: ComputedRef<number> = computed(() => props.optionCount * props.optionHeight)

    const limitTranslate = (scrollColumn: ScrollColumn) => {
      const { optionHeight } = props
      const START_LIMIT = optionHeight + center.value
      const END_LIMIT = center.value - scrollColumn.column.texts.length * optionHeight

      if (scrollColumn.translate >= START_LIMIT) {
        scrollColumn.translate = START_LIMIT
      }
      if (scrollColumn.translate <= END_LIMIT) {
        scrollColumn.translate = END_LIMIT
      }
    }

    const boundaryIndex = (scrollColumn: ScrollColumn, index: number) => {
      const { length } = scrollColumn.column.texts

      index = index >= length ? length - 1 : index
      index = index <= 0 ? 0 : index

      return index
    }

    const getIndex = (scrollColumn: ScrollColumn) => {
      const index = Math.round((center.value - scrollColumn.translate) / props.optionHeight)

      return boundaryIndex(scrollColumn, index)
    }

    const scrollTo = (scrollColumn: ScrollColumn, index: number, duration: number) => {
      const { optionHeight } = props

      scrollColumn.translate = center.value - boundaryIndex(scrollColumn, index) * optionHeight
      scrollColumn.duration = duration
    }

    const momentum = (scrollColumn: ScrollColumn, distance: number, duration: number) => {
      scrollColumn.doMomentum = true
      scrollColumn.translate += (Math.abs(distance / duration) / 0.003) * (distance < 0 ? -1 : 1)
    }

    const handleTouchstart = (event: TouchEvent, scrollColumn: ScrollColumn) => {
      scrollColumn.touching = true
      scrollColumn.duration = 0
    }

    const handleTouchmove = (event: TouchEvent, scrollColumn: ScrollColumn) => {
      if (!scrollColumn.touching) {
        return
      }

      const { clientY } = event.touches[0]
      const moveY = scrollColumn.prevY !== undefined ? clientY - scrollColumn.prevY : 0
      scrollColumn.prevY = clientY
      scrollColumn.translate += moveY

      limitTranslate(scrollColumn)

      const now = performance.now()
      if (now - scrollColumn.momentumTime > MOMENTUM_RECORD_TIME) {
        scrollColumn.momentumTime = now
        scrollColumn.momentumPrevY = scrollColumn.translate
      }
    }

    const handleTouchend = () => {
      scrollColumns.value.forEach((scrollColumn: ScrollColumn) => {
        scrollColumn.touching = false
        scrollColumn.prevY = undefined
        const distance = scrollColumn.translate - (scrollColumn.momentumPrevY as number)
        const duration = performance.now() - scrollColumn.momentumTime
        const shouldMomentum = Math.abs(distance) >= MOMENTUM_ALLOW_DISTANCE && duration <= MOMENTUM_RECORD_TIME

        if (!shouldMomentum && scrollColumn.doMomentum) {
          scrollColumn.index = scrollColumn.scrollIndex
          scrollColumn.doMomentum = false
          change(scrollColumn)
        }

        shouldMomentum && momentum(scrollColumn, distance, duration)

        scrollColumn.scrollIndex = getIndex(scrollColumn)
        scrollTo(scrollColumn, scrollColumn.scrollIndex, shouldMomentum ? 1000 : 200)
      })
    }

    const handleTransitionend = (scrollColumn: ScrollColumn) => {
      scrollColumn.doMomentum = false
      scrollColumn.index = scrollColumn.scrollIndex
      change(scrollColumn)
    }

    const change = (scrollColumn: ScrollColumn) => {
      if (scrollColumn.fromIndex === scrollColumn.index) {
        return
      }
      scrollColumn.fromIndex = scrollColumn.index

      console.log(scrollColumn.index)
    }

    watch(
      () => props.columns,
      (newValue: any) => {
        scrollColumns.value = newValue.map((column: NormalColumn) => {
          const scrollColumn: ScrollColumn = {
            prevY: undefined,
            momentumPrevY: undefined,
            touching: false,
            translate: center.value,
            index: column.initialIndex ?? 0,
            scrollIndex: column.initialIndex ?? 0,
            fromIndex: column.initialIndex ?? -1,
            duration: 0,
            momentumTime: 0,
            doMomentum: false,
            column,
          }
          scrollTo(scrollColumn, scrollColumn.scrollIndex, 200)
          return scrollColumn
        })
      },
      { immediate: true }
    )

    return {
      scrollColumns,
      columnHeight,
      center,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      handleTransitionend,
    }
  },
})
</script>

<style lang="less">
@import './picker';
</style>
