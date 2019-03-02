const path = require('path')
const express = require('express')
const app = express()
const mainRouter = express.Router()

mainRouter.get('/', function (req, res) {
  res.send('Hello World')
})

// Route to about page:
mainRouter.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

// Use new router:
app.use(mainRouter)

app.listen(3000)
console.log('Express server running on port 3000')
