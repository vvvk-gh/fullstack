const {MongoClient} = require('mongodb');


// MongoDB url
const url = 'mongodb://localhost:27017';

//DB Name
const dbName = 'todoDb';

//Async IIFE's
(async () =>{
    const client = await MongoClient.connect(url);
    
    const todoDb = client.db(dbName);

    console.log(todoDb);
})()