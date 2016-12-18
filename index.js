console.log("LINE 1")

var express = require('express')
var app = express()

var indexController = require('./controllers/index.js')

// set controllers (routes)
indexController(app)

app.use('/public', express.static(__dirname + '/public'));

var port = process.env.PORT || 3001
console.log('port: ' + port)

var httpServer = require('http').createServer(app);
httpServer.listen(port, function () {
	console.log('dog-training running on ' + port + '.');
})
