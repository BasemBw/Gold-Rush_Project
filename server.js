const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
app.use(express.static(path.join(__dirname,"dist")))
app.use(express.static(path.join(__dirname,"node_modules")))
app.use(bodyParser.json())

app.get('/',function(req,res){
    
})

const port = 9090
app.listen(port,function () { console.log('Running on ' + port) })
