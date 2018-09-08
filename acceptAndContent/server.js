let http = require('http');
let fs = require('fs');
let path = require('path');
let zlib = require('zlib');

let app = http.createServer((req, res) => {
	console.log(req.url);
	fs.readFile(path.join(__dirname, './test.html'), (err, info) => {
		res.writeHead(200, {
			"Content-Type": "text/html",
			// "Content-Encoding": "gzip"
		});
		// res.end(zlib.gzipSync(info));
		res.end(info);
	});
});

app.listen(8888);