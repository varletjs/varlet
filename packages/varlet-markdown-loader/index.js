const markdown = require('markdown-it')
const hljs = require('highlight.js')
const cardWrapper = require('./src/cardWrapper.js')

function highlight(str, lang) {
	if (lang && hljs.getLanguage(lang)) {
		return (
			'<pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/github.min.css">' +
			hljs.highlight(lang, str, true).value +
			'</code></pre>'
		)
	}

	return ''
}

function markLoader(source) {
	const md = markdown({
		html: true,
		typographer: true,
		highlight,
	})
	const html = cardWrapper(md.render(source))

	return (
		'<template>\n' +
		`<div class="varlet-site-doc">${html}</div>\n` +
		'</template>\n'
	)
}

module.exports = markLoader
