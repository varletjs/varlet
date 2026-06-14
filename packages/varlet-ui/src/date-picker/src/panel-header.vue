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
          @click="shiftYearPreview('prev')"
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
          :disabled="yearDisabled.right"
          @click="shiftYearPreview('next')"
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
          @click="shiftPreview('prev')"
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
          :disabled="disabled.right"
          @click="shiftPreview('next')"
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
          @click="shiftPreview('prev')"
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
          :disabled="disabled.right"
          @click="shiftPreview('next')"
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
          @click="shiftPreview('prev')"
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
          :disabled="disabled.right"
          @click="shiftPreview('next')"
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
  emits: ['open-date-panel', 'open-year-panel', 'open-month-panel', 'shift-year-preview', 'shift-preview'],

  setup(props, { emit }) {
    const { t: pt } = injectLocaleProvider()

    function getMonthName() {
      const month = (pt || t)('datePickerMonthDict')?.[props.date.previewMonth!]

      return (pt || t)('lang') === 'zh-CN' ? (month?.name ?? '') : (month?.abbr ?? '')
    }

    function getPanelLabel() {
      return props.type === 'month' && props.monthPanelInDateMode ? getMonthName() : props.date.previewYear
    }

    function shiftPreview(direction: string) {
      if ((direction === 'prev' && props.disabled.left) || (direction === 'next' && props.disabled.right)) {
        return
      }

      emit('shift-preview', direction)
    }

    function shiftYearPreview(direction: string) {
      if ((direction === 'prev' && props.yearDisabled.left) || (direction === 'next' && props.yearDisabled.right)) {
        return
      }

      emit('shift-year-preview', direction)
    }

    return {
      n,
      getMonthName,
      getPanelLabel,
      shiftPreview,
      shiftYearPreview,
    }
  },
})
</script>
