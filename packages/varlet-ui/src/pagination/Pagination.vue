<template>
  <ul class="var-pagination">
    <li
      v-ripple="{ disabled: current <= 1 || disabled }"
      class="var-pagination__item var-pagination__prev"
      :class="{
        'var-pagination__item-disabled': current <= 1 || disabled,
        'var-pagination__item-hover': simple,
        'var-elevation--2': !simple,
      }"
      @click="clickItem('prev')"
    >
      <slot name="prev">
        <var-icon name="chevron-left" />
      </slot>
    </li>
    <li v-if="simple" class="var-pagination__simple" :class="{ 'var-pagination__item-disabled': disabled }">
      <var-input
        v-model="simpleValue"
        :disabled="disabled"
        var-pagination-cover
        @blur="setPage('simple', simpleValue, $event)"
        @keydown.enter="setPage('simple', simpleValue, $event)"
      />
      <span>/ {{ pageCount }}</span>
    </li>
    <li
      v-else
      v-ripple="{ disabled }"
      v-for="(item, index) in pageList"
      :key="toNumber(item) + index"
      :item-mode="getMode(item, index)"
      class="var-pagination__item var-elevation--2"
      :class="{
        'var-pagination__item-active': item === current && !disabled,
        'var-pagination__item-hide': isHideEllipsis(item, index),
        'var-pagination__item-disabled': disabled,
        'var-pagination__item-disabled-active': item === current && disabled,
      }"
      @click="clickItem(item, index)"
    >
      {{ item }}
    </li>
    <li
      v-ripple="{ disabled: current >= pageCount || disabled }"
      class="var-pagination__item var-pagination__next"
      :class="{
        'var-pagination__item-disabled': current >= pageCount || disabled,
        'var-pagination__item-hover': simple,
        'var-elevation--2': !simple,
      }"
      @click="clickItem('next')"
    >
      <slot name="next">
        <var-icon name="chevron-right" />
      </slot>
    </li>

    <li v-if="showSizeChanger" class="var-pagination__size" :class="{ 'var-pagination__item-disabled': disabled }">
      <var-menu v-model:show="menuVisible" :offset-x="-4">
        <div class="var-pagination__size-open" style="display: flex" @click="showMenu">
          <span>{{ size }}{{ pack.paginationItem }} / {{ pack.paginationPage }}</span>
          <var-icon class="var-pagination__size-open-icon" var-pagination-cover name="menu-down" />
        </div>

        <template #menu>
          <var-cell
            class="var-pagination__list"
            :class="{
              'var-pagination__list-active': size === option,
            }"
            v-ripple
            v-for="(option, index) in sizeOption"
            :key="index"
            @click="clickSize(option)"
          >
            {{ option }}{{ pack.paginationItem }} / {{ pack.paginationPage }}
          </var-cell>
        </template>
      </var-menu>
    </li>
    <li
      v-if="showQuickJumper && !simple"
      class="var-pagination__quickly"
      :class="{ 'var-pagination__item-disabled': disabled }"
    >
      {{ pack.paginationJump }}
      <var-input
        v-model="inputValue"
        :disabled="disabled"
        var-pagination-cover
        @blur="setPage('quick', inputValue, $event)"
        @keydown.enter="setPage('quick', inputValue, $event)"
      />
    </li>

    <li v-if="totalText" class="var-pagination__total">
      {{ totalText }}
    </li>
  </ul>
</template>

<script lang="ts">
import VarMenu from '../menu'
import Ripple from '../ripple'
import VarIcon from '../icon'
import VarCell from '../cell'
import VarInput from '../input'
import { defineComponent, ref, computed, watch } from 'vue'
import { props } from './props'
import { isNumber, toNumber } from '../utils/shared'
import { pack } from '../locale'
import type { ComputedRef, Ref } from 'vue'
import type { Range } from './props'

