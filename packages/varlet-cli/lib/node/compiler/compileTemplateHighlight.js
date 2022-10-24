import fse from 'fs-extra';
import { SRC_DIR, HL_MD, HL_API_RE, HL_COMPONENT_NAME_RE, HL_TITLE_ATTRIBUTES_RE, HL_TITLE_EVENTS_RE, HL_TITLE_SLOTS_RE, HL_WEB_TYPES_JSON, HL_DIR, HL_TAGS_JSON, HL_ATTRIBUTES_JSON, CLI_PACKAGE_JSON, } from '../shared/constant.js';
import { resolve } from 'path';
import { isDir, isMD } from '../shared/fsUtils.js';
import { get } from 'lodash-es';
import { getVarletConfig } from '../config/varlet.config.js';
const { ensureDir, readdirSync, readFileSync, readJSONSync, writeFile } = fse;
const TABLE_HEAD_RE = /\s*\|.*\|\s*\n\s*\|.*---+\s*\|\s*\n+/;
const TABLE_FOOT_RE = /(\|\s*$)|(\|\s*\n(?!\s*\|))/;
export const replaceDot = (s) => s.replace(/`/g, '');
export const replaceUnderline = (s) => s.replace(/_/g, '');
export function parseTable(table) {
    const rows = table.split('\n').filter(Boolean);
    return rows.map((row) => {
        const cols = row.split('|');
        cols.shift();
        cols.pop();
        return cols.map((col) => col.replace(/__varlet_axis__/g, '|').trim());
    });
}
export function compileTable(md, titleRe) {
    const apiMatched = md.match(HL_API_RE);
    if (!apiMatched) {
        return '';
    }
    md = md.slice(apiMatched.index + apiMatched[0].length);
    const titleMatched = md.match(titleRe);
    if (!titleMatched) {
        return '';
    }
    md = md.slice(titleMatched.index + titleMatched[0].length);
    const tableHeadMatched = md.match(TABLE_HEAD_RE);
    if (!tableHeadMatched) {
        return '';
    }
    md = md.slice(tableHeadMatched.index + tableHeadMatched[0].length);
    const tableFootMatched = md.match(TABLE_FOOT_RE);
    if (!tableFootMatched) {
        return '';
    }
    md = md.slice(0, tableFootMatched.index + tableFootMatched[0].length);
    return md.replace(/\\\|/g, '__varlet_axis__').trim();
}
export function compileTags(table, tags, componentName, varletConfig) {
    tags[`${get(varletConfig, 'namespace')}-${componentName}`] = {
        attributes: table.attributesTable.map((row) => replaceDot(row[0])),
    };
}
export function compileAttributes(table, attributes, componentName, varletConfig) {
    table.attributesTable.forEach((row) => {
        const attrNamespace = `${get(varletConfig, 'namespace')}-${componentName}/${replaceDot(row[0])}`;
        attributes[attrNamespace] = {
            type: replaceUnderline(row[2]),
            description: `${row[1]} 默认值：${replaceDot(row[3])}`,
        };
    });
}
export function compileWebTypes(table, webTypes, componentName, varletConfig) {
    const { attributesTable, eventsTable, slotsTable } = table;
    const attributes = attributesTable.map((row) => ({
        name: replaceDot(row[0]),
        description: row[1],
        default: replaceDot(row[3]),
        value: {
            type: replaceUnderline(row[2]),
            kind: 'expression',
        },
    }));
    const events = eventsTable.map((row) => ({
        name: replaceDot(row[0]),
        description: row[1],
    }));
    const slots = slotsTable.map((row) => ({
        name: replaceDot(row[0]),
        description: row[1],
    }));
    webTypes.contributions.html.tags.push({
        name: `${get(varletConfig, 'namespace')}-${componentName}`,
        attributes,
        events,
        slots,
    });
}
export function compileMD(path, tags, attributes, webTypes, varletConfig) {
    if (!path.endsWith(HL_MD)) {
        return;
    }
    const md = readFileSync(path, 'utf-8');
    const componentName = path.match(HL_COMPONENT_NAME_RE)[2];
    const attributesTable = parseTable(compileTable(md, HL_TITLE_ATTRIBUTES_RE));
    const eventsTable = parseTable(compileTable(md, HL_TITLE_EVENTS_RE));
    const slotsTable = parseTable(compileTable(md, HL_TITLE_SLOTS_RE));
    const table = {
        attributesTable,
        eventsTable,
        slotsTable,
    };
    compileWebTypes(table, webTypes, componentName, varletConfig);
    compileTags(table, tags, componentName, varletConfig);
    compileAttributes(table, attributes, componentName, varletConfig);
}
export function compileDir(path, tags, attributes, webTypes, varletConfig) {
    const dir = readdirSync(path);
    dir.forEach((filename) => {
        const filePath = resolve(path, filename);
        isDir(filePath) && compileDir(filePath, tags, attributes, webTypes, varletConfig);
        isMD(filePath) && compileMD(filePath, tags, attributes, webTypes, varletConfig);
    });
}
export async function compileTemplateHighlight() {
    await ensureDir(HL_DIR);
    const varletConfig = await getVarletConfig();
    const tags = {};
    const attributes = {};
    const webTypes = {
        $schema: 'https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json',
        framework: 'vue',
        version: readJSONSync(CLI_PACKAGE_JSON).version,
        name: get(varletConfig, 'title'),
        contributions: {
            html: {
                tags: [],
                'types-syntax': 'typescript',
            },
        },
    };
    compileDir(SRC_DIR, tags, attributes, webTypes, varletConfig);
    await Promise.all([
        writeFile(HL_WEB_TYPES_JSON, JSON.stringify(webTypes, null, 2)),
        writeFile(HL_TAGS_JSON, JSON.stringify(tags, null, 2)),
        writeFile(HL_ATTRIBUTES_JSON, JSON.stringify(attributes, null, 2)),
    ]);
}
