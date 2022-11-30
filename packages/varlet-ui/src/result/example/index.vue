<script setup>
import VarResult from '../index'
import VarButton from '../../button'
import VarPopup from '../../popup'
import VarSpace from '../../space'
import { AppType, watchDarkMode, watchLang } from '@varlet/cli/client'
import dark from '../../themes/dark'
import { use, pack } from './locale'
import { ref } from 'vue'

const success = ref(false)
const error = ref(false)
const info = ref(false)
const warning = ref(false)
const question = ref(false)
const empty = ref(false)

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.type }}</app-type>
  <var-space direction="column" size="large">
    <var-button type="success" block @click="success = true">{{ pack.success }}</var-button>
    <var-button type="danger" block @click="error = true">{{ pack.error }}</var-button>
    <var-button type="info" block @click="info = true">{{ pack.info }}</var-button>
    <var-button type="warning" block @click="warning = true">{{ pack.warning }}</var-button>
    <var-button color="#607d8b" block text-color="#fff" @click="question = true">{{ pack.question }}</var-button>
    <var-button color="#9E9E9E" block text-color="#fff" @click="empty = true">{{ pack.empty }}</var-button>
  </var-space>

  <app-type>{{ pack.useSlot }}</app-type>
  <var-result class="var-elevation--1">
    <template #image>
      <svg class="music" viewBox="0 0 1024 1024" width="200" height="200">
        <path
          d="M702.271724 36.807218c-262.394547-105.060192-560.331687 22.458056-665.42387 284.884594-105.124175 262.458531 22.458056 560.427662 284.884594 665.487854 262.426539 105.092183 560.363679-22.458056 665.455862-284.884595 105.124175-262.458531-22.490047-560.363679-284.916586-665.487853zM345.534148 927.803382C116.282828 835.987685 4.440431 574.808815 96.224137 345.525504 188.039835 116.274184 449.250696 4.399795 678.534007 96.247484c229.25132 91.783706 341.093717 352.994567 249.310011 582.245887-91.847689 229.283312-353.026558 341.093717-582.30987 249.310011z"
        ></path>
        <path
          d="M535.851774 452.601162a64.015056 64.015056 0 0 0-47.635392 118.784559 64.015056 64.015056 0 0 0 47.635392-118.784559z m-35.734542 89.128409a32.087507 32.087507 0 0 1-17.819283-41.620983 32.087507 32.087507 0 0 1 41.620983-17.819284 32.055515 32.055515 0 0 1-23.8017 59.440267z"
        ></path>
        <path
          d="M583.359199 333.848594a191.949193 191.949193 0 1 0-142.682234 356.38567 191.949193 191.949193 0 0 0 142.682234-356.38567z m-118.880534 296.945403a128.126087 128.126087 0 0 1-71.245142-166.355968 128.126087 128.126087 0 0 1 166.323976-71.245142 128.19007 128.19007 0 0 1 71.309125 166.387959 128.126087 128.126087 0 0 1-166.387959 71.213151z"
        ></path>
        <path
          d="M749.651183 607.152254a15.995766 15.995766 0 0 0-29.720133-11.868858v-0.031992a223.300895 223.300895 0 0 1-119.776297 122.655535 15.995766 15.995766 0 0 0 12.604664 29.400218c0.319915-0.127966 0.447881-0.383898 0.671822-0.479873a255.228444 255.228444 0 0 0 136.155961-139.67503h0.063983zM859.478114 633.897175a15.995766 15.995766 0 0 0-20.794496 8.893646 350.787151 350.787151 0 0 1-188.206184 192.684999 15.995766 15.995766 0 0 0 12.604663 29.400218c0.383898-0.191949 0.671822-0.543856 1.055721-0.703814a382.682709 382.682709 0 0 0 204.265933-209.480553 16.027758 16.027758 0 0 0-8.925637-20.794496z"
        ></path>
        <path
          d="M800.069838 610.127467a15.995766 15.995766 0 0 0-20.794496 8.893646 286.580146 286.580146 0 0 1-153.943253 157.654271h0.063983a15.995766 15.995766 0 0 0 12.540681 29.432209c0.319915-0.159958 0.511865-0.447881 0.863771-0.63983a318.859602 318.859602 0 0 0 170.194952-174.5458 16.027758 16.027758 0 0 0-8.925638-20.794496zM432.327175 285.125491a15.995766 15.995766 0 0 0-21.018437-8.381782c-0.287924 0.095975-0.447881 0.351907-0.671822 0.447882a255.228444 255.228444 0 0 0-136.155961 139.67503h-0.031991a15.995766 15.995766 0 1 0 29.688141 11.90085h0.031992A223.140937 223.140937 0 0 1 423.913402 306.175919a16.027758 16.027758 0 0 0 8.413773-21.050428zM381.940512 167.492627a16.027758 16.027758 0 0 0-21.018437-8.413773c-0.383898 0.159958-0.671822 0.511865-0.991737 0.671822a382.682709 382.682709 0 0 0-204.265934 209.480553 15.995766 15.995766 0 1 0 29.688142 11.932842 350.947109 350.947109 0 0 1 188.206184-192.653008 16.027758 16.027758 0 0 0 8.381782-21.018436z"
        ></path>
        <path
          d="M398.736066 247.279508a15.995766 15.995766 0 1 0-12.604663-29.368226c-0.319915 0.127966-0.511865 0.447881-0.83178 0.575847a318.955576 318.955576 0 0 0-170.194952 174.609783 15.995766 15.995766 0 0 0 29.656151 11.932842 286.804087 286.804087 0 0 1 153.943253-157.654271v-0.095975z"
        ></path>
      </svg>
    </template>
    <template #title>
      <h2>{{ pack.titleSlot }}</h2>
    </template>
    <template #description>
      <div>{{ pack.descriptionSlot }}</div>
    </template>
    <template #footer>
      <var-button type="danger">{{ pack.vme }}</var-button>
    </template>
  </var-result>

  <var-popup v-model:show="success" :close-on-click-overlay="false">
    <var-result type="success" :title="pack.success" :description="pack.description">
      <template #footer>
        <var-button type="success" @click="success = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup v-model:show="error" :close-on-click-overlay="false">
    <var-result type="error" :title="pack.error" :description="pack.description">
      <template #footer>
        <var-button type="danger" @click="error = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup v-model:show="warning" :close-on-click-overlay="false">
    <var-result type="warning" :title="pack.warning" :description="pack.description">
      <template #footer>
        <var-button type="warning" @click="warning = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup v-model:show="info" :close-on-click-overlay="false">
    <var-result type="info" :title="pack.info" :description="pack.description">
      <template #footer>
        <var-button type="info" @click="info = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup v-model:show="question" :close-on-click-overlay="false">
    <var-result type="question" :title="pack.question" :description="pack.description">
      <template #footer>
        <var-button color="#607d8b" text-color="#fff" @click="question = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>

  <var-popup v-model:show="empty" :close-on-click-overlay="false">
    <var-result type="empty" :title="pack.empty" :description="pack.description">
      <template #footer>
        <var-button color="#9E9E9E" text-color="#fff" @click="empty = false">{{ pack.button }}</var-button>
      </template>
    </var-result>
  </var-popup>
</template>

<style scoped>
.var-result {
  min-width: 80vw;
}

.music {
  animation: rotate 6s linear infinite;
}

.music path {
  fill: var(--color-danger);
}

@keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
