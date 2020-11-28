const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const DB_NAME = 'todoDb';

async function writeTask() {
    
const client = await MongoClient.connect(url)
const todoDb = client.db(DB_NAME)

// creating a collection (table) in the database
const todos = todoDb.collection('todos');
 
//task
const todo  = {
    'task' : 'do this task' , 
    'owner':'manager' , 
    'priority': '1' 
};
// adding data/task into the table
const result = await todos.insertOne(todo);
console.log(result);

}

writeTask()

