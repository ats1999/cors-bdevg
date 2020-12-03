const express = require('express')
const app = express()
var cors = require('cors')

const port = 4000
app.use(cors())
app.get('/test', (req, res) => {
  res.send('<h1>Testing cors issue!</h1>')
})
app.get('/', (req, res) => {
  res.send('<h1>Hello micro world!</h1>')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT || port}`)
})