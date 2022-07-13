const express = require('express')
const cookieParser = require('cookie-parser')



const app = express()
// to be added before apis path
app.use(express.json()) 
app.use(cookieParser())



app.get('/header', function (req, res) {
  let num1 = req.get("num1")
  let num2 = req.get("num2")
  let sum = parseInt(num1) + parseInt(num2)
  res.send("this is the sum of  " + sum )
})

app.get('/query', function (req, res) {
    let num1 = req.query?.num1
    let num2 = req.query["num2"]
    let sum = parseInt(num1) + parseInt(num2)
    res.send("this is the sum of  " + sum )
  })


app.post('/body', function(req, res){
    console.log(req)
    let num1 = req.body.num1
    let num2 = req.body.num2
    let sum = parseInt(num1) + parseInt(num2)
    res.send("this is the sum of  " + sum )
    
})


app.post('/cookie', function(req, res){
    console.log(req)
    let num1 = req.cookies.num1
    let num2 = req.cookies.num2
    let sum = parseInt(num1) + parseInt(num2)
    res.send("this is the sum of  " + sum )
})

app.get('/path/:num1/:num2', function(req,res){
    let num1 = req.params.num1
    let num2 = req.params.num2
    let sum = parseInt(num1) + parseInt(num2)
    res.send("this is the sum of  " + sum )
})

//  NOW RESPONSES- 

app.post('/cookie/resp', function(req, res){
  console.log(req.cookies)
  let num1 = req.cookies.num1
  let num2 = req.cookies.num2
  let sum = parseInt(num1) + parseInt(num2)
  res.cookie('sum', sum)
  res.send("this is the sum of  " + sum )
})

app.post('/body/resp', function(req, res){
  let num1 = req.body.num1
  let num2 = req.body.num2
  let sum = parseInt(num1) + parseInt(num2)
  res.send({'sum':sum})
})




console.log("Server Started")
app.listen(3000)