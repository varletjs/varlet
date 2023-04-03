import fse from 'fs-extra'
import sharp from 'sharp'
import webfont from 'webfont'
import logger from '../shared/logger.js'
import { parse, resolve } from 'path'
import { ICONS_DIST_DIR, ICONS_CSS_DIR, ICONS_PNG_DIR, ICONS_FONTS_DIR, ICONS_SVG_DIR } from '../shared/constant.js'
import { getVarletConfig } from '../config/varlet.config.js'
import { get } from 'lodash-es'

const { removeSync, ensureDir, writeFile, readdirSync } = fse

async function removeDir() {
  removeSync(ICONS_DIST_DIR)
  await Promise.all([ensureDir(ICONS_FONTS_DIR), ensureDir(ICONS_CSS_DIR), ensureDir(ICONS_PNG_DIR)])
}

async function buildPNG(svgFiles: string[]) {
  await Promise.all(
    svgFiles.map((svg) => {
      return new Promise<void>((done) => {
        const { name } = parse(svg)
        sharp(resolve(ICONS_SVG_DIR, svg))
          .resize({ height: 100 })
          .toBuffer()
          .then((buffer) => {
            sharp({
              create: {
                width: 100,
                height: 100,
                channels: 4,
                background: '#4a7afe',
              },
            })
              .composite([
                {
                  input: buffer,
                  blend: 'dest-in',
                },
              ])
              .png()
              .toFile(resolve(ICONS_PNG_DIR, `${name}.png`))
              .then(() => {
                done()
              })
          })
      })
    })
  )
}

function buildWebFont(name: string) {
  return webfont.default({
    files: `${ICONS_SVG_DIR}/*.svg`,
    fontName: name,
    formats: ['ttf'],
    fontHeight: 512,
    descent: 64,
  })
}

export async function icons() {
  const varletConfig = await getVarletConfig()
  const { name, namespace, base64, publicPath, fontFamilyClassName, fontWeight, fontStyle } = get(varletConfig, 'icons')

  await removeDir()
  const svgFiles = readdirSync(ICONS_SVG_DIR)
  const [{ ttf }] = await Promise.all([buildWebFont(name!), buildPNG(svgFiles)])

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
  font-family: "${name}";
  src: url("${
    base64 ? `data:font/truetype;charset=utf-8;base64,${ttf.toString('base64')}` : `${publicPath}${name}-webfont.ttf`
  }") format("truetype");
  font-weight: ${fontWeight};
  font-style: ${fontStyle};
}

.${fontFamilyClassName} {
  font-family: "${name}";
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
    writeFile(resolve(ICONS_FONTS_DIR, `${name}-webfont.ttf`), ttf),
    writeFile(resolve(ICONS_CSS_DIR, `${name}.css`), cssTemplate),
    writeFile(resolve(ICONS_CSS_DIR, `${name}.less`), cssTemplate),
    writeFile(resolve(ICONS_DIST_DIR, 'index.js'), indexTemplate),
  ])

  logger.success('build success!')
}
