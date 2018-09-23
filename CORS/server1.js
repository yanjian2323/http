let http = require('http');
let fs = require('fs');
let path = require('path');

let app = http.createServer((req, res) => {
	fs.readFile(path.join(__dirname, '.' + req.url), (err, info) => {
		res.writeHead(200, {
			"Content-Type": "text/html"
		});
		res.end(info);
	});
});

app.listen(8888);