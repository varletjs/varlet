<template>
  <var-button @click="set">set</var-button>
  <var-image width="200px" height="200px" fit="cover" src="https://ddtask.oss-cn-shanghai.aliyuncs.com/ddtask/201208ysl/images/1606982343202.jpg?Expires=1608703112&OSSAccessKeyId=TMP.3Kj8QoTDYVpdcwERRbtMRUh7wkoZvgG25VLcqMaqzYFdcqECUoupXbaFYu36z8tcVvCgwHxUo2RF1xdB46MJpNesxSzKsv&Signature=tmLF4Y65KgbR%2FeUXdZTGSMArxIo%3D&versionId=CAEQFBiBgMDNormesRciIGU5YmQ5MWQwZjZhZTQxNGY5Nzk5YjM1ZDRhY2Q0NzYw&response-content-type=application%2Foctet-stream"/>
  <var-image width="200px" height="200px" fit="cover" error="https://cn.vuejs.org/images/logo.png" src="https://asdadsaas.com"></var-image>
  <var-image width="200px" height="200px" fit="cover" error="https://cn.vuejs.org/images/logo.png" src="https://asdadsaas.com"></var-image>
  <var-image width="200px" height="200px" fit="cover" :src="src"></var-image>
  <var-image width="200px" height="200px" fit="cover" radius="50%" error="https://cn.vuejs.org/images/logo.png" src="https://asdadsaas.com" :ripple="true"></var-image>
  <var-image width="200px" height="400px" fit="cover" radius="50%" error="https://cn.vuejs.org/images/logo.png" src="https://asdadsaas.com" :ripple="true"></var-image>
  <var-image width="200px" height="200px" fit="cover" radius="50%" error="https://cn.vuejs.org/images/logo.png" src="https://asdadsaas.com" :ripple="true"></var-image>
  <var-image width="200px" height="400px" fit="cover" error="https://cn.vuejs.org/images/logo.png" src="https://asdadsaas.com" :ripple="true"></var-image>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import Button from '../../button'
import Image from '..'

export default defineComponent({
  name: 'ImageExample',
  components: {
    [Image.name]: Image,
    [Button.name]: Button
  },
  setup() {
    const src: Ref<string> = ref('https://asdadsaas.com')

    return {
      src,
      set() {
        src.value = 'https://cn.vuejs.org/images/logo.png'
      }
    }
  }
})
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
