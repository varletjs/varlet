# 开发工具支持

### 介绍

组件库提供了针对 `webstorm` 和 `vscode` 的组件高亮能力，通过插件和设置可以获得 `语法高亮`，`代码补全`，`文档说明`。
组件库为 `vscode` 单独提供了一个辅助插件，可以在插件市场下载。

### Webstorm

通过设置 `Editor -> General -> Code Completion -> Show the documentation popup in ___ ms` 开启组件库文档说明。

<img style="width: 100%; margin-top: 10px; border-radius: 5px" src="https://varlet.gitee.io/varlet-ui/hl_wb_setting.png" alt="webstorm setting" />
<img style="width: 100%; margin-top: 10px; border-radius: 5px" src="https://varlet.gitee.io/varlet-ui/hl_wb.jpg" alt="webstorm highlight" />

### VSCode

安装 `Volar` 插件, 并按照下面的方式配置 `tsconfig.json`，可以在模板中得到类型提示。

```json
// playground-ignore
{
  "compilerOptions": {
    "types": ["@varlet/ui/types/global"]
  }
}
```

<img style="width: 100%; margin-top: 10px; border-radius: 5px" src="https://varlet.gitee.io/varlet-ui/hl_vsc_setting.png" alt="vscode setting" />
<img style="width: 100%; margin-top: 10px; border-radius: 5px" src="https://varlet.gitee.io/varlet-ui/hl_vsc.png" alt="vscode highlight" />

### VSCode 辅助插件

在 `vscode` 插件市场搜索 `varlet-vscode-extension` 安装即可, 在鼠标悬停在组件名上时, 可以通过链接直接前往该组件的文档地址。

<img style="width: 50%; margin-top: 10px; border-radius: 5px" src="https://varlet.gitee.io/varlet-ui/ext_vsc.png" alt="vscode ext" />
<img style="width: 78%; margin-top: 10px; border-radius: 5px" src="https://varlet.gitee.io/varlet-ui/ext_vsc_link.png" alt="vscode ext link" />

