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


const Course = db.define('courses' , {
    id : {
        type : DataTypes.STRING(2),
        allowNull: false,
        primaryKey: true,
    },
    name : {
        type: DataTypes.STRING(40),
        allowNull : false,            
    }
}) 

const Season = db.define('seasons' , {
    id : {
        type : DataTypes.STRING(1),
        allowNull: false,
        primaryKey: true,
    },
    name : {
        type: DataTypes.STRING(40),
        allowNull : false,            
    }
})

const Center = db.define('centers' , {
    id:{
        type : DataTypes.STRING(2),
        allowNull : false,  
        primaryKey: true,
    },
    name : {
        type: DataTypes.STRING(40),
        allowNull : false,            
    },
    city : {
        type: DataTypes.STRING(40),
        allowNull : false,            
    },
})

const Batch = db.define('batches', {
    id:{
        type : DataTypes.STRING(8),
        allowNull : false,  
        primaryKey: true,
    },
    year : DataTypes.STRING(4),
    start : DataTypes.DATE,
    end : DataTypes.DATE,
}) 


Batch.belongsTo(Course);
Batch.belongsTo(Season);
Batch.belongsTo(Center);

Course.hasMany(Batch);
Season.hasMany(Batch);
Center.hasMany(Batch);


module.exports =  {db , Student , Batch , Course , Season , Center}