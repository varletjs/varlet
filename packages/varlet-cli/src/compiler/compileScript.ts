import { BabelFileResult, transformAsync } from '@babel/core'
import { replaceExt } from '../shared/fsUtils'
import { replaceStyleExt, replaceTSExt, replaceVueExt } from './compileStyle'
import { writeFileSync, readFileSync, removeSync } from 'fs-extra'
import logger from '../shared/logger'

export async function compileScript(script: string, path: string, modules: string | boolean = false) {
  try {
    let { code } = await transformAsync(script, {
      filename: replaceExt(path, '.ts'),
      presets: [
        [require('@babel/preset-env'), {
          loose: true,
          modules
        }],
        require('@babel/preset-typescript')
      ],
      plugins: [
        require('@babel/plugin-transform-runtime')
      ]
    }) as BabelFileResult
    code = replaceStyleExt(code as string)
    code = replaceVueExt(code as string)
    code = replaceTSExt(code as string)
    removeSync(path)
    writeFileSync(replaceExt(path, '.js'), code, 'utf8')
  } catch (e) {
    logger.error(e.toString())
  }
}

export async function compileScriptFile(path: string, modules: string | boolean = false) {
  const sources = readFileSync(path, 'utf-8')
  await compileScript(sources, path, modules)
}
