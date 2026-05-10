<script setup lang="ts">
import { computed, ref, watch, type Ref } from 'vue'
import config from '@config'
import { getBrowserTheme, getPCLocationInfo, onThemeChange, setTheme, watchTheme, type Theme } from '@varlet/cli/client'
import { useRoute, useRouter } from 'vue-router'
import AppAd from '../../components/AppAd.vue'
import AppHeader from '../../components/AppHeader.vue'

const route = useRoute()
const router = useRouter()
const currentTheme = ref(getBrowserTheme())
const github = config?.pc?.header?.github
const title: Ref<string> = ref(config?.title)
const language: Ref<string> = ref(config?.defaultLanguage)
const indexPage: Ref<Record<string, any>> = ref(config?.pc?.indexPage)
const teamTitle = () => indexPage.value?.teamMembers?.label?.[language.value]
const contributorsTitle = () => indexPage.value?.contributors?.label?.[language.value]
const sponsorsTitle = () => indexPage.value?.sponsors?.label?.[language.value]
const indexCardVariant = computed(() => (currentTheme.value === 'md3DarkTheme' ? 'standard' : 'filled'))
const indexCardSurface = computed(() => (currentTheme.value === 'md3DarkTheme' ? 'low' : undefined))

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
  window.localStorage.setItem(config?.themeKey, currentTheme.value)
}

