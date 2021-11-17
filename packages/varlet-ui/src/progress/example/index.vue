<template>
  <div class="progress-demo">
    <div class="space"></div>

    <div class="progress-demo__basic">
      <app-type>{{ pack.basicUsage }}</app-type>
      <var-progress :value="20" :track="false" />
      <var-progress :value="value" :track="false" />
      <var-progress :value="100" :track="false" />
    </div>

    <div class="progress-demo__label">
      <app-type>{{ pack.showLabel }}</app-type>
      <var-progress :value="30" label />
      <var-progress :value="value" label />
      <var-progress :value="100" label>success</var-progress>
    </div>

    <div class="progress-demo__style">
      <app-type>{{ pack.style }}</app-type>
      <var-progress :value="30" line-width="8" color="#ff9f00" />
      <var-progress :value="60" line-width="8" color="#ff9f00" track-color="#f5cb90" />
      <var-progress :value="80" ripple line-width="8" color="#ff9f00" track-color="#f5cb90" />
    </div>

    <app-type>{{ pack.circle }}</app-type>
    <div class="progress-demo__circle">
      <var-progress mode="circle" :value="30" line-width="5" :size="56" />
      <div class="space"></div>
      <var-progress mode="circle" label :value="value" line-width="5" :size="56" />
      <div class="space"></div>
      <var-progress mode="circle" label :value="100" line-width="5" :size="56" />
    </div>

    <app-type>{{ pack.hideTrack }}</app-type>
    <div class="progress-demo__circle">
      <var-progress mode="circle" :value="50" :size="56" :track="false" />
    </div>
  </div>
</template>

<script>
import VarProgress from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { ref, onMounted, onUnmounted } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

export default {
  name: 'ProgressExample',
  components: {
    VarProgress,
    AppType,
  },
  setup() {
    const value = ref(0)
    const interval = ref(0)

    onMounted(() => {
      interval.value = window.setInterval(() => {
        if (value.value >= 100) value.value = 0
        else value.value += 20
      }, 1000)
    })

    watchLang(use)
    watchDarkMode()

    onUnmounted(() => {
      window.clearInterval(interval.value)
    })

    return {
      value,
      pack,
    }
  },
}
</script>

<style lang="less" scoped>
.progress-demo {
  h4 {
    margin: 0;
  }

  .space {
    height: 10px;
  }

  .progress-demo__basic,
  .progress-demo__style,
  .progress-demo__label,
  .progress-demo__custom {
    .var-progress {
      margin: 12px 0;

      &:nth-child(2) {
        margin-top: 0;
      }
    }
  }

  .progress-demo__circle {
    display: flex;
    align-items: center;

    .space {
      width: 20px;
    }
  }
}
</style>
