<template>
  <var-menu v-model:show="show" alignment="bottom" style="margin-top: 200px">
    <var-button @click="show = true">trigger</var-button>

    <template #menu>
      <div class="list">
        <div class="item" v-ripple>1</div>
        <div class="item" v-ripple>2</div>
        <div class="item" v-ripple>3</div>
        <div class="item" v-ripple>4</div>
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
    Ripple,
  },
  components: {
    [Menu.name]: Menu,
    [Button.name]: Button,
  },
  setup() {
    const show: Ref<boolean> = ref(false)

    return {
      show,
    }
  },
})
</script>

<style scoped lang="less">
.list {
  .item {
    width: 70vw;
    padding: 10px 20px;
  }
}
</style>
