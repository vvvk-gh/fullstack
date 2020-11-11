const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password:'mypass',
    database: 'testdb' 
});


connection.query(
    `CREATE TABLE IF NOT EXISTS persons(
     id INTEGER AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(30) NOT NULL,
     age INTEGER NOT NULL,
     city VARCHAR(30)
    )`,    
     function (err, results) {
        if(err) 
        console.log(err)
        else 
        console.log(`The Table Created 
${JSON.stringify(results)}`);
       connection.close();  //we can close the connection  
    }
    
)

