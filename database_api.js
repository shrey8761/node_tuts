const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
// to be added before apis path
app.use(express.json()) 
app.use(cookieParser())
// =================================Connecting to a Postgres database from Node.js============
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'service',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

app.put('/put/:id', function (req, res) {
    const id = parseInt(req.params.id)
    console.log(id);
    const { name, email,salary,department } = req.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2, salary = $3, department = $4 WHERE id = $5',
      [name, email, salary, department, id],
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`User modified with ID: ${id}`)
      }
    )
  })
  



app.get('/header', function (req, res) {
  let num1 = req.get("num1")
  let num2 = req.get("num2")
  let sum = parseInt(num1) + parseInt(num2)
  res.send("this is the sum of  " + sum )
})


//  NOW RESPONSES- 

app.post('/body/resp', function(req, res){
  let num1 = req.body.num1
  let num2 = req.body.num2
  let sum = parseInt(num1) + parseInt(num2)
  res.send({'sum':sum})
})




console.log("Server Started")
app.listen(3003)