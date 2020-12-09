

```
HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\nX-Foo: bar\r\nDate: Wed, 09 Dec 2020 09:20:06 GMT\r\nConnection: keep-alive\r\nTransfer-Encoding: chunked\r\n\r\n108\r\n<html maaa=a >\n<head>\n    <style>\nbody div #myid{\n    width:100px;\n    background-color: #ff5000\n}\nbody div img{\n    with:30px;\n    background-color:#ff1111\n}\n    </style>\n</head>\n<body>\n    <div>\n        <img id="myid"/>\n        <img />\n    </div>\n</body>\n</html>\r\n0\r\n\r\n
```

对上述响应信息一个处理过程，HTTP 本身就是文本传输协议

通过状态机处理第一层循环 HTTP/1.1 200 OK\r\n

ResponseParser 总结

Response 必须分段构造，所以我们要用一个 ResponseParser 来 '装配'

ResponseParser 分段处理 ResponseText, 我们用状态机来分析文本的结构 

