<template>
  <var-picker :model-value="values" :columns="columns" :toolbar="false" @change="handleChange"></var-picker>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, type PropType } from 'vue'
import VarPicker from '../picker/Picker.vue'
import { type PickerColumnOption } from '../picker/props'
import { createDayjs, padStart } from '../utils/shared'
import { DatePickerFormats, DatePickerTypes, DatePickerUnits, MonthList } from './constants'
import type { AllowedDates } from './types'

const dayjs = createDayjs()

const DEFAULT_YEAR_OFFSET = 10

export default defineComponent({
  name: 'DatePickerColumns',
  components: { VarPicker },
  props: {
    modelValue: [String, Array] as PropType<string | string[]>,
    type: {
      type: String as PropType<DatePickerTypes>,
      default: DatePickerTypes.Date,
    },
    min: String,
    max: String,
    allowedDates: Function as PropType<AllowedDates>,
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const current = dayjs().format(DatePickerFormats.Day)
    const minDate = computed(
      () =>
        props.min ??
        dayjs(current).subtract(DEFAULT_YEAR_OFFSET, DatePickerUnits.Year).format(DatePickerFormats.Day),
    )
    const maxDate = computed(
      () => props.max ?? dayjs(current).add(DEFAULT_YEAR_OFFSET, DatePickerUnits.Year).format(DatePickerFormats.Day),
    )
    const values = ref<string[]>([])

    function isInRange(value: string, unit: string) {
      return (
        dayjs(value).isSameOrBefore(dayjs(maxDate.value), unit) &&
        dayjs(value).isSameOrAfter(dayjs(minDate.value), unit)
      )
    }

    function isAvailableYear(year: string) {
      const isAvailable = isInRange(year, DatePickerUnits.Year)

      return props.type === DatePickerTypes.Year && props.allowedDates
        ? isAvailable && props.allowedDates(year)
        : isAvailable
    }

    function isAvailableMonth(year: string, month: string) {
      const value = `${year}-${month}`
      const isAvailable = isInRange(value, DatePickerUnits.Month)

      return props.type === DatePickerTypes.Month && props.allowedDates
        ? isAvailable && props.allowedDates(value)
        : isAvailable
    }

    function isAvailableDay(year: string, month: string, day: string) {
      const value = `${year}-${month}-${day}`
      const isAvailable = isInRange(value, DatePickerUnits.Day)

      return props.allowedDates ? isAvailable && props.allowedDates(value) : isAvailable
    }

    const yearColumn = computed<PickerColumnOption[]>(() => {
      const startYear = dayjs(minDate.value).year()
      const endYear = dayjs(maxDate.value).year()
      const years = Array.from({ length: Math.max(endYear - startYear + 1, 1) }, (_, index) => `${startYear + index}`)

      return years.filter(isAvailableYear).map((year) => ({ text: year, value: year }))
    })

    const monthColumn = computed<PickerColumnOption[]>(() => {
      const year = values.value[0] ?? current.split('-')[0]

      return MonthList.filter((month) => isAvailableMonth(year, month)).map((month) => ({ text: month, value: month }))
    })

    const dayColumn = computed<PickerColumnOption[]>(() => {
      const [year, month] = values.value
      const daysInMonth = dayjs(`${year}-${month}`).daysInMonth()
      const days = Array.from({ length: daysInMonth }, (_, index) => padStart(`${index + 1}`, 2, '0'))

      return days.filter((day) => isAvailableDay(year, month, day)).map((day) => ({ text: day, value: day }))
    })

    const columns = computed<PickerColumnOption[][]>(() => {
      if (props.type === DatePickerTypes.Year) {
        return [yearColumn.value]
      }

      if (props.type === DatePickerTypes.Month) {
        return [yearColumn.value, monthColumn.value]
      }

      return [yearColumn.value, monthColumn.value, dayColumn.value]
    })

    function getClosestValue(options: PickerColumnOption[], value: string) {
      if (options.some((option) => option.value === value)) {
        return value
      }

      const target = dayjs(value).valueOf()

      return `${options.reduce((closest, option) => {
        const distance = Math.abs(dayjs(`${option.value}`).valueOf() - target)
        const closestDistance = Math.abs(dayjs(`${closest.value}`).valueOf() - target)

        return distance < closestDistance ? option : closest
      }, options[0]).value}`
    }

    function setColumnsValues(nextValues: string[]) {
      values.value[0] = getClosestValue(yearColumn.value, nextValues[0])

      if (props.type === DatePickerTypes.Year) {
        return
      }

      values.value[1] = getClosestValue(monthColumn.value, nextValues[1] ?? MonthList[0])

      if (props.type === DatePickerTypes.Month) {
        return
      }

      values.value[2] = getClosestValue(dayColumn.value, nextValues[2] ?? '01')
    }

    function getFormattedValue() {
      if (props.type === DatePickerTypes.Year) {
        return values.value[0]
      }

      if (props.type === DatePickerTypes.Month) {
        return values.value.slice(0, 2).join('-')
      }

      return values.value.slice(0, 3).join('-')
    }

    function initValues() {
      const modelValue = Array.isArray(props.modelValue) ? props.modelValue[0] : props.modelValue
      const date = modelValue ? dayjs(modelValue).format(DatePickerFormats.Day) : current

      setColumnsValues(date.split('-'))
    }

    function handleChange(pickerValues: (string | number)[]) {
      setColumnsValues(pickerValues.map((value) => `${value}`))

      const value = getFormattedValue()

      emit('update:modelValue', value)
      emit('change', value)
    }

    watch(() => [props.modelValue, props.type, props.min, props.max], initValues)

    initValues()

    return {
      values,
      columns,
      handleChange,
    }
  },
})
</script>
