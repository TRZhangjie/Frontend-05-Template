
const http = require('http')

http.createServer((request, response) => {
    let body = []
    request.on('error', (err) => {
        console.error(err)
    }).on('data', (chunk) => {
        body.push(chunk.toString())
    }).on('end', () => {
        body = Buffer.concat(body).toString()
        console.log("body", body)
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end('hello world\n');
    }).listen(8088)
})
console.log("server started")

// 文本型协议，所有的内容都是字符串，它的每个字节都会理解为字符串的一部分