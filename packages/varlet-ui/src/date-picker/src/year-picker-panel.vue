<template>
  <ul :class="n()">
    <li
      v-for="year in yearList"
      :key="year"
      :class="classes(n('item'), [year === toNumber(preview), n('item--active')])"
      :style="{ color: year === toNumber(preview) ? componentProps.color : '' }"
      @click="chooseYear(year)"
    >
      {{ year }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import dayjs from 'dayjs/esm'
import { toNumber } from '@varlet/shared'
import { createNamespace } from '../../utils/components'
import type { ComputedRef, PropType } from 'vue'
import type { ComponentProps } from '../props'

const { n, classes } = createNamespace('year-picker')

export default defineComponent({
  name: 'YearPickerPanel',
  props: {
    preview: {
      type: String,
    },
    componentProps: {
      type: Object as PropType<ComponentProps>,
      required: true,
    },
  },
  emits: ['choose-year'],

  setup(props, { emit }) {
    const yearList: ComputedRef<Array<number>> = computed(() => {
      const list: Array<number> = []
      const {
        preview,
        componentProps: { max, min },
      } = props

      if (!preview) return list

      let yearRange = [toNumber(preview) + 100, toNumber(preview) - 100]

      if (max) {
        const formatMax = dayjs(max).format('YYYY-MM-D')
        const year = toNumber(formatMax.split('-')[0])

        if (year < yearRange[0] && year > yearRange[1]) yearRange = [year, yearRange[1]]
        if (year <= yearRange[1]) return [year]
      }

      if (min) {
        const formatMin = dayjs(min).format('YYYY-MM-D')
        const year = toNumber(formatMin.split('-')[0])

        if (year < yearRange[0] && year > yearRange[1]) yearRange = [yearRange[0], year]
        if (year >= yearRange[0]) return [year]
      }

      for (let i = yearRange[0]; i >= yearRange[1]; i--) {
        list.push(i)
      }
      return list
    })

    const chooseYear = (year: number) => {
      emit('choose-year', year)
    }

    onMounted(() => {
      const activeEl = document.querySelector(`.${n('item--active')}`)
      activeEl?.scrollIntoView({
        block: 'center',
      })
    })

    return {
      n,
      classes,
      yearList,
      chooseYear,
      toNumber,
    }
  },
})
</script>
