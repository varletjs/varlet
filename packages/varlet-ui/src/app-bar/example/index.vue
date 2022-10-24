<script setup>
import { ref } from 'vue'
import VarAppBar from '..'
import VarIcon from '../../icon'
import vRipple from '../../ripple'
import { AppType , watchLang, watchDarkMode } from '@varlet/cli/client'
import Snackbar from '../../snackbar'
import VarMenu from '../../menu'
import VarButton from '../../button'
import VarCell from '../../cell'
import dark from '../../themes/dark'
import { pack, use } from './locale'

const offsetY = ref(false)
const menuList = ref([])
const bgColor = ref('#fff')

const searchData = () => {
  Snackbar({
    content: pack.value.search,
    position: 'top',
  })
}

const goBack = () => {
  Snackbar({
    content: pack.value.goBack,
    position: 'top',
  })
}

const changeOffset = () => {
  menuList.value = [
    { label: pack.value.options1, value: 'menu1' },
    { label: pack.value.options2, value: 'menu2' },
  ]

  offsetY.value = true
}

watchLang((lang) => {
  use(lang)

  offsetY.value = false
})

watchDarkMode(dark, (theme) => {
  bgColor.value = theme === 'darkTheme' ? '#272727' : '#fff'
})
</script>

<template>
  <app-type>{{ pack.basicAppBar }}</app-type>
  <var-app-bar :title="pack.title" />

  <app-type>{{ pack.customStyle }}</app-type>
  <var-app-bar :title="pack.title" title-position="center" color="#00c48f" />

  <app-type>{{ pack.addSlotsAtTitle }}</app-type>
  <var-app-bar>{{ pack.addTheTitleFromTheSlot }}</var-app-bar>

  <app-type>{{ pack.addLeftSlot }}</app-type>
  <var-app-bar :title="pack.title" title-position="center">
    <template #left>
      <var-button round text color="transparent" text-color="#ffffff" @click="goBack">
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>
  </var-app-bar>

  <app-type>{{ pack.addRightSlot }}</app-type>
  <var-app-bar :title="pack.title">
    <template #right>
      <var-button round text color="transparent" text-color="#ffffff" @click="searchData">
        <var-icon name="magnify" :size="24" />
      </var-button>
    </template>
  </var-app-bar>

  <app-type>{{ pack.addLeftAndRightSlot }}</app-type>
  <var-app-bar :title="pack.title">
    <template #left>
      <var-button round text color="transparent" text-color="#ffffff" @click="goBack">
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-menu :offset-y="42" :offset-x="-20" v-model:show="offsetY">
        <var-button round text color="transparent" text-color="#ffffff" @click="changeOffset">
          <var-icon name="menu" :size="24" />
        </var-button>

        <template #menu>
          <div class="var-app-var--example-menu-list" :style="{ background: bgColor }">
            <var-cell class="var-app-var--example-menu-cell" v-for="value in menuList" :key="value.value" v-ripple>
              {{ value.label }}
            </var-cell>
          </div>
        </template>
      </var-menu>
    </template>
  </var-app-bar>

  <div class="var-app-var--example-space"></div>
</template>

<style>
.var-app-var--example-menu-list .var-app-var--example-menu-cell {
  display: block;
  padding: 10px;
}

.var-app-var--example-space {
  height: 80px;
}
</style>
