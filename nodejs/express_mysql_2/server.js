const express = require('express')
const app = express();
const db = require('./db')

app.use(express.json())
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
    let name = req.body.name;
    let age = parseInt(req.body.age);
    let city = req.body.city;

    db.add_person(name,age,city)
    .then(()=> {
        console.log('Values added');
        res.redirect('/')
        })
    .catch((err)=> console.log(err));
})

app.listen(4444 ,  ()=> {console.log(`App running at http://localhost:4444/`)})