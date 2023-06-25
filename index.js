// // using the http module
// let http = require('http'),
 
// // look for PORT environment variable, 
// // else look for CLI argument,
// // else use hard coded value for port 8080
// port = process.env.PORT || process.argv[2] || 3000;
 
// // create a simple server
// let server = http.createServer(function (req, res) {
 
//         res.writeHead(200, {
//             'Content-Type': 'text/plain'
//         });
//         res.write('hello heroku!', 'utf-8');
//         res.end();
 
//     });
 
// // listen on the port
// server.listen(port, function () { 
//     console.log('app up on port: ' + port);
 
// });

// CommonJs
const fastify = require('fastify')({
  logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world...' })
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})