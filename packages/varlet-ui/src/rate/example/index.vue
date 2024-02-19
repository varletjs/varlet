<script setup>
import { Snackbar } from '@varlet/ui'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { reactive } from 'vue'
import { t, use } from './locale'

const scores = reactive({
  score: 3,
  score1: 3,
  score2: 3,
  score3: 3,
  score4: 3,
  score5: 3,
  score6: 3.5,
  score7: 3,
  score8: 3,
  score9: 3,
  score10: 3,
  score11: 3,
  score12: 3.5,
})

function handleChange(score) {
  Snackbar({
    content: `click ${score}`,
    position: 'top',
  })
}

onThemeChange()
watchLang(use)
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-rate v-model="scores.score" />
  <var-rate v-model="scores.score" icon="thumb-up" empty-icon="thumb-up-outline" />

  <app-type>{{ t('customTotalRating') }}</app-type>
  <var-rate v-model="scores.score1" :count="8" />

  <app-type>{{ t('customRatingIconStyle') }}</app-type>
  <var-rate
    v-model="scores.score3"
    icon="heart"
    empty-icon="heart-outline"
    color="var(--color-danger)"
    empty-color="var(--color-danger)"
  />

  <app-type>{{ t('customRatingIconSizeAndGap') }}</app-type>
  <var-rate v-model="scores.score4" size="8vmin" gap="1vmin" />

  <app-type>{{ t('halfStar') }}</app-type>
  <var-rate v-model="scores.score6" :count="8" half />
  <var-rate
    v-model="scores.score6"
    :count="8"
    icon="heart"
    half-icon="heart-half-full"
    empty-icon="heart-outline"
    color="var(--color-danger)"
    half
    style="margin-top: 4px"
  />

  <app-type>{{ t('disabledAndReadonly') }}</app-type>
  <var-rate v-model="scores.score7" disabled />
  <var-rate v-model="scores.score8" readonly />

  <app-type>{{ t('clearable') }}</app-type>
  <var-rate v-model="scores.score12" clearable half />

  <app-type>{{ t('listenEvent') }}</app-type>
  <var-rate v-model="scores.score10" @change="handleChange" />

  <app-type>{{ t('validate') }}</app-type>
  <var-rate :rules="[(v) => v >= 3 || t('errorMessage')]" v-model="scores.score11" />
</template>
