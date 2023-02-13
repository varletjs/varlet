<script setup>
import { ref } from 'vue'
import VarAvatar from '..'
import VarSpace from '../../space'
import VarIcon from '../../icon'
import VarInput from '../../input'
import VarAvatarGroup from '../../avatar-group'
import VarTooltip from '../../tooltip'
import VarMenu from '../../menu'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchDarkMode, watchLang, AppType } from '@varlet/cli/client'

const text = ref('varlet')

const options = [
  {
    name: '张三',
    src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
  },
  {
    name: '李四',
    src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
  },
  {
    name: '王五',
    src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
  },
  {
    name: '赵六',
    src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
  },
  {
    name: '七仔',
    src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
  },
]

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.avatarSize }}</app-type>
  <var-space align="end">
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="small" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="large" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" :size="56" />
  </var-space>
  <app-type>{{ pack.avatarShape }}</app-type>
  <var-space>
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" :round="false" />
  </var-space>

  <app-type>{{ pack.fitMode }}</app-type>
  <var-space>
    <div class="avatar-example-fit-item">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <span>fill</span>
    </div>
    <div class="avatar-example-fit-item">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="cover" />
      <span>cover</span>
    </div>
    <div class="avatar-example-fit-item">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="contain" />
      <span>contain</span>
    </div>
    <div class="avatar-example-fit-item">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="none" />
      <span>none</span>
    </div>
    <div class="avatar-example-fit-item">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="scale-down" />
      <span>scale-down</span>
    </div>
  </var-space>

  <app-type>{{ pack.fontSize }}</app-type>
  <var-space direction="column">
    <var-space>
      <var-avatar> {{ text }} </var-avatar>
      <var-avatar round> {{ text }} </var-avatar>
    </var-space>
    <var-input v-model="text" />
  </var-space>

  <app-type>{{ pack.backgroundColor }}</app-type>
  <var-space>
    <var-avatar round color="#4A79F5">
      {{ text }}
    </var-avatar>
    <var-avatar round color="#EB5A3F">
      <var-icon name="fire" />
    </var-avatar>
  </var-space>

  <app-type>{{ pack.avatarGroup }}</app-type>
  <var-space>
    <var-avatar-group :options="options" />
    <var-avatar-group :options="options">
      <template #avatar="{ name, src }">
        <var-tooltip placement="top" :content="name">
          <var-avatar :src="src" />
        </var-tooltip>
      </template>
      <template #rest="{ options, rest }">
        <var-menu trigger="hover" placement="top">
          <var-avatar>+{{ rest }}</var-avatar>

          <template #menu>
            <var-cell v-for="(item, index) in options" :key="index">{{ item.name }}</var-cell>
          </template>
        </var-menu>
      </template>
    </var-avatar-group>
  </var-space>
</template>

<style lang="less">
.avatar-example-fit-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}
</style>
