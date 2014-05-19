var express = require('express');
var app = express();

app.listen(process.env.PORT || 3000);

app.get('/', function(request, response) {
	response.send('Hello world!');
});
