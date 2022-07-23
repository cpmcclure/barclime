// Add libraries
const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

// const cors = require('cors')
// app.use(cors)

// Use libraries / middleware
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

// Set up database
const connectionString = 'mongodb+srv://cpmcclure:lR3divMAHDlChZ1f@cluster0.t1avrfg.mongodb.net/?retryWrites=true&w=majority'
MongoClient.connect(connectionString)
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('barclime')
        const shotData = db.collection('shot-data')

        // Get  
        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html')
        })

        // Post
        app.post('/add', (req, res) => {
            shotData.insertOne(req.body)
            .then(result => {
                res.redirect('/')
            })
            .catch(error => console.error(error))
        })

        //Server
        app.listen(3000, function(){
            console.log('listening on 3000')
        })
    })
    .catch(err => console.error(err))

