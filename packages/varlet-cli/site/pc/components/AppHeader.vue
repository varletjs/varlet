<template>
  <div class="varlet-site-header">
    <div class="varlet-site-header__lead">
      <img class="varlet-site-header__logo" :src="logo" alt="logo" v-if="logo" />
      <div class="varlet-site-header__title" v-if="title">{{ title }}</div>
    </div>

    <div class="varlet-site-header__tail">
      <div
        class="varlet-site-header__language"
        @mouseenter="isOpenMenu = true"
        @mouseleave="isOpenMenu = false"
        v-if="languages"
      >
        <var-site-icon name="translate" size="26px" color="#666" />
        <var-site-icon name="chevron-down" color="#666" />
        <transition name="fade">
          <div
            class="varlet-site-header__language-list var-elevation--5"
            v-show="isOpenMenu"
            :style="{ pointerEvents: isOpenMenu ? 'auto' : 'none' }"
          >
            <var-site-cell
              v-for="(value, key) in nonEmptyLanguages"
              v-ripple
              :key="key"
              :class="{ 'varlet-site-header__language-list--active': language === key }"
              @click="handleLanguageChange(key)"
            >
              {{ value }}
            </var-site-cell>
          </div>
        </transition>
      </div>
      <a
        class="varlet-site-header__link"
        target="_blank"
        :href="github"
        v-if="github"
      >
        <var-site-icon name="github" color="#666" :size="28" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import config from '@config'
import { ref, computed } from 'vue'
import { get } from 'lodash-es'
import { getPCLocationInfo, removeEmpty } from '../../utils'
import { useRouter } from 'vue-router'
import type { Ref, ComputedRef } from 'vue'

export default {
  name: 'AppHeader',
  props: {
    language: {
      type: String
    },
  },
  setup() {
    // config
    const title: Ref<string> = ref(get(config, 'title'))
    const logo: Ref<string> = ref(get(config, 'logo'))
    const languages: Ref<Record<string, string>> = ref(get(config, 'pc.header.i18n'))
    const github: Ref<Record<string, string>> = ref(get(config, 'pc.header.github'))

    const isOpenMenu: Ref<boolean> = ref(false)
    const router = useRouter()
    const nonEmptyLanguages: ComputedRef<Record<string, string>> = computed(() => removeEmpty(languages.value))

    const handleLanguageChange = (language) => {
      const { menuName } = getPCLocationInfo()
      router.replace(`/${language}/${menuName}`)
      isOpenMenu.value = false
    }

    return {
      logo,
      title,
      languages,
      nonEmptyLanguages,
      github,
      isOpenMenu,
      handleLanguageChange
    }
  }
}
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
  color: #555;
  width: 100%;
  height: 60px;
  padding: 0 30px;
  justify-content: space-between;
  user-select: none;
  z-index: 996;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;

  &__lead {
    display: flex;
    align-items: center;
  }

  &__logo {
    width: 32px;
    margin-right: 12px;
    flex-shrink: 0;
  }

  &__title {
    font-size: 22px;
  }

  &__tail {
    display: flex;
    align-items: center;
  }

  &__language {
    border-radius: 3px;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background: rgba(0, 0, 0, 0.08);
    }
  }

  &__link {
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s;
    cursor: pointer;
    text-decoration: none;

    a {
      text-decoration: none;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.08);
    }
  }

  &__language-list {
    background: #fff;
    cursor: pointer;
    color: #666;
    border-radius: 2px;
    position: absolute;
    top: 40px;
    left: -20px;

    .var-site-cell {
      width: 100px;
    }

    &--active {
      background: var(--site-config-color-pc-language-active-background);
      color: var(--site-config-color-pc-language-active);
    }
  }
}
</style>
