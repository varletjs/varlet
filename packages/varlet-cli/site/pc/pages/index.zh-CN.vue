<script setup lang="ts">
import { get } from 'lodash-es'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import config from '@config'
import VarIcon from '../../components/icon'
import { getBrowserThemes, setThemes } from '../../utils'
import AnimationBox from '../components/AnimationBox.vue'
import { getPCLocationInfo, watchThemes } from '@varlet/cli/site/utils'
import type { Ref } from 'vue'

const route = useRoute()
const router = useRouter()

const github = get(config, 'pc.header.github')
const themesKey = get(config, 'themesKey')
const currentThemes = ref(getBrowserThemes(themesKey))
const darkMode: Ref<boolean> = ref(get(config, 'pc.header.darkMode'))

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
  document.title = get(config, 'pc.title')[lang] as string
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
  <div class="root-page flex">
    <div class="post-detail flex-one">
      <div class="base-title margin-bottom">Varlet</div>
      <div class="base-descrition margin-bottom">Vue 3 移动端组件库</div>
      <div class="flex row-center col-center">
        <div v-ripple class="site-btn" @click="getStar">
          起步
          <animation-box class="logo" :style="{ transform: 'rotate(-90deg)' }" />
        </div>
        <div v-ripple class="site-btn" @click="goGithub">
          Github
          <var-icon style="margin-left: 5px" name="github" />
        </div>
        <div class="site-action" v-if="darkMode" v-ripple @click="toggleTheme">
          <var-site-icon size="26px" :name="currentThemes === 'themes' ? 'white-balance-sunny' : 'weather-night'" />
        </div>
        <div class="site-action" v-if="languages" v-ripple @click="toggleLanguages">
          <var-site-icon name="translate" size="26px" />
        </div>
      </div>
    </div>
    <div class="just-padding flex-one">
      <div class="post-introduce flex">
        <div class="introduce-img">
          <img
            class="img"
            src="https://madewithnetworkfra.fra1.digitaloceanspaces.com/spatie-space-production/28269/varlet-ui.jpg"
          />
        </div>
        <div class="base-descrition introduce-descrition">Vue3 Material风格的移动端组件库</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.root-page {
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
}

.flex {
  display: flex;
}

.row-center {
  justify-content: center;
}

.col-center {
  align-items: center;
}

.flex-one {
  flex: 1;
}

.just-padding {
  padding: 0 40px;
}

.margin-bottom {
  margin-bottom: 28px;
}

.post-detail {
  text-align: center;
}

.base-title {
  font-size: 48px;
  line-height: 55px;
  font-weight: 400;
}

.base-descrition {
  font-size: 20px;
  line-height: 28px;
}

.post-introduce {
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  border-radius: 20px;
  background-color: var(--card-background);
  box-shadow: 0 3px 1px -2px var(--shadow-key-umbra-opacity), 0 2px 2px 0 var(--shadow-key-penumbra-opacity),
    0 1px 5px 0 var(--shadow-key-ambient-opacity);
}

.post-introduce > .introduce-img {
  width: 43vw;
  height: 100%;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
}

.post-introduce > .introduce-img > .img {
  width: 100%;
  height: 100%;
  display: block;
}

.post-introduce > .introduce-descrition {
  border-top: 2px solid rgba(67, 91, 113, 0.1);
  padding: 15px 20px;
  box-sizing: border-box;
  width: 100%;
}

.site-btn {
  border-radius: 5px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.25s;
  padding: 0px 20px;
  margin-right: 4px;
  background: var(--site-config-color-nav-button-hover-background);
  user-select: none;
}

.logo {
  width: 15px;
  height: 15px;
  vertical-align: middle;
  margin-left: 10px;
}

.site-action {
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.25s;
  margin-right: 4px;
  background: var(--site-config-color-nav-button-hover-background);
}

.primary {
  background-color: var(--site-color-primary);
  color: #fff;
}

@media screen and (max-width: 900px) {
  .root-page {
    flex-direction: column;
  }

  .post-introduce > .introduce-img {
    width: 60vw;
    height: 100%;
    border-radius: 20px 20px 0 0;
    overflow: hidden;
  }
}
</style>
