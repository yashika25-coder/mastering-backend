// here we have written an application
require('dotenv').config() //.env package use kr rhe h 
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('yashikadotcom')
})

app.get('/login',(req, res) =>{
        res.send('<h1> Hi, Yashika here !!</h1>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})

// congratulations created a  server