import { buildCli, buildIcons, buildShared, buildUI, runTask } from './build.mjs'

(async () => {
  await Promise.all([
    runTask('cli', buildCli),
    runTask('icons', buildIcons),
    runTask('shared', buildShared)
  ])
  await runTask('ui', () => buildUI(false))
})()
