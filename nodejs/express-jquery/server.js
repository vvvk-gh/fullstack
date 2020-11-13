const express = require('express')
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// app routes
app.use('/api' , require('./routes/api'));
app.use('/' , express.static(path.join(__dirname , 'public')));

// app server
app.listen(4444 ,  ()=> {console.log(`App running at http://localhost:4444/`)});