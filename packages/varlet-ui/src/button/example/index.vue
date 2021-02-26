<template>
  <div class="example">
    <app-type>{{ pack.themeColor }}</app-type>
    <var-button type="primary">{{ pack.primary }}</var-button>
    <var-button type="success">{{ pack.success }}</var-button>
    <var-button type="danger">{{ pack.danger }}</var-button>
    <var-button type="warning">{{ pack.warning }}</var-button>
    <var-button type="info">{{ pack.info }}</var-button>
    <var-button>{{ pack.default }}</var-button>

    <app-type>{{ pack.plain }}</app-type>
    <var-button type="primary" plain outline>{{ pack.outline }}</var-button>
    <var-button type="primary" plain>{{ pack.text }}</var-button>

    <app-type>{{ pack.disabled }}</app-type>
    <var-button :disabled="true">{{ pack.disabled }}</var-button>
    <var-button type="primary" :disabled="true" plain outline>{{ pack.disabled }}</var-button>
    <var-button type="primary" :disabled="true" plain>{{ pack.disabled }}</var-button>

    <app-type>{{ pack.loading }}</app-type>
    <var-button type="primary" :loading="true">{{ pack.loading }}</var-button>
    <var-button type="primary" :loading="true" plain outline>{{ pack.loading }}</var-button>

    <app-type>{{ pack.loadingType }}</app-type>
    <var-button type="primary" :loading="true">{{ pack.loadingType }}</var-button>
    <var-button type="primary" loading-type="rect" :loading="true">{{ pack.loadingType }}</var-button>
    <var-button type="primary" loading-type="disappear" :loading="true">{{ pack.loadingType }}</var-button>
    <var-button type="primary" loading-type="cube" :loading="true">{{ pack.loadingType }}</var-button>

    <app-type>{{ pack.size }}</app-type>
    <var-button type="primary">{{ pack.normal }}</var-button>
    <var-button type="primary" size="small">{{ pack.small }}</var-button>
    <var-button type="primary" size="mini">{{ pack.mini }}</var-button>
    <var-button  type="primary" size="large">{{ pack.large }}</var-button>

    <app-type>{{ pack.block }}</app-type>
    <var-button type="primary" block>{{ pack.block }}</var-button>

    <app-type>{{ pack.customColor }}</app-type>
    <var-button text-color="#005caf">{{ pack.textColor }}</var-button>
    <var-button color="#9c27b0" text-color="#fff">{{ pack.backgroundColor }}</var-button>
    <var-button color="linear-gradient(to right, #f44336, #005caf)" text-color="#fff">{{ pack.linearGradientColor }}</var-button>

    <app-type>{{ pack.round }}</app-type>
    <var-button round>
      <img style="width: 30px; height: 30px" src="https://img.yzcdn.cn/vant/logo.png" />
    </var-button>

    <app-type>{{ pack.event }}</app-type>
    <var-button type="danger" @click="handleClick">{{ pack.click }}</var-button>
    <var-button type="danger" @touchstart="handleTouchstart">{{ pack.touchstart }}</var-button>
  </div>
</template>

<script lang="ts">
import Button from '..'
import Snackbar from '../../snackbar'
import AppType from '@varlet/cli/site/mobile/components/AppType.vue'
import { defineComponent } from 'vue'
import { pack, use } from './locale'
import { watchLang } from '../../utils/components'

export default defineComponent({
  name: 'ButtonExample',
  components: {
    [Button.name]: Button,
    [AppType.name]: AppType,
  },
  setup() {
    const handleClick = () => {
      Snackbar.success('click success!')
    }

    const handleTouchstart = () => {
      Snackbar.success('touchstart success!')
    }

    watchLang(use)

    return {
      pack,
      handleClick,
      handleTouchstart,
    }
  },
})
</script>

<style lang="less" scoped>
.example {
  .var-button {
    margin-bottom: 10px;
    margin-right: 8px;
  }
}
</style>
