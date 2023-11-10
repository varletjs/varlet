<script setup>
import { ref } from 'vue'
import { pack, use } from './locale'
import { Themes } from '@varlet/ui'
import { watchDarkMode, watchLang, AppType } from '@varlet/cli/client'

const text = ref('VARLET')

watchLang(use)
watchDarkMode(Themes.dark)
</script>

<template>
  <app-type>{{ pack.avatarSize }}</app-type>
  <var-space align="center">
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="small" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="large" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="21vmin" />
  </var-space>

  <app-type>{{ pack.avatarShape }}</app-type>
  <var-space>
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" :round="false" />
  </var-space>

  <app-type>{{ pack.fitMode }}</app-type>
  <var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <span>cover</span>
    </var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="fill" />
      <span>fill</span>
    </var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="contain" />
      <span>contain</span>
    </var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="none" />
      <span>none</span>
    </var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="scale-down" />
      <span>scale-down</span>
    </var-space>
  </var-space>

  <app-type>{{ pack.fontSize }}</app-type>
  <var-space direction="column">
    <var-space>
      <var-avatar>{{ text }}</var-avatar>
      <var-avatar :round="false">{{ text }}</var-avatar>
    </var-space>
    <var-input v-model="text" />
  </var-space>

  <app-type>{{ pack.backgroundColor }}</app-type>
  <var-space>
    <var-avatar color="#4a79f5">
      <var-icon name="fire" />
    </var-avatar>
    <var-avatar color="#eb5a3f">{{ text }}</var-avatar>
  </var-space>

  <app-type>{{ pack.avatarHorizontalGroup }}</app-type>
  <var-avatar-group>
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat2.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat3.jpg" bordered />
    <var-avatar bordered>+2</var-avatar>
  </var-avatar-group>

  <app-type>{{ pack.avatarVerticalGroup }}</app-type>
  <var-avatar-group vertical>
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat2.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat3.jpg" bordered />
    <var-avatar bordered>+2</var-avatar>
  </var-avatar-group>

  <app-type>{{ pack.avatarHoverable }}</app-type>
  <var-avatar-group>
    <var-avatar hoverable src="https://varlet.gitee.io/varlet-ui/cat.jpg" bordered />
    <var-avatar hoverable src="https://varlet.gitee.io/varlet-ui/cat2.jpg" bordered />
    <var-avatar hoverable src="https://varlet.gitee.io/varlet-ui/cat3.jpg" bordered />
    <var-avatar hoverable bordered>+2</var-avatar>
  </var-avatar-group>
</template>
