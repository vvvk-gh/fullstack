const express = require('express');
const path = require('path');
const app = express();
const { db }= require('./db/models');
const {userRoute} = require(`./routes/users`);
const {postRoute} = require(`./routes/posts`);
const {commentsRoute} = require('./routes/posts/comments')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/' , express.static(path.join(__dirname + "/public")))

app.use('/api/users' , userRoute);
app.use('/api/posts' , postRoute);
app.use('/api/comments' , commentsRoute);


db.sync()
    .then(()=> {
        app.listen('3434' , ()=> console.log(`App listening at http://localhost:3434`));

    })
    .catch((err)=> {
        console.error(new Error('Could not start database'))
        console.error(err)
})
