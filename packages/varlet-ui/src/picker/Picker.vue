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
            safeArea,
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
            {{ cancelButtonText ?? t('pickerCancelButtonText') }}
          </var-button>
        </slot>
        <slot name="title">
          <div :class="n('title')">{{ title ?? t('pickerTitle') }}</div>
        </slot>
        <slot name="confirm">
          <var-button
            :class="n('confirm-button')"
            text
            var-picker-cover
            :text-color="confirmButtonTextColor"
            @click="confirm"
          >
            {{ confirmButtonText ?? t('pickerConfirmButtonText') }}
          </var-button>
        </slot>
      </div>
      <div :class="n('columns')" :style="{ height: `${columnHeight}px` }">
        <div
          :class="n('column')"
          v-for="c in scrollColumns"
          :key="c.id"
          @touchstart.passive="handleTouchstart($event, c)"
          @touchmove.prevent="handleTouchmove($event, c)"
          @touchend="handleTouchend(c)"
        >
          <div
            :class="n('scroller')"
            :ref="(el) => setScrollEl(el, c)"
            :style="{
              transform: `translateY(${c.translate}px)`,
              transitionDuration: `${c.duration}ms`,
              transitionProperty: c.duration ? 'transform' : 'none',
            }"
            @transitionend="handleTransitionend(c)"
          >
            <div
              v-for="(option, index) in c.column"
              :key="getValue(option)"
              :class="classes(n('option'), option.className)"
              :style="{ height: `${optionHeight}px` }"
              @click="handleClick(c, index)"
            >
              <div :class="classes(n('text'), option.textClassName)">{{ option[getOptionKey('text')] }}</div>
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
import { defineComponent, watch, ref, computed, Transition, type ComponentPublicInstance } from 'vue'
import { props, type PickerColumnOption } from './props'
import { useTouch, useVModel } from '@varlet/use'
import { clamp, clampArrayRange, call } from '@varlet/shared'
import { toPxNum, getTranslateY } from '../utils/elements'
import { t } from '../locale'
import { createNamespace } from '../utils/components'

export interface ScrollColumn {
  id: number
  touching: boolean
  index: number
  prevY: number
  momentumPrevY: number
  momentumTime: number
  translate: number
  duration: number
  scrolling: boolean
  column: PickerColumnOption[]
  scrollEl: HTMLElement | null
}

const { name, n, classes } = createNamespace('picker')

const MOMENTUM_RECORD_TIME = 300
const MOMENTUM_ALLOW_DISTANCE = 15
const TRANSITION_DURATION = 200
const MOMENTUM_TRANSITION_DURATION = 1000
let sid = 0

