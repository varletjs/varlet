module.exports = {
	namespace: 'varlet',
  host: 'localhost',
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
		],
		language: 'zh_CN',
	},
	mobile: {
		title: 'Varlet 组件库示例',
		description: 'Varlet 组件库示例',
		logo: 'https://cn.vuejs.org/images/logo.png',
	}
}
