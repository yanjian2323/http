### CORS

1. ajax跨域请求，请求能正常发送到服务器，服务器也能正常响应，只不过浏览器在接收到响应后发现响应头里没有Access-Control-Allow-Origin字段，会在控制台报错

2. 可以禁用浏览器的跨域限制，在命令行输入类似这样的命令
    ```
    /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-web-security --user-data-dir=/Users/jianyan
    ```

3. 服务端设置Access-Control-Allow-Origin的value，只能有一个值。如果要同时让多个域名跨域，动态的设置Access-Control-Allow-Origin的value

4. Access-Control-Allow-Origin 如果设置为*，是不能进行cookie传递的，这种情况下必须设置一个固定的域名

5. ajax跨域请求，有时候会首先发送一个预检请求，除了下面的情况，都会发送预检请求

- 代码中设置了自定义头，比如：

  ```javascript
  fetch('url', {
      headers: {
        	// 自定义头信息
          'X-Test': '123'
      }
  });
  ```

  ​

- Content-Type的值不是text/html,mutipart/form-data,application/x-www-urlencode之一，比如Content_type=application/json的时候就会发送预检请求

  ```javascript
  fetch('url', {
      headers: {
        	// Content-Type是application/json会发送预检请求
          'Content-Type': 'application/json'
      }
  });
  ```

  ​

- 不是GET、POST、HEAD请求方式

  ```javascript
  fetch('url', {
    	// 会发送预检请求
    	method: 'PUT'
  });
  ```

4. 发送预检请求的时候，浏览器会自动带上一些头信息，比如下面的代码：

   ```javascript
   // 浏览器会在发送预检请求的时候带上Accesss-Control-Request-Headers:'X-test,Content-type'和Accesss-Control-Request-Method: 'PUT'
   fetch('http://127.0.0.1:8889', {
     method: 'PUT',
     headers: {
       'X-test': '111',
       'Content-Type': 'application/json'
     }
   });
   ```

   ​

5. 用Access-Control-Max-Age来设置预检缓冲的时间，单位是秒

   ```javascript
   res.setHeader('Access-Control-Max-Age', '5');// 5秒之内客户端就不发预检请求了
   ```

   ​