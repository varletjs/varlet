<template>
  <var-menu
    v-model:show="show"
    alignment="bottom"
    style="margin-top: 200px"
  >
    <var-button @click="show = true">trigger</var-button>

    <template #menu>
      <div class="list">
        <div class="item" v-ripple>1</div>
        <div class="item" v-ripple>2</div>
        <div class="item" v-ripple>3</div>
        <div class="item" v-ripple>4</div>
        <div class="item" v-ripple>
          <img style="width: 200px" src="https://ddtask.oss-cn-shanghai.aliyuncs.com/ddtask/kys201214/1607926305985.jpg?Expires=1608029346&OSSAccessKeyId=TMP.3Ke7z6wmczN6Rbw6CcUoDSchEaMvC4GMf3zeb53CDs7KcwN7CaPQVAeyvcaNffbNaoX8mWwXBanBGa3auxKKWtrgj3a27k&Signature=96PLJC4TMa0mKogBF8Zd6WL8lmY%3D&versionId=CAEQFBiBgMDp2cD_shciIDQ0YTI1MDU0YmEzNTRmZTU4OTIzMzg4YWE4NzNhMjI2&response-content-type=application%2Foctet-stream">
        </div>
      </div>
    </template>
  </var-menu>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import Menu from '..'
import Button from '../../button'
import Ripple from '../../ripple'

export default defineComponent({
  name: 'MenuExample',
  directives: {
    Ripple
  },
  components: {
    [Menu.name]: Menu,
    [Button.name]: Button
  },
  setup() {
    const show: Ref<boolean> = ref(false)

    return {
      show,
    }
  }
})
</script>

<style scoped lang="less">
.list {
  background: #fff;

  .item {
    width: 70vw;
    padding: 10px 20px;
  }
}
</style>
