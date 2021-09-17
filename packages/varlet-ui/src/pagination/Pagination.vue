<template>
  <div class="var-pagination">
    <div class="var-pagination--size">
      <div class="active">
        <!-- {{ size }} -->
        <var-select :hint="false" :line="false" :placeholder="size" v-model="size">
          <var-option v-for="(item, index) in sizeData" :key="index" @click="sizeSelect(item)" :label="item" />
        </var-select>
      </div>
      /页
      <!-- <var-menu alignment="bottom" v-model:show="sizeShow">
        <template #menu>
          <div class="cell-list">
            <var-cell v-for="(item, index) in sizeData" :key="index" @click="sizeSelect(item)">{{ item }}</var-cell>
          </div>
        </template>
      </var-menu> -->
    </div>
    <div class="var-pagination--total">共{{ total }}条</div>
    <div class="var-pagination--page">
      <div class="page_icon" @click="prev" v-ripple="{ disabled: current < 2 }">
        <var-icon name="chevron-left" :color="current < 2 ? `#DCDCDC` : ``" />
      </div>
      <div class="text">
        <var-select :hint="false" :line="false" :placeholder="size" v-model="current">
          <var-option v-for="(item, index) in pageData" :key="index" @click="pageSelect(item)" :label="item" />
        </var-select>
      </div>
      <div class="page_icon" @click="next" v-ripple="{ disabled: current >= max }">
        <var-icon name="chevron-right" :color="current >= max ? `#DCDCDC` : ``" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, onBeforeMount, Ref } from 'vue'
import menu from '../menu'
import cell from '../cell'
import select from '../select'
import option from '../option'
import button from '../button'
import ripple from '../ripple'

import { props } from './porps'
import { toNumber } from '../utils/shared'

export default defineComponent({
  name: 'VarPagination',
  components: {
    [menu.name]: menu,
    [cell.name]: cell,
    [button.name]: button,
    [select.name]: select,
    [option.name]: option,
  },
  props,
  setup(props, context) {
    const sizeShow = ref(true)
    const pageShow = ref(true)
    const pageData: Ref<number[]> = ref([])
    // const total = ref(66)
    const current: Ref<number> = ref(1)
    const size = ref(5)
    // const { sizeData } = props
    const sizeData = computed(() => {
      return props.sizeData
    })
    const total = computed(() => {
      return toNumber(props.total as string | number)
    })
    const max = ref(0)

    const sizeFocus = () => {
      sizeShow.value = true
    }

    const sizeSelect = (value: number) => {
      const oldValue = size.value
      size.value = value
      sizeShow.value = false
      pageList()
      pageShow.value = false
      context.emit('size-click', value, oldValue)
    }

    const pageFocus = () => {
      pageShow.value = true
    }

    const pageSelect = (value: number) => {
      current.value = value
      pageShow.value = false
      sizeShow.value = false
    }

    const pageList = () => {
      const totalPage = toNumber(total.value) / toNumber(size.value)
      const arr = []
      for (let i = 1; i < Math.ceil(totalPage) + 1; i++) {
        arr.push(i)
      }
      console.log(total.value)

      console.log(Math.ceil(totalPage))

      if (current.value > arr[arr.length - 1]) {
        current.value = arr[arr.length - 1]
      }
      pageData.value = arr
      max.value = arr[arr.length - 1]
    }

    const next = () => {
      if (current.value >= max.value) {
        return
      }
      const oldValue = current.value
      current.value += 1
      context.emit('next-click', current.value, oldValue)
    }

    const prev = () => {
      if (current.value < 2) {
        return
      }
      const oldValue = current.value
      current.value -= 1
      context.emit('prev-click', current.value, oldValue)
    }

    pageList()

    onBeforeMount(() => {
      console.log(props)
    })

    watch(
      () => current.value,
      (newValue, oldValue) => {
        context.emit('page-change', newValue, oldValue)
      }
    )

    watch(
      () => props.current,
      (newValue) => {
        if (newValue >= max.value) {
          current.value = max.value
        } else if (newValue < 1) {
          current.value = 1
        } else {
          current.value = toNumber(newValue)
        }
      }
    )

    return {
      sizeFocus,
      pageFocus,
      pageSelect,
      sizeSelect,
      sizeShow,
      pageShow,
      sizeData,
      pageData,
      total,
      current,
      size,
      max,
      pageList,
      next,
      prev,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './pagination';
</style>
