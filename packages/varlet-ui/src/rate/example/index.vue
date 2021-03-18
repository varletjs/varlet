<template>
  <app-type>{{ pack.baseRating }}</app-type>
  <var-rate v-model="score" />

  <app-type>{{ pack.customizeTheTotalNumberOfRatingICONS }}</app-type>
  <var-rate v-model="score1" :count="8" />

  <app-type>{{ pack.customizeTheIconColor }}</app-type>
  <var-rate v-model="score2" color="#9c27b0" empty-color="#d199da" />
  <var-rate v-model="score2" color="#e91e63" empty-color="#f48fb1" />
  <var-rate v-model="score2" color="#4caf50" empty-color="#a5d6a7" />
  <var-rate v-model="score2" color="#3f51b5" empty-color="#9fa8da" />

  <app-type>{{ pack.customizeRatingIconStyles }}</app-type>
  <var-rate v-model="score3" icon="heart" empty-icon="heart-outline" color="red"></var-rate>

  <app-type>{{ pack.customizeRatingIconSize }}</app-type>
  <var-rate v-model="score4" :size="14" />
  <var-rate v-model="score4" :size="16" />
  <var-rate v-model="score4" :size="18" />
  <var-rate v-model="score4" :size="20" />

  <app-type>{{ pack.customIconSpacing }}</app-type>
  <var-rate v-model="score5" :margin-right="2" />
  <var-rate v-model="score5" />
  <var-rate v-model="score5" :margin-right="6" />
  <var-rate v-model="score5" :margin-right="8" />

  <app-type>{{ pack.useHalfAStar }}</app-type>
  <var-rate v-model="score6" :count="8" half />
  <var-rate
    v-model="score6"
    :count="8"
    icon="heart"
    half-icon="heart-half-full"
    empty-icon="heart-outline"
    color="red"
    half
  ></var-rate>

  <app-type>{{ pack.disableTheRating }}</app-type>
  <var-rate v-model="score7" disabled disabled-color="#bbbbbb" />

  <app-type>{{ pack.readonlyRating }}</app-type>
  <var-rate v-model="score8" readonly />

  <app-type>{{ pack.useWaterRipples }}</app-type>
  <var-rate v-model="score9" ripple />

  <app-type>{{ pack.listeningForClickEvents }}</app-type>
  <var-rate v-model="score10" @change="handleChange" />
</template>

<script>
import { ref } from 'vue'
import Rate from '..'
import Snackbar from '../../snackbar'
import AppType from '@varlet/cli/site/mobile/components/AppType.vue'
import { pack, use } from './locale'
import { watchLang } from '../../utils/components'

export default {
  name: 'RateExample',
  components: {
    [Rate.name]: Rate,
    [Snackbar.Component.name]: Snackbar.Component,
    AppType,
  },
  setup() {
    const score = ref(3)
    const score1 = ref(3)
    const score2 = ref(3)
    const score3 = ref(3)
    const score4 = ref(3)
    const score5 = ref(3)
    const score7 = ref(3)
    const score6 = ref(3.5)
    const score8 = ref(3)
    const score9 = ref(3)
    const score10 = ref(3)

    const handleChange = (score: number) => {
      Snackbar({
        content: `click ${score}`,
        position: 'top',
      })
    }

    watchLang(use)

    return {
      handleChange,
      pack,
      score,
      score1,
      score2,
      score3,
      score4,
      score5,
      score6,
      score7,
      score8,
      score9,
      score10,
    }
  },
}
</script>

<style scoped>
.example {
  background: antiquewhite;
}

.var-rate {
  margin-bottom: 10px;
}
</style>
