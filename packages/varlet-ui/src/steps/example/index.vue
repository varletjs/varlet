<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { ref } from 'vue'
import { t, use } from './locale'

const active = ref(0)

watchLang(use)
onThemeChange()

function next() {
  active.value = (active.value + 1) % 4
}
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-steps :active="active">
    <var-step>{{ t('first') }}</var-step>
    <var-step>{{ t('second') }}</var-step>
    <var-step>{{ t('third') }}</var-step>
    <var-step>{{ t('fourth') }}</var-step>
  </var-steps>

  <app-type>{{ t('customStyle') }}</app-type>
  <var-steps :active="active" active-color="var(--color-danger)" inactive-color="var(--color-warning)">
    <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ t('first') }}</var-step>
    <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ t('second') }}</var-step>
    <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ t('third') }}</var-step>
    <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ t('fourth') }}</var-step>
  </var-steps>

  <app-type>{{ t('customIconWithSlots') }}</app-type>
  <var-steps :active="active" active-color="var(--color-danger)" inactive-color="var(--color-warning)">
    <var-step v-for="step in [t('first'), t('second'), t('third'), t('fourth')]" :key="step">
      {{ step }}

      <template #active-icon>
        <var-icon name="heart" />
      </template>
      <template #current-icon>
        <var-icon name="fire" />
      </template>
      <template #inactive-icon>
        <var-icon name="heart-half-full" />
      </template>
    </var-step>
  </var-steps>

  <app-type>{{ t('vertical') }}</app-type>
  <var-steps direction="vertical" :active="active">
    <var-step>{{ t('first') }}</var-step>
    <var-step>{{ t('second') }}</var-step>
    <var-step>{{ t('third') }}</var-step>
    <var-step>{{ t('fourth') }}</var-step>
  </var-steps>

  <var-button type="primary" block @click="next">{{ t('next') }}</var-button>
</template>
