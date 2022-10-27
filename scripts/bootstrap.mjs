import { buildCli, buildIcons, buildShared, buildUI, runTask } from './build.mjs'
;(async () => {
  await runTask('shared', buildShared)
  await Promise.all([runTask('cli', buildCli), runTask('icons', buildIcons)])
  await runTask('ui', buildUI)
})()
