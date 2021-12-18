<template>
  <app-type>基本使用</app-type>
  <var-collapse-menu :options="options" />
</template>

<script>
import CollapseMenu from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'CollapseMenuExample',
  components: {
    [CollapseMenu.name]: CollapseMenu,
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

    return {
      pack,
      options,
    }
  },
}
</script>
