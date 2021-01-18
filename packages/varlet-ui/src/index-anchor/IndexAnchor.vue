<template>
	<var-sticky v-if="active === name && sticky" :z-index="zIndex" :offset-top="stickyOffsetTop">
		<div class="var-index-anchor" ref="anchorEl" v-bind="$attrs">
			<slot>{{ name }}</slot>
		</div>
	</var-sticky>
	<div class="var-index-anchor" ref="anchorEl" v-bind="$attrs" v-else :style="{ zIndex: zIndex + 1 }">
		<slot>{{ name }}</slot>
	</div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref, Ref } from 'vue'
import Sticky from '../sticky'
import { useParent, useAtParentIndex } from '../utils/components'
import { IndexAnchorProvider } from './provide'
import {
	INDEX_BAR_BIND_INDEX_ANCHOR_KEY,
	INDEX_BAR_COUNT_INDEX_ANCHOR_KEY,
	IndexBarProvider,
} from '../index-bar/provide'
import { props } from './props'

export default defineComponent({
	name: 'VarIndexAnchor',
	components: {
		[Sticky.name]: Sticky,
	},
	inheritAttrs: false,
	props,
	setup(props) {
		const name: ComputedRef<number | string | undefined> = computed(() => props.index)
		const anchorEl: Ref<HTMLDivElement | null> = ref(null)
		const { parentProvider: IndexBarProvider, bindParent } = useParent<IndexBarProvider, IndexAnchorProvider>(
			INDEX_BAR_BIND_INDEX_ANCHOR_KEY
		)

		const { active, sticky, stickyOffsetTop, zIndex } = IndexBarProvider
		const { index } = useAtParentIndex(INDEX_BAR_COUNT_INDEX_ANCHOR_KEY)

		const getTop = (): number => (anchorEl.value as HTMLDivElement).offsetTop

		const indexAnchorProvider: IndexAnchorProvider = {
			index,
			name,
			getTop,
		}

		bindParent(indexAnchorProvider)

		return {
			name,
			anchorEl,
			active,
			sticky,
			zIndex,
			stickyOffsetTop,
		}
	},
})
</script>

<style lang="less">
.var-index-anchor {
	position: relative;
}
</style>
