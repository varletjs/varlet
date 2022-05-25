<template>
  <div class="varlet-site-header">
    <div class="varlet-site-header__lead">
      <animation-box class="varlet-site-header__logo"  @click="backRoot" />
      <div class="varlet-site-header__title" v-if="title"  @click="backRoot">{{ title }}</div>
    </div>

    <div class="varlet-site-header__tail">
      <div
        class="varlet-site-header__versions"
        @mouseenter="isOpenVersionsMenu = true"
        @mouseleave="isOpenVersionsMenu = false"
        v-if="versionItems"
      >
        <span style="font-size: 14px;">{{ currentVersion }}</span>
        <var-site-icon name="chevron-down" />
        <transition name="fade">
          <div
            class="varlet-site-header__animation-list varlet-site-header__animation-versions var-site-elevation--5"
            v-show="isOpenVersionsMenu"
            :style="{ pointerEvents: isOpenVersionsMenu ? 'auto' : 'none' }"
          >
            <var-site-cell
              v-for="(value, key) in nonEmptyVersions"
              v-ripple
              :key="key"
              :class="{ 'varlet-site-header__animation-list--active': currentVersion === key }"
              @click="open(value)"
            >{{ key }}
            </var-site-cell>
          </div>
        </transition>
      </div>

      <a class="varlet-site-header__link" target="_blank" :href="playground" v-ripple v-if="playground">
        <var-site-icon name="code-json" :size="24" />
      </a>
      <a class="varlet-site-header__link" target="_blank" :href="github" v-ripple v-if="github">
        <var-site-icon name="github" :size="28" />
      </a>
      <div class="varlet-site-header__theme" v-ripple v-if="darkMode" @click="toggleTheme">
        <var-site-icon
          size="26px"
          :name="currentThemes === 'themes' ? 'white-balance-sunny' : 'weather-night'"
          :style="{
            marginBottom: currentThemes === 'darkThemes' && '2px',
            marginTop: currentThemes === 'themes' && '2px',
          }"
        />
      </div>
      <div
        class="varlet-site-header__language"
        @mouseenter="isOpenLanguageMenu = true"
        @mouseleave="isOpenLanguageMenu = false"
        v-if="languages"
      >
        <var-site-icon name="translate" size="26px" />
        <var-site-icon name="chevron-down" />
        <transition name="fade">
          <div
            class="varlet-site-header__animation-list var-site-elevation--5"
            v-show="isOpenLanguageMenu"
            :style="{ pointerEvents: isOpenLanguageMenu ? 'auto' : 'none' }"
          >
            <var-site-cell
              v-for="(value, key) in nonEmptyLanguages"
              v-ripple
              :key="key"
              :class="{ 'varlet-site-header__animation-list--active': language === key }"
              @click="handleLanguageChange(key)"
              >{{ value }}
            </var-site-cell>
          </div>
        </transition>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import config from '@config'
import { ref, computed, defineComponent } from 'vue'
import { get } from 'lodash-es'
import { getBrowserThemes, getPCLocationInfo, removeEmpty, setThemes, watchThemes } from '../../utils'
import { useRouter } from 'vue-router'
import AnimationBox from './AnimationBox.vue'
import type { Ref, ComputedRef } from 'vue'

