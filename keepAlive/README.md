#### http长链接

1. http/1.1在一个tcp连接上只能发送一个http请求，如果服务设置了响应头Connection:keep-alive，那么这个tcp连接不会关闭，这个请求响应完毕再发送下一个请求时还会复用这个tcp连接，减少新建tcp连接的开销，如果服务器设置了Connection:close，tcp连接就会关闭，下一个请求会重新建立一个新的tcp
2. chrome在同一个域名下只能并发6个请求，也就是会建立6个tcp连接，其他的请求会等待，直到有一个请求响应完了，等待的请求会复用这个tcp连接进行http请求
3. http2有信道复用技术，一个tcp连接上可以进行多个http请求