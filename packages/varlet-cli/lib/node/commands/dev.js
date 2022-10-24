import chokidar from 'chokidar';
import fse from 'fs-extra';
import logger from '../shared/logger.js';
import { createServer } from 'vite';
import { SRC_DIR, VARLET_CONFIG } from '../shared/constant.js';
import { buildSiteEntry } from '../compiler/compileSiteEntry.js';
import { getDevConfig } from '../config/vite.config.js';
import { getVarletConfig } from '../config/varlet.config.js';
import { merge } from 'lodash-es';
const { ensureDirSync, pathExistsSync } = fse;
let server;
let watcher;
async function startServer(force) {
    const isRestart = Boolean(server);
    logger.info(`${isRestart ? 'Res' : 'S'}tarting server...`);
    // close all instance
    server && (await server.close());
    watcher && (await watcher.close());
    // build all config
    await buildSiteEntry();
    const varletConfig = await getVarletConfig();
    const devConfig = getDevConfig(varletConfig);
    const inlineConfig = merge(devConfig, force ? { optimizeDeps: { force: true } } : {});
    // create all instance
    server = await createServer(inlineConfig);
    await server.listen();
    server.printUrls();
    if (pathExistsSync(VARLET_CONFIG)) {
        watcher = chokidar.watch(VARLET_CONFIG);
        watcher.on('change', () => startServer(force));
    }
    logger.success(`\n${isRestart ? 'Res' : 'S'}tart successfully!!!`);
}
export async function dev(options) {
    process.env.NODE_ENV = 'development';
    ensureDirSync(SRC_DIR);
    await startServer(options.force);
}
