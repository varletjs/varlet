import {
  EXTENSIONS,
  POSTCSS_CONFIG,
  SITE,
  SITE_MOBILE,
  SITE_MOBILE_MAIN,
  SITE_PC,
  SITE_PC_MAIN,
  TS_CONFIG,
} from '../shared/constant'
import { ForkTsCheckerWebpackPlugin } from 'fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPlugin'
import { VueLoaderPlugin } from 'vue-loader'
import { pathExistsSync } from 'fs-extra'
import { WebpackPluginInstance } from 'webpack'
import { resolve } from 'path'
import { createPostcssOptions } from './postcss.config'

export const CSS_LOADERS = [
  'style-loader',
  'css-loader',
  {
    loader: 'postcss-loader',
    options: { postcssOptions: createPostcssOptions(POSTCSS_CONFIG) },
  },
]

export function createBasePlugins(): WebpackPluginInstance[] {
  const plugins: WebpackPluginInstance[] = [new VueLoaderPlugin()]

  pathExistsSync(TS_CONFIG) &&
    plugins.push(
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          mode: 'write-references',
          extensions: {
            vue: {
              enabled: true,
              compiler: '@vue/compiler-sfc',
            },
          },
        },
        logger: {
          issues: 'console',
        },
      })
    )

  return plugins
}

export function getBaseConfig() {
  return {
    entry: {
      pc: SITE_PC_MAIN,
      mobile: SITE_MOBILE_MAIN,
    },
    resolve: {
      extensions: EXTENSIONS,
      alias: {},
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: ['vue-loader'],
        },
        {
          test: /\.(js|ts)$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-typescript'],
                plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-transform-typescript'],
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.md$/,
          use: ['vue-loader', '@varlet/markdown-loader'],
        },
        {
          test: /\.(png|jpg|gif|jpeg|svg)$/,
          type: 'asset',
          generator: {
            filename: 'images/[hash][ext][query]',
          },
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          type: 'asset',
          generator: {
            filename: 'fonts/[hash][ext][query]',
          },
        },
        {
          test: /\.(mp3|wav|ogg|acc)$/,
          type: 'asset/resource',
          generator: {
            filename: 'audio/[hash][ext][query]',
          },
        },
        {
          test: /\.(mp4|webm)$/,
          type: 'asset/resource',
          generator: {
            filename: 'video/[hash][ext][query]',
          },
        },
        {
          test: /\.css$/,
          use: CSS_LOADERS,
        },
        {
          test: /\.less$/,
          use: [...CSS_LOADERS, 'less-loader'],
        },
      ],
    },
    cache: {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
    },
    plugins: createBasePlugins(),
  }
}

export function setAlias(config: any, { pcRouteId, mobileRouteId, configId }: Record<string, string>) {
  config.resolve.alias['@pc-routes'] = resolve(SITE_PC, `./${pcRouteId}.routes.ts`)
  config.resolve.alias['@mobile-routes'] = resolve(SITE_MOBILE, `./${mobileRouteId}.routes.ts`)
  config.resolve.alias['@config'] = resolve(SITE, `./${configId}.site.config.json`)
}
