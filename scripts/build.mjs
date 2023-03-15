import execa from 'execa'
import fs from 'fs'
import { createSpinner } from 'nanospinner'
import { resolve } from 'path'

const CWD = process.cwd()
const PKG_CLI = resolve(CWD, './packages/varlet-cli')
const PKG_VITE_PLUGINS = resolve(CWD, './packages/varlet-vite-plugins')
const PKG_ICONS = resolve(CWD, './packages/varlet-icons')
const PKG_UI = resolve(CWD, './packages/varlet-ui')
const PKG_SHARED = resolve(CWD, './packages/varlet-shared')
const PKG_USE = resolve(CWD, './packages/varlet-use')
const PKG_PLAYGROUND = resolve(CWD, './packages/varlet-ui-playground')
const PKG_EMULATOR = resolve(CWD, './packages/varlet-touch-emulator')

export const buildCli = () => execa('pnpm', ['build'], { cwd: PKG_CLI })

export const buildVitePlugins = () => execa('pnpm', ['build'], { cwd: PKG_VITE_PLUGINS })

export const buildShared = () => execa('pnpm', ['build'], { cwd: PKG_SHARED })

export const buildUse = () => execa('pnpm', ['build'], { cwd: PKG_USE })

export const buildIcons = () => execa('pnpm', ['build'], { cwd: PKG_ICONS })

export const buildUI = async () => {
  await execa('pnpm', ['compile'], { cwd: PKG_UI })
  copyUIToPlayground()
}

export const copyUIToPlayground = () => {
  fs.copyFileSync(resolve(PKG_UI, './es/varlet.esm.js'), resolve(PKG_PLAYGROUND, './public/varlet.esm.js'))
  fs.copyFileSync(resolve(PKG_EMULATOR, './index.js'), resolve(PKG_PLAYGROUND, './public/varlet-touch-emulator.js'))
  fs.copyFileSync(resolve(PKG_UI, './es/style.css'), resolve(PKG_PLAYGROUND, './public/varlet.css'))
  fs.writeFileSync(
    resolve(PKG_PLAYGROUND, './public/varlet-area.js'),
    `export default ${fs.readFileSync(resolve(PKG_UI, './json/area.json'))}`
  )
}

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
  await runTask('use', buildUse)
  await runTask('vite plugins', buildVitePlugins)
  await runTask('cli', buildCli)
  await runTask('icons', buildIcons)
  await runTask('ui', buildUI)
}
