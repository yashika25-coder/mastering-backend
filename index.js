// here we have written an application
require('dotenv').config() //.env package use kr rhe h 
const express = require('express')
const app = express()
const port = 3000
const githubdata ={
  "name": "freeapi",
  "version": "1.3.1",
  "description": "A API learning go",
  "type": "module",
  "main": "src/index.js",
  "scripts": {
    "start": "nodemon -r dotenv/config --experimental-json-modules src/index.js",
    "pre-commit": "lint-staged",
    "prepare": "node prepare.js",
    "start:test-server": "node -r dotenv/config --experimental-json-modules e2e/test-server.js",
    "test:playwright": "set NODE_OPTIONS=--experimental-vm-modules -r dotenv/config --experimental-json-modules && npx playwright test"
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('yashikadotcom')
})

app.get('/github', (req, res) => {
  res.jsonp(githubdata)
})

app.get('/login',(req, res) =>{
        res.send('<h1> Hi, Yashika here !!</h1>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})

// congratulations created a  server