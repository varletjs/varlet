import execa from 'execa'
import { createSpinner } from 'nanospinner'
import { resolve } from 'path'

const CWD = process.cwd()
const PKG_CLI = resolve(CWD, './packages/varlet-cli')
const PKG_VITE_PLUGINS = resolve(CWD, './packages/varlet-vite-plugins')
const PKG_ICONS = resolve(CWD, './packages/varlet-icons')
const PKG_UI = resolve(CWD, './packages/varlet-ui')
const PKG_SHARED = resolve(CWD, './packages/varlet-shared')

export const buildCli = () => execa('pnpm', ['build'], { cwd: PKG_CLI })

export const buildVitePlugins = () => execa('pnpm', ['build'], { cwd: PKG_VITE_PLUGINS })

export const buildShared = () => execa('pnpm', ['build'], { cwd: PKG_SHARED })

export const buildIcons = () => execa('pnpm', ['build'], { cwd: PKG_ICONS })

export const buildUI = () => execa('pnpm', ['compile'], { cwd: PKG_UI })

export async function runTask(taskName, task) {
  const s = createSpinner(`Building ${taskName}`).start()
  try {
    await task()
    s.success({ text: `Build ${taskName} completed!` })
  } catch (e) {
    s.error({ text: `Build ${taskName} failed!` })
    console.error(e.toString())
  }
}

export async function runTaskQueue() {
  await runTask('shared', buildShared)
  await runTask('vite plugins', buildVitePlugins)
  await runTask('cli', buildCli)
  await runTask('icons', buildIcons)
  await runTask('ui', buildUI)
}
