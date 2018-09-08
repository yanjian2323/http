### ngnix代理

1. 在ngnix中设置代理可以用如下的配置(mac下的路径在/usr/local/etc/nginx/servers/)：

    proxy_cache_path cache levels=1:2 keys_zone=my_caches:10m;
    
    server {
      listen 8081;
      server_name imooc.http.com;
    
      location / {
          proxy_cache my_caches;
          proxy_pass http://127.0.0.1:8888;
          proxy_set_header Host $host;
      }
    }
2. ngnix开启代理缓存后，真正的服务器比如返回了Cache-Control: max-age=10的响应头，ngnix也会缓存10秒，第一个客户端访问了该url10秒内如果有第二个客户端也访问了该url，那么将直接命中ngnix代理缓存，ngnix代理不会向原服务器发送请求，当10秒以后代理缓存过期才会向原服务器发起新请求
3. max-age也会在代理服务器生效，但如果设置了s-maxage，那么代理服务器会用s-maxage而不是max-age
4. Vary头字段和缓存经常配合使用，因为有时候缓存不是根据url进行判断就可以（只要url一样就从缓存取）。有一些场景下，比如返回pc端和移动端的数据是不一样的，这种情况下就不能只根据url来缓存，而是url+userAgent来缓存。设置Vary的方法如下：

```
// X-test-Cache的字段的值一样，并且url一样就会命中缓存，url一样，但X-test-Cache的值不一样不会命中缓存
res.writeHead(200, {
  'Cache-Control': 'max-age=5,s-maxage=30',
  'Content-Type': 'application/json',
  'Vary': 'X-test-Cache'
});
```