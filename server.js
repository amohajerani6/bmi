const express = require('express')
const bodyParser=require('body-parser')

const app=express()
app.use(bodyParser.urlencoded({extended:true}))

app.get('/' , function(req,res){res.sendFile(__dirname+'/index.html')})

app.post('/' , function(req,res){
var h=Number(req.body.height)
var w=Number(req.body.weight)
var bmi = h/(w*w)
  res.send('Your BMI is '+String(bmi))
})


app.listen(3000)
