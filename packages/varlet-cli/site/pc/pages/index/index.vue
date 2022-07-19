<script setup lang="ts">
import AnimationBox from '../../components/AnimationBox.vue'
import config from '@config'
import VarSiteButton from '../../../components/button'
import VarSiteIcon from '../../../components/icon'
import { get } from 'lodash-es'
import { ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getBrowserThemes, setThemes } from '../../../utils'
import { getPCLocationInfo, watchThemes } from '@varlet/cli/site/utils'
import en_US from './locale/en-US'
import zh_CN from './locale/zh-CN'
import type { Ref, ComputedRef } from 'vue'

const route = useRoute()
const router = useRouter()
const packs = {
  'zh-CN': zh_CN,
  'en-US': en_US,
} as any

const github = get(config, 'pc.header.github')
const themesKey = get(config, 'themesKey')
const currentThemes = ref(getBrowserThemes(themesKey))
const darkMode: Ref<boolean> = ref(get(config, 'pc.header.darkMode'))
const title: Ref<string> = ref(get(config, 'title'))
const language: Ref<string> = ref(get(config, 'defaultLanguage'))
const languages: Ref<Record<string, string>> = ref(get(config, 'pc.header.i18n'))
const pack: Ref<Record<string, string>> = ref({})

const description: ComputedRef<string> = computed(() => {
  const { indexPage = {} } = get(config, 'pc')

  return indexPage?.description?.[language.value] || pack.value.description
})

const started: ComputedRef<string> = computed(() => {
  const { indexPage = {} } = get(config, 'pc')

  return indexPage?.started?.[language.value] || pack.value.started
})

const goGithub = () => {
  window.open(github)
}

const getStar = () => {
  router.push(`/${language.value}/home`)
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
    ; (document.getElementById('mobile') as HTMLIFrameElement)?.contentWindow!.postMessage(getThemesMessage(), '*')
}

const setLocale = () => {
  const { language: lang } = getPCLocationInfo()
  if (!lang) return

  language.value = lang
  pack.value = packs[lang]
  document.title = get(config, 'pc.title')[lang] as string
}

const toggleLanguages = () => {
  const { language: lang } = getPCLocationInfo()

  const { menuName } = getPCLocationInfo()
  const replaceStr = `/${lang === 'zh-CN' ? 'en-US' : 'zh-CN'}/${menuName}`

  language.value = lang
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
      <div class="container-box">
        <div class="description-container">
          <animation-box class="logo-box" />
          <div class="base-title">{{ title }}</div>
        </div>
        <div class="base-description">{{ description }}</div>

        <div class="button-group">
          <var-site-button class="common-button github-button" block @click="goGithub">
            <div class="block-button-content">
              <span>GITHUB</span>
              <var-site-icon style="margin-left: 10px" name="github" size="24px" />
            </div>
          </var-site-button>
          <var-site-button class="common-button extra-button margin-left" text v-if="darkMode" @click="toggleTheme">
            <var-site-icon size="24px" :name="currentThemes === 'themes' ? 'white-balance-sunny' : 'weather-night'" />
          </var-site-button>
        </div>

        <div class="button-group">
          <var-site-button type="primary" class="common-button primary-button" block @click="getStar">
            <div class="block-button-content">
              <span>{{ started }}</span>
              <var-site-icon style="margin-left: 10px; transform: rotate(-90deg)" name="arrow-down" size="24px" />
            </div>
          </var-site-button>
          <var-site-button
            class="common-button extra-button margin-left"
            text
            v-if="languages"
            @click="toggleLanguages"
          >
            <var-site-icon name="translate" size="24px" />
          </var-site-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './index';
</style>
