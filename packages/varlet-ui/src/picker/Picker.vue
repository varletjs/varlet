<template>
  <div class="var-picker" v-bind="$attrs">
    <div class="var-picker__columns" :style="{ height: `${columnHeight}px` }">
      <div
        class="var-picker__column"
        v-for="(c, index) in scrollColumns"
        :key="c"
        @touchstart="handleTouchstart($event, c, index)"
        @touchmove.prevent="handleTouchmove($event, c)"
        @touchend="handleTouchend($event, c)"
      >
        <div
          class="var-picker__scroller"
          :ref="(el) => (scrollerEls[index] = el)"
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
import { CascadeColumn, NormalColumn, props } from './props'
import { isArray } from '../utils/shared'

interface ScrollColumn {
  touching: boolean
  index: number
  fromIndex: number
  prevY: number | undefined
  momentumPrevY: number | undefined
  momentumTime: number
  translate: number
  duration: number
  column: NormalColumn
  columns?: CascadeColumn[]
}

const MOMENTUM_RECORD_TIME = 300
const MOMENTUM_ALLOW_DISTANCE = 15

export default defineComponent({
  name: 'VarPicker',
  inheritAttrs: false,
  props,
  setup(props) {
    const scrollerEls: Ref<HTMLElement[]> = ref([])
    const scrollColumns: Ref<ScrollColumn[]> = ref([])
    const center: ComputedRef<number> = computed(
      () => (props.optionCount * props.optionHeight) / 2 - props.optionCount / 2
    )
    const columnHeight: ComputedRef<number> = computed(() => props.optionCount * props.optionHeight)

    const getTranslate = (el: HTMLElement) => {
      const { transform } = window.getComputedStyle(el)
      return +transform.slice(transform.lastIndexOf(',') + 2, transform.length - 1)
    }

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
      const translate = center.value - boundaryIndex(scrollColumn, index) * optionHeight

      if (translate === scrollColumn.translate) {
        change(scrollColumn)
      }

      scrollColumn.translate = translate
      scrollColumn.duration = duration
    }

    const momentum = (scrollColumn: ScrollColumn, distance: number, duration: number) => {
      scrollColumn.translate += (Math.abs(distance / duration) / 0.003) * (distance < 0 ? -1 : 1)
    }

    const handleTouchstart = (event: TouchEvent, scrollColumn: ScrollColumn, scrollerElIndex: number) => {
      scrollColumn.touching = true
      scrollColumn.duration = 0
      scrollColumn.translate = getTranslate(scrollerEls.value[scrollerElIndex])
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

        shouldMomentum && momentum(scrollColumn, distance, duration)

        scrollColumn.index = getIndex(scrollColumn)
        scrollTo(scrollColumn, scrollColumn.index, shouldMomentum ? 1000 : 200)
      })
    }

    const handleTransitionend = (scrollColumn: ScrollColumn) => {
      change(scrollColumn)
    }

    const normalizeNormalColumns = (normalColumns: NormalColumn[]) => {
      return normalColumns.map((normalColumn) => {
        const scrollColumn: ScrollColumn = {
          prevY: undefined,
          momentumPrevY: undefined,
          touching: false,
          translate: center.value,
          index: normalColumn.initialIndex ?? 0,
          fromIndex: normalColumn.initialIndex ?? 0,
          duration: 0,
          momentumTime: 0,
          column: normalColumn,
        }
        scrollTo(scrollColumn, scrollColumn.index, 200)
        return scrollColumn
      })
    }

    const normalizeCascadeColumns = (cascadeColumns: CascadeColumn[]) => {
      const scrollColumns = []

      createChildren(scrollColumns, cascadeColumns)

      return scrollColumns
    }

    const createChildren = (scrollColumns: ScrollColumn[], children: CascadeColumn[]) => {
      if (isArray(children) && children.length) {
        const scrollColumn: ScrollColumn = {
          prevY: undefined,
          momentumPrevY: undefined,
          touching: false,
          translate: center.value,
          index: 0,
          fromIndex: 0,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: children.map((cascadeColumn) => cascadeColumn[props.textKey]),
          },
          columns: children,
        }

        scrollColumns.push(scrollColumn)
        createChildren(scrollColumns, scrollColumn.columns[scrollColumn.index].children)
      }
    }

    const change = (scrollColumn: ScrollColumn) => {
      if (scrollColumn.fromIndex === scrollColumn.index) {
        return
      }
      scrollColumn.fromIndex = scrollColumn.index

      if (props.cascade) {
        scrollColumns.value.splice(scrollColumns.value.indexOf(scrollColumn) + 1)
        createChildren(scrollColumns.value, scrollColumn.columns[scrollColumn.index].children)
      }

      const texts = scrollColumns.value.map((scrollColumn) => scrollColumn.column.texts[scrollColumn.index])
      const indexes = scrollColumns.value.map((scrollColumn) => scrollColumn.index)
      props.onChange?.(texts, indexes)
    }

    watch(
      () => props.columns,
      (newValue: any) => {
        scrollColumns.value = props.cascade
          ? normalizeCascadeColumns(newValue as CascadeColumn[])
          : normalizeNormalColumns(newValue as NormalColumn[])
      },
      { immediate: true }
    )

    return {
      scrollColumns,
      columnHeight,
      center,
      scrollerEls,
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
