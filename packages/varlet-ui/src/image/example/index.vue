<script setup>
import VarImage from '..'
import VarRow from '../../row'
import dark from '../../themes/dark'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { use, pack } from './locale'

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-image src="https://varlet.gitee.io/varlet-ui/cat.jpg" />

  <app-type>{{ pack.fitMode }}</app-type>
  <var-row>
    <div class="image-example-fit-item">
      <var-image width="22.666vw" height="22.666vw" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <div class="image-example-margin-bottom">fill</div>
    </div>

    <div class="image-example-fit-item">
      <var-image width="22.666vw" height="22.666vw" fit="cover" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <div class="image-example-margin-bottom">cover</div>
    </div>

    <div class="image-example-fit-item">
      <var-image width="22.666vw" height="22.666vw" fit="contain" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <div class="image-example-margin-bottom">contain</div>
    </div>

    <div class="image-example-fit-item">
      <var-image width="22.666vw" height="22.666vw" fit="none" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <div class="image-example-margin-bottom">none</div>
    </div>

    <div class="image-example-fit-item">
      <var-image width="22.666vw" height="22.666vw" fit="scale-down" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <div class="image-example-margin-bottom">scale-down</div>
    </div>
  </var-row>

  <app-type>{{ pack.setRadius }}</app-type>
  <var-row>
    <var-image
      width="22.666vw"
      height="22.666vw"
      fit="cover"
      :radius="10"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg"
      class="image-example-fit-item"
    />

    <var-image
      width="22.666vw"
      height="22.666vw"
      fit="cover"
      radius="50%"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg"
    />
  </var-row>

  <app-type>{{ pack.useRipple }}</app-type>
  <var-image ripple src="https://varlet.gitee.io/varlet-ui/cat.jpg" />

  <app-type>{{ pack.useLazyLoad }}</app-type>
  <var-image lazy src="https://varlet.gitee.io/varlet-ui/cat.jpg" />

  <app-type>{{ pack.useFailureSlot }}</app-type>
  <var-image width="22.666vw" height="22.666vw" src="https://varlet.gitee.io/varlet-ui/ca.jpg">
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
  color: #888;
  text-align: center;
  margin-right: 11px;
  margin-bottom: 11px;

  .image-example-margin-bottom {
    margin-bottom: 5px;
  }
}
</style>
