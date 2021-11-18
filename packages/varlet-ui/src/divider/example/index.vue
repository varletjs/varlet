<template>
  <div>
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-divider />
  </div>
  <div>
    <app-type>{{ pack.dashed }}</app-type>
    <var-divider dashed />
  </div>
  <div>
    <app-type>{{ pack.inset }}</app-type>
    <var-divider inset />
    <var-divider :inset="36" margin="36px 0" />
    <var-divider inset="-36px" />
  </div>
  <div>
    <app-type>{{ pack.vertical }}</app-type>
    <div class="vertical-divider-wrapper">
      <span>{{ pack.text }}</span>
      <var-divider vertical />
      <span>{{ pack.text }}</span>
      <var-divider vertical />
      <span>{{ pack.text }}</span>
    </div>
  </div>
  <div>
    <app-type>{{ pack.withDesc }}</app-type>
    <var-divider :description="pack.withDescText" />
  </div>
  <div>
    <app-type>{{ pack.custom }}</app-type>
    <var-divider>
      <var-icon name="heart-outline" style="margin: 0 16px; color: rgb(41, 121, 255)" />
    </var-divider>
  </div>
</template>

<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarDivider from '..'
import VarIcon from '../../icon'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

export default {
  name: 'DividerExample',
  components: {
    VarIcon,
    VarDivider,
    AppType,
  },
  setup() {
    watchLang(use)
    watchDarkMode(dark)

    return {
      pack,
    }
  },
}
</script>

<style lang="less" scoped>
.vertical-divider-wrapper {
  display: flex;
  justify-content: center;
  color: #333;
  height: 36px;
  line-height: 36px;

  span {
    font-size: 14px;
    color: #888;
  }
}
</style>
