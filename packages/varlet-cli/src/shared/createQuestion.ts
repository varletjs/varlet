import prompts, { type PromptObject } from 'prompts'

export interface CreateOptions {
  name: string
  kebabCaseName: string
  bigCamelizeName: string
  locale?: boolean
  style?: string
  namespace?: string
}

export const createOptions: CreateOptions = {
  name: 'componentName',
  kebabCaseName: '',
  bigCamelizeName: '',
}

export async function createQuestion(question: PromptObject | Array<PromptObject>) {
  const result = await prompts(question, {
    onCancel: () => {
      throw new Error('❌ Operation cancelled')
    },
  })
  Object.assign(createOptions, result)

  return Promise.resolve(createOptions)
}
