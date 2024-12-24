import { ref, watch } from 'vue'
import { isEmpty } from '@varlet/shared'
import { type OptionProvider } from '../option/provide'

export interface UseSelectControllerOptions {
  modelValue: () => any
  multiple: () => boolean
  optionProviders: () => OptionProvider[]
  optionProvidersLength: () => number
  optionIsIndeterminate?: (option: OptionProvider) => boolean
}

export function useSelectController(options: UseSelectControllerOptions) {
  const {
    multiple: multipleGetter,
    modelValue: modelValueGetter,
    optionProviders: optionProvidersGetter,
    optionProvidersLength: optionProvidersLengthGetter,
    optionIsIndeterminate,
  } = options
  const label = ref<any>('')
  const labels = ref<any[]>([])

  watch(modelValueGetter, syncOptions, { deep: true })
  watch(optionProvidersLengthGetter, syncOptions)

  function computeLabel() {
    const multiple = multipleGetter()
    const modelValue = modelValueGetter()

    if (multiple) {
      labels.value = (modelValue as unknown as any[]).map(findLabel)
    }

    if (!multiple && !isEmpty(modelValue)) {
      label.value = findLabel(modelValue)
    }

    if (!multiple && isEmpty(modelValue)) {
      label.value = ''
    }
  }

  function findLabel(targetValue: any) {
    const options = optionProvidersGetter()

    let option = options.find(({ value }) => value.value === targetValue)

    if (!option) {
      option = options.find(({ label }) => label.value === targetValue)
    }

    return option?.label.value ?? ''
  }

  function findValueOrLabel({ value, label }: OptionProvider) {
    return value.value ?? label.value
  }

  function getSelectedValue(option: OptionProvider) {
    const multiple = multipleGetter()
    const options = optionProvidersGetter()

    return multiple ? options.filter(({ selected }) => selected.value).map(findValueOrLabel) : findValueOrLabel(option)
  }

  function syncOptions() {
    const multiple = multipleGetter()
    const modelValue = modelValueGetter()
    const options = optionProvidersGetter()

    if (multiple) {
      options.forEach((option) =>
        option.sync(
          modelValue.includes(findValueOrLabel(option)),
          optionIsIndeterminate ? optionIsIndeterminate(option) : undefined
        )
      )
    } else {
      options.forEach((option) => option.sync(modelValue === findValueOrLabel(option)))
    }

    computeLabel()
  }

  return {
    label,
    labels,
    computeLabel,
    getSelectedValue,
  }
}
