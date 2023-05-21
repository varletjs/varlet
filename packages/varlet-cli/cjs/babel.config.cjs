// js模块的导出语句
module.exports = (api, options) => {
  if (api) {
    api.cache.never()
  }

  const isCommonJS = process.env.NODE_ENV === 'test' || process.env.BABEL_MODULE === 'commonjs'

  return {
    presets: [
      [
        // 是Babel的一个预设，用于将ES6+的代码转化为ES5的代码
        require.resolve('@babel/preset-env'),
        {
          // modules选项用于指定如何处理模块化的代码，如果isCommonJS为true，则将其设置为commonjs，否则设置为false。
          modules: isCommonJS ? 'commonjs' : false,
          // loose选项用于指定转化后的代码是否使用松散模式。
          loose: options.loose,
        },
      ],
      // 将TypeScript代码转化为JavaScript代码
      require.resolve('@babel/preset-typescript'),
      // 一个CommonJS风格的模块导入语句，用于导入当前目录下的babel.sfc.transform.cjs模块。这个模块可能包含一些自定义的Babel转换器，用于将.vue单文件组件中的template、script和style块转化为JavaScript代码。
      require('./babel.sfc.transform.cjs'),
    ],
    plugins: [
      [
        // 在Vue.js中支持JSX语法。其中，enableObjectSlots选项用于启用对象插槽的支持
        require.resolve('@vue/babel-plugin-jsx'),
        {
          enableObjectSlots: options.enableObjectSlots,
        },
      ],
    ],
  }
}
