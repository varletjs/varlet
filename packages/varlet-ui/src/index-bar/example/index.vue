<template>
	<var-index-bar v-model:active="active" :sticky-offset-top="35" @change="change">
		<div v-for="item in list" :key="item">
			<var-index-anchor :index="item" style="background: #a7d1e5"> 标题{{ item }} </var-index-anchor>
			<span>{{ item }}文本</span><br />
			<span>{{ item }}文本</span><br />
			<span>{{ item }}文本</span><br />
		</div>
	</var-index-bar>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from 'vue'
import IndexAnchor from '../../index-anchor/IndexAnchor.vue'
import IndexBar from '..'

export default defineComponent({
  name: 'IndexBarExample',
  components: {
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor,
  },
  setup() {
    const active = ref('A')
    const list = ref([])

    onBeforeMount(() => {
      for (let i = 0; i < 26; i++) {
        list.value.push(String.fromCharCode(65 + i))
      }
    })

    const change = (value) => {
      console.log(value)
    }

    return {
      active,
      list,
      change,
    }
  },
})
</script>

<style scoped>
.example {
	background: antiquewhite;
}
</style>
