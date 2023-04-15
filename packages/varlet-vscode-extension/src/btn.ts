import { StatusBarAlignment, window, commands, env, Uri, type ExtensionContext } from 'vscode'
import { DOCUMENTATION_EN, DOCUMENTATION_ZH, PLAYGROUND } from './constant'
import { getLanguage } from './env'

export function registerBtns(context: ExtensionContext) {
  const language = getLanguage()
  console.log(language === 'en-US')
  const BtnList = [
    {
      name: language === 'en-US' ? 'Varlet Docs' : 'Varlet 文档',
      url: language === 'en-US' ? DOCUMENTATION_EN : DOCUMENTATION_ZH,
      priority: 0,
      command: 'varlet.open-doc',
      tooltip: language === 'en-US' ? '打开 Varlet 官方文档' : 'Open Varlet Doc',
    },
    {
      name: language === 'en-US' ? 'Varlet Playground' : 'Varlet 演示',
      url: PLAYGROUND,
      priority: 0,
      command: 'varlet.open-playground',
      tooltip: language === 'en-US' ? 'Open Varlet Playground' : '打开 Varlet 演示',
    },
  ]
  BtnList.forEach((item) => {
    const statusBar = window.createStatusBarItem(StatusBarAlignment.Left, item.priority)
    statusBar.command = item.command
    statusBar.text = item.name
    statusBar.tooltip = item.tooltip
    statusBar.show()
    const disposable = commands.registerCommand(item.command, () => {
      env.openExternal(Uri.parse(item.url))
    })
    context.subscriptions.push(disposable)
  })
}
