let http = require('http');
let fs = require('fs');
let path = require('path');
let zlib = require('zlib');

let app = http.createServer((req, res) => {
	console.log(req.url);
	if (req.url === '/') {
		let info = fs.readFileSync(path.join(__dirname, './test.html'));
		res.writeHead(200, {
			"Content-Type": "text/html",
			"Connection": "close"//关闭长连接
		});
		res.end(info);
	} else {
		let img = fs.readFileSync(path.join(__dirname, './2.png'));
		res.writeHead(200, {
			"Content-Type": "image/png",
			"Connection": "close"//关闭长连接
		});
		res.end(img);
	}
	
});

app.listen(8888);