const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()

mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

//MODELS
const { User } = require("./model/user")

//============================
//      USERS
//============================

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body)

  user.save((err, data) => {
    if (err) return res.json({ success: false, err })
    res.status(200).json({ success: true, userdata: data })
  })
})

const port = process.send.PORT || 3002

app.listen(port, () => {
  console.log(`Server running at ${port}`)
})
//68
