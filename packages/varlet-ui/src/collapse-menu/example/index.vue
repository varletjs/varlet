<template>
  <app-type>基本使用</app-type>
  <var-collapse-menu v-model:selectedKeys="selectedKeys" @collapse="handleCollapse">
    <var-collapse-menu-group title="group3" name="g3">
      <var-collapse-menu-item name="7">
        <template #label>item1</template>
      </var-collapse-menu-item>
    </var-collapse-menu-group>
    <var-collapse-menu-group title="group3-1" name="g3-1">
      <var-collapse-menu-item name="3-1">
        <template #label>item3-1</template>
      </var-collapse-menu-item>
      <var-collapse-menu-item name="3-2">
        <template #label>item3-2</template>
      </var-collapse-menu-item>
    </var-collapse-menu-group>
  </var-collapse-menu>
</template>

<script>
import CollapseMenu from '..'
import CollapseMenuGroup from '../../collapse-menu-group'
import CollapseMenuItem from '../../collapse-menu-item'
import Icon from '../../icon'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'
import { ref } from 'vue'

export default {
  name: 'CollapseMenuExample',
  components: {
    [CollapseMenu.name]: CollapseMenu,
    [CollapseMenuGroup.name]: CollapseMenuGroup,
    [CollapseMenuItem.name]: CollapseMenuItem,
    [Icon.name]: Icon,
    AppType,
  },
  setup() {
    watchLang(use)

    const options = [
      {
        key: '1',
        label: '一级菜单1',
        icon: 'star',
        ident: 20,
        children: [
          {
            key: '1-1',
            label: '二级菜单1',
            icon: 'star',
            ident: 20,
            children: [
              {
                key: '1-1-1',
                label: '三级菜单1',
                icon: 'star',
              },
              {
                key: '1-1-2',
                label: '三级菜单2',
                icon: 'star',
              },
            ],
          },
          {
            key: '1-2',
            label: '二级菜单2',
            icon: 'star',
            ident: 20,
            children: [
              {
                key: '1-2-1',
                label: '三级菜单3',
                icon: 'star',
              },
              {
                key: '1-2-2',
                label: '三级菜单4',
                icon: 'star',
              },
            ],
          },
          {
            key: '1-3',
            label: '二级菜单3',
            icon: 'star',
          },
        ],
      },
      {
        key: '2',
        label: '一级菜单2',
        icon: 'star',
        ident: 20,
        children: [
          {
            key: '2-1',
            label: '二级菜单1',
            icon: 'star',
          },
          {
            key: '2-2',
            label: '二级菜单2',
            icon: 'star',
          },
          {
            key: '2-3',
            label: '二级菜单3',
            icon: 'star',
          },
        ],
      },
    ]

    const selectedKeys = ref(['1', '3'])
    const selectedKeys1 = ref(['2'])
    const expandedKeys = ref(['g1', 'g2'])

    const handleClick = (v) => {
      console.log(v)
    }
    const handleCollapse = (v) => {
      console.log(v)
    }
    return {
      pack,
      options,
      handleClick,
      selectedKeys,
      selectedKeys1,
      expandedKeys,
      handleCollapse,
    }
  },
}
</script>
