#### Cookie

1. cookie的几个属性

   domain：

   expires|max-age：cookie的过期时间

   httponly：设置了httponly就不可以使用document.cookie来读取

   samesite：不是同一域名就不发送cookie，防止xsrf攻击

2. cookie可以同时设置多个值

   ```
   res.setHeader('Set-Cookie', ['a=1;max-age=10','b=2;httponly']);
   ```

   返回的响应头如下：

   ```
   Set-Cookie: a=1;max-age=10
   Set-Cookie: b=2
   ```

   再次发起请求时会携带cookie

   ```
   Cookie: b=2; a=1
   ```

   ​