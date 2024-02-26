<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { ref } from 'vue'
import { t, use } from './locale'

const show = ref(true)
const show1 = ref(true)

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('chipType') }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-chip>{{ t('defaultChip') }}</var-chip>
    <var-chip type="primary">{{ t('primaryChip') }}</var-chip>
    <var-chip type="success">{{ t('successChip') }}</var-chip>
    <var-chip type="danger">{{ t('dangerChip') }}</var-chip>
    <var-chip type="warning">{{ t('warningChip') }}</var-chip>
    <var-chip type="info">{{ t('infoChip') }}</var-chip>
  </var-space>

  <app-type>{{ t('plainChip') }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-chip plain>{{ t('defaultChip') }}</var-chip>
    <var-chip plain type="primary">{{ t('primaryChip') }}</var-chip>
    <var-chip plain type="success">{{ t('successChip') }}</var-chip>
    <var-chip plain type="danger">{{ t('dangerChip') }}</var-chip>
    <var-chip plain type="warning">{{ t('warningChip') }}</var-chip>
    <var-chip plain type="info">{{ t('infoChip') }}</var-chip>
  </var-space>

  <app-type>{{ t('nonRoundChip') }}</app-type>
  <var-chip :round="false" type="primary">{{ t('nonRoundChip') }}</var-chip>

  <app-type>{{ t('chipSize') }}</app-type>
  <var-space align="center" :size="['2.666vmin', '2.666vmin']">
    <var-chip type="primary">{{ t('normalChip') }}</var-chip>
    <var-chip type="success" size="small">{{ t('smallChip') }}</var-chip>
    <var-chip type="warning" size="mini">{{ t('miniChip') }}</var-chip>
    <var-chip type="danger" size="large">{{ t('largeChip') }}</var-chip>
  </var-space>

  <app-type>{{ t('blockChip') }}</app-type>
  <var-chip type="primary" block>{{ t('blockChip') }}</var-chip>

  <app-type>{{ t('canCloseChip') }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-chip closeable v-if="show" @close="show = false">{{ t('canCloseChip') }}</var-chip>
    <var-chip closeable icon-name="delete" v-if="show1" @close="show1 = false"> {{ t('customCloseIcon') }}</var-chip>
  </var-space>

  <app-type>{{ t('customColor') }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-chip color="#009688" text-color="#fff">{{ t('chip') }}</var-chip>
    <var-chip color="#009688" plain>{{ t('chip') }}</var-chip>
    <var-chip color="#faecd8" text-color="#e6a23c" plain>{{ t('chip') }}</var-chip>
    <var-chip color="#faecd8" text-color="#e6a23c">{{ t('chip') }}</var-chip>
  </var-space>

  <app-type>{{ t('addSlot') }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-chip>
      {{ t('leftSlot') }}

      <template #left>
        <var-icon name="star"></var-icon>
      </template>
    </var-chip>
    <var-chip>
      {{ t('rightSlot') }}

      <template #right>
        <var-icon name="fire"></var-icon>
      </template>
    </var-chip>
    <var-chip>
      {{ t('leftAndRightSlot') }}

      <template #left>
        <var-icon name="account-circle"></var-icon>
      </template>

      <template #right>
        <var-icon name="cake-variant"></var-icon>
      </template>
    </var-chip>
  </var-space>
</template>
