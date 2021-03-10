<template>
  <app-type>{{ pack.alignmentMethods }}</app-type>
  <div class="block-1">
    <var-menu v-model:show="top">
      <var-button @click="top = true">{{ pack.topAlignment }}</var-button>

      <template #menu>
        <div class="cell-list">
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
        </div>
      </template>
    </var-menu>
  </div>

  <div class="block">
    <var-menu alignment="bottom" v-model:show="bottom">
      <var-button @click="bottom = true">{{ pack.bottomAlignment }}</var-button>

      <template #menu>
        <div class="cell-list">
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
        </div>
      </template>
    </var-menu>
  </div>

  <app-type>{{ pack.offset }}</app-type>

  <div class="block-1">
    <var-menu :offset-x="72" v-model:show="offsetX">
      <var-button @click="offsetX = true">{{ pack.offsetRight }}</var-button>

      <template #menu>
        <div class="cell-list">
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
        </div>
      </template>
    </var-menu>

    <var-menu :offset-x="-72" v-model:show="offsetX1">
      <var-button @click="offsetX1 = true">{{ pack.offsetLeft }}</var-button>

      <template #menu>
        <div class="cell-list">
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
        </div>
      </template>
    </var-menu>
  </div>

  <div class="block-2">
    <var-menu :offset-y="36" v-model:show="offsetY">
      <var-button @click="offsetY = true">{{ pack.offsetBottom }}</var-button>

      <template #menu>
        <div class="cell-list">
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
        </div>
      </template>
    </var-menu>

    <var-menu :offset-y="-36" v-model:show="offsetY1">
      <var-button @click="offsetY1 = true">{{ pack.offsetTop }}</var-button>

      <template #menu>
        <div class="cell-list">
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
        </div>
      </template>
    </var-menu>
  </div>

  <app-type>{{ pack.events }}</app-type>
  <var-menu
    v-model:show="event"
    @open="() => Snackbar.info('open')"
    @opened="() => Snackbar.success('opened')"
    @close="() => Snackbar.warning('close')"
    @closed="() => Snackbar.error('closed')"
  >
    <var-button @click="event = true">{{ pack.events }}</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>{{ pack.menuOption }}</var-cell>
        <var-cell>{{ pack.menuOption }}</var-cell>
        <var-cell>{{ pack.menuOption }}</var-cell>
      </div>
    </template>
  </var-menu>

  <div style="margin-bottom: 100px;"></div>
</template>

<script>
import Menu from '..'
import Button from '../../button'
import Cell from '../../cell'
import Snackbar from '../../snackbar'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import context from '../../context'
import { onUnmounted, ref } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchPlatform } from '../../utils/components'

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

    watchLang(use)

    const prevTouchmoveForbid = context.touchmoveForbid
    watchPlatform((platform) => {
      if (platform === 'pc') {
        context.touchmoveForbid = false
      }
    })
    onUnmounted(() => {
      context.touchmoveForbid = prevTouchmoveForbid
    })

    return {
      pack,
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
