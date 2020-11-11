const route = require('express').Router()

let todos =  [
    {task : "task1"},
    {task: "task2"}
]
route.get('/' ,(req,res) => {
        res.render('todos' , {
            title : "Handlebars Todlist",
            todos
        })
})



route.post('/' ,(req,res) => {
  
    todos.push({
        task : req.body.task
    })

    res.redirect('/todos/')
})

module.exports = route;