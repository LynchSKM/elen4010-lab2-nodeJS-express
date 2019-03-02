const path = require('path')
const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})

// Route to about page:
app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

app.listen(3000)
console.log('Express server running on port 3000')
