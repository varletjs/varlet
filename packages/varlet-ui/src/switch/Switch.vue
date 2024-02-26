<template>
  <div :class="n()" v-hover:desktop="hover">
    <div
      :class="classes(n('block'), [disabled || formDisabled, n('--disabled')])"
      @click="switchActive"
      :style="styleComputed.switch"
    >
      <div
        :style="styleComputed.track"
        :class="
          classes(n('track'), [modelValue === activeValue, n('track--active')], [errorMessage, n('track--error')])
        "
      ></div>
      <div
        :class="classes(n('ripple'), [modelValue === activeValue, n('ripple--active')])"
        :style="styleComputed.ripple"
        v-ripple="{
          disabled: !ripple || disabled || loading || formDisabled,
        }"
      >
        <div
          :style="styleComputed.handle"
          :class="
            classes(
              n('handle'),
              n('$-elevation--2'),
              [modelValue === activeValue, n('handle--active')],
              [errorMessage, n('handle--error')]
            )
          "
        >
          <span
            v-if="loading"
            :class="n('loading')"
            :style="{
              width: radius,
              height: radius,
            }"
          >
            <svg viewBox="25 25 50 50">
              <circle cx="50" cy="50" r="20" fill="none"></circle>
            </svg>
          </span>
        </div>

        <var-hover-overlay :hovering="hovering" />
      </div>
    </div>
    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import VarFormDetails from '../form-details'
import Ripple from '../ripple'
import Hover from '../hover'
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'
import { defineComponent, computed, nextTick } from 'vue'
import { useValidation, createNamespace } from '../utils/components'
import { multiplySizeUnit } from '../utils/elements'
import { useForm } from '../form/provide'
import { props, type ValidateTrigger } from './props'
import { type SwitchProvider } from './provide'
import { call } from '@varlet/shared'

const { name, n, classes } = createNamespace('switch')

type StyleProps = {
  width: string
  height: string
  left: string
  borderRadius: string
  backgroundColor: string
  color: string
}

export default defineComponent({
  name,
  components: {
    VarFormDetails,
    VarHoverOverlay,
  },
  directives: { Ripple, Hover },
  props,
  setup(props) {
    const { bindForm, form } = useForm()
    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()
    const { hovering, handleHovering } = useHoverOverlay()
    const styleComputed = computed<Record<string, Partial<StyleProps>>>(() => {
      const { size, modelValue, color, closeColor, loadingColor, activeValue } = props

      return {
        handle: {
          width: multiplySizeUnit(size),
          height: multiplySizeUnit(size),
          backgroundColor: modelValue === activeValue ? color : closeColor,
          color: loadingColor,
        },
        ripple: {
          left: modelValue === activeValue ? multiplySizeUnit(size, 0.5) : `-${multiplySizeUnit(size, 0.5)}`,
          color: modelValue === activeValue ? color : closeColor || 'currentColor',
          width: multiplySizeUnit(size, 2),
          height: multiplySizeUnit(size, 2),
        },
        track: {
          height: multiplySizeUnit(size, 0.72),
          width: multiplySizeUnit(size, 1.9),
          borderRadius: multiplySizeUnit(size, 2 / 3),
          filter: modelValue === activeValue || errorMessage?.value ? undefined : 'brightness(.6)',
          backgroundColor: modelValue === activeValue ? color : closeColor,
        },
        switch: {
          height: multiplySizeUnit(size, 1.2),
          width: multiplySizeUnit(size, 2),
        },
      }
    })

    const radius = computed(() => multiplySizeUnit(props.size, 0.8))

    const switchProvider: SwitchProvider = {
      reset,
      validate,
      resetValidation,
    }

    call(bindForm, switchProvider)

    function validate() {
      return v(props.rules, props.modelValue)
    }

    function validateWithTrigger(trigger: ValidateTrigger) {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    function switchActive(event: Event) {
      const {
        onClick,
        onChange,
        disabled,
        loading,
        readonly,
        modelValue,
        activeValue,
        inactiveValue,
        lazyChange,
        'onUpdate:modelValue': updateModelValue,
        onBeforeChange,
      } = props

      call(onClick, event)

      if (disabled || loading || readonly || form?.disabled.value || form?.readonly.value) {
        return
      }

      const newValue = modelValue === activeValue ? inactiveValue : activeValue

      if (lazyChange) {
        call(onBeforeChange, newValue, (value) => {
          call(updateModelValue, value)
          validateWithTrigger('onLazyChange')
        })
      } else {
        call(onChange, newValue)
        call(updateModelValue, newValue)
        validateWithTrigger('onChange')
      }
    }

    function hover(value: boolean) {
      if (props.disabled || form?.disabled.value) {
        return
      }

      handleHovering(value)
    }

    function reset() {
      call(props['onUpdate:modelValue'], props.inactiveValue)
      resetValidation()
    }

    return {
      hovering,
      radius,
      styleComputed,
      errorMessage,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      n,
      classes,
      multiplySizeUnit,
      switchActive,
      hover,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../ripple/ripple';
@import '../loading/loading';
@import '../form-details/formDetails';
@import '../hover-overlay/hoverOverlay';
@import './switch';
</style>
