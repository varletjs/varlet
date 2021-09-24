<template>
  <ul class="var-pagination">
    <li class="var-pagination__total">{{ showTotal(total, range) }}</li>
    <li
      v-ripple="{ disabled: current <= 1 || disabled }"
      class="var-pagination__item"
      :class="{
        'var-pagination__item-disabled': current <= 1 || disabled,
      }"
      @click="clickItem('prev')"
    >
      <slot name="pre">
        <var-icon name="chevron-left" />
      </slot>
    </li>

    <li
      v-if="simple"
      class="var-pagination__simple"
      :class="{
        'var-pagination__item-disabled': disabled,
      }"
    >
      <var-input
        v-model="simpleValue"
        :disabled="disabled"
        var-pagination-cover
        @blur="setPage('simple', simpleValue)"
      />
      / {{ pageCount }}
    </li>
    <li
      v-else
      v-ripple="{ disabled }"
      v-for="(item, index) in pageList"
      :key="item + index"
      class="var-pagination__item"
      :class="{
        'var-pagination__item-active': item === current,
        'var-pagination__item-hide': isHideEllipsis(item, index),
        'var-pagination__item-disabled': disabled,
      }"
      @click="clickItem(item, index)"
    >
      {{ item }}
    </li>

    <li
      v-ripple="{ disabled: current >= pageCount || disabled }"
      class="var-pagination__item"
      :class="{
        'var-pagination__item-disabled': current >= pageCount || disabled,
      }"
      @click="clickItem('next')"
    >
      <slot name="next">
        <var-icon name="chevron-right" />
      </slot>
    </li>
    <li
      v-if="showSizeChanger"
      class="var-pagination__size"
      :class="{
        'var-pagination__item-disabled': disabled,
      }"
    >
      <var-menu v-model:show="menuVisible">
        <div style="display: flex" @click="showMenu">
          <span>{{ size }}条/页</span>
          <var-icon name="menu-down" />
        </div>

        <template #menu>
          <var-cell
            class="var-pagination__list"
            :class="{
              'var-pagination__list-active': size === option,
            }"
            v-for="(option, index) in sizeOption"
            :key="index"
            @click="clickSize(option)"
          >
            {{ option }}条/页
          </var-cell>
        </template>
      </var-menu>
    </li>
    <li
      v-if="showQuickJumper && !simple"
      class="var-pagination__quickly"
      :class="{
        'var-pagination__item-disabled': disabled,
      }"
    >
      跳至
      <var-input v-model="inputValue" :disabled="disabled" var-pagination-cover @blur="setPage('quick', inputValue)" />
      页
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import Menu from '../menu'
import Ripple from '../ripple'
import Icon from '../icon'
import Cell from '../cell'
import Input from '../input'
import { props } from './porps'
import { isNumber, toNumber } from '../utils/shared'
import type { ComputedRef, Ref } from 'vue'

