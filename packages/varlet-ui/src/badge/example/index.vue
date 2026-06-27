<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { ref } from 'vue'
import { t, use } from './locale'

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
    <app-type>{{ t('themeColorBadge') }}</app-type>
    <var-space :size="['2.666vmin', '4vmin']">
      <var-badge />
      <var-badge type="primary" />
      <var-badge type="info" />
      <var-badge type="success" />
      <var-badge type="warning" />
      <var-badge type="danger" />
    </var-space>

    <app-type>{{ t('dotBadge') }}</app-type>
    <var-badge dot type="danger" />

    <app-type>{{ t('customContentBadge') }}</app-type>
    <var-space :size="['2.666vmin', '4vmin']">
      <var-badge type="danger" value="badge" />
      <var-badge type="danger" value="hot" />
      <var-badge type="danger" value="66" />
    </var-space>

    <app-type>{{ t('maximum') }}</app-type>
    <var-space :size="['2.666vmin', '4vmin']">
      <var-badge type="danger" :value="value" :max-value="maxValue" />
      <var-badge type="danger" :value="value1" :max-value="maxValue" />
    </var-space>

    <app-type>{{ t('differentPositioningBadges') }}</app-type>
    <var-space :size="['2.666vmin', '6vmin']">
      <var-badge type="danger">
        <var-chip>{{ t('upperRight') }}</var-chip>
      </var-badge>
      <var-badge type="danger" position="right-bottom">
        <var-chip>{{ t('lowerRight') }}</var-chip>
      </var-badge>
      <var-badge type="danger" position="left-top">
        <var-chip>{{ t('upperLeft') }}</var-chip>
      </var-badge>
      <var-badge type="danger" position="left-bottom">
        <var-chip>{{ t('lowerLeft') }}</var-chip>
      </var-badge>
    </var-space>

    <app-type>{{ t('offset') }}</app-type>
    <var-space :size="['2.666vmin', '6vmin']">
      <var-badge type="danger" :offset-x="offset" :offset-y="offset">
        <var-chip>{{ t('badge') }}</var-chip>
      </var-badge>
      <var-badge type="danger" position="right-bottom" :offset-x="offset" :offset-y="offset">
        <var-chip>{{ t('badge') }}</var-chip>
      </var-badge>
      <var-badge type="danger" position="left-top" :offset-x="offset" :offset-y="offset">
        <var-chip>{{ t('badge') }}</var-chip>
      </var-badge>
      <var-badge type="danger" position="left-bottom" :offset-x="offset" :offset-y="offset">
        <var-chip>{{ t('badge') }}</var-chip>
      </var-badge>
    </var-space>

    <app-type>{{ t('hidden') }}</app-type>
    <var-space :size="['2.666vmin', '6vmin']">
      <var-badge type="danger" :hidden="hidden">
        <var-chip>{{ t('badge') }}</var-chip>
      </var-badge>

      <var-button type="success" @click="handleChange">
        {{ t('clickToChangeTheState') }}
      </var-button>
    </var-space>

    <app-type>{{ t('customBadgeColor') }}</app-type>
    <var-badge type="primary" color="#6200ea">
      <var-chip>{{ t('badge') }}</var-chip>
    </var-badge>

    <app-type>{{ t('customBadgeIcon') }}</app-type>
    <var-badge icon="notebook">
      <var-chip>{{ t('badge') }}</var-chip>
    </var-badge>

    <app-type>{{ t('customBadgeIconSlot') }}</app-type>
    <var-badge type="primary">
      <var-chip>{{ t('badge') }}</var-chip>

      <template #icon>
        <svg viewBox="0 0 24 24" style="width: 1em; height: 1em">
          <path
            fill="currentColor"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      </template>
    </var-badge>

    <app-type>{{ t('customBadgeValue') }}</app-type>
    <var-badge>
      <var-chip>{{ t('badge') }}</var-chip>

      <template #value>
        <var-ellipsis style="max-width: 40px" :tooltip="{ sameWidth: false }">100000000</var-ellipsis>
      </template>
    </var-badge>
  </div>
</template>
