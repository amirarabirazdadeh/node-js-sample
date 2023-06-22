var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  const tenant = request.header('x-tenant');
  response.append("XXXXXXXXXX", request.headers.x-tenant).send(JSON.stringify(request.headers))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})