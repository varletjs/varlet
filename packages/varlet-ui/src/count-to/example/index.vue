<script setup>
import { watchLang, AppType } from '@varlet/cli/client'
import { t, use } from './locale'
import { ref } from 'vue'

const countToRef = ref()

watchLang(use)
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-count-to :to="123456" />

  <app-type>{{ t('precision') }}</app-type>
  <var-count-to :to="123456" :precision="2" />

  <app-type>{{ t('customDuration') }}</app-type>
  <var-count-to :to="123456" :duration="10000" />

  <app-type>{{ t('customStyle') }}</app-type>
  <var-count-to :to="123456">
    <template #default="{ value }">
      {{ value.toLocaleString() }}
    </template>
  </var-count-to>

  <app-type>{{ t('customAnimationCurve') }}</app-type>
  <var-count-to :to="123456" :timing-function="(v) => 1 - Math.pow(1 - v, 3)" />

  <app-type>{{ t('manualControl') }}</app-type>
  <var-count-to :to="123456" ref="countToRef" :auto-start="false" />
  <var-row justify="space-between" align="center" style="margin-top: 10px">
    <var-button type="primary" @click="countToRef.start()">{{ t('startText') }}</var-button>
    <var-button @click="countToRef.pause()">{{ t('pauseText') }}</var-button>
    <var-button @click="countToRef.reset()">{{ t('resetText') }} </var-button>
  </var-row>
</template>
