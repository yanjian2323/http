### 数据协商

1. 相关的头信息

- 浏览器发送的：accept、accept-Language、accept-encoding(gzip, deflate, br)
- 服务器响应的：content-type、content-Language、content-encoding(gzip)、X-Content-Type-Options:nosniff

2. 各个字段的含义

- accept：接收的返回类型
- accept-Language： 接收的语言
- accept-encoding：浏览器接受的编码
- content-type：和accept对应
- content-Language：和  accept-Language对应
- content-encoding：和accept-encoding对应，通常是gzip
-  X-Content-Type-Options:nosniff，旧的ie浏览器中，如果content-type没设置对或者没设置，ie会猜测content-type的类型，nosniff就是不让浏览器去猜测

