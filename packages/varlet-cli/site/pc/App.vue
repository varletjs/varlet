<template>
	<div class="varlet-site">
		<div class="varlet-site__header">
			<input type="text" placeholder="" />
		</div>
		<router-view />
	</div>
</template>

<script lang="ts">
import { ref, Ref, defineComponent } from 'vue'

export default defineComponent({
	setup() {
		const count: Ref<number> = ref(0)
		return {
			count,
		}
	},
})
</script>

<style lang="less">
.varlet {
	&-button {
		&__text {
			color: aqua;
		}
		&__span {
			color: aqua;
		}
	}
}
</style>
