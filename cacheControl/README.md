### Cache-Control

public: 任何设备都可以缓存

Private：只有浏览器端可以缓存

No-cache：每次都要跟服务器进行验证，会带着if-modify-since和if-no-match头信息去服务器验证

No-store：直接发一个新请求，不会携带if-modify-since和if-no-match头信息

Max-age：客户端缓存的时间，单位是秒,没设置S-max-age的话，max-age也会在代理服务器生效

S-max-age：代理缓存服务器的缓存时间，只在代理服务器生效



可以这么设置

```javascript
res.setHeader({
    'Cache-Control': 'max-age=20,public,no-cache'
});
```

