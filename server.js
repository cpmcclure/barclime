const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
// express-flash is used for the password / email errors
const flash = require('express-flash')
// morgan logs information about requests automatically
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const dashRoutes = require('./routes/dash')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
// This allows access to send and receive json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// serup Morgan to run
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
// start passport
app.use(passport.initialize())
// use sessions
app.use(passport.session())
// setup flash alerts
app.use(flash())
  
app.use('/', mainRoutes)
app.use('/dash', dashRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}, you better catch it!`)
})    