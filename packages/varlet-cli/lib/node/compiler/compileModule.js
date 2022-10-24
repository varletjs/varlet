import fse from 'fs-extra';
import { build } from 'vite';
import { resolve } from 'path';
import { EXAMPLE_DIR_NAME, TESTS_DIR_NAME, DOCS_DIR_NAME, SRC_DIR, ES_DIR, STYLE_DIR_NAME, LIB_DIR, } from '../shared/constant.js';
import { getPublicDirs, isDir, isDTS, isLess, isScript, isSFC } from '../shared/fsUtils.js';
import { compileSFC } from './compileSFC.js';
import { compileESEntry, compileCommonJSEntry, compileScriptFile } from './compileScript.js';
import { compileLess } from './compileStyle.js';
import { getESMBundleConfig, getUMDConfig } from '../config/vite.config.js';
import { getVarletConfig } from '../config/varlet.config.js';
import { generateReference } from './compileTypes.js';
const { copy, ensureFileSync, readdir, removeSync } = fse;
export function compileUMD() {
    return new Promise((resolve, reject) => {
        getVarletConfig().then((varletConfig) => {
            build(getUMDConfig(varletConfig))
                .then(() => resolve())
                .catch(reject);
        });
    });
}
export function compileESMBundle() {
    return new Promise((resolve, reject) => {
        getVarletConfig().then((varletConfig) => {
            build(getESMBundleConfig(varletConfig))
                .then(() => resolve())
                .catch(reject);
        });
    });
}
export async function compileDir(dir) {
    const dirs = await readdir(dir);
    await Promise.all(dirs.map((filename) => {
        const file = resolve(dir, filename);
        [TESTS_DIR_NAME, EXAMPLE_DIR_NAME, DOCS_DIR_NAME].includes(filename) && removeSync(file);
        if (isDTS(file) || filename === STYLE_DIR_NAME) {
            return Promise.resolve();
        }
        return compileFile(file);
    }));
}
export async function compileFile(file) {
    isSFC(file) && (await compileSFC(file));
    isScript(file) && (await compileScriptFile(file));
    isLess(file) && (await compileLess(file));
    isDir(file) && (await compileDir(file));
}
export async function compileModule(modules = false) {
    if (modules === 'umd') {
        await compileUMD();
        return;
    }
    if (modules === 'esm-bundle') {
        await compileESMBundle();
        return;
    }
    process.env.BABEL_MODULE = modules === 'commonjs' ? 'commonjs' : 'module';
    const dest = modules === 'commonjs' ? LIB_DIR : ES_DIR;
    await copy(SRC_DIR, dest);
    const moduleDir = await readdir(dest);
    await Promise.all(moduleDir.map((filename) => {
        const file = resolve(dest, filename);
        isDir(file) && ensureFileSync(resolve(file, './style/index.js'));
        return isDir(file) ? compileDir(file) : null;
    }));
    const publicDirs = await getPublicDirs();
    if (modules === 'commonjs') {
        await compileCommonJSEntry(dest, publicDirs);
    }
    else {
        await compileESEntry(dest, publicDirs);
    }
    generateReference(dest);
}
