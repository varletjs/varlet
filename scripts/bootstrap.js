const execa = require('execa')
const path = require('path')

const CWD = process.cwd()
const PKG_CLI = path.resolve(CWD, './packages/varlet-cli')
const PKG_ICONS = path.resolve(CWD, './packages/varlet-icons')
const PKG_UI = path.resolve(CWD, './packages/varlet-ui')

execa('yarn', ['build'], {
  cwd: PKG_CLI,
}).then(() => {
  console.log('@varlet/cli build success!')
})

execa('yarn', ['build'], {
  cwd: PKG_ICONS,
}).then(() => {
  console.log('@varlet/icons build success!')
})

execa('yarn', ['compile'], {
  cwd: PKG_UI,
}).then(() => {
  console.log('@varlet/ui compile success!')
})
