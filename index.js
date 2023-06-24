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




//
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
    message: "POST Hello World!",
    context: { headers: { "x-tenant": "root" } }
  })
});

app.post('/goodbye', function (request, reply) {
  // console.log(request);
   reply
   .code(200)
   .headers({
       "XXXXXXXXXXXB": `OOOOOOOOOOOOOOOB`,
       "X-Amz-Client-Context": `eyJYWFhYWFgiOiJRUVFRUVFRUVEifQ==`,
       "X-Amz-Xccccc": `=========`
   })
   .send({
     message: "Goodbye World!",
     context: { headers: { "x-tenant": "root" } }
   })
 });

 app.get('/', function (request, reply) {
  // console.log(request);
   reply
   .code(200)
   .headers({
       "XXXXXXXXXXXB": `OOOOOOOOOOOOOOOB`,
       "X-Amz-Client-Context": `eyJYWFhYWFgiOiJRUVFRUVFRUVEifQ==`,
       "X-Amz-Xccccc": `=========`
   })
   .send({
     message: "GET Hello World!",
     context: { headers: { "x-tenant": "root" } }
   })
 });
 
 app.inject({
  method: 'POST',
  url: '/goodbye'
});


// Run the server!
// app.listen({ port: 3000 }, function (err, address) {
//   if (err) {
//     app.log.error(err)
//     process.exit(1)
//   }
//   //Server is now listening on ${address}
// })


