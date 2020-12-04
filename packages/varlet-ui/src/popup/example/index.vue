<template>
  <div class="example">
    <var-popup
      v-model:show="center"
      style="padding: 20px; font-size: 20px;"
    >
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
    </var-popup>

    <var-popup
      v-model:show="bottom"
      position="bottom"
      style="padding: 20px; font-size: 20px;"
    >
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
    </var-popup>

    <var-popup
      v-model:show="top"
      position="top"
      style="padding: 20px; font-size: 20px;"
    >
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
    </var-popup>

    <var-popup
      v-model:show="left"
      position="left"
      style="padding: 20px; font-size: 20px;"
    >
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
    </var-popup>

    <var-popup
      v-model:show="right"
      position="right"
      style="padding: 20px; font-size: 20px;"
    >
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
    </var-popup>

    <var-popup
      v-model:show="overlay"
      position="center"
      style="padding: 20px; font-size: 20px;"
      :overlay="false"
    >
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
    </var-popup>

    <var-popup
      v-model:show="overlayClass"
      position="center"
      style="padding: 20px; font-size: 20px;"
      overlay-class="example__overlay"
    >
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
    </var-popup>

    <var-popup
      v-model:show="overlayStyle"
      position="center"
      style="padding: 20px; font-size: 20px;"
      :overlay-style="{'background-color': '#000'}"
    >
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
    </var-popup>

    <var-popup
      v-model:show="showLockScroll"
      position="center"
      :lock-scroll="lockScroll"
      style="padding: 20px; font-size: 20px;"
    >
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
      <var-button type="warning" size="large" style="margin-top: 10px; margin-right: 10px;" @click="lockScroll = !lockScroll">切换锁</var-button>

      <var-button type="danger" size="large" style="margin-top: 10px" @click="center = !center">开启嵌套</var-button>
    </var-popup>

    <var-popup
      v-model:show="closeOnClickOverlay"
      :close-on-click-overlay="false"
      position="center"
      style="padding: 20px; font-size: 20px;"
    >
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>

      <var-button type="success" size="large" style="margin-top: 10px" @click="closeOnClickOverlay = false">关闭</var-button>
    </var-popup>

    <var-popup
      v-model:show="event"
      style="padding: 20px; font-size: 20px;"
      @open="() => log('open')"
      @opened="() => log('opened')"
      @close="() => log('close')"
      @closed="() => log('closed')"
    >
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
      <div>测试文字测试文字测试</div>
    </var-popup>


    <var-button type="primary" size="large" style="margin: 10px;" @click="center = true">居中弹出</var-button>
    <var-button type="primary" size="large" style="margin: 10px;" @click="bottom = true">下方弹出</var-button>
    <var-button type="primary" size="large" style="margin: 10px;" @click="top = true">上方弹出</var-button>
    <var-button type="primary" size="large" style="margin: 10px;" @click="left = true">左侧弹出</var-button>
    <var-button type="primary" size="large" style="margin: 10px;" @click="right = true">右侧弹出</var-button>
    <var-button type="primary" size="large" style="margin: 10px;" @click="overlay = true">取消遮罩</var-button>
    <var-button type="primary" size="large" style="margin: 10px;" @click="overlayClass = true">遮罩层class</var-button>
    <var-button type="primary" size="large" style="margin: 10px;" @click="overlayStyle = true">遮罩层style</var-button>
    <var-button type="primary" size="large" style="margin: 10px;" @click="showLockScroll = true">允许滚动穿透</var-button>
    <var-button type="primary" size="large" style="margin: 10px;" @click="closeOnClickOverlay = true">禁止点击遮罩关闭</var-button>
    <var-button type="primary" size="large" style="margin: 10px;" @click="event = true">事件监听</var-button>
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
    const center: Ref<boolean> = ref(false)
    const top: Ref<boolean> = ref(false)
    const bottom: Ref<boolean> = ref(false)
    const left: Ref<boolean> = ref(false)
    const right: Ref<boolean> = ref(false)
    const overlay: Ref<boolean> = ref(false)
    const overlayClass: Ref<boolean> = ref(false)
    const overlayStyle: Ref<boolean> = ref(false)
    const lockScroll: Ref<boolean> = ref(false)
    const showLockScroll: Ref<boolean> = ref(false)
    const closeOnClickOverlay: Ref<boolean> = ref(false)
    const event: Ref<boolean> = ref(true)

    return {
      center,
      top,
      bottom,
      left,
      right,
      overlay,
      overlayClass,
      overlayStyle,
      lockScroll,
      showLockScroll,
      closeOnClickOverlay,
      event,
      log(message: string) {
        console.log(message)
      }
    }
  }
})
</script>

<style>
.example__overlay {
  background-color: #001938;
}
</style>
<style scoped lang="less">
.example {
  height: 2000px;
}
</style>
