const config = require('./config')

const start = async () => {
  await require('./config/mongoose')()

  const app = require('./config/express')

  app.listen(config.port, () =>
    console.log(`App listening on port ${config.port}!`)
  )
}

start().catch(err => {
  console.log(err)
  process.exit(1)
})
