<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { use, t } from './locale'

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-image src="https://varlet.gitee.io/varlet-ui/cat.jpg" />

  <app-type>{{ t('fitMode') }}</app-type>
  <var-space :size="['6vmin', '6vmin']">
    <div class="image-example-fit-item">
      <var-image width="22.666vmin" height="22.666vmin" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <div class="image-example-text">fill</div>
    </div>

    <div class="image-example-fit-item">
      <var-image width="22.666vmin" height="22.666vmin" fit="cover" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <div class="image-example-text">cover</div>
    </div>

    <div class="image-example-fit-item">
      <var-image width="22.666vmin" height="22.666vmin" fit="none" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <div class="image-example-text">none</div>
    </div>

    <div class="image-example-fit-item">
      <var-image width="22.666vmin" height="22.666vmin" fit="contain" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <div class="image-example-text">contain</div>
    </div>

    <div class="image-example-fit-item">
      <var-image
        width="22.666vmin"
        height="22.666vmin"
        fit="scale-down"
        src="https://varlet.gitee.io/varlet-ui/cat.jpg"
      />
      <div class="image-example-text">scale-down</div>
    </div>
  </var-space>

  <app-type>{{ t('setRadius') }}</app-type>
  <var-space :size="['6vmin', '6vmin']">
    <var-image
      width="22.666vmin"
      height="22.666vmin"
      fit="cover"
      :radius="10"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg"
      class="image-example-fit-item"
    />

    <var-image
      width="22.666vmin"
      height="22.666vmin"
      fit="cover"
      radius="50%"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg"
    />
  </var-space>

  <app-type>{{ t('useRipple') }}</app-type>
  <var-image ripple src="https://varlet.gitee.io/varlet-ui/cat.jpg" />

  <app-type>{{ t('useLazyLoad') }}</app-type>
  <var-image lazy src="https://varlet.gitee.io/varlet-ui/cat.jpg" />

  <app-type>{{ t('useFailureSlot') }}</app-type>
  <var-image width="22.666vmin" height="22.666vmin" src="https://varlet.gitee.io/varlet-ui/ca.jpg">
    <template #error>
      <svg viewBox="0 0 24 24" style="width: 100%; height: 100%">
        <path
          fill="currentColor"
          d="M21,5V11.59L18,8.58L14,12.59L10,8.59L6,12.59L3,9.58V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5M18,11.42L21,14.43V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V12.42L6,15.41L10,11.41L14,15.41"
        ></path>
      </svg>
    </template>
  </var-image>
</template>

<style scoped lang="less">
.image-example-fit-item {
  color: var(--site-config-color-text);
  text-align: center;

  .image-example-text {
    margin-top: 8px;
  }
}
</style>
