学习笔记

state 用户

01. 创建一个jsx文件
02. 切换到jsx目录，执行npm init
03. 安装webpack `npm install -g webpack`
04. 安装babel系列 babel、babel-loader 和 babel 的 plugin (jsx是一个babel插件)
05. `npm install --save-dev webpack babel-loader`
06. 创建 `webpack.config.js` 文件
    `webpack.config.js` 里面是一个 node 模块，所以里面要使用 module.exports
07. 创建 `main.js`
08. 终端执行 `webpack`，生成 `dist` 文件
09. 安装babel `npm install --save-dev @babel/core @babel/preset-env`
10. 配置babel到 `webpack.config.js`
11. 再次 终端执行 `webpack`，生成 `dist` 文件，发现内容发生了变化，通过babel编译成了一个普通的for循环
12. 编辑代码 增加 `let a = <div/>` 运行 webpack 报错，还缺少一个插件
13. 执行 `npm install --save-dev @babel/plugin-transform-react-jsx`
14. 配到 webpack.config.js、运行
`eval("for (var _i = 0, _arr = [1, 2, 3]; _i < _arr.length; _i++) {\n  var i = _arr[_i];\n  console.log(i);\n}\n\nvar a = /*#__PURE__*/React.createElement(\"div\", null);\n\n//# sourceURL=webpack://jsx/./main.js?");`
我们可以看到 `let a = <div/>` 被翻译成了 `var a =  React.createElement(\"div\", null);`

> webpack 能够把一个普通的 JavaScript 文件，变成一个能够把 不同 import 或者是 require 的这些东西给它打包到一起去.
> webpack 是一个前端资源加载/打包工具
> webpack 可以将多种静态资源 js、css、less 转换成一个静态文件，减少了页面的请求。

> babel 把新版的JS编译成一个老版本的JS

> babel-loader 是没有 webpack 前缀的，但是它其实是 webpack 的一个 loader

 