;(async () => {
  const execa = require('execa')
  const ora = require('ora')
  const { resolve } = require('path')
  const CWD = process.cwd()
  const PKG_CLI = resolve(CWD, './packages/varlet-cli')
  const PKG_ICONS = resolve(CWD, './packages/varlet-icons')
  const PKG_UI = resolve(CWD, './packages/varlet-ui')

  const buildCli = execa('yarn', ['build'], {
    cwd: PKG_CLI,
  })
  const buildIcon = execa('yarn', ['build'], {
    cwd: PKG_ICONS,
  })

  let spinner = ora('Start build @varlet/cli & @varlet/icons').start()
  await Promise.all([buildCli, buildIcon])
  spinner.succeed('@varlet/cli & @varlet/icons build success')

  spinner = ora('Start compile @varlet/ui').start()
  await execa('yarn', ['compile'], {
    cwd: PKG_UI,
  })
  spinner.succeed('@varlet/ui compile success')
})()
