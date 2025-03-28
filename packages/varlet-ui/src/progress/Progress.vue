<template>
  <div
    :class="n()"
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-valuenow="indeterminate ? undefined : mode === 'linear' ? linearProps.value : circleProps.value"
  >
    <div v-if="mode === 'linear'" :class="n('linear')">
      <div
        :class="classes(n('linear-block'), [track, n('linear-background')])"
        :style="{ height: toSizeUnit(lineWidth), background: trackColor }"
      >
        <div v-if="indeterminate" :class="n('linear-indeterminate')">
          <div :class="classes(n(`linear--${type}`))" :style="{ background: progressColor }"></div>
          <div :class="classes(n(`linear--${type}`))" :style="{ background: progressColor }"></div>
        </div>
        <div
          v-else
          :class="classes(n('linear-certain'), n(`linear--${type}`))"
          :style="{ background: progressColor, width: linearProps.width }"
        ></div>
      </div>
      <div v-if="label" :class="classes(n('linear-label'), [labelClass, labelClass])">
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
      <svg :class="n('circle-svg')" :viewBox="circleProps.viewBox">
        <defs v-if="isPlainObject(color)">
          <linearGradient :id="id" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop
              v-for="(progress, idx) in linearGradientProgress"
              :key="idx"
              :offset="progress"
              :stop-color="color[progress]"
            ></stop>
          </linearGradient>
        </defs>
        <path
          v-if="track"
          :class="n('circle-background')"
          :d="circleProps.path"
          fill="transparent"
          :stroke-width="circleProps.strokeWidth"
          :stroke-dasharray="CIRCUMFERENCE"
          :style="{
            stroke: trackColor,
          }"
        ></path>
        <path
          :class="classes(n('circle-certain'), n(`circle--${type}`), [indeterminate, n('circle-overlay')])"
          :d="circleProps.path"
          fill="transparent"
          :stroke-width="circleProps.strokeWidth"
          :stroke-dasharray="CIRCUMFERENCE"
          :stroke-dashoffset="circleProps.strokeOffset"
          :style="{
            stroke: progressColor,
            transform: `rotateZ(${rotate}deg)`,
            transformOrigin: '50% 50%',
          }"
        ></path>
      </svg>

      <div v-if="label" :class="classes(n('circle-label'), labelClass)">
        <slot>
          {{ circleProps.roundValue }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { clamp, isPlainObject, toNumber } from '@varlet/shared'
import { useClientId } from '@varlet/use'
import { createNamespace } from '../utils/components'
import { toPxNum, toSizeUnit } from '../utils/elements'
import { props } from './props'

const MAX = 100
const MIN = 0
const RADIUS = 20
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const { name, n, classes } = createNamespace('progress')

export default defineComponent({
  name,
  props,
  setup(props) {
    const id = useClientId()
    const linearProps = computed(() => {
      const value = toNumber(props.value)
      const width = clamp(value, MIN, MAX)
      const roundValue = clamp(Math.round(value), MIN, MAX)

      return {
        width: `${width}%`,
        roundValue: `${roundValue}%`,
        value: width,
      }
    })

    const circleProps = computed(() => {
      const { size, lineWidth, value } = props

      const diameter = (RADIUS / (1 - toPxNum(lineWidth) / toPxNum(size))) * 2
      const viewBox = `0 0 ${diameter} ${diameter}`
      const roundValue = clamp(Math.round(toNumber(value)), MIN, MAX)
      const strokeOffset = `${((MAX - roundValue) / MAX) * CIRCUMFERENCE}`
      const strokeWidth = (toPxNum(lineWidth) / toPxNum(size)) * diameter

      const beginPositionX = 0
      const beginPositionY = -RADIUS
      const endPositionX = 0
      const endPositionY = -2 * RADIUS
      const path = `M ${diameter / 2} ${diameter / 2} m ${beginPositionX} ${beginPositionY} a ${RADIUS} ${RADIUS} 
        0 1 1 ${endPositionX} ${-endPositionY} a ${RADIUS} ${RADIUS} 0 1 1 ${-endPositionX} ${endPositionY}`

      return {
        strokeWidth,
        viewBox,
        strokeOffset,
        roundValue: `${roundValue}%`,
        path,
        value: clamp(toNumber(value), MIN, MAX),
      }
    })

    const progressColor = computed(() => {
      // set linear gradient color for circle progress
      if (isPlainObject(props.color)) {
        return `url(#${id.value})`
      }

      return props.color
    })

    const linearGradientProgress = computed(() =>
      Object.keys(props.color!).sort((a, b) => parseFloat(a) - parseFloat(b)),
    )

    return {
      id,
      linearProps,
      CIRCUMFERENCE,
      RADIUS,
      circleProps,
      progressColor,
      linearGradientProgress,
      n,
      classes,
      toSizeUnit,
      isPlainObject,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './progress';
</style>
