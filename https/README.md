#### HTTPS

1. 在ngnix上部署https服务，首先生成公钥和私钥，命令如下：

```
//在ngnix配置文件上层目录新建一个cert文件夹然后执行
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -keyout localhost-privatekey.pem -out localhost-cert.pem
```

2. 然后在ngnix中开启https

   ```
   proxy_cache_path cache levels=1:2 keys_zone=my_caches:10m;
   server {
       listen 443;
       server_name imooc.http.com;

       ssl on;
       ssl_certificate_key	./cert/localhost-privatekey.pem;
       ssl_certificate ./cert/localhost-cert.pem;

       location / {
       	proxy_cache my_caches;
           proxy_pass http://127.0.0.1:8888;
           proxy_set_header Host $host;
       }
   }
   ```

#### http2

1. 信道复用
2. 分贞传输
3. server push

在ngix中开启http2如下

```
server {
    listen 443 http2;
    server_name imooc.http.com;
    http2_push_preload on;//开启server push

    ssl on;
    ssl_certificate_key	./cert/localhost-privatekey.pem;
    ssl_certificate ./cert/localhost-cert.pem;
}
```

