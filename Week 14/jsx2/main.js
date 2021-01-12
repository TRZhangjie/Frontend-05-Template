

// case 1
// 第一个参数对象 第二个参数是属性 第三参数子组件
// function createElement(type, attributes, ...children){
//     let element = document.createElement(type)
//     for (const name in attributes) {
//         element.setAttribute(name, attributes[name])
//     }
//     for (const child of children) {
//         // 字符串文本需要换换成node节点
//         if(typeof child === 'string'){
//             child = document.createTextNode(child)
//         }
//         element.appendChild(child)
//     }
//     return element
// }
// let a = <div id="a">
//    <span>a</span>
//    <span>b</span>
//    <span>c</span>
// </div>
// 
// document.body.appendChild(a)

/**
 *  case 2
 *  改为大写Div后， 不换转换成"Div"，他会把Div 当做是一个Class
 * */ 
function createElement(type, attributes, ...children){
    let element;
    if(typeof type === 'string')
        element = new ElementWrapper(type)
    else
        element = new type
    for (const name in attributes) {
        element.setAttribute(name, attributes[name])
    }
    for (const child of children) {
        // 字符串文本需要换换成node节点
        if(typeof child === 'string'){
            child = new TextWrapper(child)
        }
        element.appendChild(child)
    }
    return element
}

class ElementWrapper {
    constructor(type){
        this.root = document.createElement(type)
    }
    setAttribute(name, value){
        this.root.setAttribute(name, value)
    }
    appendChild(child){
        child.mountTo(this.root)
    }
    mountTo(parent){
        parent.appendChild(this.root)
    }
}

class TextWrapper {
    constructor(content){
        this.root = document.createTextNode(content)
    }
    setAttribute(name, value){
        this.root.setAttribute(name, value)
    }
    appendChild(child){
        child.mountTo(this.root)
    }
    mountTo(parent){
        parent.appendChild(this.root)
    }
}

class Div {
    constructor(){
        this.root = document.createElement('div')
    }
    setAttribute(name, value){
        this.root.setAttribute(name, value)
    }
    appendChild(child){
        child.mountTo(this.root)
    }
    mountTo(parent){
        parent.appendChild(this.root)
    }
}

let a = <Div id="a">
   <span>a</span>
   <span>b</span>
   <span>c</span>
</Div>

// document.body.appendChild(a)
a.mountTo(document.body)