export default defineComponent({
  name: 'VarPagination',
  components: {
    [Menu.name]: Menu,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [Input.name]: Input,
  },
  directives: { Ripple },
  props,
  setup(props) {
    const activePosition = Math.ceil(props.maxShowBtnCount / 2)

    const menuVisible: Ref<boolean> = ref(false)
    const inputValue: Ref<string> = ref('')
    const simpleValue: Ref<string> = ref('1')
    const isHideEllipsisHead: Ref<boolean> = ref(false)
    const isHideEllipsisTail: Ref<boolean> = ref(false)
    const current: Ref<number> = ref(toNumber(props.current) || 1)
    const size: Ref<number> = ref(toNumber(props.size) || 10)
    const pageList: Ref<Array<string | number>> = ref([])

    const pageCount: ComputedRef<number> = computed(() => Math.ceil(toNumber(props.total) / toNumber(size.value)))
    const range: ComputedRef<Array<number>> = computed(() => {
      const start = size.value * (current.value - 1) + 1
      const end =
        size.value * current.value > toNumber(props.total) ? toNumber(props.total) : size.value * current.value

      return [start, end]
    })

    const isHideEllipsis = (item: string | number, index: number) => {
      if (isNumber(item)) return false

      return index === 1 ? isHideEllipsisHead.value : isHideEllipsisTail.value
    }

    const clickItem = (item: string | number, index?: number) => {
      if (item === current.value || props.disabled) return

      if (isNumber(item)) current.value = item
      else if (item === 'prev') current.value > 1 && (current.value -= 1)
      else if (item === 'next') current.value < pageCount.value && (current.value += 1)
      else if (item === '...') {
        if (index === 1) {
          current.value = current.value - props.maxShowBtnCount > 1 ? current.value - props.maxShowBtnCount : 1
        } else {
          current.value =
            current.value + props.maxShowBtnCount < pageCount.value
              ? current.value + props.maxShowBtnCount
              : pageCount.value
        }
      }

      props.onChange?.(current.value)
    }

    const showMenu = () => {
      if (props.disabled) return
      menuVisible.value = true
    }

    const clickSize = (option: number) => {
      size.value = option
      menuVisible.value = false
      props.onSizeChange?.(option)
    }

    const isValidatePage = (value: string) => {
      const pattern = /^[1-9][0-9]*$/
      return pattern.test(value)
    }

    const setPage = (type: 'simple' | 'quick', value: string) => {
      if (isValidatePage(value)) {
        let valueNum = toNumber(value)

        if (valueNum > pageCount.value) {
          valueNum = pageCount.value
        }
        if (valueNum !== current.value) {
          current.value = valueNum
          type === 'simple' && props.onChange?.(valueNum)
        }
      }

      if (type === 'quick') inputValue.value = ''

      if (type === 'simple' && !isValidatePage(value)) simpleValue.value = `${current.value}`
    }

    watch(
      [current, pageCount],
      ([newCurrent, newCount], [oldCurrent, oldCount]) => {
        if (newCurrent > newCount) {
          current.value = newCount
          return
        }

        const { maxShowBtnCount } = props
        simpleValue.value = `${newCurrent}`

        if (newCount - 2 > maxShowBtnCount) {
          if (oldCurrent === undefined || newCount !== oldCount) {
            const list = []
            for (let i = 2; i < maxShowBtnCount + 2; i++) list.push(i)
            pageList.value = [1, '...', ...list, '...', newCount]
          }

          const rEllipseSign = newCount - (maxShowBtnCount - activePosition) - 1

          // 左边不需要出现省略符号占位
          if (newCurrent <= maxShowBtnCount && newCurrent < rEllipseSign) {
            const list = []
            if (toNumber(oldCurrent) > 2) {
              for (let i = 1; i < maxShowBtnCount + 1; i++) list.push(i + 1)
              pageList.value = [1, '...', ...list, '...', newCount]
            }
            isHideEllipsisHead.value = true
            isHideEllipsisTail.value = false
          }
          // 两边都需要出现省略符号占位
          if (newCurrent > maxShowBtnCount && newCurrent < rEllipseSign) {
            // 针对 maxShowBtnCount===1 的特殊处理
            const list = []
            isHideEllipsisHead.value = newCurrent === 2 && maxShowBtnCount === 1
            isHideEllipsisTail.value = false

            for (let i = 1; i < maxShowBtnCount + 1; i++) {
              list.push(newCurrent + i - activePosition)
            }
            pageList.value = [1, '...', ...list, '...', newCount]
          }
          // 右边不需要出现省略符号占位
          if (newCurrent >= rEllipseSign) {
            const list = []
            isHideEllipsisHead.value = false
            isHideEllipsisTail.value = true
            // if (toNumber(oldCurrent) + 1 < newCount - 1) {
            for (let i = 1; i < maxShowBtnCount + 1; i++) {
              list.push(newCount - (maxShowBtnCount - i) - 1)
            }
            pageList.value = [1, '...', ...list, '...', newCount]
            // }
          }
        } else {
          const list = []
          for (let i = 1; i <= newCount; i++) list.push(i)
          pageList.value = list
        }
      },
      {
        immediate: true,
      }
    )

    return {
      current,
      menuVisible,
      size,
      pageCount,
      range,
      pageList,
      inputValue,
      simpleValue,
      isHideEllipsis,
      clickItem,
      showMenu,
      clickSize,
      setPage,
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
