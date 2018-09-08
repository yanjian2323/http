let http = require('http');
let fs = require('fs');
let path = require('path');

let wait = function (s) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, s * 1000);
	});
};

let app = http.createServer((req, res) => {
	console.log(req.headers['host']);
	if (req.url === '/') {
		let info = fs.readFileSync(path.join(__dirname, './test.html'));
		res.end(info);
	} else {
		res.writeHead(200, {
			'Cache-Control': 'max-age=5,s-maxage=30',
			'Content-Type': 'application/json',
			'Vary': 'X-test-Cache'
		});
		wait(3).then(() => {
			res.end(JSON.stringify({
				data: 'yanjian'
			}));
		});
		
	}
});

app.listen(8888);