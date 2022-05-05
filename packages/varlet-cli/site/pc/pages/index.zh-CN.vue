<script setup lang="ts">
import AnimationBox from '../components/AnimationBox.vue'
import config from '@config'
import VarSiteButton from '../../components/button'
import VarSiteIcon from '../../components/icon'
import { get } from 'lodash-es'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getBrowserThemes, setThemes } from '../../utils'
import { getPCLocationInfo, watchThemes } from '@varlet/cli/site/utils'
import type { Ref } from 'vue'

const route = useRoute()
const router = useRouter()

const github = get(config, 'pc.header.github')
const themesKey = get(config, 'themesKey')
const currentThemes = ref(getBrowserThemes(themesKey))
const darkMode: Ref<boolean> = ref(get(config, 'pc.header.darkMode'))
const title: Ref<string> = ref(get(config, 'title'))
const description: Ref<string> = ref(get(config, 'pc.title')['zh-CN'])
const languages: Ref<Record<string, string>> = ref(get(config, 'pc.header.i18n'))

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

const togglePageTitle = () => {
  const { language: lang } = getPCLocationInfo()
  if (!lang) {
    return
  }
  document.title = description.value
}

const toggleLanguages = () => {
  const { language: lang } = getPCLocationInfo()

  const { menuName } = getPCLocationInfo()
  // TODO: 没有想到合适的交互, 所以暂时先写死实现效果, 和大佬们商榷后重写
  const replaceStr = `/${lang === 'zh-CN' ? 'en-US' : 'zh-CN'}/${menuName}`
  router.replace(replaceStr)
}

setThemes(config, currentThemes.value)

window.postMessage(getThemesMessage(), '*')

watchThemes((themes, from) => {
  from === 'mobile' && setCurrentThemes(themes)
})

watch(() => route.path, togglePageTitle, { immediate: true })
</script>

<template>
  <div class="root-page">
    <div class="profile-container">
      <div style="padding-left: 6px">
        <div class="base-title">{{ title }}</div>
        <div class="base-description">{{ description }}</div>
        <div class="button-group">
          <var-site-button class="round-button" round v-if="darkMode" @click="toggleTheme">
            <var-site-icon size="24px" :name="currentThemes === 'themes' ? 'white-balance-sunny' : 'weather-night'" />
          </var-site-button>
          <var-site-button class="round-button" round v-if="languages" @click="toggleLanguages">
            <var-site-icon name="translate" size="24px" />
          </var-site-button>
        </div>
      </div>

      <var-site-button class="block-button" block @click="goGithub">
        <div class="block-button-content">
          <span>GITHUB</span>
          <var-site-icon style="margin-left: 10px;" name="github" size="24px" />
        </div>
      </var-site-button>
      <var-site-button class="block-button" block @click="getStar">
        <div class="block-button-content">
          <span>快速开始</span>
          <animation-box class="logo" :style="{ transform: 'rotate(-90deg)' }" />
        </div>
      </var-site-button>
    </div>
    <div>
      <div class="post-introduce">
        <div class="introduce-img">
          <img
            class="img"
            src="../../banner.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "./index";
</style>
