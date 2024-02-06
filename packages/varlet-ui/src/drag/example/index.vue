<script setup>
import { ref, nextTick } from 'vue'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { t, use } from './locale'

const drag = ref(null)
const drag2 = ref(null)
const drag3 = ref(null)
const drag4 = ref(null)
const drag5 = ref(null)
const drag6 = ref(null)

function reset() {
  drag.value.reset()
  drag2.value.reset()
  drag3.value.reset()
  drag4.value.reset()
  drag5.value.reset()
  drag6.value.reset()
}

watchLang((lang) => {
  use(lang)
  nextTick(() => {
    drag.value.resize()
    drag2.value.resize()
    drag3.value.resize()
    drag4.value.resize()
    drag5.value.resize()
    drag6.value.resize()
  })
})
onThemeChange()
</script>

<template>
  <app-type style="height: 50px">{{ t('basicUse') }}</app-type>
  <var-drag ref="drag" style="left: 15px; top: 105px" :boundary="{ top: 54 }">
    <var-button type="primary">{{ t('basicUse') }}</var-button>
  </var-drag>

  <app-type style="height: 50px; margin-top: 40px">{{ t('direction') }}</app-type>
  <var-drag ref="drag2" style="left: 15px; top: 195px" direction="x" :boundary="{ top: 54 }">
    <var-button type="primary">{{ t('direction') }}</var-button>
  </var-drag>

  <app-type style="height: 50px; margin-top: 40px">{{ t('attraction') }}</app-type>
  <var-drag ref="drag3" style="left: 15px; top: 285px" attraction="x" :boundary="{ top: 54 }">
    <var-button type="primary">{{ t('xAttraction') }}</var-button>
  </var-drag>
  <var-drag ref="drag4" style="left: 132px; top: 285px" attraction="y" :boundary="{ top: 54 }">
    <var-button type="primary">{{ t('yAttraction') }}</var-button>
  </var-drag>

  <app-type style="height: 50px; margin-top: 40px">{{ t('disabled') }}</app-type>
  <var-drag ref="drag5" style="left: 15px; top: 375px" disabled attraction="x" :boundary="{ top: 54 }" z-index="80">
    <var-button type="primary" disabled>{{ t('disabled') }}</var-button>
  </var-drag>

  <app-type style="height: 50px; margin-top: 40px">{{ t('boundary') }}</app-type>
  <var-drag
    ref="drag6"
    style="left: 15px; top: 465px"
    attraction="x"
    :boundary="{ top: 465, bottom: 15, left: 15, right: 15 }"
  >
    <var-button type="primary">{{ t('boundary') }}</var-button>
  </var-drag>

  <app-type style="height: 50px; margin-top: 40px">{{ t('reset') }}</app-type>
  <var-button type="primary" @click="reset">{{ t('reset') }}</var-button>
</template>
