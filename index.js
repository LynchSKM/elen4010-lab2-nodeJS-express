const path = require('path')
const express = require('express')
const app = express()
const mainRouter = require('./mainRoutes')

// Use new router:
app.use(mainRouter)

const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)
