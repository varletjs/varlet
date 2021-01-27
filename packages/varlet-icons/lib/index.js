#!/usr/bin/env node

const webfont = require('webfont').default
const commander = require('commander')
const { writeFile, ensureDir, removeSync, readdirSync } = require('fs-extra')
const { resolve } = require('path')

const CWD = process.cwd()
const SVG_DIR = resolve(CWD, 'svg')
const DIST_DIR = resolve(CWD, 'dist')
const FONTS_DIR = resolve(DIST_DIR, 'fonts')
const CSS_DIR = resolve(DIST_DIR, 'css')
const formats = ['ttf', 'eot', 'woff', 'woff2']

const config = require(resolve(CWD, 'varlet-icons.config.js'))

async function build() {
  const { publicPath, namespace, fontName, fileName, fontWeight = 'normal', fontStyle = 'normal' } = config

  const { ttf, eot, woff, woff2 } = await webfont({
    files: `${SVG_DIR}/*.svg`,
    fontName,
    formats,
    fontHeight: 512,
    descent: 64,
  })

  removeSync(DIST_DIR)

  await Promise.all([ensureDir(FONTS_DIR), ensureDir(CSS_DIR)])

  const icons = readdirSync(SVG_DIR).map((svgName) => {
    const i = svgName.indexOf('-')
    const extIndex = svgName.lastIndexOf('.')

    return {
      name: svgName.slice(i + 1, extIndex),
      pointCode: svgName.slice(1, i),
    }
  })

  const cssTemplate = `\
@font-face {
  font-family: "${fontName}";
  src: url("${publicPath}${fileName}-webfont.eot");
  src: url("${publicPath}${fileName}-webfont.eot") format("embedded-opentype"), url("${publicPath}${fileName}-webfont.woff2") format("woff2"), url("${publicPath}${fileName}-webfont.woff") format("woff"), url("${publicPath}${fileName}-webfont.ttf") format("truetype");
  font-weight: ${fontWeight};
  font-style: ${fontStyle};
}

.${namespace}--set,
.${namespace}--set::before {
  position: relative;
  display: inline-block;
  font: normal normal normal 14px/1 "${fontName}";
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

${icons
    .map((icon) => {
      return `.${namespace}-${icon.name}::before {
  content: "\\${icon.pointCode}";
}`
    })
    .join('\n\n')}
`

  const iconNames = icons.map((iconName) => `  "${iconName.name}"`)

  const indexTemplate = `\
module.exports = [
${iconNames.join(',\n')}
]
`

  await Promise.all([
    writeFile(resolve(FONTS_DIR, `${fileName}-webfont.ttf`), ttf),
    writeFile(resolve(FONTS_DIR, `${fileName}-webfont.eot`), eot),
    writeFile(resolve(FONTS_DIR, `${fileName}-webfont.woff`), woff),
    writeFile(resolve(FONTS_DIR, `${fileName}-webfont.woff2`), woff2),
    writeFile(resolve(CSS_DIR, `${fileName}.css`), cssTemplate),
    writeFile(resolve(CSS_DIR, `${fileName}.less`), cssTemplate),
    writeFile(resolve(DIST_DIR, 'index.js'), indexTemplate),
  ])

  console.log('build success!')
}

commander.command('build').description('Build varlet icons from svg').action(build)

commander.parse()
