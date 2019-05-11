const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const expressValidator = require('express-validator')

mongoose.connect('mongodb://localhost:27017/match', { useNewUrlParser: true })
mongoose.connection.on("open", function() {
    console.log("Connected to mongo server.")
  })

const app = express()

app.use(bodyParser.json())
app.use(expressValidator())
// app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/user', require('./routes/user/index'))

app.listen(8071, () => {
    console.log("app running on 8071")
})