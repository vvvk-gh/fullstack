const express = require('express')
const app = express();
const db = require('./db')

//app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine' , 'hbs');

 app.get('/' , (req, res)=> {
    //gets the data from database
    db.getAllPersons()
    .then((persons) => {
        console.log(persons)
        res.render('persons.hbs' , {
            heading : 'Persons Table',
            persons
        })   
    })
    .catch(err => console.log(err))
 })

 app.get('/add' , (req, res)=> {     
    res.render('add_persons.hbs' , {
        heading : 'Add Persons to Persons Table',
    })
})

app.post('/add' , (req, res)=> {
    
})

app.listen(4444 ,  ()=> {console.log(`App running at http://localhost:4444/`)})