<template>
	<div class="varlet-site">
		<div class="varlet-site-header">
			<img :src="header.logo" alt="" class="varlet-site-header__logo" />
			<input type="text" :placeholder="header.search[language]" />
			<button @click="switchLanguage">{{ header.i18nButton[language] }}</button>
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
			<div class="varlet-site-mobile"></div>
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
	data() {
		return {
			menu: [],
			language: '',
			header: {},
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
		const { pc = {} } = _this.$config
		const { description, header = {}, logo, menu = [], language } = pc
		this.menu = menu
		this.language = language
		this.header = header
	},
	watch: {
		language: function (val) {
			if (val) {
			}
		},
	},
})
</script>

<style lang="less">
body {
	margin: 0;
	padding: 0;
}

.varlet {
	&-site {
		&-header {
			display: flex;
			align-items: center;
			background-color: #001938;
			color: white;
			&__logo {
				width: 60px;
				height: 60px;
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
