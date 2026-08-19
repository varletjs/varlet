<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { ref } from 'vue'
import { t, use } from './locale'

watchLang(use)
onThemeChange()

const active = ref(false)
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-paper :elevation="2" width="25vmin" height="25vmin" />

  <app-type>{{ t('ripple') }}</app-type>
  <var-paper :elevation="2" ripple width="25vmin" height="25vmin" />

  <app-type>{{ t('hoverable') }}</app-type>
  <var-paper hoverable :elevation="2" width="25vmin" height="25vmin" />

  <app-type>{{ t('customInteraction') }}</app-type>
  <var-paper
    :elevation="2"
    width="25vmin"
    height="25vmin"
    :ripple="{ color: 'var(--color-primary)' }"
    :hoverable="{ color: 'var(--color-primary)' }"
  />

  <app-type>{{ t('interactionState') }}</app-type>
  <div class="paper-example-states">
    <var-paper
      :active="active"
      hoverable
      ripple
      :elevation="2"
      width="25vmin"
      height="25vmin"
      @click="active = !active"
    >
      {{ active ? t('active') : t('inactive') }}
    </var-paper>
  </div>

  <app-type>{{ t('round') }}</app-type>
  <var-paper :elevation="2" width="25vmin" height="25vmin" round />

  <app-type>{{ t('radius') }}</app-type>
  <var-paper :elevation="2" :radius="8" width="25vmin" height="25vmin" />

  <app-type>{{ t('outlined') }}</app-type>
  <var-paper variant="outlined" width="25vmin" height="25vmin" />

  <app-type>{{ t('filled') }}</app-type>
  <var-paper variant="filled" width="25vmin" height="25vmin" />

  <app-type>{{ t('slot') }}</app-type>
  <var-paper :elevation="2">
    <var-cell>{{ t('paper') }}</var-cell>
    <var-cell>{{ t('paper') }}</var-cell>
    <var-cell>{{ t('paper') }}</var-cell>
  </var-paper>

  <app-type>{{ t('surfaceLow') }}</app-type>
  <div class="paper-example-tip">{{ t('surfaceLowTip') }}</div>
  <var-paper surface="low" :elevation="2" width="25vmin" height="25vmin" />
</template>

<style scoped lang="less">
.paper-example-tip {
  margin: 0 0 12px;
  color: var(--color-text-disabled);
  font-size: 14px;
  line-height: 1.6;
}

.paper-example-states {
  display: flex;
  gap: 12px;

  .var-paper {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-sm);
  }
}
</style>
