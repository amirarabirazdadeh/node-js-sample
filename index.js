// CommonJs
const fastify = require('fastify')({
  logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

/**
 * Run the server!
 */
const start = async () => {
  try {
    const response = await fastify.inject({
      method: 'GET',
      url: '/'
    });
   //console.log(response.body);
   return JSON.parse(response.body);
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

