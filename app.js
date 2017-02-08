var express = require('express');
var app = express();
var PORT = 3000;

app.get('/about', function(req, res){

	res.send('<h1>This is a new site</h1>')


});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
console.log('listening on PORT: '+ PORT);

});