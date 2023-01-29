#!/usr/bin/env node
import webfont from 'webfont'
import commander from 'commander'
import fse from 'fs-extra'
import { resolve } from 'path'
import { pathToFileURL } from 'url'

const { writeFile, ensureDir, removeSync, readdirSync } = fse

async function build() {
  const CWD = process.cwd()
  const SVG_DIR = resolve(CWD, 'svg')
  const DIST_DIR = resolve(CWD, 'dist')
  const FONTS_DIR = resolve(DIST_DIR, 'fonts')
  const CSS_DIR = resolve(DIST_DIR, 'css')
  const formats = ['ttf', 'woff', 'woff2']
  const { default: config } = await import(pathToFileURL(resolve(CWD, 'varlet-icons.config.js')))

  const { base64, publicPath, namespace, fontName, fileName, fontWeight = 'normal', fontStyle = 'normal' } = config

  const { ttf } = await webfont.default({
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

  const iconNames = icons.map((iconName) => `  '${iconName.name}'`)

  const indexTemplate = `\
export const pointCodes = {
  ${icons.map(({ pointCode, name }) => `'${name}': '${pointCode}'`).join(',\n  ')}
}

export default [
${iconNames.join(',\n')}
]
`

  const cssTemplate = `\
@font-face {
  font-family: "${fontName}";
  src: url("${
    base64
      ? `data:font/truetype;charset=utf-8;base64,${ttf.toString('base64')}`
      : `${publicPath}${fileName}-webfont.ttf`
  }") format("truetype");
  font-weight: ${fontWeight};
  font-style: ${fontStyle};
}

.${namespace}--set {
  font-family: "${fontName}";
}

${icons
  .map((icon) => {
    return `.${namespace}-${icon.name}::before {
  content: "\\${icon.pointCode}";
}`
  })
  .join('\n\n')}
`

  await Promise.all([
    writeFile(resolve(FONTS_DIR, `${fileName}-webfont.ttf`), ttf),
    writeFile(resolve(CSS_DIR, `${fileName}.css`), cssTemplate),
    writeFile(resolve(CSS_DIR, `${fileName}.less`), cssTemplate),
    writeFile(resolve(DIST_DIR, 'index.js'), indexTemplate),
  ])

  console.log('build success!')
}

commander.command('build').description('Build varlet icons from svg').action(build)

commander.parse()
