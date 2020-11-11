const express = require('express');
const app = express();

const todoRoute = require(`./routes/todos`)

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/todos' , todoRoute)

app.set('view engine' ,'hbs')
//app.set('views' , __dirname+"/views")

app.get("/hello" , (req ,res)=>{
    res.send('hello')
})

app.listen(4444 , ()=>{
    console.log(`app running at http://localhost:4444`)
})