<script setup>
import VarOverlay from '../Overlay'
import VarButton from '../../button'
import VarSpace from '../../space'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import dark from '../../themes/dark'
import { reactive, toRefs } from 'vue'
import { pack, use } from './local'

const values = reactive({
  baseOverlay: false,
  contentOverlay: false,
})

const { baseOverlay, contentOverlay } = toRefs(values)

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.overlayBase }}</app-type>
  <var-space>
    <var-button @click="baseOverlay = true">{{ pack.showOverlay }}</var-button>
  </var-space>

  <var-overlay v-model:show="baseOverlay" />

  <app-type>{{ pack.overlayContent }}</app-type>
  <var-space>
    <var-button @click="contentOverlay = true">{{ pack.overlayContent }}</var-button>
  </var-space>

  <var-overlay v-model:show="contentOverlay">
    <div class="popup-example-block">
      素胚勾勒出青花笔锋浓转淡, 瓶身描绘的牡丹一如你初妆, 冉冉檀香透过窗心事我了然, 宣纸上走笔至此搁一半。
    </div>
  </var-overlay>
</template>

<style>
.popup-example-block {
  padding: 20px 24px;
  width: 250px;
  background: #fff;
  border-radius: 5px;
}
</style>
