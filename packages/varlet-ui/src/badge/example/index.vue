<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { ref } from 'vue'
import { pack, use } from './locale'

const value = ref(88)
const value1 = ref(188)
const maxValue = ref(99)
const offset = ref(6)
const hidden = ref(false)

function handleChange() {
  hidden.value = !hidden.value
}

watchLang(use)
onThemeChange()
</script>

<template>
  <div class="example">
    <app-type>{{ pack.themeColorBadge }}</app-type>
    <var-space :size="['2.666vmin', '4vmin']">
      <var-badge />
      <var-badge type="primary" />
      <var-badge type="info" />
      <var-badge type="success" />
      <var-badge type="warning" />
      <var-badge type="danger" />
    </var-space>

    <app-type>{{ pack.dotBadge }}</app-type>
    <var-badge dot type="danger" />

    <app-type>{{ pack.customContentBadge }}</app-type>
    <var-space :size="['2.666vmin', '4vmin']">
      <var-badge type="danger" value="badge" />
      <var-badge type="danger" value="hot" />
      <var-badge type="danger" value="66" />
    </var-space>

    <app-type>{{ pack.maximum }}</app-type>
    <var-space :size="['2.666vmin', '4vmin']">
      <var-badge type="danger" :value="value" :max-value="maxValue" />
      <var-badge type="danger" :value="value1" :max-value="maxValue" />
    </var-space>

    <app-type>{{ pack.differentPositioningBadges }}</app-type>
    <var-space :size="['2.666vmin', '6vmin']">
      <var-badge type="danger">
        <var-chip>{{ pack.upperRight }}</var-chip>
      </var-badge>
      <var-badge type="danger" position="right-bottom">
        <var-chip>{{ pack.lowerRight }}</var-chip>
      </var-badge>
      <var-badge type="danger" position="left-top">
        <var-chip>{{ pack.upperLeft }}</var-chip>
      </var-badge>
      <var-badge type="danger" position="left-bottom">
        <var-chip>{{ pack.lowerLeft }}</var-chip>
      </var-badge>
    </var-space>

    <app-type>{{ pack.offset }}</app-type>
    <var-space :size="['2.666vmin', '6vmin']">
      <var-badge type="danger" :offset-x="offset" :offset-y="offset">
        <var-chip>{{ pack.badge }}</var-chip>
      </var-badge>
      <var-badge type="danger" position="right-bottom" :offset-x="offset" :offset-y="offset">
        <var-chip>{{ pack.badge }}</var-chip>
      </var-badge>
      <var-badge type="danger" position="left-top" :offset-x="offset" :offset-y="offset">
        <var-chip>{{ pack.badge }}</var-chip>
      </var-badge>
      <var-badge type="danger" position="left-bottom" :offset-x="offset" :offset-y="offset">
        <var-chip>{{ pack.badge }}</var-chip>
      </var-badge>
    </var-space>

    <app-type>{{ pack.hidden }}</app-type>
    <var-space :size="['2.666vmin', '6vmin']">
      <var-badge type="danger" :hidden="hidden">
        <var-chip>{{ pack.badge }}</var-chip>
      </var-badge>

      <var-button type="success" @click="handleChange">
        {{ pack.clickToChangeTheState }}
      </var-button>
    </var-space>

    <app-type>{{ pack.customBadgeColor }}</app-type>
    <var-badge color="#6200ea">
      <var-chip>{{ pack.badge }}</var-chip>
    </var-badge>

    <app-type>{{ pack.customBadgeIcon }}</app-type>
    <var-badge icon="notebook">
      <var-chip>{{ pack.badge }}</var-chip>
    </var-badge>

    <app-type>{{ pack.customBadgeValue }}</app-type>
    <var-badge>
      <var-chip>{{ pack.badge }}</var-chip>

      <template #value>
        <var-ellipsis style="max-width: 40px" :tooltip="{ sameWidth: false }">100000000</var-ellipsis>
      </template>
    </var-badge>
  </div>
</template>
