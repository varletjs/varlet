import ejs from 'ejs'
import fs from 'fs-extra'
import path from 'node:path'
import prettier from 'prettier'

export const camelize = (s: string): string => s.replace(/-(\w)/g, (_: any, p: string) => p.toUpperCase())

export const bigCamelize = (s: string): string => camelize(s).replace(s.charAt(0), s.charAt(0).toUpperCase())
export async function ejsRender(filePath: string, options: any): Promise<void> {
  try {
    // 根目录template 绝对路径
    const templatePath = path.resolve(__dirname, `../../template/create`)
    // 获取当前渲染文件的 各种 参数 such as ext
    const file = path.parse(filePath)
    // 编译根目录 创建的根目录
    const dest = path.resolve(`${process.cwd()}/src`, options.projectName)
    // 当前 需要编译的 ejs文件
    const readFilePath = path.resolve(dest, file.dir, `${file.name}.ejs`)

    // 转换 之后的 js or ts or vue 文件
    const outputFilePath = path.resolve(dest, filePath)
    // 是一个buffer
    const templateCode = await fs.readFile(readFilePath)
    // 编译当前code
    const code = ejs.render(templateCode.toString(), options)
    // 获取后缀
    const extname = path.extname(filePath).replace(/[.]/g, '')
    let prettierCode = ''
    await prettier
      .resolveConfig(templatePath)
      .then((opts) => {
        switch (extname) {
          case 'ts':
            prettierCode = prettier.format(code, { parser: 'babel', ...opts })
            break
          case 'tsx':
            prettierCode = prettier.format(code, { parser: 'babel', ...opts })
            break
          case 'jsx':
            prettierCode = prettier.format(code, { parser: 'babel', ...opts })
            break
          case 'js':
            prettierCode = prettier.format(code, { parser: 'babel', ...opts })
            break
          default:
            prettierCode = prettier.format(code, { parser: extname })
            break
        }
      })
      .catch((err) => {
        console.log(err)
      })
    await fs.outputFile(outputFilePath, prettierCode)
    await fs.remove(readFilePath)
  } catch (error) {
    console.log(error)
  }
}
