import { buildCli, buildIcons, buildUI, runTask } from './build.mjs'

;(async () => {
  await Promise.all([
    runTask('cli', buildCli),
    runTask('icons', buildIcons),
    runTask('ui', buildUI)
  ])
})()
