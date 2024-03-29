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
// method override allows us to put multiple methods in the form action and process which kind in the server
const methodOverride = require("method-override")
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const shotRoutes = require('./routes/shot')
const profileRoutes = require('./routes/profile')

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
// Use forms for put / delete
app.use(methodOverride("_method"));
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
app.use('/shot', shotRoutes)
app.use('/profile', profileRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}, you better catch it!`)
})    