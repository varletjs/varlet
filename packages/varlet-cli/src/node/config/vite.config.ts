import fse from 'fs-extra'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import { markdown, html, inlineCss } from '@varlet/vite-plugins'
import { kebabCase } from '@varlet/shared'
import {
  ES_DIR,
  LIB_DIR,
  SITE_CONFIG,
  SITE_DIR,
  SITE_MOBILE_ROUTES,
  SITE_OUTPUT_PATH,
  SITE_PC_ROUTES,
  SITE_PUBLIC_PATH,
  UMD_DIR,
  VITE_RESOLVE_EXTENSIONS,
} from '../shared/constant.js'
import { InlineConfig } from 'vite'
import { get } from 'lodash-es'
import { resolve } from 'path'
import { VarletConfig } from './varlet.config'

const { copyFileSync, removeSync } = fse

export function getDevConfig(varletConfig: Required<VarletConfig>): InlineConfig {
  const defaultLanguage = get(varletConfig, 'defaultLanguage')
  const host = get(varletConfig, 'host')

  return {
    root: SITE_DIR,

    resolve: {
      extensions: VITE_RESOLVE_EXTENSIONS,

      alias: {
        '@config': SITE_CONFIG,
        '@pc-routes': SITE_PC_ROUTES,
        '@mobile-routes': SITE_MOBILE_ROUTES,
      },
    },

    server: {
      port: get(varletConfig, 'port'),
      host: host === 'localhost' ? '0.0.0.0' : host,
    },

    publicDir: SITE_PUBLIC_PATH,

    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),

      jsx(),

      markdown({ style: get(varletConfig, 'highlight.style') }),

      html({
        data: {
          logo: get(varletConfig, `logo`),
          baidu: get(varletConfig, `analysis.baidu`, ''),
          pcTitle: get(varletConfig, `pc.title['${defaultLanguage}']`),
          mobileTitle: get(varletConfig, `mobile.title['${defaultLanguage}']`),
        },
      }),
    ],
  }
}

export function getBuildConfig(varletConfig: Required<VarletConfig>): InlineConfig {
  const devConfig = getDevConfig(varletConfig)

  return {
    ...devConfig,

    base: './',

    build: {
      outDir: SITE_OUTPUT_PATH,
      reportCompressedSize: false,
      emptyOutDir: true,
      cssTarget: 'chrome61',
      rollupOptions: {
        input: {
          main: resolve(SITE_DIR, 'index.html'),
          mobile: resolve(SITE_DIR, 'mobile.html'),
        },
      },
    },
  }
}

export interface BundleBuildOptions {
  fileName: string
  output: string
  format: 'es' | 'cjs' | 'umd'
  emptyOutDir: boolean
}

export function getBundleConfig(varletConfig: Required<VarletConfig>, buildOptions: BundleBuildOptions): InlineConfig {
  const plugins = []
  const name = get(varletConfig, 'name')
  const { fileName, output, format, emptyOutDir } = buildOptions

  if (format === 'umd') {
    plugins.push(
      inlineCss({
        jsFile: resolve(output, fileName),
        cssFile: resolve(output, 'style.css'),
      })
    )
  }

  return {
    logLevel: 'silent',

    build: {
      minify: format === 'cjs' ? false : 'esbuild',
      emptyOutDir,
      copyPublicDir: false,
      lib: {
        name,
        formats: [format],
        fileName: () => fileName,
        entry: resolve(ES_DIR, 'index.umd.mjs'),
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          dir: output,
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
  }
}
