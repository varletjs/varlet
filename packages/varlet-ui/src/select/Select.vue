<template>
  <div :class="n()" @click="handleFocus">
    <var-menu
      var-select-cover
      same-width
      close-on-click-reference
      v-model:show="showMenu"
      :class="n('menu')"
      :popover-class="variant === 'standard' && hint ? n('--standard-menu-margin') : undefined"
      :offset-y="offsetY"
      :disabled="formReadonly || readonly || formDisabled || disabled"
      :placement="placement"
      :default-style="false"
      @click-outside="handleBlur"
    >
      <var-field-decorator
        v-bind="{
          value: modelValue,
          size,
          variant,
          placeholder,
          line,
          hint,
          textColor,
          focusColor,
          blurColor,
          isFocus,
          errorMessage,
          formDisabled,
          disabled,
          clearable,
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
          <div :class="n('label')">
            <slot name="selected" v-if="!isEmptyModelValue">
              <template v-if="multiple">
                <div :class="n('chips')" v-if="chip">
                  <var-chip
                    :class="n('chip')"
                    var-select-cover
                    closeable
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
              </template>

              <span v-else>{{ label }}</span>
            </slot>
          </div>

          <span
            v-if="enableCustomPlaceholder"
            :class="classes(n('placeholder'), n('$--ellipsis'))"
            :style="{
              color: placeholderColor,
            }"
          >
            {{ placeholder }}
          </span>

          <slot name="arrow-icon" :focus="showMenu">
            <var-icon
              :class="classes(n('arrow'), [showMenu, n('--arrow-rotate')])"
              var-select-cover
              name="menu-down"
              :transition="300"
            />
          </slot>
        </div>

        <template #clear-icon>
          <slot name="clear-icon" />
        </template>

        <template #append-icon>
          <slot name="append-icon" />
        </template>
      </var-field-decorator>

      <template #menu>
        <div ref="menuEl" :class="classes(n('scroller'), n('$-elevation--3'))">
          <slot />
        </div>
      </template>
    </var-menu>

    <var-form-details :error-message="errorMessage" @click.stop />
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import VarMenu from '../menu'
import VarChip from '../chip'
import VarFieldDecorator from '../field-decorator'
import VarFormDetails from '../form-details'
import { computed, defineComponent, ref, watch, nextTick } from 'vue'
import { isArray, isEmpty, call } from '@varlet/shared'
import { props, type SelectValidateTrigger } from './props'
import { useValidation, createNamespace } from '../utils/components'
import { useOptions, type SelectProvider } from './provide'
import { useForm } from '../form/provide'
import { toPxNum } from '../utils/elements'
import { error } from '../utils/logger'
import { useSelectController } from './useSelectController'
import { type OptionProvider } from '../option/provide'

const { name, n, classes } = createNamespace('select')

export default defineComponent({
  name,
  components: {
    VarIcon,
    VarMenu,
    VarChip,
    VarFieldDecorator,
    VarFormDetails,
  },
  props,
  setup(props) {
    const isFocus = ref(false)
    const showMenu = ref(false)
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
    const menuEl = ref<HTMLElement | null>(null)
    const placement = computed(() => (props.variant === 'outlined' ? 'bottom' : 'cover-top'))
    const placeholderColor = computed(() => {
      const { hint, blurColor, focusColor } = props

      if (hint) {
        return undefined
      }

      if (errorMessage.value) {
        return 'var(--field-decorator-error-color)'
      }

      if (isFocus.value) {
        return focusColor || 'var(--field-decorator-focus-color)'
      }

      return blurColor || 'var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))'
    })
    const enableCustomPlaceholder = computed(() => !props.hint && isEmpty(props.modelValue))

    const selectProvider: SelectProvider = {
      multiple,
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
        const { multiple, modelValue } = props
        if (multiple && !isArray(modelValue)) {
          error('Select', 'The modelValue must be an array when multiple is true')
        }
      }
    )

    bindOptions(selectProvider)

    call(bindForm, selectProvider)

    function validateWithTrigger(trigger: SelectValidateTrigger) {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    function handleFocus() {
      const { disabled, readonly, onFocus } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly) {
        return
      }

      offsetY.value = toPxNum(props.offsetY)
      isFocus.value = true

      call(onFocus)
      validateWithTrigger('onFocus')
    }

    function handleBlur() {
      const { disabled, readonly, onBlur } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly) {
        return
      }

      blur()
      call(onBlur)
      validateWithTrigger('onBlur')
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

      if (!multiple) {
        blur()
      }
    }

    function handleClear() {
      const { disabled, readonly, multiple, clearable, onClear } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly || !clearable) {
        return
      }

      const changedModelValue = multiple ? [] : undefined
      call(props['onUpdate:modelValue'], changedModelValue)
      call(onClear, changedModelValue)
      validateWithTrigger('onClear')
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
      const { disabled, readonly, modelValue, onClose } = props

      if (form?.disabled.value || form?.readonly.value || disabled || readonly) {
        return
      }

      const option = options.find(({ label }) => label.value === text)
      const currentModelValue = (modelValue as unknown as any[]).filter(
        (value) => value !== (option!.value.value ?? option!.label.value)
      )

      call(props['onUpdate:modelValue'], currentModelValue)
      call(onClose, currentModelValue)
      validateWithTrigger('onClose')
    }

    // expose
    function focus() {
      offsetY.value = toPxNum(props.offsetY)
      isFocus.value = true
      showMenu.value = true
    }

    // expose
    function blur() {
      isFocus.value = false
      showMenu.value = false
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
      offsetY,
      isFocus,
      showMenu,
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
      n,
      classes,
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
@import '../styles/elevation';
@import '../icon/icon';
@import '../menu/menu';
@import '../field-decorator/fieldDecorator';
@import '../form-details/formDetails';
@import '../chip/chip';
@import './select';
</style>
./useSelectControl
