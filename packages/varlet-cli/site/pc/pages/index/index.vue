<script setup lang="ts">
import AnimationBox from '../../components/AnimationBox.vue'
import config from '@config'
import { get } from 'lodash-es'
import { ref, watch, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  getPCLocationInfo,
  watchTheme,
  getBrowserTheme,
  type Theme
} from '@varlet/cli/client'
import { setTheme } from '../../../utils'

const route = useRoute()
const router = useRouter()

const github = get(config, 'pc.header.github')
const currentTheme = ref(getBrowserTheme())
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

const getThemeMessage = () => ({ action: 'theme-change', from: 'pc', data: currentTheme.value })

const setCurrentTheme = (theme: Theme) => {
  currentTheme.value = theme
  setTheme(config, currentTheme.value)
  window.localStorage.setItem(get(config, 'themeKey'), currentTheme.value)
}

const toggleTheme = () => {
  setCurrentTheme(currentTheme.value === 'darkTheme' ? 'lightTheme' : 'darkTheme')
  window.postMessage(getThemeMessage(), '*')
  ;(document.getElementById('mobile') as HTMLIFrameElement)?.contentWindow!.postMessage(getThemeMessage(), '*')
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

setTheme(config, currentTheme.value)

window.postMessage(getThemeMessage(), '*')

watchTheme((theme, from) => {
  from === 'mobile' && setCurrentTheme(theme)
})

watch(() => route.path, setLocale, { immediate: true })
</script>

<template>
  <div class="varlet-doc-index">
    <div class="varlet-doc-index__layout">
      <div class="varlet-doc-index__logo-container">
        <div class="varlet-doc-index__logo-background-mask"></div>
        <animation-box class="varlet-doc-index__logo"/>
      </div>

      <div class="varlet-doc-index__title">{{ title }}</div>
      <div class="varlet-doc-index__description">{{ indexPage.description[language] }}</div>
      <div class="varlet-doc-index__link-button-group">
        <var-button class="varlet-doc-index__link-button" text outline @click="goGithub">
          <var-icon name="github" size="24px"/>
        </var-button>
        <var-button class="varlet-doc-index__link-button" text outline v-if="darkMode" @click="toggleTheme">
          <var-icon size="24px" :name="currentTheme === 'lightTheme' ? 'white-balance-sunny' : 'weather-night'"/>
        </var-button>
        <var-button
          class="varlet-doc-index__link-button"
          text
          outline
          v-if="languages"
          @click="toggleLanguages"
        >
          <var-icon name="translate" size="24px"/>
        </var-button>
        <var-button class="varlet-doc-index__link-button" type="primary" style="line-height: 1.2" @click="getStar">
          <span class="varlet-doc-index__link-button-text">{{ indexPage.started[language] }}</span>
          <var-icon style="transform: rotate(-90deg)" name="arrow-down" size="24px"/>
        </var-button>
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

      <div class="varlet-doc-index__footer">
        <div class="varlet-doc-index__license">{{ indexPage.license[language] }}</div>
        <div class="varlet-doc-index__copyright">{{ indexPage.copyright[language] }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './index';
</style>
