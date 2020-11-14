const { parse } = require('path');
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

const task = async() => {
    try{
        await db.sync()
        await Student.create({
            name : (['varun','abhi','sai','kiran','charan',
            'shammi','sk','vulgar vardhan','gl','mowa'])[parseInt(Math.random()*10)],
            age : 10 + (parseInt(Math.random)*10)
        });

    }
    catch(err){
        console.log(err)
    }

}

task();
