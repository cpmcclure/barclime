// Add libraries
const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const PORT = 3000

// const cors = require('cors')
// app.use(cors)

// Use libraries / middleware
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

let db
let dbConnectionStr = process.env.DB_STRING
let dbName = 'barclime'
let collection

// Set up database
MongoClient.connect(dbConnectionStr)
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        // assign db to connected db for later use
        db = client.db(dbName)
        collection = db.collection('shot-data')
    })
    .catch(err => console.error(err))

// Get  
app.get('/', (req, res) => {
    const mostRecent = collection.find().sort({"currentTime":1}).limit(1)
    console.log(mostRecent)
    res.sendFile(__dirname + '/index.html')
})

// Post
app.post('/add', (req, res) => {
    collection.insertOne(req.body)
    .then(result => {
        res.redirect('/')
    })
    .catch(error => console.error(error))
})

//Server
app.listen(process.env.PORT || PORT, function(){
    console.log('listening on 3000')
})
    

