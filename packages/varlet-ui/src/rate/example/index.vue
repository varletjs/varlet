<template>
  <app-type>基础评分</app-type>
  <var-rate v-model="score"/>
  <app-type>自定义评分图标总数</app-type>
  <var-rate v-model="score1" :count="8"/>
  <app-type>自定义图标颜色</app-type>
  <var-rate v-model="score2" color="#9c27b0" empty-color="#d199da"/>
  <var-rate v-model="score2" color="#e91e63" empty-color="#f48fb1"/>
  <var-rate v-model="score2" color="#4caf50" empty-color="#a5d6a7"/>
  <var-rate v-model="score2" color="#3f51b5" empty-color="#9fa8da"/>
  <app-type>自定义评分图标样式</app-type>
  <var-rate v-model="score3" icon="heart" empty-icon="heart-outline" color="red"></var-rate>
  <app-type>自定义评分图标尺寸</app-type>
  <var-rate v-model="score4" :size="14"/>
  <var-rate v-model="score4" :size="16"/>
  <var-rate v-model="score4" :size="18"/>
  <var-rate v-model="score4" :size="20"/>
  <app-type>自定义图标间隔</app-type>
  <var-rate v-model="score5" :margin-right="2"/>
  <var-rate v-model="score5"/>
  <var-rate v-model="score5" :margin-right="6"/>
  <var-rate v-model="score5" :margin-right="8"/>
  <app-type>使用半星</app-type>
  <var-rate v-model="score6" :count="8" half/>
  <var-rate v-model="score6" :count="8" icon="heart" half-icon="heart-half-full" empty-icon="heart-outline" color="red"
            half></var-rate>
  <app-type>禁用评分</app-type>
  <var-rate v-model="score7" disabled disabled-color="#bbbbbb"/>
  <app-type>只读评分</app-type>
  <var-rate v-model="score8" readonly/>
  <app-type>使用水波纹</app-type>
  <var-rate v-model="score9" ripple/>
  <app-type>监听点击事件</app-type>
  <var-rate v-model="score10" @change="handleChange"/>


</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import Rate from '..'
import Snackbar from '../../snackbar'

export default defineComponent({
  name: 'RateExample',
  components: {
    [Rate.name]: Rate,
    [Snackbar.Component.name]: Snackbar.Component
  },
  setup() {
    const score: Ref<number> = ref(3)
    const score1: Ref<number> = ref(3)
    const score2: Ref<number> = ref(3)
    const score3: Ref<number> = ref(3)
    const score4: Ref<number> = ref(3)
    const score5: Ref<number> = ref(3)
    const score7: Ref<number> = ref(3)
    const score6: Ref<number> = ref(3.5)
    const score8: Ref<number> = ref(3)
    const score9: Ref<number> = ref(3)
    const score10: Ref<number> = ref(3)
    const handleChange = (score: number) => {
      Snackbar({
        content: `click ${score}`,
        position: 'top'
      })
    }
    return {
      handleChange,
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
      score10
    }
  }
})
</script>

<style scoped>
.example {
  background: antiquewhite;
}

.var-rate {
  margin-bottom: 10px;
}
</style>
