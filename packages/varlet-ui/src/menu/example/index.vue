<template>
  <app-type>对齐方式</app-type>
  <div class="block-1">
    <var-menu v-model:show="top">
      <var-button @click="top = true">顶部对齐</var-button>

      <template #menu>
        <div class="cell-list">
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
        </div>
      </template>
    </var-menu>
  </div>

  <div class="block">
    <var-menu alignment="bottom" v-model:show="bottom">
      <var-button @click="bottom = true">底部对齐</var-button>

      <template #menu>
        <div class="cell-list">
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
        </div>
      </template>
    </var-menu>
  </div>

  <app-type>偏移量</app-type>

  <div class="block-1">
    <var-menu :offset-x="72" v-model:show="offsetX">
      <var-button @click="offsetX = true">右偏移</var-button>

      <template #menu>
        <div class="cell-list">
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
        </div>
      </template>
    </var-menu>

    <var-menu :offset-x="-72" v-model:show="offsetX1">
      <var-button @click="offsetX1 = true">左偏移</var-button>

      <template #menu>
        <div class="cell-list">
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
        </div>
      </template>
    </var-menu>
  </div>

  <div class="block-2">
    <var-menu :offset-y="36" v-model:show="offsetY">
      <var-button @click="offsetY = true">下偏移</var-button>

      <template #menu>
        <div class="cell-list">
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
        </div>
      </template>
    </var-menu>

    <var-menu :offset-y="-36" v-model:show="offsetY1">
      <var-button @click="offsetY1 = true">上偏移</var-button>

      <template #menu>
        <div class="cell-list">
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
        </div>
      </template>
    </var-menu>
  </div>

  <app-type>注册事件</app-type>
  <var-menu v-model:show="event" @blur="() => Snackbar.success('blur')">
    <var-button @click="event = true">注册事件</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
      </div>
    </template>
  </var-menu>
</template>

<script>
import Menu from '..'
import Button from '../../button'
import Cell from '../../cell'
import Snackbar from '../../snackbar'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { ref } from 'vue'

export default {
  name: 'MenuExample',
  components: {
    [Menu.name]: Menu,
    [Button.name]: Button,
    [Cell.name]: Cell,
    AppType,
  },
  setup() {
    const top = ref(false)
    const bottom = ref(false)
    const offsetX = ref(false)
    const offsetX1 = ref(false)
    const offsetY = ref(false)
    const offsetY1 = ref(false)
    const event = ref(false)

    return {
      top,
      bottom,
      offsetX,
      offsetX1,
      offsetY,
      offsetY1,
      event,
      Snackbar,
    }
  },
}
</script>

<style scoped lang="less">
.cell-list {
  background: #fff;
}

.block {
  margin-top: 130px;
}

.block-1 {
  display: flex;
  justify-content: space-between;
}

.block-2 {
  display: flex;
  justify-content: space-between;
  margin-top: 130px;
}
</style>
