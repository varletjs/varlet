<template>
  <app-type>基本使用</app-type>
  <b-button>组件库从我开始</b-button>

  <app-type>修改颜色</app-type>
  <b-button color="#03A9F4">组件库从我开始</b-button>
</template>

<script>
import Button from '../Button'
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  components: {
    [Button.name]: Button,
    AppType,
  },
}
</script>
