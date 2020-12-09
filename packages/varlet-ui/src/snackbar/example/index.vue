<template>
	<div class="snackbar-demo">
		<div class="snackbar-demo__basic">
			<app-type>基本使用</app-type>
			<div class="snackbar-demo__basic-block">
				<var-button type="primary" size="small" @click="changeValue('show1')">
					基本使用
				</var-button>
				<var-button type="primary" size="small" @click="changeValue('show2')">
					自定义action
				</var-button>
				<var-button type="primary" size="small" @click="changeValue('show3')">
					垂直排列
				</var-button>
				<var-button type="primary" size="small" @click="changeValue('show4')">
					自定义关闭时间
				</var-button>
				<var-button type="primary" size="small" @click="changeValue('show5')">
					自定义背景色
				</var-button>
				<var-button type="primary" size="small" @click="changeValue('show6')">
					自定义宽高
				</var-button>
			</div>
		</div>
		<div class="snackbar-demo__type">
			<app-type>snackbar类型</app-type>
			<div class="snackbar-demo__type-block">
				<var-button type="primary" size="small" @click="changeValue('show7')">
					success
				</var-button>
				<var-button type="primary" size="small" @click="create('warning')">
					warning
				</var-button>
				<var-button type="primary" size="small" @click="create('info')">
					info
				</var-button>
				<var-button type="primary" size="small" @click="createMethod('error')">
					error
				</var-button>
				<var-button
					type="primary"
					size="small"
					@click="createMethod('loading')"
				>
					loading
				</var-button>
			</div>
		</div>
		<div class="snackbar-demo__position">
			<app-type>snackbar位置</app-type>
			<div class="snackbar-demo__position-block">
				<var-button type="primary" size="small" @click="createPosition('top')">
					top
				</var-button>
				<var-button
					type="primary"
					size="small"
					@click="createPosition('center')"
				>
					center
				</var-button>
				<var-button
					type="primary"
					size="small"
					@click="createPosition('bottom')"
				>
					bottom
				</var-button>
			</div>
		</div>
		<div class="snackbar-demo__others">
			<app-type>其他配置</app-type>
			<div class="snackbar-demo__others-block">
				<var-button type="primary" size="small" @click="changeValue('show8')">
					自定义内容class
				</var-button>
				<var-button type="primary" size="small" @click="changeValue('show9')">
					不可穿透点击
				</var-button>
				<var-button type="primary" size="small" @click="changeValue('show10')">
					可以穿透滑动
				</var-button>
			</div>
		</div>
		<div class="snackbar-demo__event">
			<app-type>snackbar事件</app-type>
			<div class="snackbar-demo__event-block">
				<var-button type="primary" size="small" @click="changeValue('show11')">
					打开与关闭回调
				</var-button>
				<var-button type="primary" size="small" @click="changeValue('show12')">
					打开动画与关闭动画结束时回调
				</var-button>
			</div>
		</div>

		<var-snackbar v-model:show="show1">
			{{ text }}
		</var-snackbar>

		<var-snackbar v-model:show="show2">
			{{ text }}
			<template #action>
				<var-button type="primary" size="small" @click="show2 = !show2">
					close
				</var-button>
			</template>
		</var-snackbar>

		<var-snackbar v-model:show="show3" :vertical="true">
			{{ text }}
			<template #action>
				<var-button type="primary" size="small" @click="show3 = !show3">
					close
				</var-button>
			</template>
		</var-snackbar>

		<var-snackbar v-model:show="show4" :duration="500">
			{{ text }}
		</var-snackbar>

		<var-snackbar v-model:show="show5" color="#c792ea">
			{{ text }}
		</var-snackbar>

		<var-snackbar v-model:show="show6" :width="380" :height="200">
			{{ text }}
		</var-snackbar>

		<var-snackbar v-model:show="show7" type="success">
			{{ text }}
		</var-snackbar>
		<var-snackbar v-model:show="show8">
			{{ text }}
		</var-snackbar>
		<var-snackbar v-model:show="show9" :forbid-click="true">
			{{ text }}
		</var-snackbar>
		<var-snackbar v-model:show="show10" :lock-scroll="false">
			{{ text }}
		</var-snackbar>
		<var-snackbar v-model:show="show11" @open="open" @close="close">
			{{ text }}
		</var-snackbar>
		<var-snackbar v-model:show="show12" @opened="opened" @closed="closed">
			{{ text }}
		</var-snackbar>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, reactive, toRefs } from 'vue'
import Button from '../../button'
import Snackbar from '..'

export default defineComponent({
	name: 'SnackbarExample',
	components: {
		[Snackbar.Component.name]: Snackbar.Component,
		[Button.name]: Button,
	},
	setup() {
		const text: Ref<string> = ref("Hello, I'm a snackbar")
		const shows: any = reactive({
			show1: false,
			show2: false,
			show3: false,
			show4: false,
			show5: false,
			show6: false,
			show7: false,
			show8: false,
			show9: false,
			show10: false,
			show11: false,
			show12: false,
		})
		const changeValue = (type: string) => {
			shows[type] = !shows[type]
		}

		const create = (type: any) => {
			Snackbar({
				content: "Hello, I'm a snackbar",
				type
			})
		}

		const createMethod = (type: any) => {
			Snackbar[type]({
				content: "Hello, I'm a snackbar",
			})
		}

		const createPosition = (position: 'top' | 'center' | 'bottom') => {
			Snackbar({
				content: "Hello, I'm a snackbar",
				position,
			})
		}

		const open = () => {
			window.alert('open!')
		}
		const close = () => {
			window.alert('close!')
		}

		const opened = () => {
			window.alert('opened!')
		}

		const closed = () => {
			window.alert('closed!')
		}

		return {
			...toRefs(shows),
			text,
			changeValue,
			create,
			createMethod,
			createPosition,
			open,
			opened,
			closed,
			close,
		}
	},
})
</script>

<style lang="less" scoped>
.snackbar-demo {
	&__basic-block,
	&__type-block,
	&__position-block,
	&__others-block,
	&__event-block {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		button {
			margin: 5px 0;
		}
	}
}

.list-complete-item {
  transition: all 0.8s ease;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}
</style>
