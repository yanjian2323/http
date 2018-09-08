let http = require('http');
let fs = require('fs');
let path = require('path');

let app = http.createServer((req, res) => {
	console.log('request2');
	res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8888');
	// 多个headers用逗号分隔
	res.setHeader('Access-Control-Allow-Headers', 'content-type,X-test');
	res.setHeader('Access-Control-Allow-Methods', 'PUT');
	// 5秒之内客户端不发预检请求了
	res.setHeader('Access-Control-Max-Age', '5');
	res.end('123');
});

app.listen(8889);