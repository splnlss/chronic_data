require('dotenv').config()

const app = require('express')()
const PORT = process.env.PORT || 3000

require('./middleware/session')(app)
require('./middleware/passport')(app)

require('./auth/routes')(app)

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))