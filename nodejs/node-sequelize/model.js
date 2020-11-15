const Sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

const db = new Sequelize('sampledb' , 'sampleuser' , 'samplepass', {
    host : 'localhost',
    dialect : 'mysql'
})

//define a cousre
const Course = db.define('course' ,{
    id:{
        type : DataTypes.STRING(2),
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING(40),
    }

})


//defina a center

const Center = db.define('center' ,{
    id:{
        type : DataTypes.STRING(2),
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING(15),
        allowNull:false,
    },
    city : {
        type:DataTypes.STRING(19),
        allowNull:false
    }
})


//define a batch

const Batch = db.define('batch' ,{
    code:{
        type : DataTypes.STRING(8),
        primaryKey: true,
    },
    year: DataTypes.INTEGER(4),
    start : DataTypes.DATE,
    end:DataTypes.DATE
})

//define a season 

const Season = db.define('season' ,{
    id:{
        type : DataTypes.STRING(2),
        primaryKey:true,
    },
    name:{
        type: DataTypes.STRING(10),
        allowNull: false,
    }

})

//assoociations

Batch.belongsTo(Course)
Batch.belongsTo(Center)
Batch.belongsTo(Season)

Course.hasMany(Batch)
Season.hasMany(Batch)
Center.hasMany(Batch)
//syncing
db.sync({alter:true})
    .then(()=> console.log('Database Synchronized'))
    .catch((E)=> console.log(E))


module.exports = {
 db, Center , Season ,  Course , Batch
}