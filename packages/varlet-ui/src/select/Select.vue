<template>
  <div ref="root" :class="n()" :tabindex="tabindex" @focus="handleRootFocus" @blur="handleRootBlur">
    <var-menu
      v-model:show="showMenu"
      var-select-cover
      same-width
      close-on-click-reference
      :close-on-key-escape="false"
      :class="n('menu')"
      :popover-class="variant === 'standard' && hint && !filterable ? n('--standard-menu-margin') : undefined"
      :offset-y="offsetY"
      :disabled="formReadonly || readonly || formDisabled || disabled"
      :placement="placement"
      :default-style="false"
      @click-outside="handleClickOutside"
      @closed="handleClosed"
    >
      <var-field-decorator
        v-bind="{
          value: query || modelValue,
          size,
          variant,
          placeholder,
          line,
          hint,
          textColor,
          focusColor,
          blurColor,
          isFocusing,
          isError: !!errorMessage,
          formDisabled,
          composing: isComposing,
          disabled,
          clearable: clearable ? !filterable || !query : false,
          cursor,
          onClick: handleClick,
          onClear: handleClear,
        }"
      >
        <template v-if="$slots['prepend-icon']" #prepend-icon>
          <slot name="prepend-icon" />
        </template>

        <div
          :class="classes(n('select'), [errorMessage, n('--error')], [formDisabled || disabled, n('--disabled')])"
          :style="{
            textAlign,
            color: textColor,
          }"
        >
          <div :class="classes(n('label'), [filterable && showMenu, n('label-focusing')])">
            <slot v-if="!isEmptyModelValue" name="selected">
              <template v-if="multiple">
                <div v-if="chip" :class="n('chips')">
                  <var-chip
                    v-for="l in labels"
                    :key="l"
                    :class="n('chip')"
                    var-select-cover
                    closeable
                    size="small"
                    :type="errorMessage ? 'danger' : undefined"
                    @click.stop
                    @close="() => handleClose(l)"
                  >
                    <maybe-v-node :is="l" />
                  </var-chip>
                  <var-select-input
                    v-if="showInput"
                    ref="inputRef"
                    v-model="query"
                    :style="inputStyle"
                    multiple
                    @focus="handleFocus"
                    @blur="handleRootBlur"
                    @input="handleInput"
                    @compositionstart="handleCompositionStart"
                    @compositionend="handleCompositionEnd"
                  />
                </div>
                <div v-else :class="n('values')">
                  <template v-for="(l, labelIndex) in labels" :key="l">
                    <maybe-v-node :is="l" />{{ labelIndex !== labels.length - 1 ? separator : '' }}
                  </template>
                  <var-select-input
                    v-if="showInput"
                    ref="inputRef"
                    v-model="query"
                    :style="inputStyle"
                    multiple
                    @focus="handleFocus"
                    @blur="handleRootBlur"
                    @input="handleInput"
                    @compositionstart="handleCompositionStart"
                    @compositionend="handleCompositionEnd"
                  />
                </div>
              </template>

              <maybe-v-node :is="label" v-else-if="!query && !isComposing" />
            </slot>
          </div>

          <var-select-input
            v-if="showInput && (!multiple || isEmptyModelValue)"
            ref="inputRef"
            v-model="query"
            :style="inputStyle"
            @focus="handleFocus"
            @blur="handleRootBlur"
            @input="handleInput"
            @compositionstart="handleCompositionStart"
            @compositionend="handleCompositionEnd"
          />
          <span
            v-if="enableCustomPlaceholder && !query"
            :class="classes(n('placeholder'), n('$--ellipsis'))"
            :style="{
              color: placeholderColor,
            }"
          >
            {{ placeholder }}
          </span>

          <span v-if="filterable" ref="calculatorRef" :class="n('input--calculator')" v-text="query" />
        </div>

        <template v-if="!query" #clear-icon="{ clear }">
          <slot name="clear-icon" :clear="clear" />
        </template>

        <template #append-icon>
          <slot name="arrow-icon" :focus="isFocusing" :menu-open="showMenu">
            <var-icon
              :class="classes(n('arrow'), [showMenu, n('--arrow-rotate')])"
              var-select-cover
              name="menu-down"
              :transition="300"
            />
          </slot>

          <slot name="append-icon" />
        </template>
      </var-field-decorator>

      <template #menu>
        <div ref="menuEl" :class="classes(n('scroller'), n('$-elevation--3'))">
          <template v-if="options.length">
            <var-option
              v-for="option in options"
              :key="option[valueKey]"
              :label="option[labelKey]"
              :value="option[valueKey]"
              :option="option"
              :disabled="option.disabled"
              :ripple="option.ripple"
            />
          </template>
          <slot />
        </div>
      </template>
    </var-menu>

    <var-form-details :error-message="errorMessage" @click.stop />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref, watch } from 'vue'
