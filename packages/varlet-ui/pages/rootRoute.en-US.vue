<template>
  <div class="root-page flex varlet-site">
    <div class="just-padding flex-one">
      <div class="post-introduce flex">
        <div class="introduce-img">
          <img
            class="img"
            src="https://madewithnetworkfra.fra1.digitaloceanspaces.com/spatie-space-production/28269/varlet-ui.jpg"
          />
        </div>
        <div class="base-descrition introduce-descrition">
          Material style mobile terminal component library for vue3
        </div>
      </div>
    </div>
    <div class="post-detail flex-one">
      <div class="base-title margin-bottom">
        <img src="https://varlet.gitee.io/varlet-ui/logo.svg" class="logo" />
        Varlet
      </div>
      <div class="base-title margin-bottom">Version1.26.9</div>
      <div class="base-descrition margin-bottom">Vue 3 Mobile Component Library</div>
      <div class="flex row-center">
        <var-space jujstify="center" align="center">
          <var-button type="primary" @click="getStar">Get Star</var-button>
          <var-button>
            <var-space align="center" @click="goGithub"> <var-icon name="github" />Github </var-space>
          </var-button>
          <var-button v-if="darkMode" round @click="toggleTheme">
            <var-site-icon
              size="26px"
              :name="currentThemes === 'themes' ? 'white-balance-sunny' : 'weather-night'"
              :style="{
                marginBottom: currentThemes === 'darkThemes' && '2px',
                marginTop: currentThemes === 'themes' && '2px',
              }"
            />
          </var-button>
        </var-space>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { get } from 'lodash-es'
import { ref, Ref } from 'vue'
import { useRouter } from 'vue-router'
import config from '@config'
import VarButton from '../src/button'
import VarIcon from '../src/icon'
import VarSpace from '../src/space'
import { getBrowserThemes, setThemes } from '../.varlet/site/utils'
import dark from '../src/themes/dark'
import { watchDarkMode } from '@varlet/cli/site/utils'

const github = ref(get(config, 'pc.header.github'))
const router = useRouter()
const themesKey = get(config, 'themesKey')
const languages: Ref<Record<string, string>> = ref(get(config, 'pc.header.i18n'))
const currentThemes = ref(getBrowserThemes(themesKey))
const darkMode: Ref<boolean> = ref(get(config, 'pc.header.darkMode'))

const goGithub = () => {
  window.location.href = github.value
}

const getStar = () => {
  console.log('currentThemes', currentThemes.value)
  router.push('/en-US/home')
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

watchDarkMode(dark)
setThemes(config, currentThemes.value)
window.postMessage(getThemesMessage(), '*')
</script>
<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background: var(--site-config-color-body);
  color: var(--site-config-color-text);
}
</style>
<style scoped>
.root-page {
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
}

.flex {
  display: flex;
}

.row-center {
  justify-content: center;
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

.base-title > .logo {
  width: 55px;
  vertical-align: middle;
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
  border-radius: 20px;
  box-shadow: 0 2px 43px -4px rgb(0 0 0 / 19%);
}

.post-introduce > .introduce-img {
  width: 43vw;
  height: 100%;
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
</style>
