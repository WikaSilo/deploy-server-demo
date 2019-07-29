if(process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const routes = require('./routes')

const app = express()
const port = process.env.PORT || 3000

// connect mongodb - atlas
mongoose.connect(`${process.env.ATLAS_CONNECT}`, { useNewUrlParser: true }, function(err) {
  if(err) console.log('MONGODB-ATLAS: database connection failed')
  else console.log('MONGODB-ATLAS: database connection success')
})

// initial middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended:false }))

// routes
app.use('/', routes)

app.listen(port, function() {
  console.log('this app running on port: ', port)
})