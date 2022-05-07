<script setup lang="ts">
import AnimationBox from '../../components/AnimationBox.vue'
import config from '@config'
import VarSiteButton from '../../../components/button'
import VarSiteIcon from '../../../components/icon'
import { get } from 'lodash-es'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getBrowserThemes, setThemes } from '../../../utils'
import { getPCLocationInfo, watchThemes } from '@varlet/cli/site/utils'
import en_US from './locale/en-US'
import zh_CN from './locale/zh-CN'
import type { Ref } from 'vue'

const route = useRoute()
const router = useRouter()
const packs = {
  'zh-CN': zh_CN,
  'en-US': en_US
} as any

const github = get(config, 'pc.header.github')
const themesKey = get(config, 'themesKey')
const currentThemes = ref(getBrowserThemes(themesKey))
const darkMode: Ref<boolean> = ref(get(config, 'pc.header.darkMode'))
const title: Ref<string> = ref(get(config, 'title'))
const languages: Ref<Record<string, string>> = ref(get(config, 'pc.header.i18n'))
const pack: Ref<Record<string, string>> = ref({})

const goGithub = () => {
  window.open(github)
}

const getStar = () => {
  const { language: lang } = getPCLocationInfo()
  router.push(`/${lang}/home`)
}

const getThemesMessage = () => ({ action: 'themesChange', from: 'pc', data: currentThemes.value })

const setCurrentThemes = (themes: 'themes' | 'darkThemes') => {
  currentThemes.value = themes
  setThemes(config, currentThemes.value)
  window.localStorage.setItem(themesKey, currentThemes.value)
}

const toggleTheme = () => {
  setCurrentThemes(currentThemes.value === 'darkThemes' ? 'themes' : 'darkThemes')
  window.postMessage(getThemesMessage(), '*')
  ;(document.getElementById('mobile') as HTMLIFrameElement)?.contentWindow!.postMessage(getThemesMessage(), '*')
}

const setLocale = () => {
  const { language: lang } = getPCLocationInfo()
  if (!lang) return

  pack.value = packs[lang]
  document.title = get(config, 'pc.title')[lang] as string
}

const toggleLanguages = () => {
  const { language: lang } = getPCLocationInfo()

  const { menuName } = getPCLocationInfo()
  const replaceStr = `/${lang === 'zh-CN' ? 'en-US' : 'zh-CN'}/${menuName}`
  router.replace(replaceStr)
}

setThemes(config, currentThemes.value)

window.postMessage(getThemesMessage(), '*')

watchThemes((themes, from) => {
  from === 'mobile' && setCurrentThemes(themes)
})

watch(() => route.path, setLocale, { immediate: true })
</script>

<template>
  <div class="home-page">
    <div class="slash-box box-1"></div>
    <div class="slash-box box-2"></div>
    <div class="slash-box box-3"></div>
    <div class="slash-box box-4"></div>
    <div class="slash-box box-5"></div>
    <div class="profile-container">
      <div class="description-container">
        <animation-box class="logo" style="position:absolute;" />
        <div class="base-title">{{ title }}</div>
      </div>
      <div class="base-description">{{ pack.description }}</div>

      <var-site-button class="block-button" block @click="goGithub">
        <div class="block-button-content">
          <span>GITHUB</span>
          <var-site-icon style="margin-left: 10px;" name="github" size="24px" />
        </div>
      </var-site-button>
      <var-site-button type="primary" class="block-primary-button" block @click="getStar">
        <div class="block-button-content">
          <span>{{ pack.started }}</span>
          <var-site-icon style="margin-left: 10px; transform: rotate(-90deg)" name="arrow-down" size="24px" />
        </div>
      </var-site-button>

      <div class="button-group">
        <var-site-button class="round-button" round v-if="darkMode" @click="toggleTheme">
          <var-site-icon size="24px" :name="currentThemes === 'themes' ? 'white-balance-sunny' : 'weather-night'" />
        </var-site-button>
        <var-site-button class="round-button" round v-if="languages" @click="toggleLanguages">
          <var-site-icon name="translate" size="24px" />
        </var-site-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "./index";
</style>
