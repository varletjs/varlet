# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.6.0](https://github.com/haoziqaq/varlet/compare/v0.5.13...v0.6.0) (2020-12-24)


### Bug Fixes

* **cli:** 重构部分代码 ([e4840dc](https://github.com/haoziqaq/varlet/commit/e4840dc59c5087a007d819a0f8db9db795f234a9))
* **loading:** remove text ([86ec547](https://github.com/haoziqaq/varlet/commit/86ec5475af3d98e523cb1ddf81b42f830e9b4d82))
* **snackbar:** add type definition ([a3283ff](https://github.com/haoziqaq/varlet/commit/a3283ff7f4e2f32ff55ced1a8d2b54d885df4be8))
* **snackbar:** modify default duration ([520cf47](https://github.com/haoziqaq/varlet/commit/520cf47bfab6effec9e4bf64baf759b82f5b0881))
* **snackbar:** modify position prop ([2862958](https://github.com/haoziqaq/varlet/commit/2862958021311cdd16eb3f540570a9351438b2d6))
* **ui:** button原型制作中 已完成基本type size color基本交互 ([5d528ea](https://github.com/haoziqaq/varlet/commit/5d528ead4d3f13df3d70ee95b837cd819ef4d1e4))
* **ui:** button原型完成 ([cdf32e5](https://github.com/haoziqaq/varlet/commit/cdf32e5f8a1e431fa052684f828d0dbceab46f96))
* **ui:** menu组件原型完成 重构button popup dialog skeleton的props ([09a57b1](https://github.com/haoziqaq/varlet/commit/09a57b1d692eeab909ab0c1e2672d1095f2df12e))
* **ui:** merge ([0c5918f](https://github.com/haoziqaq/varlet/commit/0c5918f0d811691acf9a5549a0e00e1d198435f1))
* **ui:** merge ([719a111](https://github.com/haoziqaq/varlet/commit/719a111022971a8f2e59f83bdb7cc6c5767f2e3a))
* **ui:** popup dialog原型完成 ([4c3da72](https://github.com/haoziqaq/varlet/commit/4c3da72d776d682c4b1be1b96e445076f53012c1))
* **ui:** snackbar index.ts重构 ([a76a0be](https://github.com/haoziqaq/varlet/commit/a76a0be18dab5fd317d2011704764f4fe1ad4e98))
* **ui:** snackbar 解决动画问题 ([da87973](https://github.com/haoziqaq/varlet/commit/da87973acb1b44b194459d9cda76bb31da5227ba))
* **ui:** 修复类型问题 ([10ebe7a](https://github.com/haoziqaq/varlet/commit/10ebe7a90e9dfe71b5d87712f5bc55374213cff0))
* **ui:** 修改了ripple的定位 ([67fd0cc](https://github.com/haoziqaq/varlet/commit/67fd0cc137a0e64b9c7058477ad56d9c5ed2b6f9))
* **ui:** 增加button组件的loading参数校验 ([4d839c1](https://github.com/haoziqaq/varlet/commit/4d839c1297bf3069d5e8f299ff64d9eed822c853))
* **ui:** 增加ui全局上下文 适配teleport keep-alive 锁操作 ([d237750](https://github.com/haoziqaq/varlet/commit/d237750e8efa0ef33841239c0c2e19d745726abe))
* **ui:** 定义组件上下文对象 ([4e926c7](https://github.com/haoziqaq/varlet/commit/4e926c70fcbd49b848205709bcde00a93420bb98))
* **ui:** 按钮组件开发 ([4fddcbd](https://github.com/haoziqaq/varlet/commit/4fddcbda84737fb499e0adcc798b5a73f5cf55ea))
* **ui/image:** image原型完成 ([97fcc83](https://github.com/haoziqaq/varlet/commit/97fcc8333ef1648dd82fe2b34ab284cc753600b8))
* **ui/lazy:** lazy原型完成 ([e332fa8](https://github.com/haoziqaq/varlet/commit/e332fa86eed8f6d1598473ba19b023a19c7ed54b))
* **ui/lazy:** 修复CacheInstance类型错误 ([1573b56](https://github.com/haoziqaq/varlet/commit/1573b5614099fcc2da18c440dd1d27a332076adb))
* **ui/lazy:** 修复了lazy在兼容模式下 图片从视口外操作到视口内没有进行check的bug ([8af34d0](https://github.com/haoziqaq/varlet/commit/8af34d0f0aa8b2f36002e43657de130095871340))
* **ui/lazy:** 修复了部分情况下图片update重复check的bug ([f8fcf78](https://github.com/haoziqaq/varlet/commit/f8fcf7892a9b6b37c5400d49a931fbad7cbb631b))
* **ui/lazy:** 增加1px像素占位 增加图片URL缓存 ([865a10c](https://github.com/haoziqaq/varlet/commit/865a10c7e51b0308c99d7387ab5740c7843e31b1))
* **ui/lazy:** 增加局部滚动的案例cover ([c24820a](https://github.com/haoziqaq/varlet/commit/c24820a97d59fe2a97a9902afbc8f09615e99897))
* **ui/lazy:** 增加绑定事件配置 ([64a95cb](https://github.com/haoziqaq/varlet/commit/64a95cb0777cbf695bfd6d0269a344af4e6ae813))
* **ui/styles:** 修改common.less中的状态名 ([8e30223](https://github.com/haoziqaq/varlet/commit/8e302236c8d6f90e042eaa5deffcdfb12a4958dd))
* add class for transition-group ([75e3df6](https://github.com/haoziqaq/varlet/commit/75e3df66067c26fb4eaa9c17d549a2e59501e536))
* add isDeclarative for snackbar ([a156647](https://github.com/haoziqaq/varlet/commit/a156647f2917e6f82b069557f851844e6647a0a5))
* add margin for loading text and detection componentName ([b42046e](https://github.com/haoziqaq/varlet/commit/b42046e7538d8b05b61b47085446f73c9c46a1b3))
* add typescript type(App) ([4d49a7b](https://github.com/haoziqaq/varlet/commit/4d49a7bde63167b93c144badc353d0004af91109))
* modify loading docs and example ([66be153](https://github.com/haoziqaq/varlet/commit/66be153e324c1378e80ee4ab94c0c7609ddd936e))
* modify size and animation of loading ([63eb392](https://github.com/haoziqaq/varlet/commit/63eb392b01a46b469b1f9944f364970a64e686bb))
* remove console ([675f910](https://github.com/haoziqaq/varlet/commit/675f910b8639d9f985c53fd43f8804e30b101029))


### Features

* add button for menu ([e9e1860](https://github.com/haoziqaq/varlet/commit/e9e1860ccfb1f50624467c32d0ee2fba291a44f9))
* add chips ([ed1cc95](https://github.com/haoziqaq/varlet/commit/ed1cc95d8a41d064804ec04be43714bbb69ef9eb))
* add progress ([170d515](https://github.com/haoziqaq/varlet/commit/170d5150aa3dd43c2d2c13ad5c43a154f91749a2))
* add propsEmits for loading ([41bfdab](https://github.com/haoziqaq/varlet/commit/41bfdab7d298901cdbbcc77ae14326b765af5a8f))
* complete snackbar ([f7aa36b](https://github.com/haoziqaq/varlet/commit/f7aa36b27d232242ddc796a5550086ef2a75e94d))
* loading ([d93e481](https://github.com/haoziqaq/varlet/commit/d93e4812b18f8d4cb310797947416f8feeb97271))
* modify loading size ([321526c](https://github.com/haoziqaq/varlet/commit/321526c3290e431eb5dbd82891712acddde15839))
* snackbar ([ff3483d](https://github.com/haoziqaq/varlet/commit/ff3483d0a734ca822eb03b44710b20a7093f783a))


### Performance Improvements

* add validator for progress mode ([8eb9721](https://github.com/haoziqaq/varlet/commit/8eb9721cc4b4c7141a48efa285c2b383e8cab2e0))
* refactor snackbar ([fd58373](https://github.com/haoziqaq/varlet/commit/fd583733d6c85a60d2fc05f7613c59689fdabe1d))





## [0.5.13](https://github.com/haoziqaq/varlet/compare/v0.5.10...v0.5.13) (2020-11-27)


### Bug Fixes

* **ui/skeleton:** 修复row的迭代bug ([d1640ac](https://github.com/haoziqaq/varlet/commit/d1640ac6da277ef5023b0cfb136c5a0787d370cd))





## [0.5.10](https://github.com/haoziqaq/varlet/compare/v0.5.9...v0.5.10) (2020-11-27)


### Bug Fixes

* **cli ui:** 统一给每个包增加另一个style入口 方便babel-import-plugin解析 ([cd1ef49](https://github.com/haoziqaq/varlet/commit/cd1ef4957d9659c840d710bc423f44234d8340d2))





## [0.5.9](https://github.com/haoziqaq/varlet/compare/v0.5.8...v0.5.9) (2020-11-27)


### Bug Fixes

* **all package.json:** 修改了peer依赖 改成了依赖大于目标版本 ([294eced](https://github.com/haoziqaq/varlet/commit/294ecedce9e2f4bb85eea6556eac34e450818d05))





## [0.5.8](https://github.com/haoziqaq/varlet/compare/v0.5.7...v0.5.8) (2020-11-27)


### Bug Fixes

* **cli/site ui:** skeleton组件原型完成 文档完成 ([374100f](https://github.com/haoziqaq/varlet/commit/374100f2bcfaafd1ca0369b560e05ecde292de7d))





## [0.5.7](https://github.com/haoziqaq/varlet/compare/v0.5.6...v0.5.7) (2020-11-26)


### Bug Fixes

* **ui:** ripple指令原型完成 ([43f8665](https://github.com/haoziqaq/varlet/commit/43f8665e3254fe66b69ca542c9c5daa49a30cce4))





## [0.5.2](https://github.com/haoziqaq/varlet/compare/v0.5.1...v0.5.2) (2020-11-23)


### Bug Fixes

* **all changelog:** 修正版本号 ([af8f2b6](https://github.com/haoziqaq/varlet/commit/af8f2b65d01a436601a5ebfe076be1f75df95c5c))
* **添加tsconfig.json到cli的依赖列表:** tsconfig.json ([3e55747](https://github.com/haoziqaq/varlet/commit/3e55747cf3e9877ed30646d13dde35f7c6f0e0a5))





## [0.5.1](https://github.com/haoziqaq/varlet/compare/v0.6.0...v0.5.1) (2020-11-23)


### Bug Fixes

* **all packages/package.json:** 发包失败重新发包 ([849f9ae](https://github.com/haoziqaq/varlet/commit/849f9ae95f6ada7cb6e101d976826944bf1e15b3))





# [0.5.1](https://github.com/haoziqaq/varlet/compare/v0.5.0...v0.6.0) (2020-11-23)


### Bug Fixes

* **cli:** 增加功能create命令生成单测模板 ([0a2cf55](https://github.com/haoziqaq/varlet/commit/0a2cf55042d18ed0889a2a44ac390eb8dffbf245))


### Features

* add example of checkbox ([6effb17](https://github.com/haoziqaq/varlet/commit/6effb177ade2f8e69a2756f9481829688c0f3961))
* add style of site ([b936468](https://github.com/haoziqaq/varlet/commit/b9364680cc6bd4952a2e01a62e4c897af8ff6b97))
* add test file and router ([fb6615c](https://github.com/haoziqaq/varlet/commit/fb6615c0d92fc086cd91824f4aa49750c0433526))
* connect nav and router ([0bc640f](https://github.com/haoziqaq/varlet/commit/0bc640f2cf2081abc378b5db8644d8edeb374763))





# [0.5.0](https://github.com/haoziqaq/varlet/compare/v0.4.0...v0.5.0) (2020-11-13)


### Features

* **cli:** 增加jest单测命令 一键执行所有单测文件 或是执行某一个组件的单测文件 ([b23bfee](https://github.com/haoziqaq/varlet/commit/b23bfeebf6be90f4e417e3210c3fc82976f59b73))
* add auto create pc site route ([65cd41a](https://github.com/haoziqaq/varlet/commit/65cd41a085a22eee4c4cf0b39b3ba727939b4ed3))





# [0.4.0](https://github.com/haoziqaq/varlet/compare/v0.3.2...v0.4.0) (2020-11-10)


### Features

* **cli:** 支持打包成umd ([af0645f](https://github.com/haoziqaq/varlet/commit/af0645f8bf648717bf8d616024ac612af4764a51))





## [0.3.2](https://github.com/haoziqaq/varlet/compare/v0.3.1...v0.3.2) (2020-11-09)

**Note:** Version bump only for package @varlet/ui





# [0.3.0](https://github.com/haoziqaq/varlet/compare/v0.2.1...v0.3.0) (2020-11-06)


### Features

* **cli:** 实现compile命令,可编译出es,commonjs规范两套发布代码|实现--watch文件监听,按需编译有改动的文件 ([a00695a](https://github.com/haoziqaq/varlet/commit/a00695a2f0dc66e7ee9674c6ee18e12583cf614b))





## [0.2.1](https://github.com/haoziqaq/varlet/compare/v0.2.0...v0.2.1) (2020-11-03)


### Bug Fixes

* **cli:** 修复了node_modules的依赖包没被webpack扫进去的bug ([128a0fa](https://github.com/haoziqaq/varlet/commit/128a0fa44609ef20d5a16d99a25307ccb34be927))





# [0.2.0](https://github.com/haoziqaq/varlet/compare/v0.1.7...v0.2.0) (2020-11-03)


### Features

* **packages/**:** 架构调整,实现varlet-cli dev build命令 ([1ca2cf6](https://github.com/haoziqaq/varlet/commit/1ca2cf636af766615d6e733d5c96ac2d2349b34f))
