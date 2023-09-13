import { PLAYGROUND, DOCUMENTATION_EN, DOCUMENTATION_ZH } from './constant'
import { commands, window, Selection, env, Uri, Range, ViewColumn, type ExtensionContext } from 'vscode'
import { getLanguage } from './env'
import { isPlainObject } from '@varlet/shared'

interface OpenPlaygroundOptions {
  selectionWrapTemplate?: boolean
  selection?: boolean
}

function openPlayground(options: OpenPlaygroundOptions = {}) {
  const { selectionWrapTemplate = false, selection = false } = options
  const { activeTextEditor } = window

  if (!activeTextEditor || !selection) {
    env.openExternal(Uri.parse(PLAYGROUND))
    return
  }

  const range = new Range(activeTextEditor.selection.start, activeTextEditor.selection.end)
  let text = activeTextEditor.document.getText(range)

  if (!text.trim()) {
    env.openExternal(Uri.parse(PLAYGROUND))
    return
  }

  if (selectionWrapTemplate) {
    text = `<template>\n${text}\n</template>`
  }

  const file = { 'App.vue': text }
  const hash = btoa(unescape(encodeURIComponent(JSON.stringify(file))))
  env.openExternal(Uri.parse(`${PLAYGROUND}#${hash}`))
}

function openDocumentation() {
  const language = getLanguage()
  env.openExternal(Uri.parse(language === 'en-US' ? `${DOCUMENTATION_EN}/home` : `${DOCUMENTATION_ZH}/home`))
}

function openWebview(url: string) {
  const panel = window.createWebviewPanel('varlet-webview', 'Varlet Webview', ViewColumn.One, {
    enableScripts: true,
  })

  panel.webview.html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Varlet Webview</title>
    <style>
      body {
        margin: 0;
      }

      iframe {
        width: 100vw;
        height: 100vh;
        border: none;
      }
    </style>
  </head>
  <body>
    <iframe src="${url}"></iframe>
  </body>

  <script>
    const vscode = acquireVsCodeApi();
  
    window.addEventListener('message', ({ data }) => {
      vscode.postMessage(data)
    })
  </script>
</html>`

  panel.webview.onDidReceiveMessage((data) => {
    if (isPlainObject(data) && data.eventType === 'copy') {
      env.clipboard.writeText(data.text)
    }
  })
}

export function registerCommands(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('varlet.move-cursor', (characterDelta: number) => {
      const active = window.activeTextEditor!.selection.active!
      const position = active.translate({ characterDelta })
      window.activeTextEditor!.selection = new Selection(position, position)
    }),

    commands.registerCommand('varlet.open-documentation', () => {
      openDocumentation()
    }),

    commands.registerCommand('varlet.open-playground', () => {
      openPlayground({ selection: false })
    }),

    commands.registerCommand('varlet.open-playground-by-selection', () => {
      openPlayground({ selection: true })
    }),

    commands.registerCommand('varlet.open-playground-by-selection-and-wrap-template-tag', () => {
      openPlayground({ selection: true, selectionWrapTemplate: true })
    }),

    commands.registerCommand('varlet.open-webview', openWebview)
  )
}
