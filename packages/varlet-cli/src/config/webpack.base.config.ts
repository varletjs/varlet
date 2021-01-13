import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { resolve } from 'path'
import {
  EXTENSIONS,
  POSTCSS_CONFIG,
  TS_CONFIG,
  VARLET_CONFIG
} from '../shared/constant'
import { createPostcssOptions } from './postcss.config'
import { ForkTsCheckerWebpackPlugin } from 'fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPlugin'
import { VueLoaderPlugin } from 'vue-loader'
import { pathExistsSync } from 'fs-extra'
import { WebpackPluginInstance } from 'webpack'
import { isDev } from '../shared/env'
import { accessProperty } from '../shared/fsUtils'
import { getVarletConfig } from './varlet.config'

export type URLLoaderType = 'image' | 'video' | 'audio' | 'font'

export const commonTemplateOption = {
	minify: {
		removeAttributeQuotes: true,
		collapseWhitespace: true,
	},
	hash: true,
}

export function createURLLoaderOptions(type: URLLoaderType) {
	return {
		name: '[name].[hash:7].[ext]',
		limit: 8 * 1024,
		outputPath: `${type}s/`,
		esModule: false,
	}
}

export function createCSSLoaders() {
	return [
		isDev() ? 'style-loader' : MiniCssExtractPlugin.loader,
		'css-loader',
		{
			loader: 'postcss-loader',
			options: createPostcssOptions(POSTCSS_CONFIG),
		},
	]
}

export function createBabelConfig() {
	return {
		loader: 'babel-loader',
		options: {
			presets: ['@babel/preset-env'],
			plugins: ['@babel/plugin-transform-runtime'],
		},
	}
}

export function createBasePlugins(): WebpackPluginInstance[] {
	const varletConfig = getVarletConfig()

	const plugins: WebpackPluginInstance[] = [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: resolve(__dirname, '../../site/pc/index.html'),
			filename: 'index.html',
			chunks: ['pc'],
			title: accessProperty(varletConfig, 'pc.title'),
			logo: accessProperty(varletConfig, 'pc.logo'),
			description: accessProperty(varletConfig, 'pc.description'),
			...commonTemplateOption,
		}),
		new HtmlWebpackPlugin({
			template: resolve(__dirname, '../../site/mobile/mobile.html'),
			filename: 'mobile.html',
			chunks: ['mobile'],
			title: accessProperty(varletConfig, 'mobile.title'),
			logo: accessProperty(varletConfig, 'mobile.logo'),
			description: accessProperty(varletConfig, 'mobile.description'),
			...commonTemplateOption,
		}),
	]

	pathExistsSync(TS_CONFIG) && plugins.push(new ForkTsCheckerWebpackPlugin())

	return plugins
}

export function createBaseConfig() {
	return {
		entry: {
			pc: resolve(__dirname, '../../site/pc/main.ts'),
			mobile: resolve(__dirname, '../../site/mobile/main.ts'),
		},
		resolve: {
			extensions: EXTENSIONS,
			alias: {
				'@config': VARLET_CONFIG,
			},
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
							options: {
							  appendTsSuffixTo: [/\.vue$/],
                allowTsInNodeModules: true,
                compilerOptions: {
							    declaration: false
                }
              },
						},
					],
				},
				{
					test: /\.md$/,
					use: ['vue-loader', '@varlet/markdown-loader'],
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
					use: [...createCSSLoaders(), 'less-loader'],
				}
			],
		},
	}
}
