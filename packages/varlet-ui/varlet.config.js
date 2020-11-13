module.exports = {
	namespace: 'varlet',
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
					zh_CN: '开发指南',
					en_US: 'Essentials',
				},
				isTitle: true,
				children: [
					{
						text: {
							zh_CN: 'Button 按钮',
							en_US: 'Button',
							doc: 'button',
						},
					},
				],
			},
		],
	},
	mobile: {
		title: 'Varlet 组件库示例',
		description: 'Varlet 组件库示例',
		logo: 'https://cn.vuejs.org/images/logo.png',
	},
	siteIgnores: ['styles', 'utils', 'docs'],
	componentsIgnores: ['styles', 'utils', 'docs'],
}
