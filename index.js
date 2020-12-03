const express = require('express')
const app = express()
var cors = require('cors')

const port = 4000
app.use(cors())
app.get('/test', (req, res) => {
  res.send('Testing cors issue!')
})
app.get('/', (req, res) => {
  res.send('Hello micro world!')
})
app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT || port}`)
})