<template>
  <div :class="classes(n(), n('$--box'), [formDisabled || disabled, n('--disabled')])" @click="handleClick">
    <div
      :class="
        classes(
          n('controller'),
          [isFocus, n('--focus')],
          [errorMessage, n('--error')],
          [formDisabled || disabled, n('--disabled')]
        )
      "
      :style="{
        color: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
      }"
    >
      <div :class="classes(n('icon'), [!hint, n('--non-hint')])">
        <slot name="prepend-icon" />
      </div>

      <div :class="classes(n('wrap'), [!hint, n('--non-hint')])" ref="wrapEl" @click="handleFocus">
        <var-menu
          var-select-cover
          :class="classes(n('menu'))"
          :offset-y="offsetY"
          :disabled="formReadonly || readonly || formDisabled || disabled"
          :default-style="false"
          v-model:show="isFocus"
          @close="handleBlur"
        >
          <div
            :class="classes(n('select'), [errorMessage, n('--error')], [formDisabled || disabled, n('--disabled')])"
            :style="{
              textAlign,
              color: textColor,
            }"
          >
            <slot name="selected">
              <div v-if="multiple">
                <div :class="n('chips')" v-if="chip">
                  <var-chip
                    :class="n('chip')"
                    var-select-cover
                    closable
                    size="small"
                    :type="errorMessage ? 'danger' : undefined"
                    v-for="l in labels"
                    :key="l"
                    @click.stop
                    @close="() => handleClose(l)"
                  >
                    {{ l }}
                  </var-chip>
                </div>
                <div :class="n('values')" v-else>
                  {{ labels.join(separator) }}
                </div>
              </div>

              <span v-else>{{ label }}</span>
            </slot>

            <slot name="arrow-icon" :focus="isFocus">
              <var-icon
                :class="classes(n('arrow'), [isFocus, n('--arrow-rotate')])"
                var-select-cover
                name="menu-down"
                :transition="300"
              />
            </slot>
          </div>
          <label
            :class="
              classes(
                n('placeholder'),
                n('$--ellipsis'),
                [isFocus, n('--focus')],
                [errorMessage, n('--error')],
                [formDisabled || disabled, n('--disabled')],
                computePlaceholderState(),
                [!hint, n('--placeholder-non-hint')]
              )
            "
            :style="{
              color: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
            }"
          >
            {{ placeholder }}
          </label>

          <template #menu>
            <div ref="menuEl" :class="classes(n('scroller'), n('$-elevation--3'))">
              <slot />
            </div>
          </template>
        </var-menu>
      </div>

      <div :class="classes(n('icon'), [!hint, n('--non-hint')])">
        <slot name="append-icon">
          <var-icon :class="n('clear-icon')" name="close-circle" size="14px" v-if="clearable" @click="handleClear" />
        </slot>
      </div>
    </div>

    <div
      :class="classes(n('line'), [formDisabled || disabled, n('--line-disabled')], [errorMessage, n('--line-error')])"
      :style="{ background: !errorMessage ? blurColor : undefined }"
      v-if="line"
    >
      <div
        :class="
          classes(
            n('dot'),
            [isFocus, n('--spread')],
            [formDisabled || disabled, n('--line-disabled')],
            [errorMessage, n('--line-error')]
          )
        "
        :style="{ background: !errorMessage ? focusColor : undefined }"
      ></div>
    </div>

    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import VarMenu from '../menu'
import VarChip from '../chip'
import VarFormDetails from '../form-details'
import { computed, defineComponent, ref, watch, nextTick } from 'vue'
import { isArray, isEmpty } from '@varlet/shared'
import { props } from './props'
import { useValidation, createNamespace, call } from '../utils/components'
import { useOptions } from './provide'
import { useForm } from '../form/provide'
import { toPxNum } from '../utils/elements'
import type { Ref, ComputedRef } from 'vue'
import type { SelectValidateTrigger } from './props'
import type { SelectProvider } from './provide'
import type { OptionProvider } from '../option/provide'

