<template>
	<div class="varlet-site">
		<div class="varlet-site-header">
			<span class="varlet-site-header__logo">
				<img :src="header.logo" alt="" />
				<span>{{ namespace }}</span>
			</span>
			<!--			<input type="text" :placeholder="header.search[language]" />-->
			<span class="varlet-site-header__nav">
				<a
					target="_blank"
					href="https://github.com/haoziqaq/varlet"
					class="varlet-site-header__link"
				>
					<img src="https://b.yzcdn.cn/vant/logo/github.svg" />
				</a>
				<span
					class="varlet-site-header__version varlet-site-header__cube"
					@click="isHideVersion = !isHideVersion"
				>
					3.6.12
					<span
						:class="{
							'varlet-site-header__version-pop': true,
							'varlet-site-header__version-pop-hidden': isHideVersion,
						}"
					>
						<span
							class="varlet-site-header__version-pop-item"
							v-for="version in versionList"
						>
							{{ version }}
						</span>
					</span>
				</span>
				<button @click="switchLanguage" class="varlet-site-header__cube">
					{{ header.i18nButton[language] }}
				</button>
			</span>
		</div>
		<div class="varlet-site-content">
			<div class="varlet-site-nav">
				<p v-for="item in menu" class="varlet-site-nav__item">
					<span v-if="item.isTitle">{{ item.text[language] }}</span>
					<router-link :to="'/' + language + '/' + item.doc" v-else>
						{{ item.text[language] }}
					</router-link>
				</p>
			</div>
			<router-view />
			<div class="varlet-site-mobile">
				<iframe
					:src="`/mobile.html#/${componentName}`"
					:style="simulatorStyle"
				></iframe>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {
	ref,
	toRef,
	reactive,
	defineComponent,
	onMounted,
	getCurrentInstance,
} from 'vue'

export default defineComponent({
	setup(props) {
		// const state = reactive({
		//   menu: []
		// })
		// onMounted(() => {
		//   const internalInstance = getCurrentInstance()
		//   const { pc = {} } = (internalInstance as ComponentInternalInstance).appContext.config.globalProperties.$config
		//   const { description, header = {}, logo, menu = [] } = pc
		//
		//   state.menu = menu;
		//   return {
		//     state
		//   }
		// })
	},
	computed: {
		simulatorStyle() {
			const height = Math.min(640, window.innerHeight - 90)
			return {
				height: height + 'px',
			}
		},
	},
	data() {
		return {
			menu: [],
			language: '',
			header: {},
			componentName: 'button',
			namespace: '',
			versionList: ['2.10.14', '1.x', '3.x'],
			isHideVersion: true,
		}
	},
	methods: {
		switchLanguage() {
			this.language = this.language === 'zh_CN' ? 'en_US' : 'zh_CN'
			const pathArr = this.$route.fullPath.split('/')
			const componentName = pathArr[pathArr.length - 1]
			this.$router.push(`/${this.language}/${componentName}`)
		},
	},
	created() {
		const _this: any = this
		const { pc = {}, namespace } = _this.$config
		const { description, header = {}, logo, menu = [], language } = pc
		this.menu = menu
		this.language = language
		this.header = header
		this.namespace = namespace
	},
	watch: {
		$route(to, from) {
			// todo 还需拿取对应组件名的数组进行判断
			const index = to.path.lastIndexOf('/')
			this.componentName = to.path.slice(index + 1)
		},
	},
})
</script>

<style lang="less">
body {
	margin: 0;
	padding: 0;
}

iframe {
	display: block;
	width: 100%;
	border: none;
}

.varlet {
	&-site {
		&-header {
			display: flex;
			align-items: center;
			background-color: #001938;
			color: white;
			height: 60px;
			padding: 0 30px;
			justify-content: space-between;
			user-select: none;

			&__logo {
				display: flex;
				align-items: center;

				img {
					width: 24px;
					margin-right: 10px;
				}

				span {
					font-size: 22px;
				}
			}

			&__nav {
				display: flex;
			}

			&__link {
				img {
					display: block;
					width: 26px;
					height: 26px;
					margin-right: 24px;
					transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

					&:hover {
						transform: scale(1.2);
					}
				}
			}

			&__cube {
				display: inline-block;
				padding: 0 12px;
				color: #fff;
				font-size: 14px;
				line-height: 24px;
				text-align: center;
				border: 1px solid rgba(255, 255, 255, 0.7);
				border-radius: 20px;
				outline: none;
				cursor: pointer;
				background: transparent;
				transition: 0.3s ease-in-out;
			}

			&__version {
				margin-right: 24px;
				position: relative;
				padding-right: 20px;

				&:after {
					position: absolute;
					top: 7px;
					right: 7px;
					width: 5px;
					height: 5px;
					color: rgba(255, 255, 255, 0.9);
					border: 1px solid;
					border-color: transparent transparent currentColor currentColor;
					transform: rotate(-45deg);
					content: '';
				}
			}

			&__version-pop {
				position: absolute;
				top: 30px;
				right: 0;
				left: 0;
				z-index: 99;
				color: #333;
				line-height: 36px;
				text-align: left;
				background-color: #fff;
				border-radius: 12px;
				box-shadow: 0 4px 12px #ebedf0;
				transform-origin: top;
				transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
			}

			&__version-pop-hidden {
				transform: scaleY(0);
				opacity: 0;
			}

			&__version-pop-item {
				padding-left: 12px;
				display: inline-block;
				width: 100%;
				transition: 0.2s;

				&:hover {
					color: #1989fa;
				}
			}
		}

		&-content {
			display: flex;
			background-color: #f7f8fa;
		}

		&-nav {
			flex: 0 0 220px;
			padding: 24px 0 72px;
			background: white;

			&__item {
				margin: 0;

				a,
				span {
					display: inline-block;
					margin: 0;
					padding: 8px 0 8px 30px;
					line-height: 28px;
				}

				span {
					font-weight: 700;
					font-size: 16px;
				}

				a {
					text-decoration: none;
					font-size: 14px;
					color: #455a64;
					transition: color 0.2s;

					&:hover {
						color: blueviolet;
					}
				}

				.router-link-active {
					color: blueviolet;
				}
			}
		}

		&-doc {
			flex: 1;
			margin: 30px;
			background: white;
		}

		&-mobile {
			flex: 0 0 360px;
			background: white;
		}
	}
}
</style>
