import fse from 'fs-extra';
import { transformAsync } from '@babel/core';
import { bigCamelize } from '@varlet/shared';
import { replaceExt } from '../shared/fsUtils.js';
import { extractStyleDependencies, IMPORT_CSS_RE, IMPORT_LESS_RE, REQUIRE_CSS_RE, REQUIRE_LESS_RE, } from './compileStyle.js';
import { resolve } from 'path';
import { get } from 'lodash-es';
import { getVarletConfig } from '../config/varlet.config.js';
const { writeFileSync, readFileSync, removeSync, writeFile } = fse;
export const IMPORT_VUE_PATH_RE = /((?<!['"`])import\s+.+from\s+['"]\s*\.{1,2}\/.+)\.vue(\s*['"`]);?(?!\s*['"`])/g;
export const IMPORT_TS_PATH_RE = /((?<!['"`])import\s+.+from\s+['"]\s*\.{1,2}\/.+)\.ts(\s*['"`]);?(?!\s*['"`])/g;
export const IMPORT_JSX_PATH_RE = /((?<!['"`])import\s+.+from\s+['"]\s*\.{1,2}\/.+)\.jsx(\s*['"`]);?(?!\s*['"`])/g;
export const IMPORT_TSX_PATH_RE = /((?<!['"`])import\s+.+from\s+['"]\s*\.{1,2}\/.+)\.tsx(\s*['"`]);?(?!\s*['"`])/g;
export const REQUIRE_VUE_PATH_RE = /(?<!['"`]\s*)(require\s*\(\s*['"]\s*\.{1,2}\/.+)\.vue(\s*['"`]\))(?!\s*['"`])/g;
export const REQUIRE_TS_PATH_RE = /(?<!['"`]\s*)(require\s*\(\s*['"]\s*\.{1,2}\/.+)\.ts(\s*['"`]\))(?!\s*['"`])/g;
export const REQUIRE_JSX_PATH_RE = /(?<!['"`]\s*)(require\s*\(\s*['"]\s*\.{1,2}\/.+)\.jsx(\s*['"`]\))(?!\s*['"`])/g;
export const REQUIRE_TSX_PATH_RE = /(?<!['"`]\s*)(require\s*\(\s*['"]\s*\.{1,2}\/.+)\.tsx(\s*['"`]\))(?!\s*['"`])/g;
const scriptReplacer = (_, p1, p2) => `${p1}.js${p2}`;
export const replaceVueExt = (script) => script.replace(IMPORT_VUE_PATH_RE, scriptReplacer).replace(REQUIRE_VUE_PATH_RE, scriptReplacer);
export const replaceTSExt = (script) => script.replace(IMPORT_TS_PATH_RE, scriptReplacer).replace(REQUIRE_TS_PATH_RE, scriptReplacer);
export const replaceJSXExt = (script) => script.replace(IMPORT_JSX_PATH_RE, scriptReplacer).replace(REQUIRE_JSX_PATH_RE, scriptReplacer);
export const replaceTSXExt = (script) => script.replace(IMPORT_TSX_PATH_RE, scriptReplacer).replace(REQUIRE_TSX_PATH_RE, scriptReplacer);
export const moduleCompatible = async (script) => {
    const moduleCompatible = get(await getVarletConfig(), 'moduleCompatible', {});
    Object.keys(moduleCompatible).forEach((esm) => {
        const commonjs = moduleCompatible[esm];
        script = script.replace(esm, commonjs);
    });
    return script;
};
export async function compileScript(script, file) {
    const modules = process.env.BABEL_MODULE;
    if (modules === 'commonjs') {
        script = await moduleCompatible(script);
    }
    let { code } = (await transformAsync(script, {
        filename: file,
    }));
    code = extractStyleDependencies(file, code, modules === 'commonjs' ? REQUIRE_CSS_RE : IMPORT_CSS_RE);
    code = extractStyleDependencies(file, code, modules === 'commonjs' ? REQUIRE_LESS_RE : IMPORT_LESS_RE);
    code = replaceVueExt(code);
    code = replaceTSXExt(code);
    code = replaceJSXExt(code);
    code = replaceTSExt(code);
    removeSync(file);
    writeFileSync(replaceExt(file, '.js'), code, 'utf8');
}
export async function compileScriptFile(file) {
    const sources = readFileSync(file, 'utf-8');
    await compileScript(sources, file);
}
export async function compileESEntry(dir, publicDirs) {
    const imports = [];
    const plugins = [];
    const constInternalComponents = [];
    const cssImports = [];
    const publicComponents = [];
    publicDirs.forEach((dirname) => {
        const publicComponent = bigCamelize(dirname);
        publicComponents.push(publicComponent);
        imports.push(`import ${publicComponent}, * as ${publicComponent}Module from './${dirname}'`);
        constInternalComponents.push(`export const _${publicComponent}Component = ${publicComponent}Module._${publicComponent}Component || {}`);
        plugins.push(`${publicComponent}.install && app.use(${publicComponent})`);
        cssImports.push(`import './${dirname}/style'`);
    });
    const install = `
function install(app) {
  ${plugins.join('\n  ')}
}
`;
    const indexTemplate = `\
${imports.join('\n')}\n
${constInternalComponents.join('\n')}\n
${install}
export {
  install,
  ${publicComponents.join(',\n  ')}
}

export default {
  install,
  ${publicComponents.join(',\n  ')}
}
`;
    const styleTemplate = `\
${cssImports.join('\n')}
`;
    const umdTemplate = `\
${imports.join('\n')}\n
${cssImports.join('\n')}\n
${install}
export {
  install,
  ${publicComponents.join(',\n  ')}
}

export default {
  install,
  ${publicComponents.join(',\n  ')}
}
`;
    await Promise.all([
        writeFile(resolve(dir, 'index.js'), indexTemplate, 'utf-8'),
        writeFile(resolve(dir, 'umdIndex.js'), umdTemplate, 'utf-8'),
        writeFile(resolve(dir, 'style.js'), styleTemplate, 'utf-8'),
    ]);
}
export async function compileCommonJSEntry(dir, publicDirs) {
    const requires = [];
    const plugins = [];
    const cssRequires = [];
    const publicComponents = [];
    publicDirs.forEach((dirname) => {
        const publicComponent = bigCamelize(dirname);
        publicComponents.push(publicComponent);
        requires.push(`var ${publicComponent} = require('./${dirname}')['default']`);
        plugins.push(`${publicComponent}.install && app.use(${publicComponent})`);
        cssRequires.push(`require('./${dirname}/style')`);
    });
    const install = `
function install(app) {
  ${plugins.join('\n  ')}
}
`;
    const indexTemplate = `\
${requires.join('\n')}\n
${install}

module.exports = {
  install,
  ${publicComponents.join(',\n  ')}
}
`;
    const styleTemplate = `\
${cssRequires.join('\n')}
`;
    await Promise.all([
        writeFile(resolve(dir, 'index.js'), indexTemplate, 'utf-8'),
        writeFile(resolve(dir, 'style.js'), styleTemplate, 'utf-8'),
    ]);
}
