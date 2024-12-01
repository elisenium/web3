require('dotenv').config()
const express = require("express")
const personsRoutes = require('./routes/persons')
const mongoose = require('mongoose')


const PORT = process.env.PORT
const app = express()

const url = process.env.MONGODB_URI;
mongoose.connect(url)

app.use(express.json())

// Disable CORS so that React client can freely access this server
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*")
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.set("Access-Control-Allow-Methods", "*")
  next()
})

app.use('/persons', personsRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.get('/api/notes', (request, response) => {
  Contact.find({}).then(notes => {
    response.json(notes)
  })
})