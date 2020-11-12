const mysql = require('mysql2')

const connection = mysql.createConnection({
  host:'localhost',
  user: 'myuser',
  password:'mypass',
  database:'testdb'
})


connection.query(
    `SELECT * FROM persons`,

    (err , results) => {
      if(err){
        console.log(err);
        connection.close();
      }
      else{
        console.log(results);
        connection.close();
      }
      
    })