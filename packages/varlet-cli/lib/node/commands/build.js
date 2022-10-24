import fse from 'fs-extra';
import { SRC_DIR } from '../shared/constant.js';
import { build as buildVite } from 'vite';
import { getBuildConfig } from '../config/vite.config.js';
import { getVarletConfig } from '../config/varlet.config.js';
import { buildSiteEntry } from '../compiler/compileSiteEntry.js';
const { ensureDirSync } = fse;
export async function build() {
    process.env.NODE_ENV = 'production';
    ensureDirSync(SRC_DIR);
    await buildSiteEntry();
    const varletConfig = await getVarletConfig();
    const buildConfig = getBuildConfig(varletConfig);
    await buildVite(buildConfig);
}
