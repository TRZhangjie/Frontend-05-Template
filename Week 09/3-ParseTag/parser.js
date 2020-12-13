 
const EOF = Symbol('EOF')

function data(c){
    if(c == '<'){
        return tagOpen
    }else if( c == EOF){
        return 
    }
    else{
        return data
    }
}

function tagOpen(c){
  if(c == '/'){
      return endTagOpen
  }else if(c.match(/^[a-zA-Z]$/)){
      return tagName(c)
  }
  else{
      return
  }
}

function endTagOpen(c){
    if(c.match(/^[a-zA-Z]$/)){
        currentToken = {
            type:"endTag",
            tagName:""
        }
        return tagName(c)
    }else if(c == ">"){

    }
    else if(c === "EOF") {

    }else {

    }
}
// tagName:是 左尖括号开始 空格结束一个状态  
// <html  
// 如果遇到正斜杠，说明它是一个自封闭标签，进入 selfClosingStartTag 状态
// 如果是右尖括号，说明它是一个普通的开始标签，结束状态回到data
function tagName(c){
    // 4种有效空白符：tab符 换行符 进制符 空格 
    if(c.match(/^[\t\n\f ]$/)) {
        return beforeAttributeName
    }else if( c == "/"){
        return selfClosingStartTag
    }else if(c.match(/^[a-zA-Z]$/)){
        return tagName
    }else if(c == '>'){
        return data
    }else{
        return tagName
    }
}

function beforeAttributeName(c){
    if(c.match(/^[\t\n\f ]$/)) {
        return beforeAttributeName
    }else if(c == '>'){
        return data
    }
    else if(c == '='){
        return beforeAttributeName
    }
    else{
        return beforeAttributeName
    }
}

// 自封闭状态
function selfClosingStartTag(c){
    if( c == '>'){
        currentToken.isSelfClosing = true
        return data
    }else if(c == 'EOF'){

    }
    else {
        
    }
}

module.exports.parserHTML = function parserHTML(html) {
    let state = data
    for(let c of html){
        state = state(c)
    }
    state = state(EOF)
}