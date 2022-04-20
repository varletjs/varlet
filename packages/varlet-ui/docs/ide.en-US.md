# IDE Code Support

### Intro

The component library provides the ability to highlight the component syntax for `webstorm` and `vscode`. 
the `Syntax highlight`,`Code completion`,`Documentation popup`, can be obtained through plugins and Settings.
The component library provides a separate helper plugin for `vscode`, which can be downloaded from the extension market

### Webstorm

Open the library properties documentation by setting 'editor-> general-> Code Completion->Show the documentation popup in ___ ms'.

<img style="width: 100%; margin-top: 10px; border-radius: 5px" src="https://varlet-varletjs.vercel.app/hl_wb_setting.png" alt="webstorm setting" />
<img style="width: 100%; margin-top: 10px; border-radius: 5px" src="https://varlet-varletjs.vercel.app/hl_wb.jpg" alt="webstorm highlight" />

### VSCode

Install the `Volar` plugin and configure `ts.config.json` as follows to get type hints in the template.

```json
// playground-ignore
{
  "compilerOptions": {
    "types": ["@varlet/ui/types/global"]
  }
}
```

<img style="width: 100%; margin-top: 10px; border-radius: 5px" src="https://varlet-varletjs.vercel.app/hl_vsc_setting.png" alt="vscode setting" />
<img style="width: 100%; margin-top: 10px; border-radius: 5px" src="https://varlet-varletjs.vercel.app/hl_vsc.png" alt="vscode highlight" />

### VSCode Extension

Search the `varlet-vscode-extension` installation in the `vscode` plugin market. When you hover over the component name, you can go directly to the component's document address via a link

<img style="width: 50%; margin-top: 10px; border-radius: 5px" src="https://varlet-varletjs.vercel.app/ext_vsc.png" alt="vscode ext" />
<img style="width: 78%; margin-top: 10px; border-radius: 5px" src="https://varlet-varletjs.vercel.app/ext_vsc_link.png" alt="vscode ext link" />
