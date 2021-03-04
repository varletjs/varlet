<template>
  <div
    class="var-select var--box"
    :class="[formDisabled || disabled ? 'var-select--disabled' : null]"
    @click="handleClick"
    v-bind="$attrs"
  >
    <div
      class="var-select__controller"
      :class="[
        isFocus ? 'var-select--focus' : null,
        errorMessage ? 'var-select--error' : null,
        formDisabled || disabled ? 'var-select--disabled' : null,
      ]"
      :style="{
        color: isFocus ? activeColor : inactiveColor,
      }"
    >
      <slot name="prepend-icon">
        <div class="var-select__icon" @click="handleClickPrependIcon">
          <var-icon :name="prependIcon" v-if="prependIcon" />
        </div>
      </slot>

      <var-menu class="var-select__menu" offset-y="24px" v-model:show="isFocus" @blur="handleBlur">
        <div class="var-select__wrap" ref="wrapEl" @click="handleFocus">
          <div
            class="var-select__select"
            :class="[
              errorMessage ? 'var-select--error' : null,
              formDisabled || disabled ? 'var-select--disabled' : null,
            ]"
            :style="{
              textAlign,
              color: textColor,
            }"
            @click="handleClick"
          >
            <div v-if="multiple">
              <div class="var-select__chips" v-if="chip">
                <var-chip
                  class="var-select__chip"
                  closable
                  v-for="l in labels"
                  :key="l"
                  @click.stop
                  @close="(e) => handleClose(l)"
                >
                  {{ l }}
                </var-chip>
              </div>
              <div class="var-select__values" v-else>
                {{ labels.join(separator) }}
              </div>
            </div>

            <span v-else>{{ label }}</span>

            <var-icon
              class="var-select__arrow"
              name="menu-down"
              :transition="300"
              :class="[isFocus ? 'var-select--arrow-rotate' : null]"
            />
          </div>
          <label class="var-select__placeholder" :class="[computePlaceholderState()]">
            {{ placeholder }}
          </label>
          <div
            class="var-select__line"
            :class="[
              formDisabled || disabled ? 'var-select--line-disabled' : null,
              errorMessage ? 'var-select--line-error' : null,
            ]"
            :style="{ background: inactiveColor }"
            v-if="line"
          >
            <div
              class="var-select__dot"
              :class="[
                isFocus ? 'var-select--spread' : null,
                formDisabled || disabled ? 'var-select--line-disabled' : null,
                errorMessage ? 'var-select--line-error' : null,
              ]"
              :style="{ background: activeColor }"
            ></div>
          </div>

          <var-form-details :error-message="errorMessage" />
        </div>

        <template #menu>
          <div class="var-select__scroller">
            <slot />
          </div>
        </template>
      </var-menu>

      <slot name="append-icon">
        <div class="var-select__icon" @click="handleClickAppendIcon">
          <var-icon
            :name="appendIcon || 'close-circle'"
            :size="clearable ? '14px' : null"
            v-if="appendIcon || clearable"
            @click="handleClear"
          />
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref, Ref, watch, nextTick } from 'vue'
import { isArray, isEmpty } from '../utils/shared'
import { props, ValidateTriggers } from './props'
import { useAtChildrenCounter, useChildren, useParent, useValidation } from '../utils/components'
import { SELECT_BIND_OPTION_KEY, SELECT_COUNT_OPTION_KEY, SelectProvider } from './provide'
import { OptionProvider } from '../option/provide'
import Icon from '../icon'
import Menu from '../menu'
import Chip from '../chip'
import FormDetails from '../form-details'
import { FORM_BIND_FORM_ITEM_KEY, FormProvider } from '../form/provide'

