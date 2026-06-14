<template>
  <div :class="[n(), n(`--${type}`)]">
    <template v-if="type === 'day'">
      <div :class="n('nav')">
        <var-button
          :class="n('arrow')"
          var-date-picker-header-cover
          round
          text
          :disabled="yearDisabled.left"
          @click="checkYearDate('prev')"
        >
          <var-icon name="chevron-left" />
        </var-button>
        <var-button
          :class="[n('text-button'), n('year')]"
          var-date-picker-header-cover
          text
          @click="$emit('check-year-panel')"
        >
          <span :class="n('year-value')">
            {{ date.previewYear }}
            <var-icon :class="n('text-button-icon')" name="chevron-down" />
          </span>
        </var-button>
        <var-button
          :class="n('arrow')"
          var-date-picker-header-cover
          round
          text
          :disabled="yearDisabled.right"
          @click="checkYearDate('next')"
        >
          <var-icon name="chevron-right" />
        </var-button>
      </div>
      <div :class="[n('nav'), n('nav--month')]">
        <var-button
          :class="n('arrow')"
          var-date-picker-header-cover
          round
          text
          :disabled="disabled.left"
          @click="checkDate('prev')"
        >
          <var-icon name="chevron-left" />
        </var-button>
        <var-button
          :class="[n('text-button'), n('month')]"
          var-date-picker-header-cover
          text
          @click="$emit('check-month-panel')"
        >
          {{ getMonthName() }}
          <var-icon :class="n('text-button-icon')" name="chevron-down" />
        </var-button>
        <var-button
          :class="n('arrow')"
          var-date-picker-header-cover
          round
          text
          :disabled="disabled.right"
          @click="checkDate('next')"
        >
          <var-icon name="chevron-right" />
        </var-button>
      </div>
    </template>
    <template v-else-if="type === 'month' && !monthPanelInDateMode">
      <div :class="n('nav')">
        <var-button
          :class="n('arrow')"
          var-date-picker-header-cover
          round
          text
          :disabled="disabled.left"
          @click="checkDate('prev')"
        >
          <var-icon name="chevron-left" />
        </var-button>
        <var-button
          :class="[n('text-button'), n('year')]"
          var-date-picker-header-cover
          text
          @click="$emit('check-year-panel')"
        >
          <span :class="n('year-value')">
            {{ date.previewYear }}
            <var-icon :class="n('text-button-icon')" name="chevron-down" />
          </span>
        </var-button>
        <var-button
          :class="n('arrow')"
          var-date-picker-header-cover
          round
          text
          :disabled="disabled.right"
          @click="checkDate('next')"
        >
          <var-icon name="chevron-right" />
        </var-button>
      </div>
    </template>
    <template v-else>
      <div :class="[n('nav'), n(`nav--${type}`)]">
        <var-button
          :class="n('arrow')"
          var-date-picker-header-cover
          round
          text
          :disabled="disabled.left"
          @click="checkDate('prev')"
        >
          <var-icon name="chevron-left" />
        </var-button>
        <var-button
          v-if="showPanelToggle"
          :class="[n('text-button'), n('panel-label')]"
          var-date-picker-header-cover
          text
          @click="$emit('check-panel')"
        >
          {{ getPanelLabel() }}
          <var-icon :class="n('text-button-icon')" name="chevron-up" />
        </var-button>
        <div v-else :class="[n('text-button'), n('panel-label')]" var-date-picker-header-cover>
          {{ getPanelLabel() }}
        </div>
        <var-button
          :class="n('arrow')"
          var-date-picker-header-cover
          round
          text
          :disabled="disabled.right"
          @click="checkDate('next')"
        >
          <var-icon name="chevron-right" />
        </var-button>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import VarButton from '../../button'
import VarIcon from '../../icon'
import { t } from '../../locale'
import { injectLocaleProvider } from '../../locale-provider/provide'
import { createNamespace } from '../../utils/components'
import type { PanelBtnDisabled, Preview } from '../props'

const { n } = createNamespace('date-picker-header')

export default defineComponent({
  name: 'PanelHeader',
  components: {
    VarButton,
    VarIcon,
  },
  props: {
    date: {
      type: Object as PropType<Preview>,
      required: true,
    },
    type: {
      type: String,
      default: 'date',
    },
    disabled: {
      type: Object as PropType<PanelBtnDisabled>,
      default: () => ({ left: false, right: false }),
    },
    yearDisabled: {
      type: Object as PropType<PanelBtnDisabled>,
      default: () => ({ left: false, right: false }),
    },
    showPanelToggle: Boolean,
    monthPanelInDateMode: Boolean,
  },
  emits: ['check-panel', 'check-year-panel', 'check-month-panel', 'check-year-date', 'check-date'],

  setup(props, { emit }) {
    const { t: pt } = injectLocaleProvider()

    function getMonthName() {
      const month = (pt || t)('datePickerMonthDict')?.[props.date.previewMonth!]

      return (pt || t)('lang') === 'zh-CN' ? (month?.name ?? '') : (month?.abbr ?? '')
    }

    function getPanelLabel() {
      return props.type === 'month' && props.monthPanelInDateMode ? getMonthName() : props.date.previewYear
    }

    function checkDate(checkType: string) {
      if ((checkType === 'prev' && props.disabled.left) || (checkType === 'next' && props.disabled.right)) {
        return
      }

      emit('check-date', checkType)
    }

    function checkYearDate(checkType: string) {
      if ((checkType === 'prev' && props.yearDisabled.left) || (checkType === 'next' && props.yearDisabled.right)) {
        return
      }

      emit('check-year-date', checkType)
    }

    return {
      n,
      getMonthName,
      getPanelLabel,
      checkDate,
      checkYearDate,
    }
  },
})
</script>
