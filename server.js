const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors)

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html')
})

app.listen(3000, function(){
    console.log('listening on 3000')
})