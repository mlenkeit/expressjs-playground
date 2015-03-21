var express = require('express')
  , app = express()
  , router = express.Router()

var appMiddlewares = {
    helloWorld : function(req, res, next) {
        res.send('Hello World Middleware!')
    },
    logger : function(req, res, next) {
        console.log('Requested url: %s', req.originalUrl)
        next()
    }
}

app.use(appMiddlewares.logger)

app.get('/', appMiddlewares.helloWorld)

app.get('/', function(req, res) {
    res.send('Hello World!');
})

var server = app.listen(8088, function() {
    var host = server.address().address
      , port = server.address().port
    console.log('App listening at http://%s:%s', host, port)
})