<template>
  <app-type>{{ pack.basicAppBar }}</app-type>
  <var-app-bar :title="pack.title"></var-app-bar>

  <app-type>{{ pack.customStyleAppBar }}</app-type>
  <var-app-bar :title="pack.title" title-text-align="center" color="#ff9800" :is-shadow="false"></var-app-bar>

  <app-type>{{ pack.addSlotsAtTitle }}</app-type>
  <var-app-bar>{{ pack.addTheTitleFromTheSlot }}</var-app-bar>

  <app-type>{{ pack.addLeftSlotAppBar }}</app-type>
  <var-app-bar :title="pack.title">
    <template #left>
      <var-button round @click="goBack" color="transparent" text-color="#ffffff" text>
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>
  </var-app-bar>

  <app-type>{{ pack.addRightSlotAppBar }}</app-type>
  <var-app-bar :title="pack.title">
    <template #right>
      <var-button round @click="searchData" color="transparent" text-color="#ffffff" text>
        <var-icon name="magnify" :size="24" />
      </var-button>
    </template>
  </var-app-bar>

  <app-type>{{ pack.addLeftAndRightSlotAppBar }}</app-type>
  <var-app-bar :title="pack.title">
    <template #left>
      <var-button round @click="goBack" color="transparent" text-color="#ffffff" text>
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>
    <template #right>
      <var-menu :offset-y="38" :offset-x="-20" v-model:show="offsetY">
        <var-button round @click="offsetY = true" color="transparent" text-color="#ffffff" text>
          <var-icon name="menu" :size="24" />
        </var-button>
        <template #menu>
          <div class="menu-list">
            <var-cell v-for="value in menuList" :key="value.value" class="menu-cell" v-ripple>
              {{ value.label }}
            </var-cell>
          </div>
        </template>
      </var-menu>
    </template>
  </var-app-bar>
</template>

<script>
import { ref } from 'vue'
import AppBar from '..'
import Icon from '../../icon/Icon'
import AppType from '@varlet/cli/site/mobile/components/AppType.vue'
import Ripple from '../../ripple'
import Snackbar from '../../snackbar'
import Menu from '../../menu/Menu'
import Button from '../../button/Button'
import { pack, use } from './locale'
import { watchLang } from '../../utils/components'

export default {
  name: 'AppBarExample',
  directives: { Ripple },
  components: {
    [AppBar.name]: AppBar,
    [Icon.name]: Icon,
    [Menu.name]: Menu,
    [Button.name]: Button,
    AppType,
  },
  setup() {
    const offsetY = ref(false)
    const menuList = ref([
      { label: '选项一', value: 'menu1' },
      { label: '选项二', value: 'menu2' },
    ])

    const searchData = () => {
      Snackbar({
        // content: pack.value.search,
        content: '搜索',
        position: 'top',
      })
    }

    const goBack = () => {
      Snackbar({
        // content: pack.value.goBack,
        content: '返回',
        position: 'top',
      })
    }

    watchLang(use)

    return {
      offsetY,
      menuList,
      pack,
      searchData,
      goBack,
    }
  },
}
</script>

<style scoped>
.var-menu {
  background: transparent;
}

.menu-list {
  background: #fff;
}

.menu-list .menu-cell {
  display: block;
  padding: 10px;
}
</style>