export default defineComponent({
  name: 'AppHeader',
  components: { AnimationBox },
  props: {
    language: {
      type: String,
    }
  },
  setup() {
    const title: Ref<string> = ref(get(config, 'title'))
    const logo: Ref<string> = ref(get(config, 'logo'))
    const themesKey = get(config, 'themesKey')
    const languages: Ref<Record<string, string>> = ref(get(config, 'pc.header.i18n'))
    const currentVersion: Ref<string> = ref(get(config, 'pc.header.version.current'))
    const versionItems: Ref<Record<string, string>> = ref(get(config, 'pc.header.version.items'))
    const playground: Ref<string> = ref(get(config, 'pc.header.playground'))
    const github: Ref<string> = ref(get(config, 'pc.header.github'))
    const redirect = get(config, 'pc.redirect')
    const darkMode: Ref<boolean> = ref(get(config, 'pc.header.darkMode'))
    const currentThemes = ref(getBrowserThemes(themesKey))

    const isOpenLanguageMenu: Ref<boolean> = ref(false)
    const isOpenVersionsMenu: Ref<boolean> = ref(false)
    const router = useRouter()
    const nonEmptyLanguages: ComputedRef<Record<string, string>> = computed(() => removeEmpty(languages.value))
    const nonEmptyVersions: ComputedRef<Record<string, string>> = computed(() => removeEmpty(versionItems.value))

    const backRoot = () => {
      const { language: lang } = getPCLocationInfo()
      router.replace(`/${lang}${redirect}`)
    }

    const handleLanguageChange = (language: string) => {
      const { menuName } = getPCLocationInfo()
      router.replace(`/${language}/${menuName}`)
      isOpenLanguageMenu.value = false
    }

    const setCurrentThemes = (themes: 'themes' | 'darkThemes') => {
      currentThemes.value = themes
      setThemes(config, currentThemes.value)
      window.localStorage.setItem(themesKey, currentThemes.value)
    }

    const getThemesMessage = () => ({ action: 'themesChange', from: 'pc', data: currentThemes.value })

    const toggleTheme = () => {
      setCurrentThemes(currentThemes.value === 'darkThemes' ? 'themes' : 'darkThemes')
      window.postMessage(getThemesMessage(), '*')
      ;(document.getElementById('mobile') as HTMLIFrameElement).contentWindow!.postMessage(getThemesMessage(), '*')
    }

    const open = (value: string) => {
      if (value !== currentVersion.value) {
        setTimeout(() => {
          window.location.href = value
        }, 350);
      }
    }

    watchThemes((themes, from) => {
      from === 'mobile' && setCurrentThemes(themes)
    })

    setThemes(config, currentThemes.value)
    window.postMessage(getThemesMessage(), '*')

    return {
      logo,
      title,
      currentVersion,
      languages,
      versionItems,
      nonEmptyLanguages,
      nonEmptyVersions,
      playground,
      github,
      isOpenLanguageMenu,
      isOpenVersionsMenu,
      darkMode,
      currentThemes,
      open,
      backRoot,
      handleLanguageChange,
      toggleTheme,
    }
  },
})
</script>

<style scoped lang="less">
.fade-enter-active {
  animation-name: fade-in;
  animation-duration: 0.3s;
}

.fade-leave-active {
  animation-name: fade-leave;
  animation-duration: 0.3s;
}

@keyframes fade-in {
  0% {
    top: 30px;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}

@keyframes fade-leave {
  0% {
    top: 40px;
    opacity: 1;
  }
  100% {
    top: 30px;
    opacity: 0;
  }
}

.varlet-site-header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 30px;
  justify-content: space-between;
  user-select: none;
  z-index: 9;
  background: var(--site-config-color-bar);
  border-bottom: 1px solid var(--site-config-color-border);
  box-sizing: border-box;

  &__lead {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &__logo {
    width: 32px;
    height: 32px;
    margin-right: 12px;
    flex-shrink: 0;
    transition: 0.3s all ease-in-out;
  }

  &__title {
    font-size: 22px;
    margin-right: 12px;
  }

  &__tail {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 400px) {
    &__tail {
      display: none;
    }
  }

  &__language {
    border-radius: 3px;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.25s;

    &:hover {
      background: var(--site-config-color-nav-button-hover-background);
    }
  }

  &__versions {
    border-radius: 3px;
    height: 40px;
    display: flex;
    align-items: center;
    padding-right: 10px;
    padding-left: 18px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.25s;
    margin-right: 4px;

    &:hover {
      background: var(--site-config-color-nav-button-hover-background);
    }
  }

  &__link {
    border-radius: 50%;
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: var(--site-config-color-text);
    transition: background-color 0.25s;
    margin-right: 6px;

    a {
      text-decoration: none;
    }

    &:hover {
      background: var(--site-config-color-nav-button-hover-background);
    }
  }

  &__theme {
    border-radius: 50%;
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.25s;
    margin-right: 4px;

    &:hover {
      background: var(--site-config-color-nav-button-hover-background);
    }
  }

  &__animation-list {
    background: var(--site-config-color-bar);
    cursor: pointer;
    color: var(--site-config-color-text);
    border-radius: 2px;
    position: absolute;
    top: 40px;
    left: -20px;

    .var-site-cell {
      width: 100px;

      &:hover {
        background: var(--site-config-color-pc-language-active-background);
        color: var(--site-config-color-pc-language-active);
      }
    }

    &--active {
      background: var(--site-config-color-pc-language-active-background);
      color: var(--site-config-color-pc-language-active);
    }
  }

   &__animation-versions {
    left: -7px;
  }
}
</style>
