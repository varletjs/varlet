<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { ref } from 'vue'
import { t, use } from './locale'

const floating = ref(false)

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-card :title="t('title')" :description="t('description')" />

  <app-type>{{ t('showSubtitle') }}</app-type>
  <var-card :title="t('title')" :subtitle="t('subtitle')" :description="t('description')" />

  <app-type>{{ t('showImage') }}</app-type>
  <var-card :title="t('title')" :subtitle="t('subtitle')" :description="t('description')" src="cat.jpg" />

  <app-type>{{ t('useSlot') }}</app-type>
  <var-card :title="t('title')" :subtitle="t('subtitle')" :description="t('description')" src="cat.jpg">
    <template #extra>
      <var-space>
        <var-button type="primary">{{ t('action1') }}</var-button>
        <var-button type="primary">{{ t('action2') }}</var-button>
      </var-space>
    </template>
  </var-card>

  <app-type>{{ t('horizontal') }}</app-type>
  <var-card :title="t('title')" :subtitle="t('description')" layout="row" src="cat.jpg">
    <template #extra>
      <var-button text round>
        <var-icon name="star" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" />
      </var-button>
    </template>
  </var-card>

  <app-type>{{ t('showRipple') }}</app-type>
  <var-card :title="t('title')" :subtitle="t('subtitle')" :description="t('description')" ripple />

  <app-type>{{ t('hoverable') }}</app-type>
  <var-card hoverable :title="t('title')" :subtitle="t('subtitle')" :description="t('surfaceLowShortDescription')" />

  <app-type>{{ t('customInteraction') }}</app-type>
  <var-card
    :title="t('title')"
    :subtitle="t('subtitle')"
    :description="t('surfaceLowShortDescription')"
    :ripple="{ color: 'var(--color-primary)' }"
    :hoverable="{ color: 'var(--color-primary)' }"
  />

  <app-type>{{ t('floating') }}</app-type>
  <var-card v-model:floating="floating" :title="t('title')" :subtitle="t('subtitle')" src="cat.jpg">
    <template #extra>
      <var-button type="primary" @click="floating = true">{{ t('floating') }}</var-button>
    </template>

    <template #floating-content>
      <var-divider dashed margin="32px 0"></var-divider>
      <div class="card-example-text">
        {{ t('description') }}
      </div>
    </template>
  </var-card>

  <app-type>{{ t('outline') }}</app-type>
  <var-card :title="t('title')" :subtitle="t('subtitle')" variant="outlined" :description="t('description')" />

  <app-type>{{ t('filled') }}</app-type>
  <var-card :title="t('title')" :subtitle="t('subtitle')" variant="filled" :description="t('description')" />

  <app-type>{{ t('surfaceLow') }}</app-type>
  <div class="card-example-tip">{{ t('surfaceLowTip') }}</div>
  <var-card
    :title="t('title')"
    :subtitle="t('subtitle')"
    surface="low"
    :description="t('surfaceLowShortDescription')"
  />
</template>

<style scoped lang="less">
.card-example-text {
  padding: 0 16px 16px;
  font-size: 14px;
  line-height: 28px;
}

.card-example-tip {
  margin: 0 0 12px;
  color: var(--color-text-disabled);
  font-size: 14px;
  line-height: 1.6;
}
</style>
