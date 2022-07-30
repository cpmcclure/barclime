// Add libraries
const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const PORT = 3001

// const cors = require('cors')
// app.use(cors)

// Use libraries / middleware
const app = express();
// app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.json())
app.set('view engine', 'ejs')

let db
let dbConnectionStr = process.env.DB_STRING
let dbName = 'barclime'

// Set up database
MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} database`)
        // assign db to connected db for later use
        db = client.db(dbName)
        // shotData = db.collection('shot-data')
        // shotData = db.collection("shot-data").findOne({}, function(err, result) {
        //     if (err) throw err;
        //     console.log(result)
        //   });
    })

// Get  
app.get('/', async(request, response)=>{
    let shotData = await db.collection("shot-data").find().limit(1).sort({currentTime:-1}).toArray();
    console.log(shotData)
    response.render('index.ejs', { lastShot: shotData[0] })
})

// Post
app.post('/add', (req, res) => {
    db.collection('shot-data').insertOne(req.body)
    .then(result => {
        console.log(req.body)
        res.redirect('/')
    })
    .catch(error => console.error(error))
})

//Server
app.listen(process.env.PORT || PORT, function(){
    console.log(`listening on ${PORT}`)
})
    

