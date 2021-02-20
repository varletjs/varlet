<template>
  <ul class="var-year-picker__panel">
    <li
      v-for="year in yearList"
      :key="year"
      :class="[year === +preview ? 'var-year-picker__panel--active' : null]"
      :style="{ color: year === +preview ? componentProps.color : '' }"
      @click="chooseYear(year)"
    >
      {{ year }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef, onMounted, PropType } from 'vue'
import dayjs from 'dayjs'
import { ComponentProps } from '../props'

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
  setup(props, { emit }) {
    const yearList: ComputedRef<Array<number>> = computed(() => {
      const list: Array<number> = []
      if (!props.preview) return list
      let yearRange = [+props.preview + 100, +props.preview - 100]

      if (props.componentProps.max) {
        const formatMax = dayjs(props.componentProps.max).format('YYYY-MM-D')
        const year = parseInt(formatMax.split('-')[0], 10)
        if (year < yearRange[0] && year > yearRange[1]) yearRange = [year, yearRange[1]]
        if (year <= yearRange[1]) return [year]
      }

      if (props.componentProps.min) {
        const formatMin = dayjs(props.componentProps.min).format('YYYY-MM-D')
        const year = parseInt(formatMin.split('-')[0], 10)
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
      const activeEl = document.querySelector('.var-year-picker__panel--active')
      activeEl?.scrollIntoView({
        block: 'center',
      })
    })

    return {
      yearList,
      chooseYear,
    }
  },
})
</script>
