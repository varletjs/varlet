<template>
  <div class="example">
    <app-type>主题色按钮</app-type>
    <var-button type="primary">主要按钮</var-button>
    <var-button type="success">成功按钮</var-button>
    <var-button type="danger">危险按钮</var-button>
    <var-button type="warning">警告按钮</var-button>
    <var-button type="info">信息按钮</var-button>
    <var-button>默认按钮</var-button>

    <app-type>朴素按钮</app-type>
    <var-button type="primary" plain outline>边框按钮</var-button>
    <var-button type="primary" plain>文字按钮</var-button>

    <app-type>禁用状态</app-type>
    <var-button :disabled="true">禁用状态</var-button>
    <var-button type="primary" :disabled="true" plain outline>禁用状态</var-button>
    <var-button type="primary" :disabled="true" plain>禁用状态</var-button>

    <app-type>加载状态</app-type>
    <var-button type="primary" :loading="true">加载状态</var-button>
    <var-button type="primary" :loading="true" plain outline>加载状态</var-button>

    <app-type>加载类型</app-type>
    <var-button type="primary" :loading="true">加载状态</var-button>
    <var-button type="primary" loading-type="rect" :loading="true">加载状态</var-button>
    <var-button type="primary" loading-type="disappear" :loading="true">加载状态</var-button>
    <var-button type="primary" loading-type="cube" :loading="true">加载状态</var-button>

    <app-type>按钮尺寸</app-type>
    <var-button type="primary">常规按钮</var-button>
    <var-button type="primary" size="small">小型按钮</var-button>
    <var-button type="primary" size="mini">迷你按钮</var-button>
    <var-button type="primary" size="large">大型按钮</var-button>

    <app-type>块级flex</app-type>
    <var-button type="primary" block>块级按钮</var-button>

    <app-type>自定义颜色</app-type>
    <var-button text-color="#005caf">文字颜色</var-button>
    <var-button color="#9c27b0" text-color="#fff">紫色按钮</var-button>
    <var-button color="linear-gradient(to right, #f44336, #005caf)" text-color="#fff">渐变按钮</var-button>

    <app-type>圆形按钮</app-type>
    <var-button round>
      <img style="width: 30px; height: 30px" src="https://img.yzcdn.cn/vant/logo.png" />
    </var-button>

    <app-type>注册事件</app-type>
    <var-button type="danger" @click="handleClick">点击</var-button>
    <var-button type="danger" @touchstart="handleTouchstart">触摸开始(移动端)</var-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '..'
import Snackbar from '../../snackbar'
import AppType from '@varlet/cli/site/mobile/components/AppType.vue'

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

    return {
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
