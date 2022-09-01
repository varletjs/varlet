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
import type { Ref } from 'vue'

const route = useRoute()
const router = useRouter()

const github = get(config, 'pc.header.github')
const themesKey = get(config, 'themesKey')
const currentThemes = ref(getBrowserThemes(themesKey))
const darkMode: Ref<boolean> = ref(get(config, 'pc.header.darkMode'))
const title: Ref<string> = ref(get(config, 'title'))
const language: Ref<string> = ref(get(config, 'defaultLanguage'))
const languages: Ref<Record<string, string>> = ref(get(config, 'pc.header.i18n'))
const indexPage: Ref<Record<string, any>> = get(config, 'pc.indexPage')

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
  ;(document.getElementById('mobile') as HTMLIFrameElement)?.contentWindow!.postMessage(getThemesMessage(), '*')
}

const setLocale = () => {
  const { language: lang } = getPCLocationInfo()
  if (!lang) return

  language.value = lang
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
  <div class="varlet-doc-index">
    <div class="varlet-doc-index__layout">
      <div class="varlet-doc-index__logo-container">
        <div class="varlet-doc-index__logo-background-mask"></div>
        <animation-box class="varlet-doc-index__logo" />
      </div>

      <div class="varlet-doc-index__title">{{ title }}</div>
      <div class="varlet-doc-index__description">{{ indexPage.description[language] }}</div>
      <div class="varlet-doc-index__link-button-group">
        <var-site-button class="varlet-doc-index__link-button" text outline @click="goGithub">
          <var-site-icon name="github" size="24px" />
        </var-site-button>
        <var-site-button class="varlet-doc-index__link-button" text outline v-if="darkMode" @click="toggleTheme">
          <var-site-icon size="24px" :name="currentThemes === 'themes' ? 'white-balance-sunny' : 'weather-night'" />
        </var-site-button>
        <var-site-button
          class="varlet-doc-index__link-button"
          text
          outline
          v-if="languages"
          @click="toggleLanguages"
        >
          <var-site-icon name="translate" size="24px" />
        </var-site-button>
        <var-site-button class="varlet-doc-index__link-button" type="primary" @click="getStar">
          <span class="varlet-doc-index__link-button-text">{{ indexPage.started[language] }}</span>
          <var-site-icon style="transform: rotate(-90deg)" name="arrow-down" size="24px" />
        </var-site-button>
      </div>

      <div class="varlet-doc-index__features" v-if="indexPage.features">
        <div class="varlet-doc-index__feature" v-for="feature in indexPage.features">
          <div class="varlet-doc-index__feature-name">{{ feature.name[language] }}</div>
          <div class="varlet-doc-index__feature-description">{{ feature.description[language] }}</div>
        </div>
      </div>

      <div class="varlet-doc-index__contributors" v-if="indexPage.contributors">
        <div class="varlet-doc-index__contributors-title">{{ indexPage.contributors.label[language] }}</div>

        <a class="varlet-doc-index__contributors-link" :href="indexPage.contributors.link">
          <img class="varlet-doc-index__contributors-image" :src="indexPage.contributors.image">
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './index';
</style>
