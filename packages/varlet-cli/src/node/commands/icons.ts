import fse from 'fs-extra'
import sharp from 'sharp'
import chokidar from 'chokidar'
import logger from '../shared/logger.js'
import { parse, resolve } from 'path'
import { VarletConfig, getVarletConfig } from '../config/varlet.config.js'
import { get } from 'lodash-es'
import { buildIcons, getIo } from '@varlet/icon-builder'
import { ICONS_PNG_DIR_NAME } from '../shared/constant.js'

const { removeSync, ensureDirSync, readdirSync } = fse

async function clearPngOutputs(pngDir: string) {
  removeSync(pngDir)
  ensureDirSync(pngDir)
}

async function buildPNG(io: { entry: string; output: string }) {
  const svgFiles = readdirSync(io.entry).filter((svgFile) => svgFile.endsWith('.svg'))
  const pngDir = resolve(io.output, ICONS_PNG_DIR_NAME)

  clearPngOutputs(pngDir)

  await Promise.all(
    svgFiles.map(
      (svg) =>
        new Promise<void>((done) => {
          const { name } = parse(svg)
          sharp(resolve(io.entry, svg))
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

  logger.success('build png success!')
}

export async function build(varletConfig: Required<VarletConfig>, io: { entry: string; output: string }) {
  await Promise.all([buildPNG(io), buildIcons(get(varletConfig, 'icons'))])
}

export interface IconsCommandOptions {
  watch?: boolean
}

export async function icons({ watch = false }: IconsCommandOptions = {}) {
  const varletConfig = await getVarletConfig()
  const io = getIo(get(varletConfig, 'icons'))

  const task = () => build(varletConfig, io)

  if (watch) {
    await build(varletConfig, io)
    chokidar.watch(io.entry, { ignoreInitial: true }).on('all', task)
    logger.info(`watching for ${io.entry} changes...`)
    return
  }

  await task()
}
