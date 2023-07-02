<template>
  <div :class="n()">
    <div :class="n('linear')" v-if="mode === 'linear'">
      <div :class="n('linear-block')" :style="{ height: toSizeUnit(lineWidth) }">
        <div :class="n('linear-background')" v-if="track" :style="{ background: trackColor }"></div>
        <div v-if="indeterminate" :class="classes([indeterminate, n('linear-indeterminate')])">
          <div class="long" :class="classes(n(`linear-${linearProps.type}`))" :style="{ background: color }"></div>
          <div class="short" :class="classes(n(`linear-${linearProps.type}`))" :style="{ background: color }"></div>
        </div>
        <div
          v-else
          :class="classes(n('linear-certain'), n(`linear-${linearProps.type}`), [ripple, n('linear-ripple')])"
          :style="{ background: color, width: linearProps.width }"
        ></div>
      </div>
      <div :class="classes(n('linear-label'), [labelClass, labelClass])" v-if="label">
        <slot>
          {{ linearProps.roundValue }}
        </slot>
      </div>
    </div>

    <div
      :class="classes(n('circle'), [indeterminate, n('circle-indeterminate')])"
      v-if="mode === 'circle'"
      :style="{ width: toSizeUnit(size), height: toSizeUnit(size) }"
    >
      <svg :class="n('circle-svg')" :style="{ transform: `rotate(${rotate - 90}deg)` }" :viewBox="circleProps.viewBox">
        <circle
          v-if="track"
          :class="n('circle-background')"
          :cx="multiplySizeUnit(size, 0.5)"
          :cy="multiplySizeUnit(size, 0.5)"
          :r="circleProps.radius"
          fill="transparent"
          :stroke-width="toSizeUnit(lineWidth)"
          :style="{
            strokeDasharray: circleProps.perimeter,
            stroke: trackColor,
          }"
        ></circle>
        <circle
          :class="classes(n('circle-certain'), n(`circle-${circleProps.type}`), [indeterminate, n('circle-overlay')])"
          :cx="multiplySizeUnit(size, 0.5)"
          :cy="multiplySizeUnit(size, 0.5)"
          :r="circleProps.radius"
          fill="transparent"
          :stroke-width="toSizeUnit(lineWidth)"
          :style="{
            strokeDasharray: circleProps.strokeDasharray,
            stroke: color,
          }"
        ></circle>
      </svg>

      <div :class="classes(n('circle-label'), [labelClass, labelClass])" v-if="label">
        <slot>
          {{ circleProps.roundValue }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { props } from './props'
import { toNumber } from '@varlet/shared'
import { toSizeUnit, multiplySizeUnit, toPxNum } from '../utils/elements'
import { createNamespace } from '../utils/components'

const { n, classes } = createNamespace('progress')
const ONE_HUNDRED = 100

export default defineComponent({
  name: 'VarProgress',
  props,
  setup(props) {
    const linearProps = computed(() => {
      const { type, indeterminate } = props
      const value = toNumber(props.value)
      const width = value > ONE_HUNDRED ? ONE_HUNDRED : value
      const roundValue = value > ONE_HUNDRED ? ONE_HUNDRED : Math.round(value)

      return {
        indeterminate,
        type,
        width: `${width}%`,
        roundValue: `${roundValue}%`,
      }
    })

    const circleProps = computed(() => {
      const { size, lineWidth, value, type, indeterminate } = props
      const viewBox = `0 0 ${toPxNum(size)} ${toPxNum(size)}`
      const roundValue = toNumber(value) > ONE_HUNDRED ? ONE_HUNDRED : Math.round(toNumber(value))
      const radius = (toPxNum(size) - toPxNum(lineWidth)) / 2
      const perimeter = 2 * Math.PI * radius
      const strokeDasharray = `${(roundValue / ONE_HUNDRED) * perimeter}, ${perimeter}`

      return {
        indeterminate,
        type,
        viewBox,
        radius,
        strokeDasharray,
        perimeter,
        roundValue: `${roundValue}%`,
      }
    })
    return {
      n,
      classes,
      toSizeUnit,
      multiplySizeUnit,
      linearProps,
      circleProps,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './progress';
</style>
