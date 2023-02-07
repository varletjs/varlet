import { PLAYGROUND } from './constant'
import { commands, window, Selection, env, Uri, Range } from 'vscode'

function openPlayground(wrapTemplate = false) {
  const { activeTextEditor } = window

  if (!activeTextEditor) {
    env.openExternal(Uri.parse(PLAYGROUND))
    return
  }

  const range = new Range(activeTextEditor.selection.start, activeTextEditor.selection.end)
  let text = activeTextEditor.document.getText(range)

  if (!text.trim()) {
    env.openExternal(Uri.parse(PLAYGROUND))
    return
  }

  if (wrapTemplate) {
    text = `<template>\n${text}\n</template>`
  }

  const file = { 'App.vue': text }
  const hash = btoa(unescape(encodeURIComponent(JSON.stringify(file))))
  env.openExternal(Uri.parse(`${PLAYGROUND}#${hash}`))
}

export function registerCommands() {
  commands.registerCommand('varlet.move-cursor', (characterDelta: number) => {
    const active = window.activeTextEditor!.selection.active!
    const position = active.translate({ characterDelta })
    window.activeTextEditor!.selection = new Selection(position, position)
  })

  commands.registerCommand('varlet.open-playground', () => {
    openPlayground()
  })

  commands.registerCommand('varlet.open-playground-and-wrap-template-tag', () => {
    openPlayground(true)
  })
}
