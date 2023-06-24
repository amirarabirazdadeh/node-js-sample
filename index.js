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




const test = async () => {
  // CommonJs
const app = require('fastify')({
  logger: true
})

// Declare a route
app.post('/', function (request, reply) {
 // console.log(request);
  reply
  .code(200)
  .headers({
      "XXXXXXXXXXXB": `OOOOOOOOOOOOOOOB`,
      "X-Amz-Client-Context": `eyJYWFhYWFgiOiJRUVFRUVFRUVEifQ==`,
      "X-Amz-Xccccc": `=========`
  })
  .send({
    message: "Hello World!",
    context: { headers: { "x-tenant": "root" } }
  })
})

const response = await app.inject({
  method: 'POST',
  url: '/'
});

  console.log('body: ', JSON.stringify(response.json))
}
test()


// // Run the server!
// app.listen({ port: 3000 }, function (err, address) {
//   if (err) {
//     app.log.error(err)
//     process.exit(1)
//   }
//   // Server is now listening on ${address}
// })


