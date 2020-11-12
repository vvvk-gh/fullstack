const mysql = require('mysql2')

const connection = mysql.createConnection({
  host:'localhost',
  user: 'myuser',
  password:'mypass',
  database:'testdb'
})

 
//Get all persons in the persons table
function getAllPersons(){
  // Returns a promise object

  return new Promise( (resolve , reject) => {

    connection.query(
      `SELECT * FROM persons`,
  
      (err , results) => {
        if(err){
          reject(err);
          //connection.close();
        }
        else{
          resolve(results);
          //connection.close();
        }
        
      })
  })  
}

//exports = module.exports = {getAllPersons};
module.exports = {getAllPersons};