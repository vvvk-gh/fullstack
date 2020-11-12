const express = require('express')
const app = express();
const db = require('./db')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//set the view engine
app.set('view engine' , 'hbs');

// app routes
app.use('/add' , require('./routes/add_persons'));
app.use('/persons' , require('./routes/persons'))

// app server
app.listen(4444 ,  ()=> {console.log(`App running at http://localhost:4444/`)})