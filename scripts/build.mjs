import execa from 'execa'
import ora from 'ora'
import { resolve } from 'path'

const CWD = process.cwd()
const PKG_CLI = resolve(CWD, './packages/varlet-cli')
const PKG_ICONS = resolve(CWD, './packages/varlet-icons')
const PKG_UI = resolve(CWD, './packages/varlet-ui')
const PKG_SHARED = resolve(CWD, './packages/varlet-shared')

export const buildCli = () => execa('pnpm', ['build'], { cwd: PKG_CLI })

export const buildShared = () => execa('pnpm', ['build'], { cwd: PKG_SHARED })

export const buildIcons = () => execa('pnpm', ['build'], { cwd: PKG_ICONS })

export const buildUI = (noUmd) => execa('pnpm', ['compile', noUmd ? '--noUmd' : ''], { cwd: PKG_UI })

export async function runTask(taskName, task) {
  const s = ora().start(`Building ${taskName}`)
  try {
    await task()
    s.succeed(`Build ${taskName} completed!`)
  } catch (e) {
    s.fail(`Build ${taskName} failed!`)
    console.error(e.toString())
  }
}
