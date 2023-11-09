const express = require("express")
const app = express()
const cors = require('cors')
const db = require("./db")
app.use(cors())
app.use(express.json())
const userModel = require("./users")

app.get("/login",async(req,res) => {
    let email = req.query.email
    let pass = req.query.pass

    console.log(email)
    console.log(pass)

    let user = await userModel.findOne({email: email, password: pass}).exec()
    if(user){
        return res.status(200).send({status: 1, msg: 'Login Success'})
    }
    return res.status(400).send({status: 0, msg: 'Invalid Credntials'})

})

app.post("/signup",async(req,res) => {
    let user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    }

    let createUser = await new userModel(user).save()
    return res.status(200).send({status: 1, msg: 'user created successfully'})
})


app.post("/rate",async(req,res) => {
    let 
})





app.listen(3333,(err) => {
    if(err){
        console.log(err)
    }else{
        console.log('started listening on port 3333')
    }
})