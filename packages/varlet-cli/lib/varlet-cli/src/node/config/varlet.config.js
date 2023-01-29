import fse from 'fs-extra';
import { mergeWith } from 'lodash-es';
import { VARLET_CONFIG, SITE_CONFIG } from '../shared/constant.js';
import { outputFileSyncOnChange } from '../shared/fsUtils.js';
import { isArray } from '@varlet/shared';
import { pathToFileURL } from 'url';
const { pathExistsSync, statSync } = fse;
export function defineConfig(config) {
    return config;
}
export function mergeStrategy(value, srcValue, key) {
    if (key === 'features' && isArray(srcValue)) {
        return srcValue;
    }
}
export async function getVarletConfig(emit = false) {
    const defaultConfig = (await import('./varlet.default.config.js')).default;
    const config = pathExistsSync(VARLET_CONFIG)
        ? (await import(`${pathToFileURL(VARLET_CONFIG).href}?_t=${statSync(VARLET_CONFIG).mtimeMs}`)).default
        : {};
    const mergedConfig = mergeWith(defaultConfig, config, mergeStrategy);
    if (emit) {
        const source = JSON.stringify(mergedConfig, null, 2);
        outputFileSyncOnChange(SITE_CONFIG, source);
    }
    return mergedConfig;
}