export default defineComponent({
  name: 'VarSelect',
  components: {
    [Icon.name]: Icon,
    [Menu.name]: Menu,
    [Chip.name]: Chip,
    [FormDetails.name]: FormDetails,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const { bindChildren: bindOption, childProviders: optionProviders } = useChildren<SelectProvider, OptionProvider>(
      SELECT_BIND_OPTION_KEY
    )
    const { bindParent: bindForm, parentProvider: formProvider } = useParent<FormProvider, SelectProvider>(
      FORM_BIND_FORM_ITEM_KEY
    )
    const { length } = useAtChildrenCounter(SELECT_COUNT_OPTION_KEY)
    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()
    const wrapEl: Ref<HTMLElement | null> = ref(null)
    const isFocus: Ref<boolean> = ref(false)
    const wrapWidth: ComputedRef<string> = computed(() => {
      return (wrapEl.value && window.getComputedStyle(wrapEl.value as HTMLElement).width) || '0px'
    })
    const multiple: ComputedRef<boolean> = computed(() => props.multiple)
    const activeColor: ComputedRef<string | undefined> = computed(() => props.activeColor)
    const label: Ref<string | number> = ref('')
    const labels: Ref<(string | number)[]> = ref([])

    const computeText = () => {
      const { multiple, modelValue } = props

      if (multiple && isArray(modelValue)) {
        labels.value = ((modelValue as unknown) as (string | number)[]).map(findLabel)
      }
      if (!multiple && !isEmpty(modelValue)) {
        label.value = findLabel(modelValue as unknown as string | number)
      }
    }

    const validate = () => v(props.rules, props.modelValue)

    const validateWithTrigger = (trigger: ValidateTriggers) =>
      nextTick(() => vt(props.validateTrigger, trigger, props.rules, props.modelValue))

    const findValue = ({ value, label }: OptionProvider) => {
      if (value.value != null) {
        return value.value
      }

      return label.value
    }

    const findLabel = (modelValue: string | number | (string | number)[]) => {
      let targetProvider = optionProviders.find(({ value }) => value.value === modelValue)

      if (!targetProvider) {
        targetProvider = optionProviders.find(({ label }) => label.value === modelValue)
      }

      return targetProvider!.label.value
    }

    const computePlaceholderState = () => {
      if (!props.hint && !isEmpty(props.modelValue)) {
        return 'var-select--placeholder-hidden'
      }
      if (props.hint && (!isEmpty(props.modelValue) || isFocus.value)) {
        return 'var-select--placeholder-hint'
      }
    }

    const handleFocus = (e: Event) => {
      if (formProvider?.disabled.value || formProvider?.readonly.value || props.disabled || props.readonly) {
        return
      }

      isFocus.value = true
      props.onFocus?.(e)

      validateWithTrigger('onFocus')
    }

    const handleBlur = (e: Event) => {
      if (formProvider?.disabled.value || formProvider?.readonly.value || props.disabled || props.readonly) {
        return
      }

      props.onBlur?.(e)

      validateWithTrigger('onBlur')
    }

    const handleChange = (optionProvider: OptionProvider) => {
      if (formProvider?.disabled.value || formProvider?.readonly.value || props.disabled || props.readonly) {
        return
      }

      let selectedValue: any = findValue(optionProvider)

      if (props.multiple) {
        selectedValue = optionProviders.filter(({ selected }) => selected.value).map(findValue)
      }

      props['onUpdate:modelValue']?.(selectedValue)
      props.onChange?.(selectedValue)

      validateWithTrigger('onChange')

      !props.multiple && (isFocus.value = false)
    }

    const handleClear = () => {
      if (
        formProvider?.disabled.value ||
        formProvider?.readonly.value ||
        props.disabled ||
        props.readonly ||
        !props.clearable
      ) {
        return
      }

      const targetModelValue = props.multiple ? [] : undefined

      props['onUpdate:modelValue']?.(targetModelValue)
      props.onClear?.(targetModelValue)

      validateWithTrigger('onClear')
    }

    const handleClickAppendIcon = (e: Event) => {
      if (formProvider?.disabled.value || props.disabled) {
        return
      }

      props.onClickAppendIcon?.(e)
    }

    const handleClickPrependIcon = (e: Event) => {
      if (formProvider?.disabled.value || props.disabled) {
        return
      }

      props.onClickPrependIcon?.(e)
    }

    const handleClick = (e: Event) => {
      if (formProvider?.disabled.value || props.disabled) {
        return
      }

      props.onClick?.(e)

      validateWithTrigger('onClick')
    }

    const handleClose = (text: string | number) => {
      if (formProvider?.disabled.value || formProvider?.readonly.value || props.disabled || props.readonly) {
        return
      }
      console.log(text)
      const targetProvider = optionProviders.find(({ label }) => label.value === text)

      const targetModelValue = ((props.modelValue as unknown) as any[]).filter((value) => {
        return value !== targetProvider!.value.value ?? targetProvider!.label.value
      })

      props['onUpdate:modelValue']?.(targetModelValue)
      props.onClose?.(targetModelValue)

      validateWithTrigger('onClose')
    }

    const focus = () => {
      isFocus.value = true
    }

    const blur = () => {
      isFocus.value = false
    }

    const reset = () => {
      props['onUpdate:modelValue']?.(props.multiple ? [] : undefined)
      resetValidation()
    }

    const syncAllOption = () => {
      if (props.multiple) {
        optionProviders.forEach(({ sync, ...rest }) => {
          sync(((props.modelValue as unknown) as any[]).includes(findValue({ sync, ...rest })))
        })
      } else {
        optionProviders.forEach(({ sync, ...rest }) => {
          sync(props.modelValue === findValue({ sync, ...rest }))
        })
      }

      computeText()
    }

    watch(
      () => props.multiple,
      () => {
        if (props.multiple && !isArray(props.modelValue)) {
          throw Error('The modelValue must be an array when multiple is true')
        }
      }
    )

    watch(() => props.modelValue, syncAllOption, { deep: true })

    watch(() => length.value, syncAllOption)

    const selectProvider: SelectProvider = {
      wrapWidth,
      multiple,
      activeColor,
      onSelect: handleChange,
      reset,
      validate,
      resetValidation,
    }

    bindOption(selectProvider)
    bindForm?.(selectProvider)

    return {
      wrapEl,
      isFocus,
      errorMessage,
      formDisabled: formProvider?.disabled,
      label,
      labels,
      computePlaceholderState,
      handleFocus,
      handleBlur,
      handleChange,
      handleClear,
      handleClick,
      handleClose,
      handleClickAppendIcon,
      handleClickPrependIcon,
      reset,
      validate,
      resetValidation,
      focus,
      blur,
    }
  },
})
</script>

<style lang="less">
@import './select';
</style>
