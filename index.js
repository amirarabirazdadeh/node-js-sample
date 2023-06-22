// var express = require('express')
// var app = express()

// app.set('port', (process.env.PORT || 5000))
// app.use(express.static(__dirname + '/public'))

// app.get('/', function(request, response) {
//   response.send('Hello World!!!')
// })

// app.listen(app.get('port'), function() {
//   console.log("Node app is running at localhost:" + app.get('port'))
// })

// Require the framework and instantiate it


// CommonJs
const fastify = require('fastify')({
  logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world....' })
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})


