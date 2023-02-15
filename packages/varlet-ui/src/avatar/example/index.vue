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

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.avatarSize }}</app-type>
  <var-space align="center">
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="small" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="large" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" :size="78" />
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
    <var-avatar round color="#4a79f5">
      {{ text }}
    </var-avatar>
    <var-avatar round color="#eb5a3f">
      <var-icon name="fire" />
    </var-avatar>
  </var-space>

  <app-type>{{ pack.avatarHorizontalGroup }}</app-type>
  <var-avatar-group>
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat2.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat3.jpg" bordered />

    <template #rest>
      <var-avatar bordered>+2</var-avatar>
    </template>
  </var-avatar-group>

  <app-type>{{ pack.avatarVerticalGroup }}</app-type>
  <var-avatar-group vertical>
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat2.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat3.jpg" bordered />

    <template #rest>
      <var-avatar bordered>+2</var-avatar>
    </template>
  </var-avatar-group>
</template>

<style lang="less">
.avatar-example-fit-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  span {
    margin-top: 5px;
  }
}
</style>
