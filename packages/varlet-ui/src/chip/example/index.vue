<script setup>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarChip from '..'
import VarIcon from '../../icon'
import VarSpace from '../../space'
import dark from '../../themes/dark'
import { ref } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

const show = ref(true)
const show1 = ref(true)

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.chipType }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-chip>{{ pack.defaultChip }}</var-chip>
    <var-chip type="primary">{{ pack.primaryChip }}</var-chip>
    <var-chip type="success">{{ pack.successChip }}</var-chip>
    <var-chip type="danger">{{ pack.dangerChip }}</var-chip>
    <var-chip type="warning">{{ pack.warningChip }}</var-chip>
    <var-chip type="info">{{ pack.infoChip }}</var-chip>
  </var-space>

  <app-type>{{ pack.plainChip }}</app-type>
  <var-chip plain type="primary">{{ pack.plainChip }}</var-chip>

  <app-type>{{ pack.nonRoundChip }}</app-type>
  <var-chip :round="false" type="primary">{{ pack.nonRoundChip }}</var-chip>

  <app-type>{{ pack.chipSize }}</app-type>
  <var-space align="center" :size="['2.666vw', '2.666vw']">
    <var-chip type="primary">{{ pack.normalChip }}</var-chip>
    <var-chip type="success" size="small">{{ pack.smallChip }}</var-chip>
    <var-chip type="warning" size="mini">{{ pack.miniChip }}</var-chip>
    <var-chip type="danger" size="large">{{ pack.largeChip }}</var-chip>
  </var-space>

  <app-type>{{ pack.blockChip }}</app-type>
  <var-chip type="primary" block>{{ pack.blockChip }}</var-chip>

  <app-type>{{ pack.canCloseChip }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-chip closable v-if="show" @close="show = false">{{ pack.canCloseChip }}</var-chip>
    <var-chip closable icon-name="delete" v-if="show1" @close="show1 = false"> {{ pack.customCloseIcon }}</var-chip>
  </var-space>

  <app-type>{{ pack.customColor }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-chip color="#009688" text-color="#fff">{{ pack.chip }}</var-chip>
    <var-chip color="#009688" plain>{{ pack.chip }}</var-chip>
    <var-chip color="#faecd8" text-color="#e6a23c" plain>{{ pack.chip }}</var-chip>
    <var-chip color="#faecd8" text-color="#e6a23c">{{ pack.chip }}</var-chip>
  </var-space>

  <app-type>{{ pack.addSlot }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-chip>
      {{ pack.leftSlot }}

      <template #left>
        <var-icon name="star"></var-icon>
      </template>
    </var-chip>
    <var-chip>
      {{ pack.rightSlot }}

      <template #right>
        <var-icon name="fire"></var-icon>
      </template>
    </var-chip>
    <var-chip>
      {{ pack.leftAndRightSlot }}

      <template #left>
        <var-icon name="account-circle"></var-icon>
      </template>

      <template #right>
        <var-icon name="cake-variant"></var-icon>
      </template>
    </var-chip>
  </var-space>
</template>
