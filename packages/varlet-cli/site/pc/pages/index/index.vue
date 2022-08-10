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
  'en-US': en_US
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
  ;(document.getElementById('mobile') as HTMLIFrameElement)?.contentWindow!.postMessage(getThemesMessage(), '*')
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
  <div class="varlet-doc-index">
    <div class="varlet-doc-index__layout">
      <div class="varlet-doc-index__logo-container">
        <div class="varlet-doc-index__logo-background-mask"></div>
        <animation-box class="varlet-doc-index__logo" />
      </div>

      <div class="varlet-doc-index__title">{{ title }}</div>
      <div class="varlet-doc-index__description">{{ description }}</div>
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
          <span class="varlet-doc-index__link-button-text">{{ started }}</span>
          <var-site-icon style="transform: rotate(-90deg)" name="arrow-down" size="24px" />
        </var-site-button>
      </div>

      <div class="varlet-doc-index__features">
        <div class="varlet-doc-index__feature">
          <div class="varlet-doc-index__feature-name">组件丰富</div>
          <div class="varlet-doc-index__feature-description">提供50个高质量通用组件</div>
        </div>

        <div class="varlet-doc-index__feature">
          <div class="varlet-doc-index__feature-name">按需引入</div>
          <div class="varlet-doc-index__feature-description">每一个组件都可单独引入，并有着良好的 tree-shaking 优化</div>
        </div>

        <div class="varlet-doc-index__feature">
          <div class="varlet-doc-index__feature-name">国人开发</div>
          <div class="varlet-doc-index__feature-description">由国人开发，完善的中英文文档和后勤保障</div>
        </div>

        <div class="varlet-doc-index__feature">
          <div class="varlet-doc-index__feature-name">国际化</div>
          <div class="varlet-doc-index__feature-description">内置国际化 API，默认支持中英两国语言</div>
        </div>

        <div class="varlet-doc-index__feature">
          <div class="varlet-doc-index__feature-name">开发工具支持</div>
          <div class="varlet-doc-index__feature-description">支持 webstorm，vscode 组件属性高亮, 提供vscode插件为开发提升效率 </div>
        </div>

        <div class="varlet-doc-index__feature">
          <div class="varlet-doc-index__feature-name">Typescript + SSR</div>
          <div class="varlet-doc-index__feature-description">对 Typescript 对使用者十分友好，并且支持服务端渲染</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './index';
</style>
