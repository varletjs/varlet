<script setup>
import VarRate from '..'
import Snackbar from '../../snackbar'
import dark from '../../themes/dark'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { reactive } from 'vue'
import { pack, use } from './locale'

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
})

function handleChange(score) {
  Snackbar({
    content: `click ${score}`,
    position: 'top',
  })
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.baseRating }}</app-type>
  <var-rate v-model="scores.score" />
  <var-rate v-model="scores.score" icon="heart" empty-icon="heart-outline" />
  <var-rate v-model="scores.score" icon="thumb-up" empty-icon="thumb-up-outline" />

  <app-type>{{ pack.customizeTheTotalNumberOfRatingICONS }}</app-type>
  <var-rate v-model="scores.score1" :count="8" />

  <app-type>{{ pack.customizeRatingIconStyles }}</app-type>
  <var-rate v-model="scores.score3" icon="heart" empty-icon="heart-outline" color="red" empty-color="red" />

  <app-type>{{ pack.customizeRatingIconSize }}</app-type>
  <var-rate v-model="scores.score4" size="8vw" gap="3vw" />

  <app-type>{{ pack.useHalfAStar }}</app-type>
  <var-rate v-model="scores.score6" :count="8" half />
  <var-rate
    v-model="scores.score6"
    :count="8"
    icon="heart"
    half-icon="heart-half-full"
    empty-icon="heart-outline"
    color="red"
    half
    style="margin-top: 4px"
  />

  <app-type>{{ pack.disableTheRating }}</app-type>
  <var-rate v-model="scores.score7" disabled />
  <var-rate v-model="scores.score8" readonly />

  <app-type>{{ pack.listeningForClickEvents }}</app-type>
  <var-rate v-model="scores.score10" @change="handleChange" />

  <app-type>{{ pack.validate }}</app-type>
  <var-rate :rules="[(v) => v >= 3 || pack.rateMessage]" v-model="scores.score11" />
</template>