const { n, classes } = createNamespace('select')
export default defineComponent({
  name: 'VarSelect',
  components: {
    VarIcon,
    VarMenu,
    VarChip,
    VarFormDetails,
  },
  props,
  setup(props) {
    const wrapEl: Ref<HTMLElement | null> = ref(null)
    const isFocus: Ref<boolean> = ref(false)
    const multiple: ComputedRef<boolean> = computed(() => props.multiple)
    const focusColor: ComputedRef<string | undefined> = computed(() => props.focusColor)
    const label: Ref<string | number> = ref('')
    const labels: Ref<(string | number)[]> = ref([])
    const wrapWidth = ref<string>('0px')
    const offsetY = ref(0)
    const { bindForm, form } = useForm()
    const { length, options, bindOptions } = useOptions()
    const {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation,
    } = useValidation()
    const menuEl: Ref<HTMLElement | null> = ref(null)

    const computeLabel = () => {
      const { multiple, modelValue } = props

      if (multiple) {
        const rawModelValue = modelValue as unknown as any[]
        labels.value = rawModelValue.map(findLabel)
      }
      if (!multiple && !isEmpty(modelValue)) {
        label.value = findLabel(modelValue as any)
      }
      if (!multiple && isEmpty(modelValue)) {
        label.value = ''
      }
    }

    const validateWithTrigger = (trigger: SelectValidateTrigger) => {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    const findValueOrLabel = ({ value, label }: OptionProvider) => {
      if (value.value != null) {
        return value.value
      }

      return label.value
    }

    const findLabel = (modelValue: string | number | any[]) => {
      let option = options.find(({ value }) => value.value === modelValue)

      if (!option) {
        option = options.find(({ label }) => label.value === modelValue)
      }

      return option?.label.value ?? ''
    }

    const computePlaceholderState = () => {
      const { hint, modelValue } = props

      if (!hint && !isEmpty(modelValue)) {
        return n('--placeholder-hidden')
      }
      if (hint && (!isEmpty(modelValue) || isFocus.value)) {
        return n('--placeholder-hint')
      }
    }

    const getWrapWidth = () => {
      return (wrapEl.value && window.getComputedStyle(wrapEl.value as HTMLElement).width) || '0px'
    }

    const handleFocus = () => {
      const { disabled, readonly, onFocus } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly) {
        return
      }

      wrapWidth.value = getWrapWidth()
      offsetY.value = toPxNum(props.offsetY)

      isFocus.value = true

      call(onFocus)
      validateWithTrigger('onFocus')
    }

    const handleBlur = () => {
      const { disabled, readonly, onBlur } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly) {
        return
      }

      call(onBlur)
      validateWithTrigger('onBlur')
    }

    const onSelect = (option: OptionProvider) => {
      const { disabled, readonly, multiple, onChange } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly) {
        return
      }

      const selectedValue: any = multiple
        ? options.filter(({ selected }) => selected.value).map(findValueOrLabel)
        : findValueOrLabel(option)

      call(props['onUpdate:modelValue'], selectedValue)
      call(onChange, selectedValue)
      validateWithTrigger('onChange')

      !multiple && (isFocus.value = false)
    }

    const handleClear = () => {
      const { disabled, readonly, multiple, clearable, onClear } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly || !clearable) {
        return
      }

      const changedModelValue = multiple ? [] : undefined

      call(props['onUpdate:modelValue'], changedModelValue)
      call(onClear, changedModelValue)
      validateWithTrigger('onClear')
    }

    const handleClick = (e: Event) => {
      const { disabled, onClick } = props

      if (form?.disabled.value || disabled) {
        return
      }

      call(onClick, e)
      validateWithTrigger('onClick')
    }

    const handleClose = (text: any) => {
      const { disabled, readonly, modelValue, onClose } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly) {
        return
      }

      const rawModelValue = modelValue as unknown as any[]
      const option = options.find(({ label }) => label.value === text)
      const currentModelValue = rawModelValue.filter((value) => value !== (option!.value.value ?? option!.label.value))

      call(props['onUpdate:modelValue'], currentModelValue)
      call(onClose, currentModelValue)
      validateWithTrigger('onClose')
    }

    const syncOptions = () => {
      const { multiple, modelValue } = props

      if (multiple) {
        const rawModelValue = modelValue as unknown as any[]
        options.forEach((option) => option.sync(rawModelValue.includes(findValueOrLabel(option))))
      } else {
        options.forEach((option) => option.sync(modelValue === findValueOrLabel(option)))
      }

      computeLabel()
    }

    // expose
    const focus = () => {
      wrapWidth.value = getWrapWidth()
      offsetY.value = toPxNum(props.offsetY)
      isFocus.value = true
    }

    // expose
    const blur = () => {
      isFocus.value = false
    }

    // expose
    const validate = () => v(props.rules, props.modelValue)

    // expose
    const reset = () => {
      call(props['onUpdate:modelValue'], props.multiple ? [] : undefined)
      resetValidation()
    }

    watch(
      () => props.multiple,
      () => {
        const { multiple, modelValue } = props
        if (multiple && !isArray(modelValue)) {
          throw Error('The modelValue must be an array when multiple is true')
        }
      }
    )

    watch(() => props.modelValue, syncOptions, { deep: true })

    watch(() => length.value, syncOptions)

    const selectProvider: SelectProvider = {
      wrapWidth: computed(() => wrapWidth.value),
      multiple,
      focusColor,
      onSelect,
      reset,
      validate,
      resetValidation,
    }

    bindOptions(selectProvider)
    call(bindForm, selectProvider)

    return {
      wrapEl,
      offsetY,
      isFocus,
      errorMessage,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      label,
      labels,
      menuEl,
      n,
      classes,
      computePlaceholderState,
      handleFocus,
      handleBlur,
      handleClear,
      handleClick,
      handleClose,
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
@import '../styles/common';
@import '../icon/icon';
@import '../menu/menu';
@import '../form-details/formDetails';
@import '../chip/chip';
@import './select';
</style>
