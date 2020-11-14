const Sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

const db = new Sequelize('sampledb' , 'sampleuser' , 'samplepass', {
    host : 'localhost',
    dialect : 'mysql'
})

const Student = db.define('students' , {
    name : {
    type: DataTypes.STRING(40),
    allowNull : false,            
    },
    age : {
        type : DataTypes.INTEGER(2),
        allowNull : false,
        defaultValue : -1,
    }
}) 

module.exports =  {db , Student}