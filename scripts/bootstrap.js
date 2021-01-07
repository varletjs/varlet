const execa = require('execa')
const path = require('path')

const CWD = process.cwd()
const PKG_CLI = path.resolve(CWD, './packages/varlet-cli')
const PKG_ICONS = path.resolve(CWD, './packages/varlet-icons')

execa('yarn run build', {
	cwd: PKG_CLI,
}).then(() => {
	console.log('@varlet/cli build success!')
})

execa('yarn run build', {
	cwd: PKG_ICONS,
}).then(() => {
	console.log('@varlet/icons build success!')
})
