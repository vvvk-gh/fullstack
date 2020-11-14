const Sequelize = require('sequelize');

const db = new Sequelize('sampledb' , 'sampleuser' , 'samplepass', {
    host : 'localhost',
    dialect : 'mysql'
})


db.authenticate()
.then(()=>{
    console.log('Credintials are working');
})
.catch((e)=>{
    console.log('err' +e);
})


