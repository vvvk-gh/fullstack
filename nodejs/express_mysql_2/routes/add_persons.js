const route = require('express').Router()
const db = require('../db')

route.get('/' , (req, res)=> {     
    res.render('add_persons.hbs' , {
        heading : 'Add Persons to Persons Table',
    })
})

route.post('/' , (req, res)=> {
    let name = req.body.name;
    let age = parseInt(req.body.age);
    let city = req.body.city;

    db.add_person(name,age,city)
    .then(()=> {
        console.log('Values added');
        res.redirect('/persons')
        })
    .catch((err)=> console.log(err));
})


module.exports = route;