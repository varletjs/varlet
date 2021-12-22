<template>
  <app-type>基本使用</app-type>
  selectedKeys: {{ selectedKeys }}
  <var-collapse-menu v-model:selectedKeys="selectedKeys" multiple accordion>
    <var-collapse-menu-group title="group1" name="g1">
      <var-collapse-menu-item name="1">
        <template #icon>
          <var-icon name="star" />
        </template>
        <template #label>item1</template>
      </var-collapse-menu-item>
      <var-collapse-menu-item name="2">
        <template #icon>
          <var-icon name="star" />
        </template>
        <template #label>item2</template>
      </var-collapse-menu-item>
      <var-collapse-menu-item name="3">
        <template #icon>
          <var-icon name="star" />
        </template>
        <template #label>item3</template>
      </var-collapse-menu-item>
    </var-collapse-menu-group>
    <var-collapse-menu-group title="group2" name="g2">
      <var-collapse-menu-item name="4">
        <template #icon>
          <var-icon name="star" />
        </template>
        <template #label>item1</template>
      </var-collapse-menu-item>
      <var-collapse-menu-item name="5">
        <template #icon>
          <var-icon name="star" />
        </template>
        <template #label>item2</template>
      </var-collapse-menu-item>
      <var-collapse-menu-item name="6">
        <template #icon>
          <var-icon name="star" />
        </template>
        <template #label>item3</template>
      </var-collapse-menu-item>
    </var-collapse-menu-group>
  </var-collapse-menu>
  selectedKeys1: {{ selectedKeys1 }}
  <var-collapse-menu v-model:selectedKeys="selectedKeys1">
    <var-collapse-menu-group title="group1">
      <var-collapse-menu-item name="1">
        <template #icon>
          <var-icon name="star" />
        </template>
        <template #label>item1</template>
      </var-collapse-menu-item>
      <var-collapse-menu-item name="2">
        <template #icon>
          <var-icon name="star" />
        </template>
        <template #label>item2</template>
      </var-collapse-menu-item>
      <var-collapse-menu-item name="3">
        <template #icon>
          <var-icon name="star" />
        </template>
        <template #label>item3</template>
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

    const handleClick = (v) => {
      console.log(v)
    }
    return {
      pack,
      options,
      handleClick,
      selectedKeys,
      selectedKeys1,
    }
  },
}
</script>
