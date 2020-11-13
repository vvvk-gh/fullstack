const route = require('express').Router();
const db = require('../db');

route.get('/persons/' ,(req ,res)=>{
    db.getAllPersons()
    .then( (persons) => res.send(persons))
    .catch((err) =>  res.send({error : err}))
})


route.post('/persons/' ,(req ,res)=>{
    db.add_person(req.body.name , req.body.age , req.body.city)
    .then(() => res.redirect('/api/persons'))
    .catch((err) => res.send({error : err}));    
})

module.exports = route;