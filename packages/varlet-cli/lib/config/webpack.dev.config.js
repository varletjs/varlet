'use strict'
var __spreadArrays =
	(this && this.__spreadArrays) ||
	function () {
		for (var s = 0, i = 0, il = arguments.length; i < il; i++)
			s += arguments[i].length
		for (var r = Array(s), k = 0, i = 0; i < il; i++)
			for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
				r[k] = a[j]
		return r
	}
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod }
	}
Object.defineProperty(exports, '__esModule', { value: true })
exports.getDevConfig = void 0
var webpack_merge_1 = __importDefault(require('webpack-merge'))
var webpackbar_1 = __importDefault(require('webpackbar'))
var webpack_base_config_1 = require('./webpack.base.config')
function getDevConfig() {
	return webpack_merge_1.default(webpack_base_config_1.createBaseConfig(), {
		mode: 'development',
		devtool: 'source-map',
		output: {
			chunkFilename: 'js/[name].[chunkhash:8].js',
		},
		devServer: {
			port: 8080,
			host: 'localhost',
			publicPath: '/',
			stats: 'errors-only',
			disableHostCheck: true,
			hot: true,
		},
		plugins: __spreadArrays(
			[
				new webpackbar_1.default({
					name: 'Site development building',
					color: '#15DD6A',
				}),
			],
			webpack_base_config_1.createBasePlugins()
		),
	})
}
exports.getDevConfig = getDevConfig
