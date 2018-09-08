let http = require('http');
let fs = require('fs');
let path = require('path');

let app = http.createServer((req, res) => {
	if (req.url === '/') {
		res.setHeader("Content-Type", "text/html");
		fs.readFile(path.join(__dirname, './test.html'), (err, info) => {
			if (err) {
				throw new Error(err);
			}
			res.end(info);
		});
	} else {
		res.writeHead(200, {
			// 必须设置这个
			"Content-Type": "text/javascript",
			"Cache-Control": "max-age=10000,public"
		});
		res.end(`
			console.log(123);
		`);
	}
});

app.listen(8888);