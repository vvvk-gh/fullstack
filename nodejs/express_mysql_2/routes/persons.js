const route = require('express').Router()
const db = require('../db')

route.get('/' , (req, res)=> {
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

 module.exports = route;