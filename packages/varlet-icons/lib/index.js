#!/usr/bin/env node
import webfont from 'webfont'
import commander from 'commander'
import fse from 'fs-extra'
import sharp from 'sharp'
import { resolve, parse } from 'path'
import { pathToFileURL } from 'url'

const { writeFile, ensureDir, removeSync, readdirSync } = fse

const CWD = process.cwd()
const SVG_DIR = resolve(CWD, 'svg')
const DIST_DIR = resolve(CWD, 'dist')
const FONTS_DIR = resolve(DIST_DIR, 'fonts')
const CSS_DIR = resolve(DIST_DIR, 'css')
const PNG_DIR = resolve(DIST_DIR, 'png')
const formats = ['ttf']

async function resetDistDir() {
  removeSync(DIST_DIR)
  await Promise.all([ensureDir(FONTS_DIR), ensureDir(CSS_DIR), ensureDir(PNG_DIR)])
}

async function buildPNG(svgFiles) {
  await Promise.all(
    svgFiles.map((svg) => {
      const { name } = parse(svg)
      return sharp(resolve(SVG_DIR, svg))
        .png()
        .toFile(resolve(PNG_DIR, `${name}.png`))
    })
  )
}

async function build() {
  const { default: config } = await import(pathToFileURL(resolve(CWD, 'varlet-icons.config.js')))
  const { base64, publicPath, namespace, fontName, fileName, fontWeight = 'normal', fontStyle = 'normal' } = config

  await resetDistDir()
  const svgFiles = readdirSync(SVG_DIR)

  const [{ ttf }] = await Promise.all([
    webfont.default({
      files: `${SVG_DIR}/*.svg`,
      fontName,
      formats,
      fontHeight: 512,
      descent: 64,
    }),
    buildPNG(svgFiles),
  ])

  const icons = svgFiles.map((svgName) => {
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
