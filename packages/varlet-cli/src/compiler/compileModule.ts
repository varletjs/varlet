import { EXAMPLE_DIR_NAME, TESTS_DIR_NAME, DOCS_DIR_NAME, SRC_DIR, CJS_DIR, ES_DIR } from '../shared/constant'
import { copy, readdir, removeSync } from 'fs-extra'
import { getComponentNames, getExportDirNames, isDir, isLess, isScript, isSFC } from '../shared/fsUtils'
import { compileSFC } from './compileSFC'
import { resolve } from 'path'
import { compileLibraryEntry, compileScriptFile } from './compileScript'
import { buildStyleEntry, compileLess } from './compileStyle'
import { setProd } from '../shared/env'
import { getUmdConfig } from '../config/webpack.umd.config'
import webpack, { Stats } from 'webpack'
import logger from '../shared/logger'

export function compileUMD() {
	return new Promise((resolve, reject) => {
		setProd()
		const config = getUmdConfig()

		webpack(config, (err, stats: Stats) => {
			if (err) {
				logger.error(err.toString())
				reject()
			}
			if (stats?.hasErrors()) {
				logger.error(stats)
				reject()
			}
			if (!err && !stats?.hasErrors()) {
				resolve()
			}
		})
	})
}

export async function compileDir(dir: string, modules: string | boolean = false) {
	const dirs = await readdir(dir)
	await Promise.all(
		dirs.map((filename) => {
			const filePath = resolve(dir, filename)
			;[TESTS_DIR_NAME, EXAMPLE_DIR_NAME, DOCS_DIR_NAME].includes(filename) && removeSync(filePath)
			return compileFile(filePath, modules)
		})
	)
}

export async function compileFile(path: string, modules: string | boolean = false) {
	isSFC(path) && (await compileSFC(path, modules))
	isScript(path) && (await compileScriptFile(path, modules))
	isLess(path) && (await compileLess(path))
	isDir(path) && (await compileDir(path))
}

export async function compileModule(modules: string | boolean = false) {
	if (modules === 'umd') {
		await compileUMD()
		return
	}

	const MODULE_DIR: string = modules === 'cjs' ? CJS_DIR : ES_DIR

	await copy(SRC_DIR, MODULE_DIR)

	const dir: string[] = await readdir(MODULE_DIR)
	await Promise.all(
		dir.map((filename: string) => {
			const path: string = resolve(MODULE_DIR, filename)

			isDir(path) && buildStyleEntry(path)

			return isDir(path) ? compileDir(path, modules) : null
		})
	)
	await compileLibraryEntry(MODULE_DIR, await getComponentNames(), await getExportDirNames(), modules)
}
