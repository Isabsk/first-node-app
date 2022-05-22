const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect('mongodb+srv://testdb:testdb@cluster0.6v96k.mongodb.net/Company',{useNewUrlParser: true} , {useUnifiedTopology: true})

const com = {
    name: String,
    role: String
}

const save = mongoose.model("Users" , com )
/*let recive = new save({
        name: "Isab Sk",
        role: "front end dev"
    })
    recive.save()*/

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post("/", (req,res) => {
    let recive = new save({
        name: req.body.name,
        role: req.body.role 
    })
    recive.save()
})

app.listen(3004, () => {
console.log('error is no defined')
})
