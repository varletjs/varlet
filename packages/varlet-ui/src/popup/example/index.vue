<template>
  <var-button class="mt-10" block @click="center = true">居中弹出</var-button>
  <var-popup v-model:show="center">
    <div class="block">
      素胚勾勒出青花笔锋浓转淡, 瓶身描绘的牡丹一如你初妆, 冉冉檀香透过窗心事我了然, 宣纸上走笔至此搁一半。
    </div>
  </var-popup>

  <var-button class="mt-10" block @click="bottom = true">下方弹出</var-button>
  <var-popup position="bottom" v-model:show="bottom">
    <div class="block">
      素胚勾勒出青花笔锋浓转淡, 瓶身描绘的牡丹一如你初妆, 冉冉檀香透过窗心事我了然, 宣纸上走笔至此搁一半。
    </div>
  </var-popup>

  <var-button class="mt-10" block @click="top = true">上方弹出</var-button>
  <var-popup position="top" v-model:show="top">
    <div class="block">
      素胚勾勒出青花笔锋浓转淡, 瓶身描绘的牡丹一如你初妆, 冉冉檀香透过窗心事我了然, 宣纸上走笔至此搁一半。
    </div>
  </var-popup>

  <var-button class="mt-10" block @click="left = true">左侧弹出</var-button>
  <var-popup position="left" v-model:show="left">
    <div class="block">
      素胚勾勒出青花笔锋浓转淡, 瓶身描绘的牡丹一如你初妆, 冉冉檀香透过窗心事我了然, 宣纸上走笔至此搁一半。
    </div>
  </var-popup>

  <var-button class="mt-10" block @click="right = true">右侧弹出</var-button>
  <var-popup position="right" v-model:show="right">
    <div class="block">
      素胚勾勒出青花笔锋浓转淡, 瓶身描绘的牡丹一如你初妆, 冉冉檀香透过窗心事我了然, 宣纸上走笔至此搁一半。
    </div>
  </var-popup>

  <var-button class="mt-10" block @click="overlayClass = true">遮罩层class</var-button>
  <var-popup overlay-class="custom-overlay" v-model:show="overlayClass">
    <div class="block">
      素胚勾勒出青花笔锋浓转淡, 瓶身描绘的牡丹一如你初妆, 冉冉檀香透过窗心事我了然, 宣纸上走笔至此搁一半。
    </div>
  </var-popup>

  <var-button class="mt-10" block @click="overlayStyle = true">遮罩层style</var-button>
  <var-popup :overlay-style="{ 'background-color': 'rgba(0, 0, 0, 0.3)' }" v-model:show="overlayStyle">
    <div class="block">
      素胚勾勒出青花笔锋浓转淡, 瓶身描绘的牡丹一如你初妆, 冉冉檀香透过窗心事我了然, 宣纸上走笔至此搁一半。
    </div>
  </var-popup>

  <var-button class="mt-10" block @click="event = true">事件监听</var-button>
  <var-popup
    v-model:show="event"
    @open="() => Snackbar.info('open')"
    @opened="() => Snackbar.success('opened')"
    @close="() => Snackbar.warning('close')"
    @closed="() => Snackbar.error('closed')"
  >
    <div class="block">
      素胚勾勒出青花笔锋浓转淡, 瓶身描绘的牡丹一如你初妆, 冉冉檀香透过窗心事我了然, 宣纸上走笔至此搁一半。
    </div>
  </var-popup>
</template>

<script>
import Popup from '..'
import Button from '../../button'
import Snackbar from '../../snackbar'
import { ref } from 'vue'

export default {
  name: 'PopupExample',
  components: {
    [Popup.name]: Popup,
    [Button.name]: Button,
  },
  setup() {
    const center = ref(false)
    const top = ref(false)
    const bottom = ref(false)
    const left = ref(false)
    const right = ref(false)
    const overlayClass = ref(false)
    const overlayStyle = ref(false)
    const event = ref(false)

    return {
      center,
      top,
      bottom,
      left,
      right,
      overlayClass,
      overlayStyle,
      event,
      Snackbar,
    }
  },
}
</script>

<style>
.custom-overlay {
  background: rgba(0, 0, 0, 0.3);
}
</style>

<style scoped lang="less">
.mt-10 {
  margin-top: 10px;
}

.block {
  padding: 20px 24px;
  width: 70vw;
}
</style>
