require('dotenv').config()
const express = require('express')
const app = express()
port=3000

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })
  
app.get('/hello',(req,res)=>{
res.send("Hii what's up")

}  )

app.listen(process.env.port,()=>{
    console.log(`Yoo i m listening in ${port}`)
})

  // POST method route
  app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })