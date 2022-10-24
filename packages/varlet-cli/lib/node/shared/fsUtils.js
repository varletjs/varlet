import globSync from 'glob';
import fse from 'fs-extra';
import { extname, resolve } from 'path';
import { PUBLIC_DIR_INDEXES, SCRIPTS_EXTENSIONS, SRC_DIR } from './constant.js';
import { fileURLToPath } from 'url';
const { appendFileSync, ensureFileSync, lstatSync, outputFileSync, pathExistsSync, readdir, readFileSync } = fse;
export async function getPublicDirs() {
    const srcDir = await readdir(SRC_DIR);
    return srcDir.filter((filename) => isPublicDir(resolve(SRC_DIR, filename)));
}
export const isMD = (file) => pathExistsSync(file) && extname(file) === '.md';
export const isDir = (file) => pathExistsSync(file) && lstatSync(file).isDirectory();
export const isSFC = (file) => pathExistsSync(file) && extname(file) === '.vue';
export const isDTS = (file) => pathExistsSync(file) && file.endsWith('.d.ts');
export const isScript = (file) => pathExistsSync(file) && SCRIPTS_EXTENSIONS.includes(extname(file));
export const isLess = (file) => pathExistsSync(file) && extname(file) === '.less';
export const isPublicDir = (dir) => PUBLIC_DIR_INDEXES.some((index) => pathExistsSync(resolve(dir, index)));
export const replaceExt = (file, ext) => file.replace(extname(file), ext);
export function smartAppendFileSync(file, code) {
    if (pathExistsSync(file)) {
        const content = readFileSync(file, 'utf-8');
        if (!content.includes(code)) {
            appendFileSync(file, code);
        }
    }
}
export function outputFileSyncOnChange(path, code) {
    ensureFileSync(path);
    const content = readFileSync(path, 'utf-8');
    if (content !== code) {
        outputFileSync(path, code);
    }
}
export function glob(pattern) {
    return new Promise((resolve, reject) => {
        globSync(pattern, (err, files) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(files);
            }
        });
    });
}
export function getDirname(url) {
    return fileURLToPath(new URL('.', url));
}
