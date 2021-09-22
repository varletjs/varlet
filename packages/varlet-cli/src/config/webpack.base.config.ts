import {
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
import { getPostcssOptions } from './postcss.config'
import { getVarletConfig } from './varlet.config'
import { get } from 'lodash'

export const CSS_LOADERS = [
  require.resolve('style-loader'),
  require.resolve('css-loader'),
  {
    loader: require.resolve('postcss-loader'),
    options: { postcssOptions: getPostcssOptions() },
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

const VUE_LOADER = {
  loader: require.resolve('vue-loader'),
  options: {
    compilerOptions: {
      preserveWhitespace: false,
    },
  },
}

export const BASE_CONFIG = {
  target: 'web',
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
  stats: 'errors-warnings',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [VUE_LOADER],
      },
      {
        test: /\.(js|ts|jsx|tsx)$/,
        use: [require.resolve('babel-loader')],
        exclude: /node_modules\/(?!(@varlet\/cli))/,
      },
      {
        test: /\.md$/,
        use: [
          VUE_LOADER,
          {
            loader: require.resolve('@varlet/markdown-loader'),
            options: {
              style: get(getVarletConfig(), 'highlight.style'),
            },
          },
        ],
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
        use: [...CSS_LOADERS, require.resolve('less-loader')],
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
