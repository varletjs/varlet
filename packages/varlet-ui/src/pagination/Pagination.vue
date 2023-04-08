<template>
  <ul :class="n()">
    <li
      v-ripple="{ disabled: current <= 1 || disabled }"
      :class="
        classes(
          n('item'),
          n('prev'),
          [current <= 1 || disabled, n('item--disabled')],
          [simple, n('item--simple'), formatElevation(elevation, 2)]
        )
      "
      @click="clickItem('prev')"
    >
      <slot name="prev">
        <var-icon name="chevron-left" />
      </slot>
    </li>
    <li v-if="simple" :class="classes(n('simple'), [disabled, n('item--disabled')])">
      <var-input
        v-model="simpleCurrentValue"
        :disabled="disabled"
        var-pagination-cover
        @blur="setPage('simple', simpleCurrentValue, $event)"
        @keydown.enter="setPage('simple', simpleCurrentValue, $event)"
      />
      <span>
        / {{ pageCount }}
        <div :class="n('simple-line')"></div>
      </span>
    </li>
    <li
      v-else
      v-ripple="{ disabled }"
      v-for="(item, index) in pageList"
      :key="toNumber(item) + index"
      :item-mode="getMode(item, index)"
      :class="
        classes(
          n('item'),
          formatElevation(elevation, 2),
          [item === current && !disabled, n('item--active')],
          [isHideEllipsis(item, index), n('item--hide')],
          [disabled, n('item--disabled')],
          [item === current && disabled, n('item--disabled--active')]
        )
      "
      @click="clickItem(item, index)"
    >
      {{ item }}
    </li>
    <li
      v-ripple="{ disabled: current >= pageCount || disabled }"
      :class="
        classes(
          n('item'),
          n('next'),
          [current >= pageCount || disabled, n('item--disabled')],
          [simple, n('item--simple'), formatElevation(elevation, 2)]
        )
      "
      @click="clickItem('next')"
    >
      <slot name="next">
        <var-icon name="chevron-right" />
      </slot>
    </li>

    <li v-if="showSizeChanger" :class="classes(n('size'), [disabled, n('item--disabled')])">
      <var-menu :disabled="disabled" v-model:show="menuVisible" :offset-x="-4">
        <div
          :class="classes(n('size--open'), [current <= 1 || disabled, n('size--open--disabled')])"
          @click.stop="showMenu"
        >
          <span>{{ size }}{{ pack.paginationItem }} / {{ pack.paginationPage }}</span>
          <var-icon :class="n('size--open-icon')" var-pagination-cover name="menu-down" />
        </div>

        <template #menu>
          <var-cell
            :class="classes(n('list'), [size === option, n('list--active')])"
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
    <li v-if="showQuickJumper && !simple" :class="classes(n('quickly'), [disabled, 'item--disabled'])">
      {{ pack.paginationJump }}
      <var-input
        v-model="quickJumperValue"
        :disabled="disabled"
        var-pagination-cover
        @blur="setPage('quick', quickJumperValue, $event)"
        @keydown.enter="setPage('quick', quickJumperValue, $event)"
      />
    </li>

    <li v-if="totalText" :class="n('total')">
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
import { defineComponent, ref, computed, watch, type ComputedRef, type Ref } from 'vue'
import { props, type Range } from './props'
import { isNumber, toNumber } from '@varlet/shared'
import { pack } from '../locale'
import { call, createNamespace, formatElevation } from '../utils/components'

const { n, classes } = createNamespace('pagination')

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
    const quickJumperValue: Ref<string> = ref('')
    const simpleCurrentValue: Ref<string> = ref('1')
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
      if (item === current.value || props.disabled) {
        return
      }

      if (item === '...') {
        current.value =
          index === 1
            ? Math.max(current.value - props.maxPagerCount, 1)
            : Math.min(current.value + props.maxPagerCount, pageCount.value)
        return
      }

      if (item === 'prev') {
        current.value = ensureCurrentBoundary(current.value - 1)
        return
      }

      if (item === 'next') {
        current.value = ensureCurrentBoundary(current.value + 1)
        return
      }

      if (isNumber(item)) {
        current.value = item
      }
    }

    const showMenu = () => {
      if (props.disabled) {
        return
      }

      menuVisible.value = true
    }

    const clickSize = (option: number) => {
      size.value = option
      menuVisible.value = false

      const targetCurrent = ensureCurrentBoundary(current.value)
      simpleCurrentValue.value = String(targetCurrent)
      current.value = targetCurrent
    }

    const ensureCurrentBoundary = (targetCurrent: number) => {
      if (targetCurrent > pageCount.value) {
        return pageCount.value
      }

      if (targetCurrent < 1) {
        return 1
      }

      return targetCurrent
    }

    const setPage = (type: 'simple' | 'quick', page: string, event: KeyboardEvent | FocusEvent) => {
      ;(event.target as HTMLInputElement).blur()

      const targetCurrent = ensureCurrentBoundary(toNumber(page))
      simpleCurrentValue.value = String(targetCurrent)
      current.value = targetCurrent

      if (type === 'quick') {
        quickJumperValue.value = ''
      }
    }

    watch([() => props.current, () => props.size], ([newCurrent, newSize]) => {
      current.value = toNumber(newCurrent) || 1
      size.value = toNumber(newSize || 10)
    })

    watch(
      [current, size, pageCount],
      ([newCurrent, newSize, newCount], [oldCurrent, oldSize]) => {
        let list = []
        const { maxPagerCount, total, onChange } = props
        const oldCount = Math.ceil(toNumber(total) / toNumber(oldSize))
        const rEllipseSign = newCount - (maxPagerCount - activePosition.value) - 1
        simpleCurrentValue.value = `${newCurrent}`

        if (newCount - 2 > maxPagerCount) {
          if (oldCurrent === undefined || newCount !== oldCount) {
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
              list.push(newCount - (maxPagerCount - i) - 1)
            }

            isHideEllipsisHead.value = false
            isHideEllipsisTail.value = true
          }

          list = [1, '...', ...list, '...', newCount]
        } else {
          for (let i = 1; i <= newCount; i++) list.push(i)
        }

        pageList.value = list

        if (oldCurrent != null && newCount > 0) {
          call(onChange, newCurrent, newSize)
        }

        call(props['onUpdate:current'], newCurrent)
        call(props['onUpdate:size'], newSize)
      },
      {
        immediate: true,
      }
    )

    return {
      n,
      classes,
      pack,
      current,
      menuVisible,
      size,
      pageCount,
      pageList,
      quickJumperValue,
      simpleCurrentValue,
      totalText,
      getMode,
      isHideEllipsis,
      clickItem,
      showMenu,
      clickSize,
      setPage,
      toNumber,
      formatElevation,
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