export default defineComponent({
  name: 'VarPagination',
  components: {
    VarMenu,
    VarIcon,
    VarCell,
    VarInput,
  },
  directives: { Ripple },
  props,
  setup(props) {
    const menuVisible: Ref<boolean> = ref(false)
    const inputValue: Ref<string> = ref('')
    const simpleValue: Ref<string> = ref('1')
    const isHideEllipsisHead: Ref<boolean> = ref(false)
    const isHideEllipsisTail: Ref<boolean> = ref(false)
    const current: Ref<number> = ref(toNumber(props.current) || 1)
    const size: Ref<number> = ref(toNumber(props.size) || 10)
    const pageList: Ref<Array<string | number>> = ref([])

    const activePosition: ComputedRef<number> = computed(() => Math.ceil(props.maxPagerCount / 2))
    const pageCount: ComputedRef<number> = computed(() => Math.ceil(toNumber(props.total) / toNumber(size.value)))
    const range: ComputedRef<Range> = computed(() => {
      const start = size.value * (current.value - 1) + 1
      const end = Math.min(size.value * current.value, toNumber(props.total))

      return [start, end]
    })
    const totalText: ComputedRef<string> = computed(() => {
      if (!props.showTotal) return ''

      return props.showTotal(toNumber(props.total), range.value)
    })

    const isHideEllipsis = (item: string | number, index: number): boolean => {
      if (isNumber(item)) return false

      return index === 1 ? isHideEllipsisHead.value : isHideEllipsisTail.value
    }

    const getMode = (item: string | number, index: number) => {
      if (isNumber(item)) return 'basic'

      return index === 1 ? 'head' : 'tail'
    }

    const clickItem = (item: string | number, index?: number) => {
      if (item === current.value || props.disabled) return

      if (isNumber(item)) current.value = item
      else if (item === 'prev') current.value > 1 && (current.value -= 1)
      else if (item === 'next') current.value < pageCount.value && (current.value += 1)
      else if (item === '...') {
        if (index === 1) {
          current.value = Math.max(current.value - props.maxPagerCount, 1)
        } else {
          current.value = Math.min(current.value + props.maxPagerCount, pageCount.value)
        }
      }
    }

    const showMenu = () => {
      if (props.disabled) return
      menuVisible.value = true
    }

    const clickSize = (option: number) => {
      size.value = option
      menuVisible.value = false
    }

    const isValidatePage = (value: string) => {
      const pattern = /^[1-9][0-9]*$/
      return pattern.test(value)
    }

    const setPage = (type: 'simple' | 'quick', value: string, event: KeyboardEvent | FocusEvent) => {
      ;(event.target as HTMLInputElement).blur()
      if (isValidatePage(value)) {
        let valueNum = toNumber(value)

        if (valueNum > pageCount.value) {
          valueNum = pageCount.value
          simpleValue.value = `${valueNum}`
        }

        if (valueNum !== current.value) current.value = valueNum
      }

      if (type === 'quick') inputValue.value = ''

      if (type === 'simple' && !isValidatePage(value)) simpleValue.value = `${current.value}`
    }

    watch([() => props.current, () => props.size], ([newCurrent, newSize]) => {
      current.value = toNumber(newCurrent) || 1
      size.value = toNumber(newSize || 10)
    })

    watch(
      [current, size],
      ([newCurrent, newSize], [oldCurrent, oldSize]) => {
        if (newCurrent > pageCount.value) {
          current.value = pageCount.value
          return
        }

        let list = []
        const { maxPagerCount, total, onChange } = props
        const oldCount = Math.ceil(toNumber(total) / toNumber(oldSize))
        const rEllipseSign = pageCount.value - (maxPagerCount - activePosition.value) - 1
        simpleValue.value = `${newCurrent}`

        if (pageCount.value - 2 > maxPagerCount) {
          if (oldCurrent === undefined || pageCount.value !== oldCount) {
            for (let i = 2; i < maxPagerCount + 2; i++) list.push(i)
          }

          // 左边不需要出现省略符号占位
          if (newCurrent <= maxPagerCount && newCurrent < rEllipseSign) {
            list = []

            for (let i = 1; i < maxPagerCount + 1; i++) {
              list.push(i + 1)
            }

            isHideEllipsisHead.value = true
            isHideEllipsisTail.value = false
          }
          // 两边都需要出现省略符号占位
          if (newCurrent > maxPagerCount && newCurrent < rEllipseSign) {
            list = []

            for (let i = 1; i < maxPagerCount + 1; i++) {
              list.push(newCurrent + i - activePosition.value)
            }

            // 针对 maxPagerCount===1 的特殊处理
            isHideEllipsisHead.value = newCurrent === 2 && maxPagerCount === 1
            isHideEllipsisTail.value = false
          }
          // 右边不需要出现省略符号占位
          if (newCurrent >= rEllipseSign) {
            list = []

            for (let i = 1; i < maxPagerCount + 1; i++) {
              list.push(pageCount.value - (maxPagerCount - i) - 1)
            }

            isHideEllipsisHead.value = false
            isHideEllipsisTail.value = true
          }

          list = [1, '...', ...list, '...', pageCount.value]
        } else {
          for (let i = 1; i <= pageCount.value; i++) list.push(i)
        }

        pageList.value = list

        if (oldCurrent !== undefined) onChange?.(newCurrent, newSize)
        props['onUpdate:current']?.(newCurrent)
        props['onUpdate:size']?.(newSize)
      },
      {
        immediate: true,
      }
    )

    return {
      pack,
      current,
      menuVisible,
      size,
      pageCount,
      pageList,
      inputValue,
      simpleValue,
      totalText,
      getMode,
      isHideEllipsis,
      clickItem,
      showMenu,
      clickSize,
      setPage,
      toNumber,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../menu/menu';
@import '../cell/cell';
@import '../input/input';
@import '../ripple/ripple';
@import '../icon/icon';
@import './pagination';
</style>
