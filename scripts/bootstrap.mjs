import { buildCli, buildIcons, runTask } from './build.mjs'
;(async () => {
  await Promise.all([runTask('cli', buildCli), runTask('icons', buildIcons)])
})()
