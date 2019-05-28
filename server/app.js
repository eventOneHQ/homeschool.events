const app = require('./config/express')
const config = require('./config')

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(config.port, () =>
  console.log(`App listening on port ${config.port}!`)
)
