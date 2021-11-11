<template>
  <app-type>基本使用</app-type>
  <basic-use/>

  <app-type>修改颜色</app-type>
  <modify-color/>
</template>

<script>
import Button from '../Button'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import BasicUse from './BasicUse'
import ModifyColor from './ModifyColor'

export default {
  components: {
    [Button.name]: Button,
    AppType,
    BasicUse,
    ModifyColor
  },
}
</script>