import { assert, call, doubleRaf, isArray, isEmpty, isFunction, preventDefault } from '@varlet/shared'
import { useEventListener } from '@varlet/use'
import VarChip from '../chip'
import VarFieldDecorator from '../field-decorator'
import VarFormDetails from '../form-details'
import { useForm } from '../form/provide'
import VarIcon from '../icon'
import VarMenu from '../menu'
import VarOption from '../option'
import { type OptionProvider } from '../option/provide'
import { createNamespace, MaybeVNode, useValidation } from '../utils/components'
import { focusChildElementByKey, toPxNum } from '../utils/elements'
import { props, type SelectValidateTrigger } from './props'
import { useOptions, type SelectProvider } from './provide'
import VarSelectInput from './SelectInput.vue'
import { useCalcInputWidth } from './useCalcInputWidth'
import { useSelectController } from './useSelectController'

const { name, n, classes } = createNamespace('select')

export default defineComponent({
  name,
  components: {
    VarIcon,
    VarMenu,
    VarChip,
    VarOption,
    VarFieldDecorator,
    VarFormDetails,
    VarSelectInput,
    MaybeVNode,
  },
  props,
  setup(props) {
    const isFocusing = ref(false)
    const showMenu = ref(false)
    const root = ref<HTMLElement | null>(null)
    const inputRef = ref<InstanceType<typeof VarSelectInput> | null>(null)
    const query = ref('')
    const isComposing = ref(false)
    const filterable = computed(() => props.filterable)
    const filter = computed(() => props.filter)
    const multiple = computed(() => props.multiple)
    const focusColor = computed(() => props.focusColor)
    const isEmptyModelValue = computed(() => isEmpty(props.modelValue))
    const cursor = computed(() => (props.disabled || props.readonly ? '' : 'pointer'))
    const offsetY = ref(0)
    const { bindForm, form } = useForm()
    const { length, options, bindOptions } = useOptions()
    const { label, labels, computeLabel, getSelectedValue } = useSelectController({
      modelValue: () => props.modelValue,
      multiple: () => props.multiple,
      optionProviders: () => options,
      optionProvidersLength: () => length.value,
    })
    const {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation,
    } = useValidation()
    const readonly = computed(() => form?.readonly.value || props.readonly)
    const disabled = computed(() => form?.disabled.value || props.disabled)
    const menuEl = ref<HTMLElement | null>(null)
    const placement = computed(() => (props.variant === 'outlined' || props.filterable ? 'bottom' : 'cover-top'))
    const placeholderColor = computed(() => {
      const { hint, blurColor, focusColor } = props

      if (hint) {
        return undefined
      }

      if (errorMessage.value) {
        return 'var(--field-decorator-error-color)'
      }

      if (isFocusing.value) {
        return focusColor || 'var(--field-decorator-focus-color)'
      }

      return blurColor || 'var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))'
    })
    const enableCustomPlaceholder = computed(() => !props.hint && isEmpty(props.modelValue))
    const tabindex = computed(() => {
      if (disabled.value) {
        return undefined
      }
      if (filterable.value && isFocusing.value) {
        return '-1'
      }
      return props.tabindex ?? '0'
    })
    const showInput = computed(() => filterable.value && !readonly.value && !disabled.value)
    const { calculatorRef, inputStyle } = useCalcInputWidth(query)

    const selectProvider: SelectProvider = {
      query: computed(() => query.value),
      multiple,
      filterable,
      filter,
      focusColor,
      computeLabel,
      onSelect,
      reset,
      validate,
      resetValidation,
    }

    watch(
      () => props.multiple,
      () => {
        assert(
          props.multiple && isArray(props.modelValue),
          'Select',
          'The modelValue must be an array when multiple is true',
        )
      },
    )

    bindOptions(selectProvider)

    useEventListener(() => window, 'keydown', handleKeydown)
    useEventListener(() => window, 'keyup', handleKeyup)

    call(bindForm, selectProvider)

    function handleKeydown(event: KeyboardEvent) {
      if (disabled.value || readonly.value || !isFocusing.value) {
        return
      }

      const { key } = event

      if (key === ' ' && !showMenu.value) {
        preventDefault(event)
        return
      }

      if (key === 'Escape' && showMenu.value) {
        root.value!.focus()
        preventDefault(event)
        showMenu.value = false
        return
      }

      if (key === 'Tab' && showMenu.value) {
        root.value!.focus()
        preventDefault(event)
        handleBlur()
        return
      }

      if (key === 'Enter' && !showMenu.value) {
        preventDefault(event)
        showMenu.value = true
        return
      }

      if ((key === 'ArrowDown' || key === 'ArrowUp') && showMenu.value) {
        preventDefault(event)
        focusChildElementByKey(root.value!, menuEl.value!, key)
      }
    }

    function handleKeyup(event: KeyboardEvent) {
      if (disabled.value || readonly.value || showMenu.value || !isFocusing.value) {
        return
      }

      const { key } = event

      if (key === ' ' && !showMenu.value) {
        preventDefault(event)
        showMenu.value = true
      }
    }

    function validateWithTrigger(trigger: SelectValidateTrigger) {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    function handleFocus() {
      const { onFocus } = props

      if (disabled.value || readonly.value || isFocusing.value) {
        return
      }

      offsetY.value = toPxNum(props.offsetY)

      focus()
      call(onFocus)
      validateWithTrigger('onFocus')
    }

    function handleBlur(e?: FocusEvent) {
      const { onBlur } = props
      if (
        disabled.value ||
        readonly.value ||
        !isFocusing.value ||
        root.value?.contains(e?.relatedTarget as Element | null)
      ) {
        return
      }

      blur()
      call(onBlur)
      validateWithTrigger('onBlur')
    }

    function handleRootFocus(e: FocusEvent) {
      const el = inputRef.value?.$el

      if (el?.contains(e.relatedTarget as Element | null)) {
        inputRef.value?.focus()
        return
      }

      handleFocus()
    }

    function handleRootBlur(e: FocusEvent) {
      if (showMenu.value || root.value?.contains(e.relatedTarget as Element | null)) {
        return
      }
      handleBlur(e)
    }

    function handleClickOutside() {
      if (!isFocusing.value) {
        return
      }

      handleBlur()
    }

    function onSelect(option: OptionProvider) {
      const { disabled, readonly, multiple, onChange } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly) {
        return
      }

      const selectedValue = getSelectedValue(option)
      call(props['onUpdate:modelValue'], selectedValue)
      call(onChange, selectedValue)
      validateWithTrigger('onChange')
      nextTick(() => inputRef.value?.focus())

      if (!multiple) {
        root.value!.focus()
        doubleRaf().then(() => {
          showMenu.value = false
        })
      }
    }

    function handleClear() {
      const { disabled, readonly, multiple, clearable, onClear, onChange } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly || !clearable) {
        return
      }

      const changedModelValue = multiple ? [] : undefined
      call(props['onUpdate:modelValue'], changedModelValue)
      call(onClear, changedModelValue)
      validateWithTrigger('onClear')
      call(onChange, changedModelValue)
      validateWithTrigger('onChange')
    }

    function handleClick(e: Event) {
      const { disabled, onClick } = props

      if (form?.disabled.value || disabled) {
        return
      }

      call(onClick, e)
      validateWithTrigger('onClick')
    }

    function handleClose(text: any) {
      const { disabled, readonly, modelValue, onClose, onChange } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly) {
        return
      }

      const option = options.find(({ label }) => label.value === text)
      const changedModelValue = (modelValue as unknown as any[]).filter(
        (value) => value !== (option!.value.value ?? option!.label.value),
      )

      call(props['onUpdate:modelValue'], changedModelValue)
      call(onClose, changedModelValue)
      validateWithTrigger('onClose')
      call(onChange, changedModelValue)
      validateWithTrigger('onChange')
    }

    function handleInput() {
      showMenu.value = true
    }

    function handleCompositionStart() {
      isComposing.value = true
    }

    function handleCompositionEnd() {
      isComposing.value = false
    }

    function handleClosed() {
      query.value = ''
    }

    // expose
    function focus() {
      offsetY.value = toPxNum(props.offsetY)
      isFocusing.value = true
      inputRef.value?.focus()
    }

    // expose
    function blur() {
      isFocusing.value = false
      showMenu.value = false
      inputRef.value?.blur()
    }

    // expose
    function validate() {
      return v(props.rules, props.modelValue)
    }

    // expose
    function reset() {
      call(props['onUpdate:modelValue'], props.multiple ? [] : undefined)
      resetValidation()
    }

    return {
      root,
      inputRef,
      calculatorRef,
      isComposing,
      inputStyle,
      query,
      tabindex,
      readonly,
      disabled,
      offsetY,
      isFocusing,
      showMenu,
      showInput,
      errorMessage,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      label,
      labels,
      isEmptyModelValue,
      menuEl,
      placement,
      cursor,
      placeholderColor,
      enableCustomPlaceholder,
      isFunction,
      n,
      classes,
      handleFocus,
      handleBlur,
      handleClickOutside,
      handleClear,
      handleClick,
      handleClose,
      handleRootFocus,
      handleRootBlur,
      handleInput,
      handleCompositionStart,
      handleCompositionEnd,
      handleClosed,
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
@import '../styles/elevation';
@import '../icon/icon';
@import '../menu/menu';
@import '../field-decorator/fieldDecorator';
@import '../form-details/formDetails';
@import '../chip/chip';
@import '../option/option';
@import './select';
</style>
