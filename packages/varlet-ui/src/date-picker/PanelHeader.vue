<template>
  <div :class="[n(), n(`--${type}`)]">
    <template v-if="type === DatePickerUnits.Day">
      <div :class="n('nav')">
        <var-button
          :class="n('arrow')"
          var-date-picker-header-cover
          round
          text
          @click="$emit('shift-year-preview', ShiftDirections.Prev)"
        >
          <var-icon name="chevron-left" />
        </var-button>
        <var-button
          :class="[n('text-button'), n('year')]"
          var-date-picker-header-cover
          text
          @click="$emit('open-year-panel')"
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
          @click="$emit('shift-year-preview', ShiftDirections.Next)"
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
          @click="$emit('shift-preview', ShiftDirections.Prev)"
        >
          <var-icon name="chevron-left" />
        </var-button>
        <var-button
          :class="[n('text-button'), n('month')]"
          var-date-picker-header-cover
          text
          @click="$emit('open-month-panel')"
        >
          {{ getMonthName() }}
          <var-icon :class="n('text-button-icon')" name="chevron-down" />
        </var-button>
        <var-button
          :class="n('arrow')"
          var-date-picker-header-cover
          round
          text
          @click="$emit('shift-preview', ShiftDirections.Next)"
        >
          <var-icon name="chevron-right" />
        </var-button>
      </div>
    </template>
    <template v-else-if="type === DatePickerTypes.Month && !showPanelToggle">
      <div :class="n('nav')">
        <var-button
          :class="n('arrow')"
          var-date-picker-header-cover
          round
          text
          @click="$emit('shift-preview', ShiftDirections.Prev)"
        >
          <var-icon name="chevron-left" />
        </var-button>
        <var-button
          :class="[n('text-button'), n('year')]"
          var-date-picker-header-cover
          text
          @click="$emit('open-year-panel')"
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
          @click="$emit('shift-preview', ShiftDirections.Next)"
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
          @click="$emit('shift-preview', ShiftDirections.Prev)"
        >
          <var-icon name="chevron-left" />
        </var-button>
        <var-button
          v-if="showPanelToggle"
          :class="[n('text-button'), n('panel-label')]"
          var-date-picker-header-cover
          text
          @click="$emit('open-date-panel')"
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
          @click="$emit('shift-preview', ShiftDirections.Next)"
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
import VarButton from '../button'
import VarIcon from '../icon'
import { t } from '../locale'
import { injectLocaleProvider } from '../locale-provider/provide'
import { createNamespace } from '../utils/components'
import { DatePickerTypes, DatePickerUnits, ShiftDirections } from './constants'
import type { DatePickerPreviewState } from './types'

const { n } = createNamespace('date-picker-header')

export default defineComponent({
  name: 'PanelHeader',
  components: {
    VarButton,
    VarIcon,
  },
  props: {
    date: {
      type: Object as PropType<DatePickerPreviewState>,
      required: true,
    },
    type: {
      type: String as PropType<DatePickerTypes | DatePickerUnits>,
      default: DatePickerTypes.Date,
    },
    showPanelToggle: Boolean,
  },
  emits: ['open-date-panel', 'open-year-panel', 'open-month-panel', 'shift-year-preview', 'shift-preview'],

  setup(props) {
    const { t: pt } = injectLocaleProvider()

    function getMonthName() {
      const month = (pt || t)('datePickerMonthDict')?.[props.date.previewMonth!]

      return (pt || t)('lang') === 'zh-CN' ? (month?.name ?? '') : (month?.abbr ?? '')
    }

    function getPanelLabel() {
      if (props.type === DatePickerTypes.Month && props.showPanelToggle) {
        return getMonthName()
      }

      return props.date.previewYear
    }

    return {
      n,
      DatePickerTypes,
      DatePickerUnits,
      ShiftDirections,
      getMonthName,
      getPanelLabel,
    }
  },
})
</script>
