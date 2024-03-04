import fse from 'fs-extra'
import sharp from 'sharp'
import slash from 'slash'
import chokidar, { FSWatcher } from 'chokidar'
import webfont from 'webfont'
import logger from '../shared/logger.js'
import { parse, resolve } from 'path'
import { ICONS_CSS_DIR_NAME, ICONS_FONTS_DIR_NAME, ICONS_PNG_DIR_NAME, CWD } from '../shared/constant.js'
import { VarletConfig, getVarletConfig } from '../config/varlet.config.js'
import { get } from 'lodash-es'

const { removeSync, ensureDir, writeFile, readdirSync } = fse

async function removeDir(output: string, fontsDir: string, cssDir: string, pngDir: string) {
  removeSync(output)
  await Promise.all([ensureDir(fontsDir), ensureDir(cssDir), ensureDir(pngDir)])
}

async function buildPNG(entry: string, pngDir: string, svgFiles: string[]) {
  await Promise.all(
    svgFiles.map(
      (svg) =>
        new Promise<void>((done) => {
          const { name } = parse(svg)
          sharp(resolve(entry, svg))
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
                .toFile(resolve(pngDir, `${name}.png`))
                .then(() => {
                  done()
                })
            })
        })
    )
  )
}

function buildWebFont(name: string, entry: string) {
  return webfont.default({
    files: `${slash(entry)}/*.svg`,
    fontName: name,
    formats: ['ttf'],
    fontHeight: 512,
    descent: 64,
  })
}

export interface IconsIo {
  entry: string
  output: string
}

export async function buildIcons(varletConfig: Required<VarletConfig>, io: IconsIo) {
  const {
    name,
    namespace,
    base64,
    publicPath,
    fontFamilyClassName,
    fontWeight,
    fontStyle,
    genPng = true,
  } = get(varletConfig, 'icons')

  const fontsDir = resolve(io.output, ICONS_FONTS_DIR_NAME)
  const cssDir = resolve(io.output, ICONS_CSS_DIR_NAME)
  const pngDir = resolve(io.output, ICONS_PNG_DIR_NAME)

  await removeDir(io.output, fontsDir, cssDir, pngDir)
  const svgFiles = readdirSync(io.entry).filter((svgFile) => svgFile.endsWith('.svg'))
  const [{ ttf, glyphsData }] = await Promise.all([
    buildWebFont(name!, io.entry),
    genPng ? buildPNG(io.entry, pngDir, svgFiles) : Promise.resolve(),
  ])

  const icons: { name: string; pointCode: string }[] = glyphsData.map((i: any) => ({
      name: i.metadata.name,
      pointCode: i.metadata.unicode[0].charCodeAt(0).toString(16),
    }))

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
  .map(
    (icon) => `.${namespace}-${icon.name}::before {
  content: "\\${icon.pointCode}";
}`
  )
  .join('\n\n')}
`

  await Promise.all([
    writeFile(resolve(fontsDir, `${name}-webfont.ttf`), ttf),
    writeFile(resolve(cssDir, `${name}.css`), cssTemplate),
    writeFile(resolve(cssDir, `${name}.less`), cssTemplate),
    writeFile(resolve(io.output, 'index.js'), indexTemplate),
  ])

  logger.success('build success!')
}

export interface IconsCommandOptions {
  watch?: boolean
}

export async function icons({ watch = false }: IconsCommandOptions = {}) {
  const varletConfig = await getVarletConfig()
  const { entry = './svg', output = './dist' } = varletConfig.icons
  const io = {
    entry: resolve(CWD, entry),
    output: resolve(CWD, output),
  }

  const task = () => buildIcons(varletConfig, io)

  if (watch) {
    await buildIcons(varletConfig, io)
    chokidar.watch(io.entry, { ignoreInitial: true }).on('all', task)
    logger.info(`watching for ${io.entry} changes...`)
    return
  }

  await task()
}
