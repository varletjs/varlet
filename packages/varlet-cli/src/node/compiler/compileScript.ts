import fse from 'fs-extra'
import esbuild from 'esbuild'
import { transformAsync } from '@babel/core'
import { bigCamelize } from '@varlet/shared'
import { getVersion, isDir, isJsx, isTsx, replaceExt } from '../shared/fsUtils.js'
import { extractStyleDependencies, IMPORT_CSS_RE, IMPORT_LESS_RE } from './compileStyle.js'
import { resolve, extname, dirname } from 'path'
import { getVarletConfig } from '../config/varlet.config.js'
import { get } from 'lodash-es'
import type { BabelFileResult } from '@babel/core'

const { writeFileSync, readdirSync, readFileSync, removeSync, writeFile, pathExistsSync } = fse

// https://regexr.com/765a4
export const IMPORT_FROM_DEPENDENCE_RE = /import\s+?[\w\s{},$*]+\s+from\s+?(".*?"|'.*?')/g
// https://regexr.com/767e6
export const EXPORT_FROM_DEPENDENCE_RE = /export\s+?[\w\s{},$*]+\s+from\s+?(".*?"|'.*?')/g
// https://regexr.com/764ve
export const IMPORT_DEPENDENCE_RE = /import\s+(".*?"|'.*?')/g

export const scriptExtNames = ['.vue', '.ts', '.tsx', '.mjs', '.js', '.jsx']

export const styleExtNames = ['.less', '.css']

export const scriptIndexes = ['index.mjs', 'index.vue', 'index.ts', 'index.tsx', 'index.js', 'index.jsx']

export const styleIndexes = ['index.less', 'index.css']

export const tryMatchExtname = (file: string, extname: string[]) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const ext of extname) {
    const matched = `${file}${ext}`

    if (pathExistsSync(matched)) {
      return ext
    }
  }
}

export const resolveDependence = (file: string, script: string) => {
  const replacer = (source: string, dependence: string) => {
    dependence = dependence.slice(1, dependence.length - 1)

    const ext = extname(dependence)
    const targetDependenceFile = resolve(dirname(file), dependence)
    const scriptExtname = getScriptExtname()
    const inNodeModules = !dependence.startsWith('.')
    const done = (targetDependence: string) => source.replace(dependence, targetDependence)

    if (inNodeModules) {
      // e.g. @varlet/shared
      return source
    }

    if (ext) {
      if (scriptExtNames.includes(ext)) {
        // e.g. './a.vue' -> './a.mjs'
        return done(dependence.replace(ext, scriptExtname))
      }

      if (styleExtNames.includes(ext)) {
        // e.g. './a.css' -> './a.css' './a.less' -> './a.less'
        return source
      }
    }

    if (!ext) {
      // e.g. ../button/props -> ../button/props.mjs
      const matchedScript = tryMatchExtname(targetDependenceFile, scriptExtNames)

      if (matchedScript) {
        return done(`${dependence}${scriptExtname}`)
      }

      const matchedStyle = tryMatchExtname(targetDependenceFile, styleExtNames)

      if (matchedStyle) {
        return done(`${dependence}${matchedStyle}`)
      }
    }

    if (!ext && isDir(targetDependenceFile)) {
      // e.g. ../button
      const files = readdirSync(targetDependenceFile)

      const hasScriptIndex = files.some((file) => scriptIndexes.some((name) => file.endsWith(name)))

      if (hasScriptIndex) {
        // e.g. -> ../button/index.mjs
        return done(`${dependence}/index${scriptExtname}`)
      }

      const hasStyleIndex = files.some((file) => styleIndexes.some((name) => file.endsWith(name)))

      if (hasStyleIndex) {
        // e.g. -> ../button/index.css
        return done(`${dependence}/index.css`)
      }
    }

    return ''
  }

  return script
    .replace(IMPORT_FROM_DEPENDENCE_RE, replacer)
    .replace(EXPORT_FROM_DEPENDENCE_RE, replacer)
    .replace(IMPORT_DEPENDENCE_RE, replacer)
}

