<template>
  <div class="example">
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-sticky :offset-top="50">
      <var-button type="primary">{{ pack.basicUsage }}</var-button>
    </var-sticky>

    <app-type>{{ pack.localSticky }}</app-type>
    <div class="scroller">
      <var-sticky>
        <var-button type="success">{{ pack.localSticky }}</var-button>
      </var-sticky>
      <div class="block"></div>
    </div>
  </div>
</template>

<script>
import Sticky from '..'
import Button from '../../button'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'StickyExample',
  components: {
    [Sticky.name]: Sticky,
    [Button.name]: Button,
    AppType,
  },
  setup() {
    watchLang(use)

    return { pack }
  },
}
</script>

<style scoped lang="less">
@import '../../styles/var';

.example {
  min-height: 200vh;

  .scroller {
    height: 200px;
    overflow: auto;
    background: @color-primary;

    .block {
      width: 100%;
      height: 600px;
      background: @color-info;
      opacity: 0.5;
    }
  }
}
</style>
