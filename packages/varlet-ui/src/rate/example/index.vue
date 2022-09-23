<script setup>
import VarRate from '..'
import VarSnackbar from '../../snackbar'
import AppType from '@varlet/cli/site/mobile/components/AppType.vue'
import dark from '../../themes/dark'
import { reactive } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

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

const handleChange = (score) => {
  VarSnackbar({
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

  <app-type>{{ pack.customizeTheTotalNumberOfRatingICONS }}</app-type>
  <var-rate v-model="scores.score1" :count="8" />

  <app-type>{{ pack.customizeTheIconColor }}</app-type>
  <var-rate v-model="scores.score2" color="#9c27b0" empty-color="#d199da" />
  <var-rate v-model="scores.score2" color="#e91e63" empty-color="#f48fb1" />
  <var-rate v-model="scores.score2" color="#4caf50" empty-color="#a5d6a7" />
  <var-rate v-model="scores.score2" color="#3f51b5" empty-color="#9fa8da" />

  <app-type>{{ pack.customizeRatingIconStyles }}</app-type>
  <var-rate v-model="scores.score3" icon="heart" empty-icon="heart-outline" color="red" />

  <app-type>{{ pack.customizeRatingIconSize }}</app-type>
  <var-rate v-model="scores.score4" size="5.6vw" />
  <var-rate v-model="scores.score4" />
  <var-rate v-model="scores.score4" size="7.2vw" />
  <var-rate v-model="scores.score4" size="8vw" />

  <app-type>{{ pack.customIconSpacing }}</app-type>
  <var-rate v-model="scores.score5" />
  <var-rate v-model="scores.score5" gap="1vw" />
  <var-rate v-model="scores.score5" gap="2vw" />
  <var-rate v-model="scores.score5" gap="3vw" />

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

  <app-type>{{ pack.readonlyRating }}</app-type>
  <var-rate v-model="scores.score8" readonly />

  <app-type>{{ pack.waterRippleIsProhibited }}</app-type>
  <var-rate v-model="scores.score9" :ripple="false" />

  <app-type>{{ pack.listeningForClickEvents }}</app-type>
  <var-rate v-model="scores.score10" @change="handleChange" />

  <app-type>{{ pack.validate }}</app-type>
  <var-rate :rules="[(v) => v >= 3 || pack.rateMessage]" v-model="scores.score11" />
</template>
