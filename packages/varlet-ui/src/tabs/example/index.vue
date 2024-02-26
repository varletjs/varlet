<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { use, t } from './locale'
import { reactive, toRefs, ref } from 'vue'

const actives = reactive({
  active: 0,
  active2: 0,
  active3: 0,
  active4: 0,
  active5: 0,
  active6: 0,
  active7: 0,
  active8: 0,
  activeRelation: 0,
})
const { active, active2, active3, active4, active5, active6, active7, active8, activeRelation } = toRefs(actives)
const currentTheme = ref()

watchLang(use)
onThemeChange((theme) => {
  currentTheme.value = theme
})
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-tabs v-model:active="active">
    <var-tab>{{ t('option') }}1</var-tab>
    <var-tab>{{ t('option') }}2</var-tab>
    <var-tab>{{ t('option') }}3</var-tab>
  </var-tabs>

  <app-type>{{ t('modifyStyle') }}</app-type>
  <var-tabs
    elevation
    color="var(--color-primary)"
    active-color="var(--color-on-primary)"
    inactive-color="var(--color-on-info)"
    v-model:active="active2"
  >
    <var-tab>{{ t('option') }}1</var-tab>
    <var-tab>{{ t('option') }}2</var-tab>
    <var-tab>{{ t('option') }}3</var-tab>
  </var-tabs>

  <app-type>{{ t('disabled') }}</app-type>
  <var-tabs
    elevation
    color="var(--color-primary)"
    active-color="var(--color-on-primary)"
    inactive-color="var(--color-on-info)"
    :disabled-color="currentTheme === 'darkTheme' ? '#bbb' : undefined"
    v-model:active="active3"
  >
    <var-tab>{{ t('option') }}1</var-tab>
    <var-tab>{{ t('option') }}2</var-tab>
    <var-tab disabled>{{ t('disabled') }}</var-tab>
  </var-tabs>

  <app-type>{{ t('enableScroll') }}</app-type>
  <var-tabs
    elevation
    color="var(--color-primary)"
    active-color="var(--color-on-primary)"
    inactive-color="var(--color-on-info)"
    v-model:active="active4"
  >
    <var-tab>{{ t('option') }}1</var-tab>
    <var-tab>{{ t('option') }}2</var-tab>
    <var-tab>{{ t('option') }}3</var-tab>
    <var-tab>{{ t('option') }}4</var-tab>
    <var-tab>{{ t('option') }}5</var-tab>
    <var-tab>{{ t('option') }}6</var-tab>
    <var-tab>{{ t('option') }}7</var-tab>
    <var-tab>{{ t('option') }}8</var-tab>
  </var-tabs>

  <app-type>{{ t('tabVerticalLayout') }}</app-type>
  <var-tabs
    elevation
    item-direction="vertical"
    color="var(--color-primary)"
    active-color="var(--color-on-primary)"
    inactive-color="var(--color-on-info)"
    v-model:active="active5"
  >
    <var-tab>
      <var-icon class="icon" name="information" />
      <div>{{ t('option') }}1</div>
    </var-tab>
    <var-tab>
      <var-icon class="icon" name="warning" />
      <div>{{ t('option') }}2</div>
    </var-tab>
    <var-tab>
      <var-icon class="icon" name="error" />
      <div>{{ t('option') }}3</div>
    </var-tab>
  </var-tabs>

  <app-type>{{ t('tabsVerticalLayout') }}</app-type>
  <var-tabs
    class="vertical-tabs"
    elevation
    layout-direction="vertical"
    color="var(--color-primary)"
    active-color="var(--color-on-primary)"
    inactive-color="var(--color-on-info)"
    v-model:active="active6"
  >
    <var-tab>{{ t('option') }}1</var-tab>
    <var-tab>{{ t('option') }}2</var-tab>
    <var-tab>{{ t('option') }}3</var-tab>
  </var-tabs>

  <app-type>{{ t('viewRelation') }}</app-type>
  <var-tabs
    elevation
    color="var(--color-primary)"
    active-color="var(--color-on-primary)"
    inactive-color="var(--color-on-info)"
    v-model:active="activeRelation"
    offset-top="50"
  >
    <var-tab>{{ t('option') }}1</var-tab>
    <var-tab>{{ t('option') }}2</var-tab>
    <var-tab>{{ t('option') }}3</var-tab>
  </var-tabs>

  <var-tabs-items style="margin: 8px 0" v-model:active="activeRelation">
    <var-tab-item>
      {{ t('text') }}
    </var-tab-item>
    <var-tab-item>
      {{ t('text2') }}
    </var-tab-item>
    <var-tab-item>
      {{ t('text3') }}
    </var-tab-item>
  </var-tabs-items>

  <app-type>{{ t('stickyLayout') }}</app-type>
  <var-tabs
    sticky
    elevation
    color="var(--color-primary)"
    active-color="var(--color-on-primary)"
    inactive-color="var(--color-on-info)"
    offset-top="14.4vmin"
    v-model:active="active7"
  >
    <var-tab>{{ t('option') }}1</var-tab>
    <var-tab>{{ t('option') }}2</var-tab>
    <var-tab>{{ t('option') }}3</var-tab>
  </var-tabs>

  <app-type>{{ t('indicatorPosition') }}</app-type>
  <var-tabs
    elevation
    indicator-position="reverse"
    color="var(--color-primary)"
    active-color="var(--color-on-primary)"
    inactive-color="var(--color-on-info)"
    v-model:active="active8"
  >
    <var-tab>{{ t('option') }}1</var-tab>
    <var-tab>{{ t('option') }}2</var-tab>
    <var-tab>{{ t('option') }}3</var-tab>
  </var-tabs>

  <var-tabs
    style="margin-top: 20px"
    elevation
    class="vertical-tabs"
    indicator-position="reverse"
    layout-direction="vertical"
    color="var(--color-primary)"
    active-color="var(--color-on-primary)"
    inactive-color="var(--color-on-info)"
    v-model:active="active8"
  >
    <var-tab>{{ t('option') }}1</var-tab>
    <var-tab>{{ t('option') }}2</var-tab>
    <var-tab>{{ t('option') }}3</var-tab>
  </var-tabs>

  <div style="height: 120vh"></div>
</template>

<style lang="less" scoped>
.vertical-tabs {
  width: 80px;
  height: 120px;
}

.icon {
  margin-bottom: 5px;
}

.var-tab-item {
  color: var(--color-text);
}
</style>
