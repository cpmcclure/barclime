const express = require('express');
const app = express();
// const cors = require('cors')

// app.use(cors)

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/add', (req, res) => {
    console.log('Success')
})

app.listen(3005, function(){
    console.log('listening on 3000')
})