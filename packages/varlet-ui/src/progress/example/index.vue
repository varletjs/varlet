<template>
  <div class="progress-demo">
    <div class="space"></div>
    <h4>{{ pack.linear }}</h4>
    <div class="progress-demo__basic">
      <app-type>{{ pack.basicUsage }}</app-type>
      <var-progress :value="20" />
      <var-progress :value="value" />
    </div>
    <div class="progress-demo__style">
      <app-type>{{ pack.style }}</app-type>
      <var-progress :value="30" line-width="8" />
      <var-progress :value="60" line-width="10" color="purple" track-color="#dec3e6" />
      <var-progress :value="80" line-width="10" ripple style="border-radius: 4px" />
    </div>

    <div class="progress-demo__action">
      <app-type>{{ pack.showLabel }}</app-type>
      <var-progress :value="30" show-action />
      <var-progress :value="value" show-action />
      <var-progress :value="100" show-action> success </var-progress>
    </div>

    <h4>{{ pack.circle }}</h4>
    <div>
      <app-type>{{ pack.style }}</app-type>
      <div class="progress-demo__circle">
        <var-progress :value="30" line-width="5" :size="56" mode="circle" color="purple" track-color="#dec3e6" />
      </div>
    </div>

    <div>
      <app-type>{{ pack.hideTrack }}</app-type>
      <div class="progress-demo__circle">
        <var-progress :value="50" :size="56" mode="circle" :show-track="false" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { pack, use } from './locale'
import { watchLang } from '../../utils/components'
import Progress from '..'

export default defineComponent({
  name: 'ProgressExample',
  components: {
    [Progress.name]: Progress,
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

    onUnmounted(() => {
      window.clearInterval(interval.value)
    })

    return {
      value,
      pack,
    }
  },
})
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
  .progress-demo__action,
  .progress-demo__custom {
    .var-progress {
      &:nth-child(2) {
        margin-top: 0;
      }

      margin: 12px 0;
    }
  }

  .progress-demo__circle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
