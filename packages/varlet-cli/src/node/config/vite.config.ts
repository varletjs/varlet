import {
  SRC_DIR,
  ES_DIR,
  SITE_CONFIG,
  SITE_DIR,
  SITE_MOBILE_ROUTES,
  SITE_OUTPUT_PATH,
  SITE_PC_ROUTES,
  SITE_PUBLIC_PATH,
  VITE_RESOLVE_EXTENSIONS,
  EXTENSION_ENTRY,
} from '../shared/constant.js'
import { markdown, html, inlineCss, copy } from '@varlet/vite-plugins'
import { InlineConfig } from 'vite'
import { resolve } from 'path'
import { VarletConfig, type VarletConfigHtmlInject, type VarletConfigHtmlInjectPoint } from './varlet.config.js'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'

export function getHtmlInject(inject: VarletConfigHtmlInject) {
  const getContent = (injectKey: keyof VarletConfigHtmlInject, position: VarletConfigHtmlInjectPoint['position']) =>
    inject[injectKey]?.filter((point) => point.position === position).map((point) => point.content) ?? []

  return {
    head: {
      start: getContent('head', 'start'),
      end: getContent('head', 'end'),
      scriptStart: getContent('head', 'script-start'),
    },
    body: {
      start: getContent('body', 'start'),
      end: getContent('body', 'end'),
      scriptStart: getContent('body', 'script-start'),
    },
  }
}

export function getDevConfig(varletConfig: Required<VarletConfig>): InlineConfig {
  const { defaultLanguage, alias = {}, host } = varletConfig

  const resolveAlias = Object.entries(alias).reduce((resolveAlias, [key, value]) => {
    const isRelative = value.startsWith('.')
    resolveAlias[key] = isRelative ? resolve(SRC_DIR, value) : value
    return resolveAlias
  }, {} as Record<string, string>)

  return {
    root: SITE_DIR,

    resolve: {
      extensions: VITE_RESOLVE_EXTENSIONS,

      alias: {
        ...resolveAlias,
        '@config': SITE_CONFIG,
        '@pc-routes': SITE_PC_ROUTES,
        '@mobile-routes': SITE_MOBILE_ROUTES,
      },
    },

    server: {
      port: varletConfig?.port,
      host: host === 'localhost' ? '0.0.0.0' : host,
      proxy: varletConfig?.proxy || {},
    },

    publicDir: SITE_PUBLIC_PATH,

    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),

      jsx(),

      markdown({ style: varletConfig?.highlight?.style }),

      copy({ paths: varletConfig?.copy || [] }),

      html({
        data: {
          logo: varletConfig?.logo,
          baidu: varletConfig?.analysis?.baidu,

          pcTitle: varletConfig?.seo?.title ?? '',
          pcDescription: varletConfig?.seo?.description ?? '',
          pcKeywords: varletConfig?.seo?.keywords ?? '',
          pcHtmlInject: getHtmlInject(varletConfig?.pc?.htmlInject || {}),

          mobileTitle: varletConfig?.seo?.title ?? '',
          mobileDescription: varletConfig?.seo?.description ?? '',
          mobileKeywords: varletConfig?.seo?.keywords ?? '',
          mobileHtmlInject: getHtmlInject(varletConfig?.mobile?.htmlInject || {}),
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
  removeEnv: boolean
  emptyOutDir: boolean
}

export function getBundleConfig(varletConfig: Required<VarletConfig>, buildOptions: BundleBuildOptions): InlineConfig {
  const plugins = []
  const name = varletConfig?.name
  const { external = [], globals = {} } = varletConfig?.bundle || {}
  const { fileName, output, format, emptyOutDir, removeEnv } = buildOptions

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

    define: removeEnv
      ? {
          'process.env.NODE_ENV': JSON.stringify('production'),
        }
      : undefined,

    plugins,

    build: {
      minify: format === 'cjs' ? false : 'esbuild',
      emptyOutDir,
      copyPublicDir: false,
      lib: {
        name,
        formats: [format],
        fileName: () => fileName,
        entry: resolve(ES_DIR, 'index.bundle.mjs'),
      },
      rollupOptions: {
        external: ['vue', ...external],
        output: {
          dir: output,
          exports: 'named',
          globals: {
            vue: 'Vue',
            ...globals,
          },
        },
      },
    },
  }
}

export type ExtensionMode = 'dev' | 'build'

export function getExtensionConfig(mode: ExtensionMode): InlineConfig {
  return {
    build: {
      sourcemap: mode === 'dev' ? 'inline' : false,

      watch: mode === 'dev' ? {} : null,

      lib: {
        entry: EXTENSION_ENTRY,
        fileName: 'extension',
        formats: ['cjs'],
      },

      rollupOptions: {
        external: ['vscode'],
      },
    },
  }
}
