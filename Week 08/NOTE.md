#学号: G20200447050170
#姓名:张杰
#班期:5
#小组:5
#作业&总结链接:https://github.com/TRZhangjie/Frontend-05-Template/tree/master/Week%2008


第八周 浏览器的工作原理

8. HTTP请求 | HTTP 的协议解析

ISO-OSI七层网络模型
应用      HTTP(包含了会话，表示，应用，基础设施)  require('http')
表示
会话
------- 
传输     TCP/UDP    (tcp: require('net'))
网络     Internet
----
数据链路  4G/5G/Wi-Fi
物理层

![https://www.cnblogs.com/ios8/p/ios-osi.html](https://www.cnblogs.com/ios8/p/ios-osi.html)

传输层
提供端到端的服务。可以实现流量控制、负载均衡。
传输层包含端口、控制字和校验和。
传输层协议主要是TCP和UDP
传输层位于OSI的第四层，这层使用的设备是主机本身

TCP与IP的一些基础知识

- 流
- 端口
- require('net')
- 包
- IP地址
- libnet/libpcap

在TCP层传输数据的概念是流，没有明显分割单位

负责构建IP包并发送 libpcap负责抓取流经你的网卡的IP包

HTTP

- request
- response

先有客户端发送一个request，服务端发送一个response，所以每一个 request 它一定对应着一个response
 
自定义实现HTTP的 request 和 response
 
9. HTTP | 服务端环境准备