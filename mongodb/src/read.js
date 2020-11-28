const {MongoClient} = require('mongodb');
const DB_NAME = 'todoDb';

const url = 'mongodb://localhost:27017';

async function readTasks(){
    const client = await MongoClient.connect(url);
    const todoDb = client.db(DB_NAME);
    const todos =  todoDb.collection('todos');

    //find all documents
    //const todoArr =  await todos.find({}).toArray()
    
    //documents that matches the priority
    //const todoArr =  await todos.find({ priority : 1 }).toArray()
    
    //greator than 
    //const todoArr = await todos.find({ priority : {$gt : 2} }).toArray(); 
    
    const todoArr = await todos.find({ 
        $and: [
            {priority : {$lt : 4}} , {priority : {$gt : 2}}    
        ] 
         }).toArray(); 
    
    todoArr.forEach((todo)=> console.log(JSON.stringify(todo)));
}

readTasks()