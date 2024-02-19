<script setup>
import { ref } from 'vue'
import { t, use } from './locale'
import { onThemeChange, watchLang, AppType } from '@varlet/cli/client'

const text = ref('VARLET')

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('avatarSize') }}</app-type>
  <var-space align="center">
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="small" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="large" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="21vmin" />
  </var-space>

  <app-type>{{ t('avatarShape') }}</app-type>
  <var-space>
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" :round="false" />
  </var-space>

  <app-type>{{ t('fitMode') }}</app-type>
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

  <app-type>{{ t('fontSize') }}</app-type>
  <var-space direction="column">
    <var-space>
      <var-avatar>{{ text }}</var-avatar>
      <var-avatar :round="false">{{ text }}</var-avatar>
    </var-space>
    <var-input v-model="text" />
  </var-space>

  <app-type>{{ t('backgroundColor') }}</app-type>
  <var-space>
    <var-avatar color="var(--color-warning)">
      <var-icon name="fire" />
    </var-avatar>
    <var-avatar color="var(--color-danger)">{{ text }}</var-avatar>
  </var-space>

  <app-type>{{ t('avatarHorizontalGroup') }}</app-type>
  <var-avatar-group>
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat2.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat3.jpg" bordered />
    <var-avatar bordered>+2</var-avatar>
  </var-avatar-group>

  <app-type>{{ t('avatarVerticalGroup') }}</app-type>
  <var-avatar-group vertical>
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat2.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat3.jpg" bordered />
    <var-avatar bordered>+2</var-avatar>
  </var-avatar-group>

  <app-type>{{ t('avatarHoverable') }}</app-type>
  <var-avatar-group>
    <var-avatar hoverable src="https://varlet.gitee.io/varlet-ui/cat.jpg" bordered />
    <var-avatar hoverable src="https://varlet.gitee.io/varlet-ui/cat2.jpg" bordered />
    <var-avatar hoverable src="https://varlet.gitee.io/varlet-ui/cat3.jpg" bordered />
    <var-avatar hoverable bordered>+2</var-avatar>
  </var-avatar-group>
</template>
