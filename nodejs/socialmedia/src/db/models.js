const Sequelize = require('sequelize');

// database 

const db = new Sequelize(
        'socialmediadb' , 
        'socialuser' ,
        'mediapass' , 
        {
            host : 'localhost',
            dialect : 'mysql'
});

// Defining Common Cols

const COL_ID_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey : true
}

const COL_USERNAME_DEF ={
    type : Sequelize.DataTypes.STRING(30),
    allowNull : false,
    unique : true
}

const COL_TITLE_DEF = {
    type: Sequelize.DataTypes.STRING(140),
    allowNull: false
}

// Creating models / tables

const Users = db.define('user' , {
    id : COL_ID_DEF,
    username : COL_USERNAME_DEF,
});

const Posts = db.define('post' , {
    id : COL_ID_DEF,
    title : COL_TITLE_DEF,
    body : {
        type : Sequelize.DataTypes.TEXT,
        allowNull : false,
    }
})

const Comments = db.define('comment' , {
    id : COL_ID_DEF,
    title : COL_TITLE_DEF,
    body :{
        type : Sequelize.DataTypes.TEXT('tiny')
    }
})

//associations
Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)

//Database syncronization
db.sync()
    .then(()=> console.log(`Db synced`))
    .catch((E)=> console.log(`Error : ${E}`))


//exporting modules
  module.exports = {
    db,
   Users,
   Posts,
   Comments   
  }