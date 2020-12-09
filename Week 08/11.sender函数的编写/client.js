const net = require('net')

class Request{
    constructor(options){
        this.method = options.method || 'GET'
        this.host = options.host
        this.port = options.port || 80
        this.path = options.path || '/'
        this.body = options.body || {}
        this.headers = options.headers || {}
        if(!this.headers['Content-Type']){
            this.headers['Content-Type'] = "application/x-www-form-urlencoded"
        }
        if(this.headers['Content-Type'] === 'application/json')
            this.bodyText = JSON.stringify(this.body)
        else if(this.headers['Content-Type'] === 'application/x-www-form-urlencoded')
            this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&')
        
        this.headers['Content-Length'] = this.bodyText.length
    }
    send(){
        return new Promise((resolve, reject) => {
            // 在send的过程中会逐步接收到response，所以我们设计一个 response parser,来构建 response
            // response parser 逐步的接收 response 信息，来构造 response的不同部分
            const parser = new ResponseParser
            resolve('')
        })
    }
}
// ResponseParser 逐步接收 response 的文本 进行分析
class ResponseParser {
    constructor(){
    }
    // receive 接口, 接收字符串
    receive(string){
        for(let i = 0; i < string.length; i ++){
            this.receiveChar(string.charAt(i))
        }
    }
    receiveChar(char){

    }
}

void async function (){
    let requset = new Request({
        method:'POST',
        host:'127.0.0.1',
        port:"8080",
        path:'/',
        headers:{
            ['X-Foo2'] : "customed"
        },
        body: {
            name:"winter"
        }
    });
    let response = await requset.send()
    console.log(response)
}();