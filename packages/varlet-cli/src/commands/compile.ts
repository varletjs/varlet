import ora from 'ora'
import logger from '../shared/logger'
import { remove } from 'fs-extra'
import { ES_DIR, HL_DIR, UMD_DIR } from '../shared/constant'
import { compileModule } from '../compiler/compileModule'
import { compileTemplateHighlight } from '../compiler/compileTemplateHighlight'
import { compileTypes } from '../compiler/compileTypes'

export function removeDir() {
  return Promise.all([remove(ES_DIR), remove(HL_DIR), remove(UMD_DIR)])
}

export async function runTask(taskName: string, task: () => any) {
  const s = ora().start(`Compiling ${taskName}`)
  try {
    await task()
    s.succeed(`Compilation ${taskName} completed!`)
  } catch (e) {
    s.fail(`Compilation ${taskName} failed!`)
    logger.error(e.toString())
  }
}

export async function compile(cmd: { noUmd: boolean }) {
  await removeDir()
  await Promise.all([
    runTask('types', compileTypes),
    runTask('template highlight', compileTemplateHighlight),
    runTask('module', compileModule),
  ])
  !cmd.noUmd && (await runTask('umd', () => compileModule('umd')))
}