const setLocale = () => {
  const { language: lang } = getPCLocationInfo()
  if (!lang) return

  language.value = lang
  document.title = config?.pc.title[lang] as string
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

watch(
  () => route.path,
  () => {
    language.value = getPCLocationInfo().language
    setLocale()
  },
  { immediate: true },
)
</script>

<template>
  <div class="varlet-doc-index">
    <app-ad :language="language" />
    <app-header :language="language" />

    <div class="varlet-doc-index__layout">
      <section class="varlet-doc-index__hero">
        <div class="varlet-doc-index__hero-content">
          <h1 class="varlet-doc-index__title">{{ title }}</h1>
          <p class="varlet-doc-index__description">{{ indexPage.description[language] }}</p>

          <div class="varlet-doc-index__actions">
            <var-button class="varlet-doc-index__link-button" type="primary" @click="getStar">
              {{ indexPage.started[language] }}
            </var-button>
            <var-button class="varlet-doc-index__github-button" type="primary" text outline @click="toGithub">
              {{ indexPage.viewOnGithub[language] }}
            </var-button>
          </div>
        </div>

        <div class="varlet-doc-index__hero-side">
          <div class="varlet-doc-index__hero-logo-stage">
            <div class="varlet-doc-index__hero-brand-mark">
              <div class="varlet-doc-index__hero-logo-background-mask"></div>
              <img class="varlet-doc-index__hero-logo" :src="config.logo" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section class="varlet-doc-index__section" v-if="indexPage.features?.length">
        <div class="varlet-doc-index__features">
          <var-card
            class="varlet-doc-index__feature"
            :variant="indexCardVariant"
            :surface="indexCardSurface"
            :elevation="false"
            v-for="feature in indexPage.features"
          >
            <div class="varlet-doc-index__feature-name">{{ feature.name[language] }}</div>
            <div class="varlet-doc-index__feature-description">{{ feature.description[language] }}</div>
          </var-card>
        </div>
      </section>

      <section class="varlet-doc-index__section" v-if="indexPage.teamMembers">
        <div class="varlet-doc-index__section-header">
          <div class="varlet-doc-index__section-divider">
            <span class="varlet-doc-index__section-divider-text">{{ teamTitle() }}</span>
          </div>
        </div>

        <div class="varlet-doc-index__team-members">
          <var-card
            class="varlet-doc-index__team-member"
            :variant="indexCardVariant"
            :surface="indexCardSurface"
            :elevation="false"
            v-for="member in indexPage.teamMembers.members"
          >
            <div class="varlet-doc-index__team-member-main">
              <img class="varlet-doc-index__team-member-avatar" :src="member.avatar" />

              <div class="varlet-doc-index__team-member-copy">
                <div class="varlet-doc-index__team-member-name">{{ member.name[language] }}</div>
                <div class="varlet-doc-index__team-member-title">{{ member.title[language] }}</div>
                <div class="varlet-doc-index__team-member-description">{{ member.description[language] }}</div>

                <div class="varlet-doc-index__team-member-social">
                  <var-button
                    class="varlet-doc-index__team-member-social-button"
                    text
                    round
                    v-if="member.github"
                    @click="to(member.github)"
                  >
                    <var-icon name="github" :size="22" />
                  </var-button>
                  <var-button
                    class="varlet-doc-index__team-member-social-button"
                    text
                    round
                    v-if="member.twitter"
                    @click="to(member.twitter)"
                  >
                    <var-icon name="twitter" :size="22" />
                  </var-button>
                </div>
              </div>
            </div>
          </var-card>
        </div>
      </section>

      <section class="varlet-doc-index__section" v-if="indexPage.contributors">
        <div class="varlet-doc-index__section-header">
          <div class="varlet-doc-index__section-divider">
            <span class="varlet-doc-index__section-divider-text">{{ contributorsTitle() }}</span>
          </div>
        </div>

        <a class="varlet-doc-index__image-link" :href="indexPage.contributors.link">
          <var-card class="varlet-doc-index__image-panel" :variant="indexCardVariant" :surface="indexCardSurface" :elevation="false">
            <img class="varlet-doc-index__contributors-image" :src="indexPage.contributors.image" />
          </var-card>
        </a>
      </section>

      <section class="varlet-doc-index__section" v-if="indexPage.sponsors">
        <div class="varlet-doc-index__section-header">
          <div class="varlet-doc-index__section-divider">
            <span class="varlet-doc-index__section-divider-text">{{ sponsorsTitle() }}</span>
          </div>
        </div>

        <a class="varlet-doc-index__image-link" :href="indexPage.sponsors.link">
          <var-card class="varlet-doc-index__image-panel" :variant="indexCardVariant" :surface="indexCardSurface" :elevation="false">
            <img class="varlet-doc-index__sponsors-image" :src="indexPage.sponsors.image" />
          </var-card>
        </a>
      </section>

      <div class="varlet-doc-index__footer-divider" aria-hidden="true"></div>

      <footer class="varlet-doc-index__footer">
        <div class="varlet-doc-index__license">{{ indexPage.license[language] }}</div>
        <div class="varlet-doc-index__copyright">{{ indexPage.copyright[language] }}</div>
      </footer>
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
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background: var(--site-config-color-index-page-background);

  .varlet-site-header {
    background: var(--site-config-color-index-page-background);
  }

  &__layout {
    width: 100%;
    max-width: 1240px;
    padding: 84px 32px 88px;
    box-sizing: border-box;
  }

  &__hero {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    gap: 36px;
    align-items: center;
  }

  &__hero-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 8px;
  }

  &__title {
    margin: 0;
    max-width: 720px;
    color: var(--site-config-color-primary);
    font-size: 76px;
    line-height: 0.95;
    font-weight: 780;
    letter-spacing: -0.03em;
  }

  &__description {
    max-width: 640px;
    margin: 22px 0 0;
    color: var(--site-config-color-index-page-second-text-color);
    font-size: 18px;
    line-height: 1.75;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 30px;
  }

  &__link-button,
  &__github-button {
    min-width: 154px !important;
    height: 44px !important;
    padding: 0 22px !important;
    font-size: 16px !important;
  }

  &__hero-side {
    min-width: 0;
  }

  &__hero-logo-stage {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 456px;
  }

  &__hero-brand-mark {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 204px;
    height: 204px;
  }

  &__hero-logo-background-mask {
    position: absolute;
    inset: -64px;
    background: var(--site-config-color-index-page-logo-mask-background);
    filter: blur(56px);
    border-radius: 50%;
    animation: logo-wave 6s infinite linear;
  }

  &__hero-logo {
    position: relative;
    z-index: 1;
    width: 100%;
    height: auto;
  }

  &__section {
    margin-top: 56px;
  }

  &__section-header {
    margin-bottom: 22px;
  }

  &__section-divider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    &::before {
      content: '';
      position: absolute;
      inset: 50% 0 auto;
      border-top: 1px solid color-mix(in srgb, var(--site-config-color-border) 72%, transparent);
      transform: translateY(-50%);
    }
  }

  &__section-divider-text {
    position: relative;
    z-index: 1;
    padding: 0 18px;
    background: var(--site-config-color-index-page-background);
    color: var(--site-config-color-index-page-second-text-color);
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  &__features {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  &__feature {
    --card-border-radius: 16px;
    --card-padding: 0;
    --card-content-padding: 0;
    --card-content-margin: 0;
    --card-title-padding: 0;
    --card-title-margin: 0;
    --card-description-padding: 0;
    --card-description-margin: 0;

    display: flex;
    flex-direction: column;
    min-height: 160px;
  }

  &__feature .var-card__container {
    padding: 18px 18px 16px;
  }

  &__feature-name {
    font-size: 17px;
    font-weight: 400;
    line-height: 1.45;
    color: var(--site-config-color-text);
  }

  &__feature-description {
    margin-top: 6px;
    color: var(--site-config-color-index-page-second-text-color);
    font-size: 14px;
    line-height: 1.7;
  }

  &__team-members {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  &__team-member {
    --card-border-radius: 16px;
    --card-padding: 0;
    --card-content-padding: 0;
    --card-content-margin: 0;
    min-height: 120px;
  }

  &__team-member .var-card__container {
    padding: 18px;
  }

  &__team-member-main {
    display: flex;
    align-items: flex-start;
    gap: 14px;
  }

  &__team-member-avatar {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 50%;
  }

  &__team-member-copy {
    min-width: 0;
  }

  &__team-member-name {
    font-size: 16px;
    font-weight: 600;
  }

  &__team-member-title {
    margin-top: 4px;
    color: var(--site-config-color-index-page-second-text-color);
    font-size: 13px;
    line-height: 1.6;
  }

  &__team-member-description {
    margin-top: 4px;
    color: var(--site-config-color-index-page-second-text-color);
    font-size: 13px;
    line-height: 1.65;
  }

  &__team-member-social {
    display: flex;
    gap: 6px;
    margin-top: 10px;
    margin-left: -6px;
  }

  &__team-member-social-button {
    color: var(--site-config-color-text) !important;
  }

  &__image-link {
    display: block;
  }

  &__image-panel {
    --card-border-radius: 16px;
    --card-padding: 0;
    --card-content-padding: 0;
    --card-content-margin: 0;
  }

  &__image-panel .var-card__container {
    padding: 20px;
  }

  &__contributors-image,
  &__sponsors-image {
    display: block;
    width: 100%;
    border-radius: 12px;
  }

  &__footer-divider {
    position: relative;
    width: 100%;
    height: 8px;
    margin-top: 56px;
    overflow: hidden;
    pointer-events: none;
  }

  &__footer-divider::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 100vw;
    height: 8px;
    transform: translateX(-50%);
    background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' width='100%25' height='8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpattern id='a' width='91' height='8' patternUnits='userSpaceOnUse'%3E%3Cg clip-path='url(%23clip0_2426_11367)'%3E%3Cpath d='M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0' stroke='%23E1E3E1' stroke-linecap='square'/%3E%3C/g%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
    background-position: center;
    background-size: auto 8px;
  }

  &__footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 24px;
    min-height: 56px;
    padding-top: 0;
    color: var(--site-config-color-index-page-second-text-color);
    font-size: 14px;
    line-height: 1.9;
    text-align: center;
  }

  @media (max-width: 1100px) {
    &__layout {
      padding: 84px 24px 80px;
    }

    &__hero {
      grid-template-columns: 1fr;
      gap: 28px;
    }

    &__hero-content {
      align-items: center;
      text-align: center;
    }

    &__hero-logo-stage {
      min-height: 400px;
    }

    &__features,
    &__team-members {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 767px) {
    &__layout {
      padding: 76px 16px 64px;
    }

    &__title {
      font-size: 52px;
    }

    &__description {
      font-size: 16px;
      line-height: 1.72;
    }

    &__actions {
      width: 100%;
      flex-direction: column;
    }

    &__link-button,
    &__github-button {
      width: 100% !important;
    }

    &__hero-brand-mark {
      width: 172px;
      height: 172px;
    }

    &__hero-logo {
      width: 100%;
    }

    &__features,
    &__team-members {
      grid-template-columns: 1fr;
    }

    &__feature {
      min-height: auto;
    }

    &__feature .var-card__container,
    &__team-member .var-card__container {
      padding: 16px;
    }

    &__image-panel .var-card__container {
      padding: 18px;
    }

  }
}
</style>
