class Request{  
    constructor(p){
        this.method = p.method || 'get'
        this.host = p.host
        this.port = p.port || 80
        this.path = p.path
        this.body = p.data
        this.headers = p.headers || Object.create(null)
        if(!this.headers['Content-Type'])
            this.headers['Content-Type'] = "application/x-www-form-urlencoded"

        if(this.headers['Content-Type'] === "application/json")
            this.bodyText = JSON.stringify(this.body)
        else if(this.headers['Content-Type'] === "application/x-www-form-urlencoded")
            this.bodyText = Object.keys(this.body).map(k=>`${k}=${encodeURIComponent(this.body[k])}`).join("&")
        
        this.headers['Content-Length'] = this.bodyText.length
    }

    send(){ 
        return new Promise((resovle, reject)=>{
            resovle()
        })
    }
}

void async function(){  
    let request = new Request({
        address: '198.0.0.1',
        port: '80',
        path: '/',
        headers: {
            "X-Foo": "123456"
        },
        data: {
            "username":"json",
            "password":"1234"
        }
    })

    let res = await request.send()
}()
