<template>
  <ul :class="n()">
    <li
      v-ripple="{ disabled: current <= 1 || disabled }"
      :class="
        classes(
          n('item'),
          n('prev'),
          [current <= 1 || disabled, n('item--disabled')],
          [simple, n('item--simple'), formatElevation(elevation, 2)],
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
        var-pagination-cover
        :hint="false"
        :disabled="disabled"
        @blur="setPage('simple', simpleCurrentValue, $event)"
        @keydown.enter="setPage('simple', simpleCurrentValue, $event)"
      />
      <span>
        / {{ pageCount }}
        <div :class="n('simple-line')"></div>
      </span>
    </li>
    <li
      v-for="(item, index) in pageList"
      v-else
      :key="index"
      v-ripple="{ disabled }"
      :item-mode="getMode(item, index)"
      :class="
        classes(
          n('item'),
          formatElevation(elevation, 2),
          [item === current && !disabled, n('item--active')],
          [isHideEllipsis(item, index), n('item--hide')],
          [disabled, n('item--disabled')],
          [item === current && disabled, n('item--disabled--active')],
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
          [simple, n('item--simple'), formatElevation(elevation, 2)],
        )
      "
      @click="clickItem('next')"
    >
      <slot name="next">
        <var-icon name="chevron-right" />
      </slot>
    </li>

    <var-menu-select v-if="showSizeChanger" v-model="size" placement="cover-top" :disabled="disabled">
      <li :class="classes(n('size'), [disabled, n('item--disabled')])">
        <div :class="classes(n('size--open'), [current <= 1 || disabled, n('size--open--disabled')])">
          <span>{{ size }}{{ (pt ? pt : t)('paginationItem') }} / {{ (pt ? pt : t)('paginationPage') }}</span>
          <var-icon :class="n('size--open-icon')" var-pagination-cover name="menu-down" />
        </div>
      </li>

      <template #options>
        <var-menu-option v-for="(option, index) in sizeOption" :key="index" :value="option" @click="clickSize">
          {{ option }}{{ (pt ? pt : t)('paginationItem') }} / {{ (pt ? pt : t)('paginationPage') }}
        </var-menu-option>
      </template>
    </var-menu-select>

    <li v-if="showQuickJumper && !simple" :class="classes(n('quickly'), [disabled, n('item--disabled')])">
      {{ (pt ? pt : t)('paginationJump') }}
      <var-input
        v-model="quickJumperValue"
        :disabled="disabled"
        :hint="false"
        var-pagination-cover
        @blur="setPage('quick', quickJumperValue, $event)"
        @keydown.enter="setPage('quick', quickJumperValue, $event)"
      />
    </li>

    <li v-if="totalText" :class="classes(n('total'), [disabled, n('item--disabled')])">
      {{ totalText }}
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { call, isNumber, toNumber } from '@varlet/shared'
import VarIcon from '../icon'
import VarInput from '../input'
import { t } from '../locale'
import { injectLocaleProvider } from '../locale-provider/provide'
import VarMenuOption from '../menu-option'
import VarMenuSelect from '../menu-select'
import Ripple from '../ripple'
import { createNamespace, formatElevation } from '../utils/components'
import { props, type Range } from './props'

const { name, n, classes } = createNamespace('pagination')

export default defineComponent({
  name,
  components: {
    VarMenuSelect,
    VarMenuOption,
    VarIcon,
    VarInput,
  },
  directives: { Ripple },
  props,
  setup(props) {
    const quickJumperValue = ref('')
    const simpleCurrentValue = ref('1')
    const isHideEllipsisHead = ref(false)
    const isHideEllipsisTail = ref(false)
    const current = ref(toNumber(props.current) || 1)
    const size = ref(toNumber(props.size) || 10)
    const pageList = ref<(string | number)[]>([])
    const activePosition = computed(() => Math.ceil(props.maxPagerCount / 2))
    const pageCount = computed(() => Math.ceil(toNumber(props.total) / toNumber(size.value)))
    const range = computed<Range>(() => {
      const start = size.value * (current.value - 1) + 1
      const end = Math.min(size.value * current.value, toNumber(props.total))

      return [start, end]
    })
    const totalText = computed(() => {
      if (!props.showTotal) {
        return ''
      }

      return props.showTotal(toNumber(props.total), range.value)
    })

    const { t: pt } = injectLocaleProvider()

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
            for (let i = 2; i < maxPagerCount + 2; i++) {
              list.push(i)
            }
          }

          if (newCurrent <= maxPagerCount && newCurrent < rEllipseSign) {
            list = []

            for (let i = 1; i < maxPagerCount + 1; i++) {
              list.push(i + 1)
            }

            isHideEllipsisHead.value = true
            isHideEllipsisTail.value = false
          }

          if (newCurrent > maxPagerCount && newCurrent < rEllipseSign) {
            list = []

            for (let i = 1; i < maxPagerCount + 1; i++) {
              list.push(newCurrent + i - activePosition.value)
            }

            isHideEllipsisHead.value = newCurrent === 2 && maxPagerCount === 1
            isHideEllipsisTail.value = false
          }

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
          for (let i = 1; i <= newCount; i++) {
            list.push(i)
          }
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
      },
    )

    function isHideEllipsis(item: string | number, index: number): boolean {
      if (isNumber(item)) {
        return false
      }

      return index === 1 ? isHideEllipsisHead.value : isHideEllipsisTail.value
    }

    function getMode(item: string | number, index: number) {
      if (isNumber(item)) {
        return 'basic'
      }

      return index === 1 ? 'head' : 'tail'
    }

    function clickItem(item: string | number, index?: number) {
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

    function clickSize() {
      const targetCurrent = ensureCurrentBoundary(current.value)
      simpleCurrentValue.value = String(targetCurrent)
      current.value = targetCurrent
    }

    function ensureCurrentBoundary(targetCurrent: number) {
      if (targetCurrent > pageCount.value) {
        return pageCount.value
      }

      if (targetCurrent < 1) {
        return 1
      }

      return targetCurrent
    }

    function setPage(type: 'simple' | 'quick', page: string, event: KeyboardEvent | FocusEvent) {
      ;(event.target as HTMLInputElement).blur()

      const targetCurrent = ensureCurrentBoundary(toNumber(page))
      simpleCurrentValue.value = String(targetCurrent)
      current.value = targetCurrent

      if (type === 'quick') {
        quickJumperValue.value = ''
      }
    }

    return {
      current,
      size,
      pageCount,
      pageList,
      quickJumperValue,
      simpleCurrentValue,
      totalText,
      pt,
      t,
      n,
      classes,
      getMode,
      isHideEllipsis,
      clickItem,
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
@import '../menu-select/menuSelect';
@import '../menu-option/menuOption';
@import '../cell/cell';
@import '../ripple/ripple';
@import '../icon/icon';
@import '../field-decorator/fieldDecorator';
@import '../form-details/formDetails';
@import '../input/input';
@import './pagination';
</style>
