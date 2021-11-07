# 暗黑模式指南

### 组件适配暗黑模式

#### 关键颜色转换规则

- 主题颜色提高饱和度(已完成)
- body白色转换为 #1e1e1e(已完成)
- 组件白色转换为 透明色 或 #272727，部分组件的亮色模式默认背景颜色可能为白色，但是实际期望可能是透明，为设计失误，需要一并修正。
- 组件主要文字颜色转换为 #fff
- 组件次要描述文字颜色转换为 #aaa
- 组件线，边框颜色转换为 #545454
- example案例适配

以上转换规则仅供参考，具体问题具体分析

#### example案例监听主题切换

button组件可以做为参考

```ts
import { watchDarkMode } from '../../utils/components'

export default {
  setup() {
    // 主题切换时会自动加载暗黑模式主题
    watchDarkMode()
    // 如果需要获取到当前主题可以从回调中获取
    watchDarkMode((themes: 'darkThemes' | 'themes') => {
      console.log(themes)
    })
  }
}
```

### 主题变量文件

主题变量文件编写在src/themes/dark/*.ts, 每个组件对应一个主题文件，并在index.ts中进行统一导出