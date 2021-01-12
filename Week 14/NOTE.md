学习笔记

state 用户

1. 创建一个jsx文件
2. 切换到jsx目录，执行npm init
3. 安装webpack `npm install -g webpack`
4. 安装babel系列 babel、babel-loader 和 babel 的 plugin (jsx是一个babel插件)
5. `npm install --save-dev webpack babel-loader`
6. 创建 `webpack.config.js` 文件
webpack.config.js 里面是一个 node 模块，所以里面要使用 module.exports
7. 创建 `main.js`
8. 终端执行 `webpack`，生成 `dist`文件


> webpack 能够把一个普通的 JavaScript 文件，变成一个能够把 不同 import 或者是 require 的这些东西给它打包到一起去.
> webpack 是一个前端资源加载/打包工具
> webpack 可以将多种静态资源 js、css、less 转换成一个静态文件，减少了页面的请求。

> babel 把新版的JS编译成一个老版本的JS

> babel-loader 是没有 webpack 前缀的，但是它其实是 webpack 的一个 loader

 