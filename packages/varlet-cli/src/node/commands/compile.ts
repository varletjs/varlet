import fse from 'fs-extra'
import { createSpinner } from 'nanospinner'
import { compileBundle, compileModule } from '../compiler/compileModule.js'
import { compileTemplateHighlight } from '../compiler/compileTemplateHighlight.js'
import { compileTypes } from '../compiler/compileTypes.js'
import { ES_DIR, HL_DIR, LIB_DIR, UMD_DIR } from '../shared/constant.js'
import logger from '../shared/logger.js'

const { remove } = fse

export function removeDir() {
  return Promise.all([remove(ES_DIR), remove(LIB_DIR), remove(HL_DIR), remove(UMD_DIR)])
}

export async function runTask(taskName: string, task: () => any) {
  const s = createSpinner().start({ text: `Compiling ${taskName}` })
  try {
    const start = performance.now()
    await task()
    s.success({ text: `Compilation ${taskName} completed! (${Math.ceil(performance.now() - start)}ms)` })
  } catch (e: any) {
    s.error({ text: `Compilation ${taskName} failed!` })
    logger.error(e.toString())
  }
}

export async function compile() {
  process.env.NODE_ENV = 'compile'
  await removeDir()

  await Promise.all([runTask('types', compileTypes), runTask('template highlight', compileTemplateHighlight)])

  process.env.BABEL_MODULE = 'module'
  await runTask('module', compileModule)

  process.env.BABEL_MODULE = ''
  await runTask('bundle', compileBundle)
}
