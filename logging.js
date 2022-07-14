const express = require('express')
const cookieParser = require('cookie-parser')
const winston = require('winston');

const logConfiguration = {
    'transports': [
        new winston.transports.File({
            filename: 'store.log'})
    ]
};

var logger = winston.createLogger(logConfiguration);
// logger.info('Hello, Winston!');

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

app.post('/body', function(req, res){
    console.log(req)
    let num1 = req.body.num1
    let num2 = req.body.num2
    let num3 = req.body.num3
    let sum = parseInt(num1) + parseInt(num2) + parseInt(num3)
    res.send("this is the sum of  " + sum )
    logger.info(num1+"  "+num2+"  "+num3+"their sum is"+ sum)
})

console.log("Server Started")
app.listen(3001)