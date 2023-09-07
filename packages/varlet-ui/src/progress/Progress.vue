<template>
  <div :class="n()">
    <div :class="n('linear')" v-if="mode === 'linear'">
      <div
        :class="classes(n('linear-block'), [track, n('linear-background')])"
        :style="{ height: toSizeUnit(lineWidth), background: trackColor }"
      >
        <div v-if="indeterminate" :class="classes([indeterminate, n('linear-indeterminate')])">
          <div :class="classes(n(`linear--${type}`))" :style="{ background: color }"></div>
          <div :class="classes(n(`linear--${type}`))" :style="{ background: color }"></div>
        </div>
        <div
          v-else
          :class="classes(n('linear-certain'), n(`linear--${type}`), [ripple, n('linear-ripple')])"
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
      v-if="mode === 'circle'"
      :class="classes(n('circle'), [indeterminate, n('circle-indeterminate')])"
      :style="{ width: toSizeUnit(size), height: toSizeUnit(size) }"
    >
      <svg :class="n('circle-svg')" :style="{ transform: `rotate(${rotate - 90}deg)` }" :viewBox="circleProps.viewBox">
        <circle
          v-if="track"
          :class="n('circle-background')"
          cx="50%"
          cy="50%"
          :r="RADIUS"
          fill="transparent"
          :stroke-width="circleProps.strokeWidth"
          :stroke-dasharray="CIRCUMFERENCE"
          :style="{
            stroke: trackColor,
          }"
        ></circle>
        <circle
          :class="classes(n('circle-certain'), n(`circle--${type}`), [indeterminate, n('circle-overlay')])"
          cx="50%"
          cy="50%"
          :r="RADIUS"
          fill="transparent"
          :stroke-width="circleProps.strokeWidth"
          :stroke-dasharray="CIRCUMFERENCE"
          :stroke-dashoffset="circleProps.strokeOffset"
          :style="{
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
import { toSizeUnit, toPxNum } from '../utils/elements'
import { createNamespace } from '../utils/components'

const ONE_HUNDRED = 100
const RADIUS = 20
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const { name, n, classes } = createNamespace('progress')

export default defineComponent({
  name,
  props,
  setup(props) {
    const linearProps = computed(() => {
      const value = toNumber(props.value)
      const width = value > ONE_HUNDRED ? ONE_HUNDRED : value
      const roundValue = value > ONE_HUNDRED ? ONE_HUNDRED : Math.round(value)

      return {
        width: `${width}%`,
        roundValue: `${roundValue}%`,
      }
    })
    const circleProps = computed(() => {
      const { size, lineWidth, value } = props

      const diameter = (RADIUS / (1 - toPxNum(lineWidth) / toPxNum(size))) * 2
      const viewBox = `0 0 ${diameter} ${diameter}`
      const roundValue = toNumber(value) > ONE_HUNDRED ? ONE_HUNDRED : Math.round(toNumber(value))
      const strokeOffset = `${((ONE_HUNDRED - roundValue) / ONE_HUNDRED) * CIRCUMFERENCE}`
      const strokeWidth = (toPxNum(lineWidth) / toPxNum(size)) * diameter

      return {
        strokeWidth,
        viewBox,
        strokeOffset,
        roundValue: `${roundValue}%`,
      }
    })

    return {
      linearProps,
      CIRCUMFERENCE,
      RADIUS,
      circleProps,
      n,
      classes,
      toSizeUnit,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './progress';
</style>
