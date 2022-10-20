import vue from '@vitejs/plugin-vue'
import md from '@varlet/markdown-vite-plugin'
import jsx from '@vitejs/plugin-vue-jsx'
import fse from 'fs-extra'
import { injectHtml } from 'vite-plugin-html'
import {
  CWD,
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
import { InlineConfig, PluginOption } from 'vite'
import { get } from 'lodash-es'
import { kebabCase } from '@varlet/shared'
import { resolve } from 'path'
import { VarletConfig } from './varlet.config'

const { copyFileSync, pathExistsSync, readFileSync, removeSync, writeFileSync } = fse

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
      md({ style: get(varletConfig, 'highlight.style') }),
      jsx(),
      injectHtml({
        data: {
          pcTitle: get(varletConfig, `pc.title['${defaultLanguage}']`),
          mobileTitle: get(varletConfig, `mobile.title['${defaultLanguage}']`),
          logo: get(varletConfig, `logo`),
          baidu: get(varletConfig, `analysis.baidu`, ''),
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

function inlineCSS(fileName: string, dir: string): PluginOption {
  return {
    name: 'varlet-inline-css-vite-plugin',
    apply: 'build',
    closeBundle() {
      const cssFile = resolve(dir, 'style.css')
      if (!pathExistsSync(cssFile)) {
        return
      }

      const jsFile = resolve(dir, fileName)
      const cssCode = readFileSync(cssFile, 'utf-8')
      const jsCode = readFileSync(jsFile, 'utf-8')
      const injectCode = `;(function(){var style=document.createElement('style');style.type='text/css';\
style.rel='stylesheet';style.appendChild(document.createTextNode(\`${cssCode.replace(/\\/g, '\\\\')}\`));\
var head=document.querySelector('head');head.appendChild(style)})();`
      writeFileSync(jsFile, `${injectCode}${jsCode}`)
      copyFileSync(cssFile, resolve(LIB_DIR, 'style.css'))
      removeSync(cssFile)
    },
  }
}

function clear(): PluginOption {
  return {
    name: 'varlet-clear-vite-plugin',
    apply: 'build',
    closeBundle() {
      removeSync(resolve(CWD, 'dist'))
    },
  }
}

export function getESMBundleConfig(varletConfig: Required<VarletConfig>): InlineConfig {
  const name = get(varletConfig, 'name')
  const fileName = `${kebabCase(name)}.esm.js`

  return {
    logLevel: 'silent',

    build: {
      emptyOutDir: true,
      lib: {
        name,
        formats: ['es'],
        fileName: () => fileName,
        entry: resolve(ES_DIR, 'umdIndex.js'),
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          dir: ES_DIR,
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
        },
      },
    },

    plugins: [clear()],
  }
}

export function getUMDConfig(varletConfig: Required<VarletConfig>): InlineConfig {
  const name = get(varletConfig, 'name')
  const fileName = `${kebabCase(name)}.js`

  return {
    logLevel: 'silent',

    build: {
      emptyOutDir: true,
      lib: {
        name,
        formats: ['umd'],
        fileName: () => fileName,
        entry: resolve(ES_DIR, 'umdIndex.js'),
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          dir: UMD_DIR,
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
        },
      },
    },

    plugins: [inlineCSS(fileName, UMD_DIR), clear()],
  }
}
