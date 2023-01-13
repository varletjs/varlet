import ora from 'ora'
import logger from '../shared/logger.js'
import fse from 'fs-extra'
import { ES_DIR, HL_DIR, LIB_DIR, UMD_DIR } from '../shared/constant.js'
import { compileModule } from '../compiler/compileModule.js'
import { compileTemplateHighlight } from '../compiler/compileTemplateHighlight.js'
import { compileTypes } from '../compiler/compileTypes.js'

const { remove } = fse

export function removeDir() {
  return Promise.all([remove(ES_DIR), remove(LIB_DIR), remove(HL_DIR), remove(UMD_DIR)])
}

export async function runTask(taskName: string, task: () => any) {
  const s = ora().start(`Compiling ${taskName}`)
  try {
    await task()
    s.succeed(`Compilation ${taskName} completed!`)
  } catch (e: any) {
    s.fail(`Compilation ${taskName} failed!`)
    logger.error(e.toString())
  }
}

export async function compile() {
  process.env.NODE_ENV = 'compile'

  await removeDir()
  await Promise.all([runTask('types', compileTypes), runTask('template highlight', compileTemplateHighlight)])

  process.env.TARGET_MODULE = 'module'
  process.env.BABEL_MODULE = 'module'
  await runTask('module', compileModule)

  process.env.BABEL_MODULE = ''
  process.env.TARGET_MODULE = 'bundle'
  await runTask('bundle', compileModule)
}
