<template>
  <div class="example">
    <var-popup v-if="branch" v-model:show="show2" style="padding: 10px; font-size: 20px;">
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
    </var-popup>

    <var-button type="primary" size="large" @click="show = true">居中显示</var-button>
    <var-button style="position: fixed; z-index: 9999" type="primary" size="large" @click="branch = !branch">切换</var-button>


    <keep-alive>
      <var-popup v-if="branch" v-model:show="show" style="padding: 30px; font-size: 20px;">
        <div>测试文字测试文字测试文字</div>
        <div>测试文字测试文字测试文字</div>
        <div @click="show2 = true">测试文字测试</div>
      </var-popup>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import Popup from '..'
import Button from '../../button'

export default defineComponent({
  name: 'PopupExample',
  components: {
    [Popup.name]: Popup,
    [Button.name]: Button
  },
  setup() {
    const show: Ref<boolean> = ref(true)
    const show2: Ref<boolean> = ref(false)
    const branch: Ref<boolean> = ref(true)

    return {
      show,
      show2,
      branch
    }
  }
})
</script>

<style scoped>
.example {
  height: 2000px;
}
</style>
