let http = require('http');
let fs = require('fs');
let path = require('path');

let app = http.createServer((req, res) => {
	console.log(req.url);
	if (req.url === '/') {
		res.writeHead(302, {
			'Location': '/new'
		});
		res.end('');
		return;
	}
	if (req.url === '/new') {
		res.end('new');
	}
});

app.listen(8888);