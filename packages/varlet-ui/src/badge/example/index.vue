<script setup>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarBadge from '..'
import VarButton from '../../button'
import VarChip from '../../chip'
import VarSpace from '../../space'
import dark from '../../themes/dark'
import { ref } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

const value = ref(88)
const value1 = ref(188)
const maxValue = ref(99)
const hidden = ref(false)

const handleChange = () => {
  hidden.value = !hidden.value
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <div class="example">
    <app-type>{{ pack.themeColorBadge }}</app-type>
    <var-space>
      <var-badge />
      <var-badge type="primary" />
      <var-badge type="info" />
      <var-badge type="warning" />
      <var-badge type="success" />
      <var-badge type="danger" />
    </var-space>

    <app-type>{{ pack.dotBadge }}</app-type>
    <var-badge dot type="danger" />

    <app-type>{{ pack.customContentBadge }}</app-type>
    <var-space>
      <var-badge type="danger" value="badge" />
      <var-badge type="danger" value="hot" />
      <var-badge type="danger" value="66" />
    </var-space>

    <app-type>{{ pack.maximum }}</app-type>
    <var-space>
      <var-badge type="danger" :value="value" :max-value="maxValue" />
      <var-badge type="danger" :value="value1" :max-value="maxValue" />
    </var-space>

    <app-type>{{ pack.differentPositioningBadges }}</app-type>
    <var-space :size="[8, 20]">
      <var-badge type="danger" position="right-top">
        <var-chip plain :round="false" color="#009688">{{ pack.upperRight }}</var-chip>
      </var-badge>
      <var-badge type="danger" position="right-bottom">
        <var-chip plain :round="false" color="#009688">{{ pack.lowerRight }}</var-chip>
      </var-badge>
      <var-badge type="danger" position="left-top">
        <var-chip plain :round="false" color="#009688">{{ pack.upperLeft }}</var-chip>
      </var-badge>
      <var-badge type="danger" position="left-bottom">
        <var-chip plain :round="false" color="#009688">{{ pack.lowerLeft }}</var-chip>
      </var-badge>
    </var-space>

    <app-type>{{ pack.whetherToDisplayTheBadge }}</app-type>
    <var-button @click="handleChange">
      {{ pack.clickToChangeTheState }}
    </var-button>
    <var-badge type="danger" position="right-top" :hidden="hidden">
      <var-chip plain :round="false" color="#009688">{{ pack.badge }}</var-chip>
    </var-badge>

    <app-type>{{ pack.customBadgeColors }}</app-type>
    <var-badge color="#6200ea" position="right-top">
      <var-chip plain :round="false" color="#009688">{{ pack.badge }}</var-chip>
    </var-badge>

    <app-type>{{ pack.customBadgeIcons }}</app-type>
    <var-badge color="#6200ea" position="right-top" icon="notebook">
      <var-chip plain :round="false" color="#009688">{{ pack.badge }}</var-chip>
    </var-badge>
  </div>
</template>
