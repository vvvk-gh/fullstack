const express = require('express')
const app = express();

const persons = [
        { name: 'Vamsi', age: 23, city: 'HYD' },
        { name: 'ABHI', age: 27, city: 'HYD' },
        { name: 'SAI', age: 24, city: 'HYD' }
];

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine' , 'hbs');

 app.get('/' , (req, res)=> {     
     res.render('persons.hbs' , {
         heading : 'Persons Table',
         persons
     })
 })

app.listen(4444 ,  ()=> {console.log(`App running at http://localhost:4444/`)})