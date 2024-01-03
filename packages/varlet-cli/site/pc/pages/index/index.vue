<script setup lang="ts">
import config from '@config'
import AppHeader from '../../components/AppHeader.vue'
import { get } from 'lodash-es'
import { ref, watch, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  getPCLocationInfo,
  watchTheme,
  onThemeChange,
  getBrowserTheme,
  setTheme,
  type Theme
} from '@varlet/cli/client'

const route = useRoute()
const router = useRouter()
const currentTheme = ref(getBrowserTheme())
const github = get(config, 'pc.header.github')
const title: Ref<string> = ref(get(config, 'title'))
const language: Ref<string> = ref(get(config, 'defaultLanguage'))
const indexPage: Ref<Record<string, any>> = ref(get(config, 'pc.indexPage'))

const getStar = () => {
  router.push(`/${language.value}/home`)
}

const toGithub = () => {
  window.open(github)
}

const getThemeMessage = () => ({ action: 'theme-change', from: 'pc', data: currentTheme.value })

const setCurrentTheme = (theme: Theme) => {
  currentTheme.value = theme
  setTheme(currentTheme.value)
  window.localStorage.setItem(get(config, 'themeKey'), currentTheme.value)
}

const setLocale = () => {
  const { language: lang } = getPCLocationInfo()
  if (!lang) return

  language.value = lang
  document.title = get(config, 'pc.title')[lang] as string
}

const to = (url: string) => {
  window.open(url)
}

setTheme(currentTheme.value)

window.postMessage(getThemeMessage(), '*')

watchTheme((theme, from) => {
  from === 'mobile' && setCurrentTheme(theme)
})

onThemeChange()

watch(() => route.path, () => {
  language.value = getPCLocationInfo().language
  setLocale()
}, { immediate: true })
</script>

