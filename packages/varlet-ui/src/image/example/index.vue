<script setup>
import VarImage from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarRow from '../../row'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

watchLang(use)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-image src="https://varlet.gitee.io/varlet-ui/cat.jpg" />

  <app-type>{{ pack.fitMode }}</app-type>
  <var-row>
    <div class="image-example-fit-item">
      <var-image width="85px" height="85px" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <div class="image-example-margin-bottom">fill</div>
    </div>

    <div class="image-example-fit-item">
      <var-image width="85px" height="85px" fit="cover" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <div class="image-example-margin-bottom">cover</div>
    </div>

    <div class="image-example-fit-item">
      <var-image width="85px" height="85px" fit="contain" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <div class="image-example-margin-bottom">contain</div>
    </div>

    <div class="image-example-fit-item">
      <var-image width="85px" height="85px" fit="none" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <div class="image-example-margin-bottom">none</div>
    </div>

    <div class="image-example-fit-item">
      <var-image width="85px" height="85px" fit="scale-down" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <div class="image-example-margin-bottom">scale-down</div>
    </div>
  </var-row>

  <app-type>{{ pack.setRadius }}</app-type>
  <var-row>
    <var-image
      width="85px"
      height="85px"
      fit="cover"
      :radius="10"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg"
      style="margin-right: 10px"
    />

    <var-image width="85px" height="85px" fit="cover" radius="50%" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
  </var-row>

  <app-type>{{ pack.useRipple }}</app-type>
  <var-image ripple src="https://varlet.gitee.io/varlet-ui/cat.jpg" />

  <app-type>{{ pack.useLazyLoad }}</app-type>
  <var-image lazy src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
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
