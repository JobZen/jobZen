const express = require('express')
const db = require('./database/index.js')
const PORT = 3000
const app = express()
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../client/dist'))



app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})