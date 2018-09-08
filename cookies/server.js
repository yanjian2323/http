let http = require('http');
let app = http.createServer((req, res) => {
	res.setHeader('Set-Cookie', ['a=1;max-age=10','b=2;httponly']);
	res.end('Set-Cookie');
});

app.listen(8888);