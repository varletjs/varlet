import { resolve } from 'path'
import { createSpinner } from 'nanospinner'
import { x } from 'tinyexec'

const CWD = process.cwd()

export function createTask(cwd, command = 'build') {
  return () => x('pnpm', [command], { nodeOptions: { cwd } })
}

export async function runTask(taskName, task) {
  const s = createSpinner(`Building ${taskName}`).start()
  try {
    const start = performance.now()
    await task()
    s.success({ text: `Build ${taskName} completed! (${Math.ceil(performance.now() - start)}ms)` })
  } catch (e) {
    s.error({ text: `Build ${taskName} failed!` })
    console.error(e.toString())
  }
}

export const buildCli = createTask(resolve(CWD, './packages/varlet-cli'))

export const buildVitePlugins = createTask(resolve(CWD, './packages/varlet-vite-plugins'))

export const buildShared = createTask(resolve(CWD, './packages/varlet-shared'))

export const buildPresetUnocss = createTask(resolve(CWD, './packages/varlet-preset-unocss'))

export const buildPresetTailwindcss = createTask(resolve(CWD, './packages/varlet-preset-tailwindcss'))

export const buildImportResolver = createTask(resolve(CWD, './packages/varlet-import-resolver'))

export const buildUse = createTask(resolve(CWD, './packages/varlet-use'))

export const buildIcons = createTask(resolve(CWD, './packages/varlet-icons'))

export const buildToucheEmulator = createTask(resolve(CWD, './packages/varlet-touch-emulator'))

export const buildUI = createTask(resolve(CWD, './packages/varlet-ui'), 'compile')

export async function runTaskQueue() {
  const start = performance.now()

  await runTask('shared & touch-emulator', () => Promise.all([buildShared(), buildToucheEmulator()]))
  await runTask('preset-unocss & preset-tailwindcss & import-resolver & use & vite-plugins', () =>
    Promise.all([buildPresetUnocss(), buildPresetTailwindcss(), buildImportResolver(), buildUse(), buildVitePlugins()]),
  )
  await runTask('cli', buildCli)
  await runTask('icons', buildIcons)
  await runTask('ui', buildUI)

  console.info(`All tasks built in ${Math.ceil(performance.now() - start)} ms`)
}
