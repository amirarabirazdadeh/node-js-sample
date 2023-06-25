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
    await app.inject({
      method: 'GET',
      url: '/'
    })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

