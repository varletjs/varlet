<template>
  <component
    :is="dynamic ? n('$-popup') : Transition"
    v-bind="
      dynamic
        ? {
            onOpen,
            onOpened,
            onClose,
            onClosed,
            onClickOverlay,
            onRouteChange,
            closeOnClickOverlay,
            teleport,
            show,
            'onUpdate:show': handlePopupUpdateShow,
            position: 'bottom',
            class: n('popup'),
          }
        : null
    "
    var-picker-cover
  >
    <div :class="n()" v-bind="$attrs">
      <div :class="n('toolbar')" v-if="toolbar">
        <slot name="cancel">
          <var-button
            :class="n('cancel-button')"
            var-picker-cover
            text
            :text-color="cancelButtonTextColor"
            @click="cancel"
          >
            {{ dt(cancelButtonText, pack.pickerCancelButtonText) }}
          </var-button>
        </slot>
        <slot name="title">
          <div :class="n('title')">{{ dt(title, pack.pickerTitle) }}</div>
        </slot>
        <slot name="confirm">
          <var-button
            :class="n('confirm-button')"
            text
            var-picker-cover
            :text-color="confirmButtonTextColor"
            @click="confirm"
          >
            {{ dt(confirmButtonText, pack.pickerConfirmButtonText) }}
          </var-button>
        </slot>
      </div>
      <div :class="n('columns')" :style="{ height: `${columnHeight}px` }">
        <div
          :class="n('column')"
          v-for="c in scrollColumns"
          :key="c.id"
          @touchstart="handleTouchstart($event, c)"
          @touchmove.prevent="handleTouchmove($event, c)"
          @touchend="handleTouchend($event, c)"
        >
          <div
            :class="n('scroller')"
            :ref="(el) => getScrollEl(el, c)"
            :style="{
              transform: `translateY(${c.translate}px)`,
              transitionDuration: `${c.duration}ms`,
              transitionProperty: c.duration ? 'transform' : 'none',
            }"
            @transitionend="handleTransitionend(c)"
          >
            <div :class="n('option')" :style="{ height: `${optionHeight}px` }" v-for="t in c.column.texts" :key="t">
              <div :class="n('text')">{{ textFormatter(t, c.columnIndex) }}</div>
            </div>
          </div>
        </div>
        <div
          :class="n('picked')"
          :style="{
            top: `${center}px`,
            height: `${optionHeight}px`,
          }"
        ></div>
        <div :class="n('mask')" :style="{ backgroundSize: `100% ${(columnHeight - optionHeight) / 2}px` }"></div>
      </div>
    </div>
  </component>
</template>

<script lang="ts">
import VarButton from '../button'
import VarPopup from '../popup'
import { defineComponent, watch, ref, computed, Transition, toRaw } from 'vue'
import { props } from './props'
import { isArray } from '@varlet/shared'
import { dt } from '../utils/shared'
import { toPxNum, getTranslate } from '../utils/elements'
import { pack } from '../locale'
import type { Ref, ComputedRef, ComponentPublicInstance } from 'vue'
import type { CascadeColumn, NormalColumn } from './props'
import type { Texts } from './index'
import { createNamespace, call } from '../utils/components'

export interface ScrollColumn {
  id: number
  touching: boolean
  index: number
  columnIndex: number
  prevY: number | undefined
  momentumPrevY: number | undefined
  momentumTime: number
  translate: number
  duration: number
  scrolling: boolean
  column: NormalColumn
  columns?: CascadeColumn[]
  scrollEl: HTMLElement | null
}

const { n, classes } = createNamespace('picker')

const MOMENTUM_RECORD_TIME = 300
const MOMENTUM_ALLOW_DISTANCE = 15

let sid = 0

