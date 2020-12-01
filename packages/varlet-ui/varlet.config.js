const menu = [
	{
		text: {
			zh_CN: '开发指南',
			en_US: 'Essentials',
		},
		isTitle: true,
	},
	{
		text: {
			zh_CN: '快速上手',
			en_US: 'Quickstart',
		},
		doc: 'quickstart',
	},
	{
		text: {
			zh_CN: '基础组件',
			en_US: 'Basic Components',
		},
		isTitle: true,
	},
	{
		text: {
			zh_CN: 'Button 按钮',
			en_US: 'Button',
		},
		doc: 'button',
	},
	{
		text: {
			zh_CN: '水波指令',
			en_US: 'Ripple',
		},
		doc: 'ripple',
	},
	{
		text: {
			zh_CN: '骨架屏',
			en_US: 'Skeleton',
		},
		doc: 'skeleton',
	},
]

module.exports = {
	namespace: 'varlet',
  host: '0.0.0.0',
  port: 8080,
	pc: {
		title: 'Varlet 组件库示例',
		description: 'Varlet 组件库示例',
		logo: 'https://cn.vuejs.org/images/logo.png',
		header: {
			logo: 'https://cn.vuejs.org/images/logo.png',
			search: {
				zh_CN: '搜索文档...',
				en_US: 'Search...',
			},
			i18nButton: {
				zh_CN: 'En',
				en_US: '中文',
			},
		},
		menu: [
			{
				text: {
					zh_CN: '水波指令',
					en_US: 'Ripple',
				},
				doc: 'ripple',
			},
			{
				text: {
					zh_CN: '骨架屏',
					en_US: 'Skeleton',
				},
				doc: 'skeleton',
			},
			{
				text: {
					zh_CN: '加载',
					en_US: 'Loading',
				},
				doc: 'loading',
			},
		],
		language: 'zh_CN',
	},
	mobile: {
		title: 'Varlet 组件库示例',
		description: 'Varlet 组件库示例',
		logo: 'https://cn.vuejs.org/images/logo.png',
	},
}
