var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js')
app.get('/about',middleware.requireAuth, function(req, res){
	res.send('<h1>This is the About Page!</h1>')
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
console.log('listening on PORT: '+ PORT);

});