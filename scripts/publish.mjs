import ora from 'ora'
import { buildCli, buildIcons, buildUI } from './build.mjs'

(async () => {
  let spinner = ora('Start build @varlet/cli & @varlet/icons').start()
  await Promise.all([buildCli(), buildIcons()])
  spinner.succeed('@varlet/cli & @varlet/icons build success')

  spinner = ora('Start compile @varlet/ui').start()
  await buildUI(false)
  spinner.succeed('@varlet/ui compile success')
})()
