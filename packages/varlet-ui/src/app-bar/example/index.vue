<template>
  <app-type>{{ pack.basicAppBar }}</app-type>
  <var-app-bar :title="pack.title" />

  <app-type>{{ pack.customStyleAppBar }}</app-type>
  <var-app-bar :title="pack.title" title-position="center" color="#ff9800" :is-shadow="false" />

  <app-type>{{ pack.addSlotsAtTitle }}</app-type>
  <var-app-bar>{{ pack.addTheTitleFromTheSlot }}</var-app-bar>

  <app-type>{{ pack.addLeftSlotAppBar }}</app-type>
  <var-app-bar :title="pack.title" title-position="center">
    <template #left>
      <var-button round text color="transparent" text-color="#ffffff" @click="goBack">
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>
  </var-app-bar>

  <app-type>{{ pack.addRightSlotAppBar }}</app-type>
  <var-app-bar :title="pack.title">
    <template #right>
      <var-button round text color="transparent" text-color="#ffffff" @click="searchData">
        <var-icon name="magnify" :size="24" />
      </var-button>
    </template>
  </var-app-bar>

  <app-type>{{ pack.addLeftAndRightSlotAppBar }}</app-type>
  <var-app-bar :title="pack.title">
    <template #left>
      <var-button round text color="transparent" text-color="#ffffff" @click="goBack">
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-menu :offset-y="38" :offset-x="-45" v-model:show="offsetY">
        <var-button round text color="transparent" text-color="#ffffff" @click="changeOffset">
          <var-icon name="menu" :size="24" />
        </var-button>

        <template #menu>
          <div class="menu-list">
            <var-cell class="menu-cell" v-for="value in menuList" :key="value.value" v-ripple>
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
import Icon from '../../icon'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Ripple from '../../ripple'
import Snackbar from '../../snackbar'
import Menu from '../../menu'
import Button from '../../button'
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
    const menuList = ref([])

    const searchData = () => {
      Snackbar({
        content: pack.value.search,
        position: 'top',
      })
    }

    const goBack = () => {
      Snackbar({
        content: pack.value.goBack,
        position: 'top',
      })
    }

    const changeOffset = () => {
      menuList.value = [
        { label: pack.value.options1, value: 'menu1' },
        { label: pack.value.options2, value: 'menu2' },
      ]
      offsetY.value = true
    }

    watchLang(use)

    return {
      offsetY,
      menuList,
      pack,
      searchData,
      goBack,
      changeOffset,
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
