import fse from 'fs-extra'
import markdownIt from 'markdown-it'
import logger from '../shared/logger.js'
import { CHECKLIST_FILE } from '../shared/constant.js'
import { COMMIT_MESSAGE_RE, isVersionCommitMessage, getCommitMessage } from './commitLint.js'

const { readFileSync, existsSync } = fse

export interface CheckBlock {
  type: string
  list: string[]
}

const blockRE = /<h3>(.|\n|\r)+?<\/ul>/g
const typeRE = /<h3>(.+)<\/h3>/
const childrenRE = /<ul>(.|\n|\r)+<\/ul>/
const childRE = /<li>(.|\n|\r)+?<\/li>/g

export function getCheckBlocks(html: string) {
  const blocks = html.match(blockRE) ?? []
  const checkBlocks: CheckBlock[] = []

  blocks.forEach((block) => {
    const type = block.match(typeRE)?.[1]
    const childrenBlock = block.match(childrenRE)?.[0]

    if (!type || !childrenBlock) {
      return
    }

    const children = childrenBlock.match(childRE)

    if (!children) {
      return
    }

    const list = children.map((child) => {
      return child
        .replaceAll('<li>', '')
        .replaceAll('</li>', '')
        .replaceAll('<p>', '')
        .replaceAll('</p>', '')
        .replaceAll('\n', '')
    })

    checkBlocks.push({
      type,
      list,
    })
  })

  return checkBlocks
}

export async function checklist(gitParams: string) {
  const commitMessage = getCommitMessage(gitParams)

  if (isVersionCommitMessage(commitMessage) || !existsSync(CHECKLIST_FILE)) {
    return
  }

  const content = readFileSync(CHECKLIST_FILE, 'utf-8')
  const html = markdownIt().render(content)
  const checkBlocks = getCheckBlocks(html)

  if (!checkBlocks.length) {
    logger.warning('Cannot find anything need to checked')
    return
  }

  const type = commitMessage.match(COMMIT_MESSAGE_RE)?.[1]
  const typeChildren = checkBlocks.find((checkBlock) => checkBlock.type === type)?.list ?? []
  const commonChildren = checkBlocks.find((checkBlock) => checkBlock.type === 'common')?.list ?? []
  const list = [...commonChildren, ...typeChildren]

  if (!list.length) {
    return
  }

  logger.title('\nIt is recommended that you check the following information before pushing:\n')
  logger.warning(`${list.map((item) => `🔔 ${item}`).join('\n')}\n`)
  logger.title('If there are changes that need to be amended, please use git commit --amend to resolve.')
}