export default defineComponent({
  name: 'VarPicker',
  components: {
    VarButton,
    VarPopup,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const scrollColumns: Ref<ScrollColumn[]> = ref([])
    const optionHeight: ComputedRef<number> = computed(() => toPxNum(props.optionHeight))
    const optionCount: ComputedRef<number> = computed(() => toPxNum(props.optionCount))
    const center: ComputedRef<number> = computed(
      () => (optionCount.value * optionHeight.value) / 2 - optionHeight.value / 2
    )
    const columnHeight: ComputedRef<number> = computed(() => optionCount.value * optionHeight.value)
    let prevIndexes: number[] = []

    const getScrollEl = (el: Element | ComponentPublicInstance | null, scrollColumn: ScrollColumn) => {
      scrollColumn.scrollEl = el as HTMLElement
    }

    const handlePopupUpdateShow = (value: boolean) => {
      call(props['onUpdate:show'], value)
    }

    const limitTranslate = (scrollColumn: ScrollColumn) => {
      const START_LIMIT = optionHeight.value + center.value
      const END_LIMIT = center.value - scrollColumn.column.texts.length * optionHeight.value

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
      const index = Math.round((center.value - scrollColumn.translate) / optionHeight.value)

      return boundaryIndex(scrollColumn, index)
    }

    const getPicked = () => {
      const texts = scrollColumns.value.map((scrollColumn) => scrollColumn.column.texts[scrollColumn.index])
      const indexes = scrollColumns.value.map((scrollColumn) => scrollColumn.index)

      return {
        texts,
        indexes,
      }
    }

    const scrollTo = (scrollColumn: ScrollColumn, index: number, duration: number, noEmit = false) => {
      const translate = center.value - boundaryIndex(scrollColumn, index) * optionHeight.value

      if (translate === scrollColumn.translate) {
        scrollColumn.scrolling = false
        !noEmit && change(scrollColumn)
      }

      scrollColumn.translate = translate
      scrollColumn.duration = duration
    }

    const momentum = (scrollColumn: ScrollColumn, distance: number, duration: number) => {
      scrollColumn.translate += (Math.abs(distance / duration) / 0.003) * (distance < 0 ? -1 : 1)
    }

    const handleTouchstart = (event: TouchEvent, scrollColumn: ScrollColumn) => {
      scrollColumn.touching = true
      scrollColumn.scrolling = false
      scrollColumn.duration = 0
      scrollColumn.translate = getTranslate(scrollColumn.scrollEl as HTMLElement)
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

    const handleTouchend = (event: TouchEvent, scrollColumn: ScrollColumn) => {
      scrollColumn.touching = false
      scrollColumn.scrolling = true
      scrollColumn.prevY = undefined
      const distance = scrollColumn.translate - (scrollColumn.momentumPrevY as number)
      const duration = performance.now() - scrollColumn.momentumTime
      const shouldMomentum = Math.abs(distance) >= MOMENTUM_ALLOW_DISTANCE && duration <= MOMENTUM_RECORD_TIME

      shouldMomentum && momentum(scrollColumn, distance, duration)

      scrollColumn.index = getIndex(scrollColumn)
      scrollTo(scrollColumn, scrollColumn.index, shouldMomentum ? 1000 : 200)
    }

    const handleTransitionend = (scrollColumn: ScrollColumn) => {
      scrollColumn.scrolling = false
      change(scrollColumn)
    }

    const normalizeNormalColumns = (normalColumns: NormalColumn[]) => {
      return normalColumns.map((column: NormalColumn | any[], columnIndex: number) => {
        const normalColumn = (isArray(column) ? { texts: column } : column) as NormalColumn
        const scrollColumn: ScrollColumn = {
          id: sid++,
          prevY: undefined,
          momentumPrevY: undefined,
          touching: false,
          translate: center.value,
          index: normalColumn.initialIndex ?? 0,
          columnIndex,
          duration: 0,
          momentumTime: 0,
          column: normalColumn,
          scrollEl: null,
          scrolling: false,
        }
        scrollTo(scrollColumn, scrollColumn.index, 0, true)
        return scrollColumn
      })
    }

    const normalizeCascadeColumns = (cascadeColumns: CascadeColumn[]) => {
      const scrollColumns: ScrollColumn[] = []

      createChildren(scrollColumns, cascadeColumns, 0, true)

      return scrollColumns
    }

    const createChildren = (
      scrollColumns: ScrollColumn[],
      children: CascadeColumn[],
      columnIndex: number,
      initial = false
    ) => {
      if (isArray(children) && children.length) {
        const index = initial ? props.cascadeInitialIndexes[scrollColumns.length] ?? 0 : 0

        const scrollColumn: ScrollColumn = {
          id: sid++,
          prevY: undefined,
          momentumPrevY: undefined,
          touching: false,
          translate: center.value,
          index,
          columnIndex,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: children.map((cascadeColumn) => cascadeColumn[props.textKey]),
          },
          columns: children,
          scrollEl: null,
          scrolling: false,
        }

        scrollColumns.push(scrollColumn)
        scrollTo(scrollColumn, scrollColumn.index, 0, true)
        createChildren(
          scrollColumns,
          (scrollColumn.columns as CascadeColumn[])[scrollColumn.index].children,
          columnIndex + 1,
          initial
        )
      }
    }

    const rebuildChildren = (scrollColumn: ScrollColumn) => {
      scrollColumns.value.splice(scrollColumns.value.indexOf(scrollColumn) + 1)
      createChildren(
        scrollColumns.value,
        (scrollColumn.columns as CascadeColumn[])[scrollColumn.index].children,
        scrollColumn.columnIndex + 1
      )
    }

    const change = (scrollColumn: ScrollColumn) => {
      const { cascade, onChange } = props
      cascade && rebuildChildren(scrollColumn)

      const hasScrolling = scrollColumns.value.some((scrollColumn) => scrollColumn.scrolling)
      if (hasScrolling) {
        return
      }

      const { texts, indexes } = getPicked()

      const samePicked = indexes.every((index, idx) => index === prevIndexes[idx])
      if (samePicked) {
        return
      }

      prevIndexes = [...indexes]
      call(onChange, texts, indexes)
    }

    const stopScroll = () => {
      if (props.cascade) {
        const currentScrollColumn = scrollColumns.value.find((scrollColumn) => scrollColumn.scrolling)
        if (currentScrollColumn) {
          currentScrollColumn.translate = getTranslate(currentScrollColumn.scrollEl as HTMLElement)
          currentScrollColumn.index = getIndex(currentScrollColumn)
          scrollTo(currentScrollColumn, currentScrollColumn.index, 0, true)
          currentScrollColumn.scrolling = false
          rebuildChildren(currentScrollColumn)
        }
      } else {
        scrollColumns.value.forEach((scrollColumn) => {
          scrollColumn.translate = getTranslate(scrollColumn.scrollEl as HTMLElement)
          scrollColumn.index = getIndex(scrollColumn)
          scrollTo(scrollColumn, scrollColumn.index, 0)
        })
      }
    }

    // expose
    const confirm = () => {
      stopScroll()

      const { texts, indexes } = getPicked()
      prevIndexes = [...indexes]
      call(props.onConfirm, texts, indexes)
    }

    // expose
    const cancel = () => {
      stopScroll()

      const { texts, indexes } = getPicked()
      prevIndexes = [...indexes]
      call(props.onCancel, texts, indexes)
    }

    watch(
      () => props.columns,
      (newValue: any) => {
        scrollColumns.value = props.cascade
          ? normalizeCascadeColumns(toRaw(newValue) as CascadeColumn[])
          : normalizeNormalColumns(toRaw(newValue) as NormalColumn[] | Texts)

        const { indexes } = getPicked()
        prevIndexes = [...indexes]
      },
      {
        immediate: true,
        deep: true,
      }
    )

    return {
      n,
      classes,
      pack,
      optionHeight,
      optionCount,
      scrollColumns,
      columnHeight,
      center,
      Transition,
      getScrollEl,
      handlePopupUpdateShow,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      handleTransitionend,
      confirm,
      cancel,
      dt,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../button/button';
@import '../popup/popup';
@import './picker';
</style>
