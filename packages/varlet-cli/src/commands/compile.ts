import ora from 'ora'
import { remove } from 'fs-extra'
import { CJS_DIR, ES_DIR, UMD_DIR } from '../shared/constant'
import { compileModule } from '../compiler/compileModule'
import { compileTemplateHighlight } from '../compiler/compileTemplateHighlight'
import { compileTypes } from '../compiler/compileTypes'

export function removeDir() {
  return Promise.all([remove(ES_DIR), remove(CJS_DIR), remove(UMD_DIR)])
}

export async function compile() {
  const s = ora().start('Compile start for ES & CJS & UMD & Highlight && Types')

  await removeDir()

  await Promise.all([compileTypes(), compileTemplateHighlight(), compileModule(), compileModule('cjs')])
  await compileModule('umd')

  s.succeed('Compile success!')
}
