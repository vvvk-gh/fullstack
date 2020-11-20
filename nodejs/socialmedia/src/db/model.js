const Sequelize = require('sequelize');
const {DataTypes} = require('sequilze');

const db = new Sequelize('socialmediadb' , 'socialuser' , 'mediapass' , {
    host : 'localhost',
    dialect : 'mysql'
});


const Id_Def = {

}

const 

const Users = db.define('user' , {
    
})

db.sync()
    .then(()=> console.log(`Db synced`))
    .catch((E)=> console.log(`Error : ${E}`))