# varlet cli
varlet cli是一个基于vue3的组件库构建命令行，可以快速搭建一个基于vue单文件组件的UI组件库

## 快速上手
```
npm安装:npm i typescript vue@3.0.2 vue-router@4.0.0-rc.1 @varlet/cli -D
yarn安装:yarn add typescript vue@3.0.2 vue-router@4.0.0-rc.1 @varlet/cli -D
```

```
添加如下代码到package.json
"scripts": {
  "dev": "varlet-cli dev",
  "build": "varlet-cli build",
  "compile": "varlet-cli compile",
  "compile:watch": "varlet-cli compile --watch",
  "create": "varlet-cli create",
  "jest": "varlet-cli jest"
},
"peerDependencies": {
  "vue": "3.0.2"
}
```

