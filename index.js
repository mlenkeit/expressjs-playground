var express = require('express')
  , app = express()

var middlewares = {
    helloWorld : function(req, res, next) {
        res.send('Hello World Middleware!')
    }
}

app.get('/', middlewares.helloWorld)

app.get('/', function(req, res) {
    res.send('Hello World!');
})

var server = app.listen(8088, function() {
    var host = server.address().address
      , port = server.address().port
    console.log('App listening at http://%s:%s', host, port)
})