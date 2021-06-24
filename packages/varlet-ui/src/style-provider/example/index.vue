<template>
  <app-type>例子</app-type>
  <var-style-provider :style-vars="styles">
    <var-cell border> test </var-cell>
    <var-cell border> test </var-cell>
    <var-card
      title="风景"
      subtitle="公园里的风景"
      description="公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg"
    />
  </var-style-provider>
</template>

<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Cell from '../../cell'
import Card from '../../card'
import StyleProvider from '../index'
import { onMounted, ref } from 'vue'

export default {
  name: 'StyleProviderExample',
  components: {
    [Cell.name]: Cell,
    [Card.name]: Card,
    [StyleProvider.Component.name]: StyleProvider.Component,
    AppType,
  },
  setup() {
    const styles = ref({})
    const cardStyles = ref({})

    onMounted(() => {
      setTimeout(() => {
        cardStyles.value = {
          cellFontSize: '30px',
          cellBorderColor: 'red',
          cardTitleColor: 'blue',
          cardSubtitleColor: 'black',
          cardDescriptionFontSize: '16px',
          cardImageHeight: '250px',
        }
      }, 1500)
    })

    return {
      styles,
    }
  },
}
</script>
