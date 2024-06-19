
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.json({
    "hey": "NodeJs",
    "HELLO":"WORLD",
    "NAME": "Hitik",
    "age": "21",
    "agenda":"learn-docker-container", 
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})