import { buildCli, buildIcons, buildShared, buildUI, buildVitePlugins, runTask } from './build.mjs'
import { release } from '@varlet/cli'

async function task() {
  await runTask('shared', buildShared)
  await Promise.all([
    runTask('cli', buildCli),
    runTask('vite plugins', buildVitePlugins),
    runTask('icons', buildIcons)
  ])
  await runTask('ui', () => buildUI(false))
}

await release({ task })
