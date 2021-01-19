<template>
	<var-sticky :z-index="zIndex" ref="anchorEl" :offset-top="stickyOffsetTop">
		<div class="var-index-anchor" v-bind="$attrs">
			<slot>{{ name }}</slot>
		</div>
	</var-sticky>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref, Ref, RendererNode } from 'vue'
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
		const ownTop: Ref<number> = ref(0)
		const name: ComputedRef<number | string | undefined> = computed(() => props.index)
		const anchorEl: Ref<RendererNode | null> = ref(null)
		const { parentProvider: IndexBarProvider, bindParent } = useParent<IndexBarProvider, IndexAnchorProvider>(
			INDEX_BAR_BIND_INDEX_ANCHOR_KEY
		)

		if (!IndexBarProvider || !bindParent) {
			console.error('[Varlet] IndexAnchor: You should use this component in "IndexBar"')
			return
		}

		const { active, sticky, stickyOffsetTop, zIndex } = IndexBarProvider
		const { index } = useAtParentIndex(INDEX_BAR_COUNT_INDEX_ANCHOR_KEY)

		const setOwnTop = () => {
			ownTop.value = (anchorEl.value as RendererNode).$el.offsetTop
		}

		const indexAnchorProvider: IndexAnchorProvider = {
			index,
			name,
			ownTop,
			setOwnTop,
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
