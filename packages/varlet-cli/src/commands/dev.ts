import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import logger from '../shared/logger'
import { getDevConfig } from '../config/webpack.dev.config'
import { getPort } from 'portfinder'
import { buildMobileSiteRoutes, buildPcSiteRoutes } from '../shared/fsUtils'
import { setDev } from '../shared/env'

export function runDevServer(port: number, config: any) {
	const { host } = config.devServer
	const server = new WebpackDevServer(webpack(config), config.devServer)

	;(server as any).showStatus = function () {}

	server.listen(port, host, (err?: Error) => {
		if (err) {
			logger.error(err.toString())
			return
		}

		logger.success(`Server running at http://${host}:${port}`)
	})
}

export async function dev() {
	setDev()
	await buildMobileSiteRoutes()
	buildPcSiteRoutes()

	const config = getDevConfig()
	const { port } = config.devServer
	getPort(
		{
			port,
		},
		(err: Error, port: number) => {
			if (err) {
				logger.error(err.toString())
				return
			}
			runDevServer(port, config)
		}
	)
}
