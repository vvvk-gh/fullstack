const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password:'mypass',
    database: 'testdb' 
});

//this wil have 2 params query and the callback function 
connection.query(
    `SELECT * FROM test1`,
    function (err, rows, cols) {
        if(err){
            console.log(err)
        }
        else{
            console.log(rows);
            //console.log(cols);  get column data + meta data
            connection.close();
            
        }
    })
