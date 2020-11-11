const express = require('express')
const app = express()

const todoRoute = require(`./routes/todos`)

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/public' , express.static(__dirname + "/public"))
app.use('/todos' , todoRoute)

app.get('/hello', (req, res)=>{
    res.send('hello')
})

app.listen('4444' , ()=> console.log(`Running at http://localhost:4444`))