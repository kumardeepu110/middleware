const express = require('express')
const app = express()

app.use(express.urlencoded())
app.use(express.json())

let arr = []
app.post('/user', (req,res)=>{
    let name = req.body.name
    let email = req.body.email

    let user = {
        username: name,
        useremail: email
    }
    arr.push(user)

    res.send(user)
})

app.get('/getdata', (req,res)=>{
  let getdata = arr
  res.send(getdata)  
})

app.listen(5000, (err)=>{
    if(err){
        console.log("error occeured",err);
    }
    else{
        console.log("server is connected");
    }
})