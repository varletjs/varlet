import webpack, { Stats } from 'webpack'
import logger from '../shared/logger'
import { buildMobileSiteRoutes, buildPcSiteRoutes } from '../compiler/compileRoutes'
import { getBuildConfig } from '../config/webpack.build.config'
import { setProd } from '../shared/env'
import { pathExistsSync, writeFileSync } from 'fs-extra'
import { VARLET_CONFIG } from '../shared/constant'

export async function build() {
	setProd()

	!pathExistsSync(VARLET_CONFIG) && writeFileSync(VARLET_CONFIG, 'module.exports = {}')

	await Promise.all([buildMobileSiteRoutes(), buildPcSiteRoutes()])

	const config = getBuildConfig()

	webpack(config, (err, stats: Stats) => {
		err && logger.error(err.toString())
		stats?.hasErrors() && logger.error(stats)
	})
}
