import { ES_DIR } from '../shared/constant.js'
import { transformAsync } from '@babel/core'
import { bigCamelize } from '@varlet/shared'
import { getVersion, isDir, isJsx, isTsx, replaceExt } from '../shared/fsUtils.js'
import { extractStyleDependencies, IMPORT_CSS_RE, IMPORT_LESS_RE, IMPORT_SCSS_RE } from './compileStyle.js'
import { resolve, relative, extname, dirname } from 'path'
import { VarletConfig, getVarletConfig } from '../config/varlet.config.js'
import { get } from 'lodash-es'
import type { BabelFileResult } from '@babel/core'
import fse from 'fs-extra'
import esbuild from 'esbuild'

const { writeFileSync, readdirSync, readFileSync, removeSync, writeFile, pathExistsSync } = fse

// https://regexr.com/765a4
export const IMPORT_FROM_DEPENDENCE_RE = /import\s+?[\w\s{},$*]+\s+from\s+?(".*?"|'.*?')/g
// https://regexr.com/767e6
export const EXPORT_FROM_DEPENDENCE_RE = /export\s+?[\w\s{},$*]+\s+from\s+?(".*?"|'.*?')/g
// https://regexr.com/764ve
export const IMPORT_DEPENDENCE_RE = /import\s+(".*?"|'.*?')/g

export const scriptExtNames = ['.vue', '.ts', '.tsx', '.mjs', '.js', '.jsx']

export const styleExtNames = ['.less', '.scss', '.css']

export const scriptIndexes = ['index.mjs', 'index.vue', 'index.ts', 'index.tsx', 'index.js', 'index.jsx']

export const styleIndexes = ['index.less', 'index.scss', 'index.css']

export const tryMatchExtname = (file: string, extname: string[]) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const ext of extname) {
    const matched = `${file}${ext}`

    if (pathExistsSync(matched)) {
      return ext
    }
  }
}

export const resolveAlias = (dependence: string, file: string, alias: VarletConfig['alias'] = {}) => {
  let matchedAliasKey = Object.keys(alias).find((key) => dependence === key)

  if (!matchedAliasKey) {
    // @/ -> yes
    // @varlet/ui -> no
    matchedAliasKey = Object.keys(alias).find((key) => dependence.startsWith(`${key}/`))
  }

  if (!matchedAliasKey) {
    return dependence
  }

  const matchedAliasValue = alias[matchedAliasKey as keyof typeof alias]
  const isRelative = matchedAliasValue.startsWith('.')
  const replacedValue = isRelative ? relative(dirname(file), resolve(ES_DIR, matchedAliasValue)) : matchedAliasValue

  return dependence.replace(matchedAliasKey, replacedValue)
}

export const resolveDependence = (file: string, script: string, alias: VarletConfig['alias'] = {}) => {
  const replacer = (source: string, dependence: string) => {
    // remove quotes
    dependence = dependence.slice(1, dependence.length - 1)
    const done = (targetDependence: string) => source.replace(dependence, targetDependence)
    const resolvedDependence = resolveAlias(dependence, file, alias)

    const isNodeModule = !resolvedDependence.startsWith('.')
    if (isNodeModule) {
      // e.g. @varlet/shared
      return done(resolvedDependence)
    }

    const ext = extname(resolvedDependence)
    const scriptExtname = getScriptExtname()

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

    const targetDependenceFile = resolve(dirname(file), resolvedDependence)

    if (!ext) {
      // e.g. ../button/props -> ../button/props.mjs
      const matchedScript = tryMatchExtname(targetDependenceFile, scriptExtNames)

      if (matchedScript) {
        return done(`${resolvedDependence}${scriptExtname}`)
      }

      const matchedStyle = tryMatchExtname(targetDependenceFile, styleExtNames)

      if (matchedStyle) {
        return done(`${resolvedDependence}${matchedStyle}`)
      }
    }

    if (!ext && isDir(targetDependenceFile)) {
      // e.g. ../button
      const files = readdirSync(targetDependenceFile)

      const hasScriptIndex = files.some((file) => scriptIndexes.some((name) => file.endsWith(name)))

      if (hasScriptIndex) {
        // e.g. -> ../button/index.mjs
        return done(`${resolvedDependence}/index${scriptExtname}`)
      }

      const hasStyleIndex = files.some((file) => styleIndexes.some((name) => file.endsWith(name)))

      if (hasStyleIndex) {
        // e.g. -> ../button/index.css
        return done(`${resolvedDependence}/index.css`)
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
  const { alias } = await getVarletConfig()

  if (code) {
    code = resolveDependence(file, code, alias)
    code = extractStyleDependencies(file, code, IMPORT_CSS_RE)
    code = extractStyleDependencies(file, code, IMPORT_LESS_RE)
    code = extractStyleDependencies(file, code, IMPORT_SCSS_RE)
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
