import { StatusBarAlignment, window } from 'vscode'

export function registerStatusBarItems() {
  const statusBarList = [
    {
      name: 'Varlet Documentation',
      priority: 0,
      command: 'varlet.open-documentation',
      tooltip: 'Open Varlet Documentation',
    },
    {
      name: 'Varlet Playground',
      priority: 0,
      command: 'varlet.open-playground',
      tooltip: 'Open Varlet Playground',
    },
  ]
  statusBarList.forEach((item) => {
    const statusBar = window.createStatusBarItem(StatusBarAlignment.Left, item.priority)
    statusBar.command = item.command
    statusBar.text = item.name
    statusBar.tooltip = item.tooltip
    statusBar.show()
  })
}