<template>
  <app-header :language="language" />
  <div class="varlet-doc-index">
    <div class="varlet-doc-index__layout">
      <div class="varlet-doc-index__main-container">
        <div class="varlet-doc-index__logo-container">
          <div class="varlet-doc-index__logo-background-mask"></div>
          <img class="varlet-doc-index__logo" :src="config.logo" alt="">
        </div>
        <div class="varlet-doc-index__info-container">
          <div class="varlet-doc-index__title">{{ title }}</div>
          <div class="varlet-doc-index__description">{{ indexPage.description[language] }}</div>

          <var-space size="large">
            <var-button class="varlet-doc-index__link-button" type="primary" style="line-height: 1.2" @click="getStar">
            {{ indexPage.started[language] }}
            </var-button>
            <var-button class="varlet-doc-index__github-button" style="line-height: 1.2" @click="toGithub">
              {{ indexPage.viewOnGithub[language] }}
            </var-button>
          </var-space>
        </div>
      </div>
      
      <div class="varlet-doc-index__features" v-if="indexPage.features">
        <div class="varlet-doc-index__feature" v-for="feature in indexPage.features">
          <div class="varlet-doc-index__feature-name">{{ feature.name[language] }}</div>
          <div class="varlet-doc-index__feature-description">{{ feature.description[language] }}</div>
        </div>
      </div>

      <div class="varlet-doc-index__team-members" v-if="indexPage.teamMembers">
        <div class="varlet-doc-index__team-members-title">{{ indexPage.teamMembers.label[language] }}</div>

        <div class="varlet-doc-index__team-members-container">
          <div class="varlet-doc-index__team-member" v-for="member in indexPage.teamMembers.members">
            <img class="varlet-doc-index__team-member-avatar" :src="member.avatar">
            <div class="varlet-doc-index__team-member-name">{{ member.name[language] }}</div>
            <div class="varlet-doc-index__team-member-title">{{ member.title[language] }}</div>
            <div class="varlet-doc-index__team-member-description">{{ member.description[language] }}</div>
            <div class="varlet-doc-index__team-member-social">
              <var-icon class="varlet-doc-index__team-member-social-icon" name="github" :size="24" @click="to(member.github)" v-if="member.github" />
              <var-icon class="varlet-doc-index__team-member-social-icon" name="twitter" :size="24" @click="to(member.twitter)" v-if="member.twitter" />
            </div>
          </div>
        </div>
      </div>

      <div class="varlet-doc-index__contributors" v-if="indexPage.contributors">
        <div class="varlet-doc-index__contributors-title">{{ indexPage.contributors.label[language] }}</div>

        <a class="varlet-doc-index__contributors-link" :href="indexPage.contributors.link">
          <img class="varlet-doc-index__contributors-image" :src="indexPage.contributors.image">
        </a>
      </div>

      <div class="varlet-doc-index__sponsors" v-if="indexPage.sponsors">
        <div class="varlet-doc-index__sponsors-title">{{ indexPage.sponsors.label[language] }}</div>

        <a class="varlet-doc-index__sponsors-link" :href="indexPage.sponsors.link">
          <img class="varlet-doc-index__sponsors-image" :src="indexPage.sponsors.image">
        </a>
      </div>

      <div class="varlet-doc-index__footer">
        <div class="varlet-doc-index__license">{{ indexPage.license[language] }}</div>
        <div class="varlet-doc-index__copyright">{{ indexPage.copyright[language] }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@keyframes logo-wave {
  0% {
    transform: translate(8%, 8%);
  }

  20% {
    transform: translate(-8%, 8%);
  }

  40% {
    transform: translate(-8%, -8%);
  }

  60% {
    transform: translate(-2%, 8%);
  }

  80% {
    transform: translate(8%, -8%);
  }

  100% {
    transform: translate(8%, 8%);
  }
}

.varlet-doc-index {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  background: var(--site-config-color-index-page-background);
  padding-bottom: 100px;
  min-width: 1050px;

  &__layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 170px 0;
    max-width: 1200px;
    transition: all .2s;
  }

  &__main-container {
    display: flex;
  }

  &__info-container {
    margin-left: 100px;
  }

  &__logo {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    z-index: 2;
  }

  &__logo-container {
    position: relative;
    display: flex;
    justify-content: center;
    width: 174px;
    height: 174px;
    margin-top: 8px;
  }

  &__logo-background-mask {
    position: absolute;
    left: -40px;
    top: -40px;
    bottom: -40px;
    right: -40px;
    background: var(--site-config-color-index-page-logo-mask-background);
    transition: background-color .2s;
    filter: blur(45px);
    border-radius: 50%;
    animation: logo-wave 6s infinite linear;
  }

  &__title {
    font-size: 60px;
  }

  &__description {
    max-width: 700px;
    width: 90vw;
    font-size: 20px;
    line-height: 38px;
    margin-top: 14px;
    padding-left: 2px;
    box-sizing: border-box;
    color: var(--site-config-color-index-page-second-text-color);
  }

  &__link-button {
    width: 170px !important;
    height: 48px !important;
    font-size: 19px !important;
    transition: all .2s !important;
    margin-top: 38px !important;
  }

  &__github-button {
    width: 170px !important;
    height: 48px !important;
    font-size: 19px !important;
    transition: all .2s !important;
    margin-top: 38px !important;
  }

  &__features {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 90px;
  }

  &__feature {
    width: 300px;
    margin: 12px;
    padding: 20px;
    border-radius: 12px;
    background: var(--site-config-color-index-page-feature-background);
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  &__feature-description {
    color: var(--site-config-color-index-page-second-text-color);
    font-size: 14px;
    margin-top: 10px;
    line-height: 1.7;
  }

  &__contributors, &__team-members {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
  }

  &__contributors-title, &__team-members-title {
    padding-top: 24px;
    line-height: 32px;
    font-size: 24px;
    border-top: 2px solid var(--site-config-color-index-page-divider-color);
    color: var(--site-config-color-index-page-second-text-color);
    letter-spacing: 1px;
    transition: all .2s;
  }

  &__team-members-container {
    width: 1098px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 70px;
  }

  &__team-member {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin: 12px;
    padding: 30px 20px;
    border-radius: 12px;
    background: var(--site-config-color-index-page-feature-background);
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);


    &-avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    &-name {
      font-weight: bold;
      font-size: 20px;
      margin-top: 20px;
    }

    &-title, &-description {
      color: var(--site-config-color-index-page-second-text-color);
      font-size: 14px;
      margin-top: 10px;
      min-height: 40px;
      text-align: center;
    }

    &-social {
      margin-top: 10px;

      &-icon {
        margin: 10px 6px 0;
        transition: all 0.25s !important;
        
        &:hover {
          opacity: 0.7;
          transform: scale(1.25);
          cursor: pointer;
        }
      }
    }
  }

  &__contributors-link {
    display: block;
    margin-top: 80px;
    width: 800px;
  }

  &__contributors-image {
    display: block;
    width: 100%;
  }

  &__sponsors {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
  }

  &__sponsors-title {
    padding-top: 24px;
    line-height: 32px;
    font-size: 24px;
    border-top: 2px solid var(--site-config-color-index-page-divider-color);
    color: var(--site-config-color-index-page-second-text-color);
    letter-spacing: 1px;
    transition: all .2s;
  }

  &__sponsors-link {
    display: block;
    margin-top: 50px;
    width: 1100px;
  }

  &__sponsors-image {
    display: block;
    width: 100%;
  }

  &__footer {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    border-top: thin solid var(--site-config-color-border);
    color: var(--site-config-color-index-page-second-text-color);
    font-size: 14px;
    line-height: 26px;
    transition: all .2s;
  }
}
</style>
