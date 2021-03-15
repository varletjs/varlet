<template>
  <app-type>基础导航栏</app-type>
  <var-app-bar :title="'标题'"></var-app-bar>

  <app-type>自定义样式导航栏</app-type>
  <var-app-bar :title="'标题'" :title-position="'center'" :color="'#ff9800'"></var-app-bar>

  <app-type>添加左侧插槽导航栏</app-type>
  <var-app-bar>
    <template #left>
      <var-button round @click="goBack" :color="'transparent'" :text-color="'#ffffff'" text>
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>
  </var-app-bar>

  <app-type>添加右侧插槽导航栏</app-type>
  <var-app-bar>
    <template #right>
      <var-button round @click="searchData" :color="'transparent'" :text-color="'#ffffff'" text>
        <var-icon name="magnify" :size="24" />
      </var-button>
    </template>
  </var-app-bar>

  <app-type>添加左右两侧插槽导航栏</app-type>
  <var-app-bar>
    <template #left>
      <span @click="goBack">返回</span>
    </template>
    <template #right>
      <var-menu :offset-y="38" :offset-x="-20" v-model:show="offsetY">
        <var-button round @click="offsetY = true" :color="'transparent'" :text-color="'#ffffff'" text>
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
import { defineComponent, ref, Ref } from 'vue'
import AppBar from '..'
import Icon from '../../icon/Icon'
import AppType from '@varlet/cli/site/mobile/components/AppType.vue'
import Ripple from '../../ripple'
import Snackbar from '../../snackbar'
import Menu from '../../menu/Menu'
import Button from '../../button/Button'

type MenuRules = {
  label: string,
  value: string,
}

export default defineComponent({
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
    const offsetY: Ref<boolean> = ref(false)
    const menuList: Ref<MenuRules[]> = ref([
      { label: '选项一', value: 'menu1' },
      { label: '选项二', value: 'menu2' },
    ])

    const searchData = () => {
      Snackbar.info('搜索')
    }

    const goBack = () => {
      Snackbar.info('返回')
    }

    return {
      offsetY,
      menuList,
      searchData,
      goBack,
    }
  },
})
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
