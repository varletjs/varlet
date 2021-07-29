import {
  POSTCSS_CONFIG,
  SITE_CONFIG,
  SITE_MOBILE_MAIN,
  SITE_MOBILE_ROUTES,
  SITE_PC_MAIN,
  SITE_PC_ROUTES,
  TS_CONFIG,
  WEBPACK_RESOLVE_EXTENSIONS,
} from '../shared/constant'
import { ForkTsCheckerWebpackPlugin } from 'fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPlugin'
import { VueLoaderPlugin } from 'vue-loader'
import { pathExistsSync } from 'fs-extra'
import { WebpackPluginInstance } from 'webpack'
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

export const BASE_CONFIG = {
  entry: {
    pc: SITE_PC_MAIN,
    mobile: SITE_MOBILE_MAIN,
  },
  resolve: {
    extensions: WEBPACK_RESOLVE_EXTENSIONS,
    alias: {
      '@config': SITE_CONFIG,
      '@pc-routes': SITE_PC_ROUTES,
      '@mobile-routes': SITE_MOBILE_ROUTES,
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.(js|ts|jsx|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                  },
                ],
                '@babel/preset-typescript',
                require('./babel-sfc-ts-transform'),
              ],
              plugins: [
                '@babel/plugin-transform-runtime',
                [
                  'import',
                  {
                    libraryName: '@varlet/ui',
                    libraryDirectory: 'es',
                    style: true,
                  },
                  '@varlet/ui',
                ],
                '@vue/babel-plugin-jsx',
              ],
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
} as any
