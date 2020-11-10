'use strict'
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod }
	}
Object.defineProperty(exports, '__esModule', { value: true })
exports.compileUMD = void 0
var env_1 = require('../shared/env')
var webpack_umd_config_1 = require('../config/webpack.umd.config')
var webpack_1 = __importDefault(require('webpack'))
var logger_1 = __importDefault(require('../shared/logger'))
function compileUMD() {
	return new Promise(function (resolve, reject) {
		env_1.setProd()
		var config = webpack_umd_config_1.getUmdConfig()
		webpack_1.default(config, function (err, stats) {
			if (err) {
				logger_1.default.error(err.toString())
				reject()
			}
			if (stats.hasErrors()) {
				logger_1.default.error(stats)
				reject()
			}
			if (!err && !stats.hasErrors()) {
				resolve()
			}
		})
	})
}
exports.compileUMD = compileUMD
