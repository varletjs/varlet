const markdown = require('markdown-it')
const hljs = require('highlight.js')
const loaderUtils = require('loader-utils')

function cardWrapper(html) {
  const group = html.replace(/<h3/g, ':::<h3').replace(/<h2/g, ':::<h2').split(':::')

  return group.map((fragment) => (fragment.includes('<h3') ? `<div class="card">${fragment}</div>` : fragment)).join('')
}

function highlight(str, lang, style) {
  if (lang && hljs.getLanguage(lang)) {
    return (
      '<pre class="hljs"><code>' +
      '<link rel="stylesheet" href="' +
      style +
      '"/>' +
      hljs.highlight(lang, str, true).value +
      '</code></pre>'
    )
  }

  return ''
}

function markLoader(source) {
  const options = loaderUtils.getOptions(this)
  const style = options.style || '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css'
  const md = markdown({
    html: true,
    typographer: true,
    highlight: (str, lang) => highlight(str, lang, style),
  })
  const html = cardWrapper(md.render(source))

  return `<template><div class="varlet-site-doc" v-pre>${html}</div></template>`
}

module.exports = markLoader
