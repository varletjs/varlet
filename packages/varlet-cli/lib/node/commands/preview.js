import fse from 'fs-extra';
import logger from '../shared/logger.js';
import execa from 'execa';
import { SITE_OUTPUT_PATH } from '../shared/constant.js';
const { pathExistsSync } = fse;
export async function preview() {
    var _a;
    if (!pathExistsSync(SITE_OUTPUT_PATH)) {
        logger.warning('Cannot find the site folder, you must first run the build command to build the document site');
        return;
    }
    try {
        await ((_a = execa.command('live-server --port=5500', { cwd: SITE_OUTPUT_PATH }).stdout) === null || _a === void 0 ? void 0 : _a.pipe(process.stdout));
    }
    catch (e) {
        logger.error(e.toString());
    }
}
