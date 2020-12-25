# varlet cli
varlet cli是一个基于vue3的组件库构建命令行，可以快速搭建一个基于vue单文件组件的UI组件库

## 快速上手
```
npm安装:npm i typescript vue@3.0.2  @varlet/cli -D
yarn安装:yarn add typescript vue@3.0.2  @varlet/cli -D
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

## 命令介绍
```
varlet-cli dev 启动一个开发服务器文档站点
varlet-cli build 打包文档站点代码
varlet-cli compile 编译出 es,cjs,umd规范的组件库代码
varlet-cli create <name>创建一个组件
varlet-cli jest 测试src下所有的单元测试脚本
```

