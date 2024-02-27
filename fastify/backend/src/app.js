const mongoose = require('mongoose');
require('dotenv').config();
const fastify = require('fastify')({
  logger: true
})

mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log("MongoDB connected…"))
.catch(err => console.log(err))

fastify.get('/', async (_req, _res) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
