<template>
  <button @click="push">push</button>
  <button @click="move">move</button>

  <img
    style="width: 200px; height: 200px; object-fit: cover"
    v-for="i in images"
    :key="i.id"
    v-lazy="i.url"
  >

  <button @click="fix">reset</button>
  <button @click="pop">pop</button>
  <button @click="unshift">unshift</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Lazy from '..'

export default defineComponent({
  name: 'LazyExample',
  directives: { Lazy },
  setup() {
    const images = reactive([
      {
        id: 1,
        url: 'https://ddtask.oss-cn-shanghai.aliyuncs.com/ddtask/201208ysl/images/1606982343202.jpg?Expires=1608703112&OSSAccessKeyId=TMP.3Kj8QoTDYVpdcwERRbtMRUh7wkoZvgG25VLcqMaqzYFdcqECUoupXbaFYu36z8tcVvCgwHxUo2RF1xdB46MJpNesxSzKsv&Signature=tmLF4Y65KgbR%2FeUXdZTGSMArxIo%3D&versionId=CAEQFBiBgMDNormesRciIGU5YmQ5MWQwZjZhZTQxNGY5Nzk5YjM1ZDRhY2Q0NzYw&response-content-type=application%2Foctet-stream',
      },
      {
        id: 2,
        url: 'https://ddtask.oss-cn-shanghai.aliyuncs.com/ddtask/201208ysl/images/1606982343202.jpg?Expires=1608703112&OSSAccessKeyId=TMP.3Kj8QoTDYVpdcwERRbtMRUh7wkoZvgG25VLcqMaqzYFdcqECUoupXbaFYu36z8tcVvCgwHxUo2RF1xdB46MJpNesxSzKsv&Signature=tmLF4Y65KgbR%2FeUXdZTGSMArxIo%3D&versionId=CAEQFBiBgMDNormesRciIGU5YmQ5MWQwZjZhZTQxNGY5Nzk5YjM1ZDRhY2Q0NzYw&response-content-type=application%2Foctet-stream',
      },
      {
        id: 3,
        url: 'https://ddtask.oss-cn-shanghai.aliyuncs.com/ddtask/201208ysl/images/1606982343202.jpg?Expires=1608703112&OSSAccessKeyId=TMP.3Kj8QoTDYVpdcwERRbtMRUh7wkoZvgG25VLcqMaqzYFdcqECUoupXbaFYu36z8tcVvCgwHxUo2RF1xdB46MJpNesxSzKsv&Signature=tmLF4Y65KgbR%2FeUXdZTGSMArxIo%3D&versionId=CAEQFBiBgMDNormesRciIGU5YmQ5MWQwZjZhZTQxNGY5Nzk5YjM1ZDRhY2Q0NzYw&response-content-type=application%2Foctet-stream',
      },
      {
        id: 4,
        url: 'https://ddtask.oss-cn-shanghai.aliyuncs.com/ddtask/201208ysl/images/1606982343202.jpg?Expires=1608703112&OSSAccessKeyId=TMP.3Kj8QoTDYVpdcwERRbtMRUh7wkoZvgG25VLcqMaqzYFdcqECUoupXbaFYu36z8tcVvCgwHxUo2RF1xdB46MJpNesxSzKsv&Signature=tmLF4Y65KgbR%2FeUXdZTGSMArxIo%3D&versionId=CAEQFBiBgMDNormesRciIGU5YmQ5MWQwZjZhZTQxNGY5Nzk5YjM1ZDRhY2Q0NzYw&response-content-type=application%2Foctet-stream',
      },{
        id: 5,
        url: 'https://ddtask.oss-cn-shanghai.aliyuncs.com/ddtask/201208ysl/images/1606982343202.jpg?Expires=1608703112&OSSAccessKeyId=TMP.3Kj8QoTDYVpdcwERRbtMRUh7wkoZvgG25VLcqMaqzYFdcqECUoupXbaFYu36z8tcVvCgwHxUo2RF1xdB46MJpNesxSzKsv&Signature=tmLF4Y65KgbR%2FeUXdZTGSMArxIo%3D&versionId=CAEQFBiBgMDNormesRciIGU5YmQ5MWQwZjZhZTQxNGY5Nzk5YjM1ZDRhY2Q0NzYw&response-content-type=application%2Foctet-stream',
      }
    ])

    return {
      images,
      fix() {
        images[1].url = 'https://ddtask.oss-cn-shanghai.aliyuncs.com/ddtask/201208ysl/images/1606982343202.jpg?Expires=1608703112&OSSAccessKeyId=TMP.3Kj8QoTDYVpdcwERRbtMRUh7wkoZvgG25VLcqMaqzYFdcqECUoupXbaFYu36z8tcVvCgwHxUo2RF1xdB46MJpNesxSzKsv&Signature=tmLF4Y65KgbR%2FeUXdZTGSMArxIo%3D&versionId=CAEQFBiBgMDNormesRciIGU5YmQ5MWQwZjZhZTQxNGY5Nzk5YjM1ZDRhY2Q0NzYw&response-content-type=application%2Foctet-stream'
      },
      push() {
        images.push({
          id: Date.now(),
          url: 'https://ddtask.oss-cn-shanghai.aliyuncs.com/ddtask/201208ysl/images/1606982343202.jpg?Expires=1608703112&OSSAccessKeyId=TMP.3Kj8QoTDYVpdcwERRbtMRUh7wkoZvgG25VLcqMaqzYFdcqECUoupXbaFYu36z8tcVvCgwHxUo2RF1xdB46MJpNesxSzKsv&Signature=tmLF4Y65KgbR%2FeUXdZTGSMArxIo%3D&versionId=CAEQFBiBgMDNormesRciIGU5YmQ5MWQwZjZhZTQxNGY5Nzk5YjM1ZDRhY2Q0NzYw&response-content-type=application%2Foctet-stream'
        })
      },
      pop() {
        images.pop()
      },
      unshift() {
        images.unshift({
          id: Date.now(),
          url: 'https://cn.vuejs.org/images/logo.png'
        })
      },
      move() {
        images.unshift(images.pop() as any)
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
