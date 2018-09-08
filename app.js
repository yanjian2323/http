let http = require('http');
let fs = require('fs');
let path = require('path');
let url = require('url');
let config = require('./config');

const PORT = 8000;

let app = http.createServer((request, response) => {
	let pathname = url.parse(request.url).pathname;
	// 后缀名
	let ext = path.extname(pathname);
	if (request.url === '/') {
		fs.readFile('./index.html','utf-8', (err, file) => {
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});
			response.write(file);
			response.end();
		});
	} else if (request.url.match(config['jsReg'])) { //js文件
		console.log(request.url);
		let filePath = `assets${pathname}`;
		let lastMod = request.headers['if-modified-since'];
		fs.stat(filePath, (err, stat) => {
			let time = stat.mtime.toUTCString();
			// 修改时间没变返回304
			if(lastMod && time === lastMod) {
				response.writeHead(304);
				response.end();
			} else {
				fs.stat(filePath, (err, stat) => {
					fs.readFile(filePath, 'utf8', (err, file) => {
						if (err) {
							response.writeHead(500, err.toString());
							response.end();
						}
						response.writeHead(200, {
							'Content-Type': 'application/x-javascript',
							'Cache-Control': 'max-age=5,s-maxage=20',
							'Last-Modified': time
						});
						response.write(file);
						response.end();
					});
				});
			}
		});
	} else {
		response.writeHead(404, {
			'Content-Type': 'text/plain'
		});
		response.end();
	}
});
app.listen(PORT);
console.log('server has been started,please visit http://localhost:' + PORT);