export default defineComponent({
  name,
  components: {
    VarButton,
    VarPopup,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const modelValue = useVModel(props, 'modelValue')
    const scrollColumns = ref<ScrollColumn[]>([])
    const optionHeight = computed(() => toPxNum(props.optionHeight))
    const optionCount = computed(() => toPxNum(props.optionCount))
    const center = computed(() => (optionCount.value * optionHeight.value) / 2 - optionHeight.value / 2)
    const columnHeight = computed(() => optionCount.value * optionHeight.value)
    const { prevY, moveY, dragging, startTouch, moveTouch, endTouch } = useTouch()

    let prevIndexes: number[] = []

    initScrollColumns()

    watch(() => props.columns, initScrollColumns, { deep: true })

    watch(() => modelValue.value, initScrollColumns)

    function getOptionKey(key: 'text' | 'value' | 'children') {
      const keyMap = {
        text: props.textKey,
        value: props.valueKey,
        children: props.childrenKey,
      }

      return keyMap[key]
    }

    function getValue(option: PickerColumnOption): string | number {
      return option[getOptionKey('value')] ?? option[getOptionKey('text')]
    }

    function setPrevIndexes(indexes: number[]) {
      prevIndexes = [...indexes]
    }

    function normalizeNormalMode(columns: PickerColumnOption[][]) {
      return columns.map((column, idx) => {
        const scrollColumn: ScrollColumn = {
          id: sid++,
          prevY: 0,
          momentumPrevY: 0,
          touching: false,
          translate: center.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column,
          scrollEl: null,
          scrolling: false,
        }
        const value = modelValue.value[idx]
        const index = scrollColumn.column.findIndex((option) => value === getValue(option))
        scrollColumn.index = index === -1 ? 0 : index
        scrollTo(scrollColumn)
        return scrollColumn
      })
    }

    function normalizeCascadeMode(column: PickerColumnOption[]) {
      const scrollColumns: ScrollColumn[] = []

      createChildren(scrollColumns, column)

      return scrollColumns
    }

    function createChildren(scrollColumns: ScrollColumn[], children: PickerColumnOption[], syncModelValue = true) {
      if (children.length) {
        const scrollColumn: ScrollColumn = {
          id: sid++,
          prevY: 0,
          momentumPrevY: 0,
          touching: false,
          translate: center.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: children,
          scrollEl: null,
          scrolling: false,
        }

        scrollColumns.push(scrollColumn)

        if (syncModelValue) {
          const value = modelValue.value[scrollColumns.length - 1]
          const index = children.findIndex((option) => value === getValue(option))
          scrollColumn.index = index === -1 ? 0 : index
        }

        scrollTo(scrollColumn)
        createChildren(
          scrollColumns,
          scrollColumn.column[scrollColumn.index][getOptionKey('children')] ?? [],
          syncModelValue
        )
      }
    }

    function rebuildChildren(scrollColumn: ScrollColumn) {
      scrollColumns.value.splice(scrollColumns.value.indexOf(scrollColumn) + 1)
      createChildren(
        scrollColumns.value,
        scrollColumn.column[scrollColumn.index][getOptionKey('children')] ?? [],
        false
      )
    }

    function initScrollColumns() {
      scrollColumns.value = props.cascade
        ? normalizeCascadeMode(props.columns as PickerColumnOption[])
        : normalizeNormalMode(props.columns as PickerColumnOption[][])

      const { indexes } = getPicked()
      setPrevIndexes(indexes)
    }

    function setScrollEl(el: Element | ComponentPublicInstance | null, scrollColumn: ScrollColumn) {
      scrollColumn.scrollEl = el as HTMLElement
    }

    function handlePopupUpdateShow(value: boolean) {
      call(props['onUpdate:show'], value)
    }

    function clampTranslate(scrollColumn: ScrollColumn) {
      const minTranslate = center.value - scrollColumn.column.length * optionHeight.value
      const maxTranslate = optionHeight.value + center.value
      scrollColumn.translate = clamp(scrollColumn.translate, minTranslate, maxTranslate)
    }

    function getTargetIndex(scrollColumn: ScrollColumn, viewTranslate: number) {
      const index = Math.round((center.value - viewTranslate) / optionHeight.value)
      return clampArrayRange(index, scrollColumn.column)
    }

    function updateTranslate(scrollColumn: ScrollColumn) {
      scrollColumn.translate = center.value - scrollColumn.index * optionHeight.value
      return scrollColumn.translate
    }

    function getPicked() {
      const values: (string | number)[] = []
      const indexes: number[] = []
      const options: PickerColumnOption[] = []

      scrollColumns.value.forEach(({ column, index }) => {
        const option = column[index]

        values.push(getValue(option))
        indexes.push(index)
        options.push(option)
      })

      return {
        values,
        indexes,
        options,
      }
    }

    function scrollTo(scrollColumn: ScrollColumn, duration = 0) {
      updateTranslate(scrollColumn)
      scrollColumn.duration = duration
    }

    function momentum(scrollColumn: ScrollColumn, distance: number, duration: number) {
      scrollColumn.translate += (Math.abs(distance / duration) / 0.003) * (distance < 0 ? -1 : 1)
    }

    function handleClick(scrollColumn: ScrollColumn, index: number) {
      if (dragging.value) {
        return
      }

      scrollColumn.index = index
      scrollTo(scrollColumn, TRANSITION_DURATION)
    }

    function handleTouchstart(event: TouchEvent, scrollColumn: ScrollColumn) {
      scrollColumn.touching = true
      scrollColumn.translate = getTranslateY(scrollColumn.scrollEl as HTMLElement)
      startTouch(event)
    }

    function handleTouchmove(event: TouchEvent, scrollColumn: ScrollColumn) {
      if (!scrollColumn.touching) {
        return
      }

      moveTouch(event)
      scrollColumn.scrolling = false
      scrollColumn.duration = 0
      scrollColumn.prevY = prevY.value
      scrollColumn.translate += moveY.value

      clampTranslate(scrollColumn)

      const now = performance.now()
      if (now - scrollColumn.momentumTime > MOMENTUM_RECORD_TIME) {
        scrollColumn.momentumTime = now
        scrollColumn.momentumPrevY = scrollColumn.translate
      }
    }

    function handleTouchend(scrollColumn: ScrollColumn) {
      endTouch()

      scrollColumn.touching = false
      scrollColumn.prevY = 0
      const distance = scrollColumn.translate - scrollColumn.momentumPrevY
      const duration = performance.now() - scrollColumn.momentumTime
      const shouldMomentum = Math.abs(distance) >= MOMENTUM_ALLOW_DISTANCE && duration <= MOMENTUM_RECORD_TIME
      const oldTranslate = scrollColumn.translate

      if (shouldMomentum) {
        momentum(scrollColumn, distance, duration)
      }

      scrollColumn.index = getTargetIndex(scrollColumn, scrollColumn.translate)
      scrollTo(scrollColumn, shouldMomentum ? MOMENTUM_TRANSITION_DURATION : TRANSITION_DURATION)
      scrollColumn.scrolling = scrollColumn.translate !== oldTranslate

      // Can't trigger transition end when not scrolling, change needs to be triggered manually.
      if (!scrollColumn.scrolling) {
        handleScrollColumnChange(scrollColumn)
      }
    }

    function handleTransitionend(scrollColumn: ScrollColumn) {
      scrollColumn.scrolling = false
      handleScrollColumnChange(scrollColumn)
    }

    function isSamePicked() {
      const { indexes } = getPicked()
      return indexes.every((index, idx) => index === prevIndexes[idx])
    }

    function handleScrollColumnChange(scrollColumn: ScrollColumn) {
      const { onChange, cascade } = props

      if (isSamePicked()) {
        return
      }

      if (cascade) {
        rebuildChildren(scrollColumn)
      }

      const hasScrolling = scrollColumns.value.some((scrollColumn) => scrollColumn.scrolling)
      const hasTouching = scrollColumns.value.some((scrollColumn) => scrollColumn.touching)
      if (hasScrolling || hasTouching) {
        return
      }

      // rebuild will update the value of picked, so need to get the latest value again.
      const { values, indexes, options } = getPicked()
      setPrevIndexes(indexes)
      call(onChange, values, indexes, options)
      modelValue.value = values
    }

    function stopScroll() {
      if (props.cascade) {
        const currentScrollColumn = scrollColumns.value.find((scrollColumn) => scrollColumn.scrolling)

        if (currentScrollColumn) {
          currentScrollColumn.index = getTargetIndex(currentScrollColumn, getTranslateY(currentScrollColumn.scrollEl!))
          currentScrollColumn.scrolling = false
          scrollTo(currentScrollColumn)
          rebuildChildren(currentScrollColumn)
        }
      } else {
        scrollColumns.value.forEach((scrollColumn) => {
          scrollColumn.index = getTargetIndex(scrollColumn, getTranslateY(scrollColumn.scrollEl!))
          scrollTo(scrollColumn)
        })
      }
    }

    // expose
    function confirm() {
      stopScroll()

      const { values, indexes, options } = getPicked()
      setPrevIndexes(indexes)
      call(props.onConfirm, values, indexes, options)
    }

    // expose
    function cancel() {
      stopScroll()

      const { values, indexes, options } = getPicked()
      setPrevIndexes(indexes)
      call(props.onCancel, values, indexes, options)
    }

    return {
      t,
      optionHeight,
      optionCount,
      scrollColumns,
      columnHeight,
      center,
      Transition,
      n,
      classes,
      setScrollEl,
      getOptionKey,
      getValue,
      handlePopupUpdateShow,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      handleTransitionend,
      confirm,
      cancel,
      handleClick,
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
