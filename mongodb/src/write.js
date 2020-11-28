const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const DB_NAME = 'todoDb';

async function writeTasks() {
    
const client = await MongoClient.connect(url)
const todoDb = client.db(DB_NAME)

// creating a collection (table) in the database
const todos = todoDb.collection('todos');


// adding data/tasks into the table
const result = await todos.insertMany([
    {task: 'a task for anyone', priority: 4},   
    {task: 'something anyone can do', priority: 1},    
    {task: 'someone should finish this', priority: 2},
    {task: 'someone else should finish this', priority: 3}
]);

console.log(result);
}

writeTasks()

