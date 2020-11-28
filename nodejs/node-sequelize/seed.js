const {db , Student , Batch , Course , Season , Center} = require('./model');

Season.bulkCreate([
    {id :'S', name: `Summer`},
    {id :'F', name: 'Fall'},
    {id :'W', name:'Winter'},
    {id :'P', name:'Spring'},
    ] , 
{
    ignoreDuplicates : true
});

Center.bulkCreate([
    {id :'HC', name: `Hitech City`, city:'Hyderabad'},
    {id :'DN', name: 'Dilshuk Nagar', city:'Delhi'},
    {id :'TH', name:'Time Hospital', city:'Kolkata'},
    {id :'OL', name:'Online', city:'Online'},
    ] , 
{
    ignoreDuplicates : true
});

Course.bulkCreate([
    {id :'WD', name: `Web Developement`},
    {id :'AB', name: 'Android Bootcamp'},
    {id :'AI', name:'Artifical Intelligence'},
    {id :'IP', name:'Interview Prepartion'},
    ] , 
{
    ignoreDuplicates : true
});

db.sync({alter : true})
.then(() => console.log('Values added into the database'))
.catch((err) => console.log(err) )