export async function compileScriptByBabel(script: string, file: string) {
  const { code } = (await transformAsync(script, {
    filename: file,
    babelrc: false,
    presets: ['@babel/preset-typescript'],
    plugins: [
      [
        '@vue/babel-plugin-jsx',
        {
          enableObjectSlots: false,
        },
      ],
    ],
  })) as BabelFileResult

  return code!
}
export async function compileScriptByEsbuild(script: string) {
  const varletConfig = await getVarletConfig()

  const { code } = await esbuild.transform(script, {
    loader: 'ts',
    target: get(varletConfig, 'esbuild.target'),
    format: 'esm',
  })

  return code
}

export async function compileScript(script: string, file: string) {
  let code = isJsx(file) || isTsx(file) ? await compileScriptByBabel(script, file) : script

  code = await compileScriptByEsbuild(code)

  if (code) {
    code = resolveDependence(file, code)
    code = extractStyleDependencies(file, code, IMPORT_CSS_RE)
    code = extractStyleDependencies(file, code, IMPORT_LESS_RE)
  }

  removeSync(file)
  writeFileSync(replaceExt(file, getScriptExtname()), code, 'utf8')
}

export async function compileScriptFile(file: string) {
  const sources = readFileSync(file, 'utf-8')

  await compileScript(sources, file)
}

export function getScriptExtname() {
  return '.mjs'
}

export interface GenerateEsEntryTemplateOptions {
  publicDirs: string[]
  scriptExtname?: string
  root?: string
}

export function generateEsEntryTemplate(options: GenerateEsEntryTemplateOptions) {
  const { publicDirs, scriptExtname = getScriptExtname(), root = './' } = options
  const imports: string[] = []
  const plugins: string[] = []
  const exports: string[] = []
  const cssImports: string[] = []
  const publicComponents: string[] = []

  publicDirs.forEach((dirname: string) => {
    const publicComponent = bigCamelize(dirname)
    const module = `'${root}${dirname}/index${scriptExtname}'`

    publicComponents.push(publicComponent)
    imports.push(`import ${publicComponent} from ${module}`)
    exports.push(`export * from ${module}`)
    plugins.push(`${publicComponent}.install && app.use(${publicComponent})`)
    cssImports.push(`import '${root}${dirname}/style/index${scriptExtname}'`)
  })

  const install = `
function install(app) {
  ${plugins.join('\n  ')}
}
`

  const version = `const version = '${getVersion()}'`

  const indexTemplate = `\
${imports.join('\n')}\n
${exports.join('\n')}\n
${version}
${install}
export {
  version,
  install,
  ${publicComponents.join(',\n  ')}
}

export default {
  version,
  install,
  ${publicComponents.join(',\n  ')}
}
`

  const styleTemplate = `\
${cssImports.join('\n')}
`

  const bundleTemplate = `\
${imports.join('\n')}\n
${exports.join('\n')}\n
${cssImports.join('\n')}\n
${version}
${install}
export {
  version,
  install,
  ${publicComponents.join(',\n  ')}
}

export default {
  version,
  install,
  ${publicComponents.join(',\n  ')}
}
`

  return {
    indexTemplate,
    styleTemplate,
    bundleTemplate,
  }
}

export async function compileESEntry(dir: string, publicDirs: string[]) {
  const { indexTemplate, bundleTemplate, styleTemplate } = generateEsEntryTemplate({ publicDirs })

  await Promise.all([
    writeFile(resolve(dir, 'index.mjs'), indexTemplate, 'utf-8'),
    writeFile(resolve(dir, 'index.bundle.mjs'), bundleTemplate, 'utf-8'),
    writeFile(resolve(dir, 'style.mjs'), styleTemplate, 'utf-8'),
  ])
}
