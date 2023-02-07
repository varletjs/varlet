import fse from 'fs-extra'
import {
  SRC_DIR,
  HL_MD,
  HL_API_RE,
  HL_COMPONENT_NAME_RE,
  HL_TITLE_ATTRIBUTES_RE,
  HL_TITLE_EVENTS_RE,
  HL_TITLE_SLOTS_RE,
  HL_WEB_TYPES_JSON,
  HL_DIR,
} from '../shared/constant.js'
import { resolve } from 'path'
import { getCliVersion, isDir, isMD } from '../shared/fsUtils.js'
import { get } from 'lodash-es'
import { getVarletConfig, type VarletConfig } from '../config/varlet.config.js'

const { ensureDir, readdirSync, readFileSync, writeFileSync } = fse

const TABLE_HEAD_RE = /\s*\|.*\|\s*\n\s*\|.*---+\s*\|\s*\n+/
const TABLE_FOOT_RE = /(\|\s*$)|(\|\s*\n(?!\s*\|))/

export const replaceDot = (s: string) => s.replace(/`/g, '')

export const replaceVersion = (s: string) => s.replace(/\*\*\*.+\*\*\*/g, '').trim()

export const replaceUnderline = (s: string) => s.replace(/_/g, '')

export function parseTable(table: string) {
  const rows = table.split('\n').filter(Boolean)
  return rows.map((row) => {
    const cols = row.split('|')
    cols.shift()
    cols.pop()
    return cols.map((col) => col.replace(/__varlet_axis__/g, '|').trim())
  })
}

export function compileTable(md: string, titleRe: RegExp): string {
  const apiMatched = md.match(HL_API_RE)
  if (!apiMatched) {
    return ''
  }
  md = md.slice((apiMatched.index as number) + apiMatched[0].length)

  const titleMatched = md.match(titleRe)
  if (!titleMatched) {
    return ''
  }
  md = md.slice((titleMatched.index as number) + titleMatched[0].length)

  const tableHeadMatched = md.match(TABLE_HEAD_RE)
  if (!tableHeadMatched) {
    return ''
  }
  md = md.slice((tableHeadMatched.index as number) + tableHeadMatched[0].length)

  const tableFootMatched = md.match(TABLE_FOOT_RE)
  if (!tableFootMatched) {
    return ''
  }
  md = md.slice(0, (tableFootMatched.index as number) + tableFootMatched[0].length)

  return md.replace(/\\\|/g, '__varlet_axis__').trim()
}

export function compileWebTypes(
  table: Record<string, any>,
  webTypes: Record<string, any>,
  componentName: string,
  varletConfig: Required<VarletConfig>
) {
  const { attributesTable, eventsTable, slotsTable } = table

  const attributes = attributesTable.map((row: any) => ({
    name: replaceVersion(replaceDot(row[0])),
    description: row[1],
    default: replaceDot(row[3]),
    value: {
      type: replaceUnderline(row[2]),
      kind: 'expression',
    },
  }))

  const events = eventsTable.map((row: any) => ({
    name: replaceVersion(replaceDot(row[0])),
    description: row[1],
  }))

  const slots = slotsTable.map((row: any) => ({
    name: replaceVersion(replaceDot(row[0])),
    description: row[1],
  }))

  webTypes.contributions.html.tags.push({
    name: `${get(varletConfig, 'namespace')}-${componentName}`,
    attributes,
    events,
    slots,
  })
}

export function compileMD(path: string, webTypes: Record<string, any>, varletConfig: Required<VarletConfig>) {
  if (!path.endsWith(HL_MD)) {
    return
  }

  const md = readFileSync(path, 'utf-8')
  const componentName = path.match(HL_COMPONENT_NAME_RE)![2]
  const attributesTable = parseTable(compileTable(md, HL_TITLE_ATTRIBUTES_RE))
  const eventsTable = parseTable(compileTable(md, HL_TITLE_EVENTS_RE))
  const slotsTable = parseTable(compileTable(md, HL_TITLE_SLOTS_RE))

  const table = {
    attributesTable,
    eventsTable,
    slotsTable,
  }

  compileWebTypes(table, webTypes, componentName, varletConfig)
}

export function compileDir(path: string, webTypes: Record<string, any>, varletConfig: VarletConfig) {
  const dir = readdirSync(path)

  dir.forEach((filename) => {
    const filePath = resolve(path, filename)

    isDir(filePath) && compileDir(filePath, webTypes, varletConfig)
    isMD(filePath) && compileMD(filePath, webTypes, varletConfig)
  })
}

export async function compileTemplateHighlight() {
  await ensureDir(HL_DIR)

  const varletConfig = await getVarletConfig()
  const webTypes: Record<string, any> = {
    $schema: 'https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json',
    framework: 'vue',
    version: getCliVersion(),
    name: get(varletConfig, 'title'),
    contributions: {
      html: {
        tags: [],
        'types-syntax': 'typescript',
      },
    },
  }

  compileDir(SRC_DIR, webTypes, varletConfig)
  writeFileSync(HL_WEB_TYPES_JSON, JSON.stringify(webTypes, null, 2))
}
