'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.createPostcssOptions = void 0
var fs_extra_1 = require('fs-extra')
function createPostcssOptions(path) {
	var defaultConfig = {
		postcssOptions: {
			plugins: ['autoprefixer'],
		},
	}
	return fs_extra_1.pathExistsSync(path)
		? {
				postcssOptions: {
					config: path,
					plugins: ['autoprefixer'],
				},
		  }
		: defaultConfig
}
exports.createPostcssOptions = createPostcssOptions
