'use strict'
var __assign =
	(this && this.__assign) ||
	function () {
		__assign =
			Object.assign ||
			function (t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i]
					for (var p in s)
						if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
				}
				return t
			}
		return __assign.apply(this, arguments)
	}
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
exports.createBaseConfig = exports.createBasePlugins = exports.createBabelConfig = exports.createCSSLoaders = exports.createURLLoaderOptions = exports.commonTemplateOption = void 0
var html_webpack_plugin_1 = __importDefault(require('html-webpack-plugin'))
var path_1 = __importDefault(require('path'))
var mini_css_extract_plugin_1 = __importDefault(
	require('mini-css-extract-plugin')
)
var constant_1 = require('../shared/constant')
var postcss_config_1 = require('./postcss.config')
var ForkTsCheckerWebpackPlugin_1 = require('fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPlugin')
var vue_loader_1 = require('vue-loader')
var fs_extra_1 = require('fs-extra')
var env_1 = require('../shared/env')
var fsUtils_1 = require('../shared/fsUtils')
var varlet_config_1 = require('./varlet.config')
exports.commonTemplateOption = {
	minify: {
		removeAttributeQuotes: true,
		collapseWhitespace: true,
	},
	hash: true,
}
function createURLLoaderOptions(type) {
	return {
		name: '[name].[hash:7].[ext]',
		limit: 8 * 1024,
		outputPath: type + 's/',
		esModule: false,
	}
}
exports.createURLLoaderOptions = createURLLoaderOptions
function createCSSLoaders() {
	return [
		env_1.isDev() ? 'style-loader' : mini_css_extract_plugin_1.default.loader,
		'css-loader',
		{
			loader: 'postcss-loader',
			options: postcss_config_1.createPostcssOptions(constant_1.POSTCSS_CONFIG),
		},
	]
}
exports.createCSSLoaders = createCSSLoaders
function createBabelConfig() {
	return {
		loader: 'babel-loader',
		options: {
			presets: [
				[
					'@babel/preset-env',
					{
						targets: {
							chrome: '58',
							ie: '11',
						},
					},
				],
			],
			plugins: ['@babel/plugin-transform-runtime'],
		},
	}
}
exports.createBabelConfig = createBabelConfig
function createBasePlugins() {
	var varletConfig = varlet_config_1.getVarletConfig()
	var plugins = [
		new vue_loader_1.VueLoaderPlugin(),
		new html_webpack_plugin_1.default(
			__assign(
				{
					template: path_1.default.resolve(
						__dirname,
						'../../site/pc/index.html'
					),
					filename: 'index.html',
					chunks: ['pc'],
					title: fsUtils_1.accessProperty(varletConfig, 'pc.title'),
					logo: fsUtils_1.accessProperty(varletConfig, 'pc.logo'),
					description: fsUtils_1.accessProperty(varletConfig, 'pc.description'),
				},
				exports.commonTemplateOption
			)
		),
		new html_webpack_plugin_1.default(
			__assign(
				{
					template: path_1.default.resolve(
						__dirname,
						'../../site/mobile/mobile.html'
					),
					filename: 'mobile.html',
					chunks: ['mobile'],
					title: fsUtils_1.accessProperty(varletConfig, 'mobile.title'),
					logo: fsUtils_1.accessProperty(varletConfig, 'mobile.logo'),
					description: fsUtils_1.accessProperty(
						varletConfig,
						'mobile.description'
					),
				},
				exports.commonTemplateOption
			)
		),
	]
	fs_extra_1.pathExistsSync(constant_1.TS_CONFIG) &&
		plugins.push(new ForkTsCheckerWebpackPlugin_1.ForkTsCheckerWebpackPlugin())
	return plugins
}
exports.createBasePlugins = createBasePlugins
function createBaseConfig() {
	return {
		entry: {
			pc: path_1.default.resolve(__dirname, '../../site/pc/main.ts'),
			mobile: path_1.default.resolve(__dirname, '../../site/mobile/main.ts'),
		},
		resolve: {
			extensions: constant_1.EXTENSIONS,
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					use: ['cache-loader', 'vue-loader'],
				},
				{
					test: /\.js$/,
					use: ['cache-loader', createBabelConfig()],
					exclude: /node_modules/,
				},
				{
					test: /\.ts$/,
					use: [
						'cache-loader',
						createBabelConfig(),
						{
							loader: 'ts-loader',
							options: { appendTsSuffixTo: [/\.vue$/] },
						},
					],
				},
				{
					test: /\.(png|jpg|gif|jpeg|svg)$/,
					use: {
						loader: 'url-loader',
						options: createURLLoaderOptions('image'),
					},
				},
				{
					test: /\.(eot|ttf|woff|woff2)$/,
					use: {
						loader: 'url-loader',
						options: createURLLoaderOptions('font'),
					},
				},
				{
					test: /\.(mp3|wav|ogg)$/,
					use: {
						loader: 'url-loader',
						options: createURLLoaderOptions('audio'),
					},
				},
				{
					test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
					use: {
						loader: 'url-loader',
						options: createURLLoaderOptions('video'),
					},
				},
				{
					test: /\.css$/,
					use: createCSSLoaders(),
				},
				{
					test: /\.less$/,
					use: __spreadArrays(createCSSLoaders(), ['less-loader']),
				},
			],
		},
	}
}
exports.createBaseConfig = createBaseConfig
