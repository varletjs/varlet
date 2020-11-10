'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.getVarletConfig = exports.defaultConfig = void 0
var fs_extra_1 = require('fs-extra')
var constant_1 = require('../shared/constant')
exports.defaultConfig = {
	namespace: 'varlet',
	pc: {
		title: 'Varlet 组件库文档',
		description: 'Varlet 组件库文档',
		logo: 'https://cn.vuejs.org/images/logo.png',
	},
	mobile: {
		title: 'Varlet 组件库示例',
		description: 'Varlet 组件库示例',
		logo: 'https://cn.vuejs.org/images/logo.png',
	},
}
function getVarletConfig() {
	return (
		(fs_extra_1.pathExistsSync(constant_1.VARLET_CONFIG) &&
			require(constant_1.VARLET_CONFIG)) ||
		exports.defaultConfig
	)
}
exports.getVarletConfig = getVarletConfig
