module.exports = {
    entry:"./main.js",
    // 代表 webpack 模块
    module:{
      // 构建时使用的的规则
      rules:[
        {
          // 正则表达式(让所有的js文件都走babel) --$表示结束
          test:/\.js$/,
          use:{
            loader:"babel-loader",
            options:{
              presets:["@babel/preset-env"],
              plugins:[["@babel/plugin-transform-react-jsx",{pragma:"createElement"}]]
            }
          }
        }
      ]
    },
    mode: "development"
} 