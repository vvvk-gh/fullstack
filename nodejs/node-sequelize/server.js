const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const {db , Student , Batch , Course , Season , Center} = require('./model');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine','hbs');


app.get('/' , async (req , res)=>{
    try{
        let courses =  await Course.findAll()
        let seasons = await Season.findAll()
        let centers = await Center.findAll()

        res.render('index' , {
            courses, 
            seasons, 
            centers,
            heading : 'Batchcode Generator',
            year : [2020 ,2021, 2022, 2023, 2024 ,2025]},
         );
    }
    catch(e){
        console.log(e);
    }
})

app.post('/batchcode', async (req , res)=>{

    
    console.log(req.body);
    let batchcode = '' ;
    batchcode += req.body.course;
    batchcode += req.body.center;
    batchcode += req.body.year.substr(2);
    batchcode += req.body.season;
    batchcode += req.body.batchno;
    //console.log(batchcode);

    try {

    
    const batch = await Batch.create({
        code : batchcode,
        year : parseInt(req.body.year),
        start : req.body.start,
        end : req.body.end,
        batchno : req.body.batchno,
        courseId : req.body.course,
        seasonId : req.body.season,
        centerId : req.body.center
    });
    res.send(batch.code)
   }
   catch(e){
       console.log(e);
   }
})

app.get('/batches' ,async (req , res)=>{
    try{
        let batches = await Batch.findAll();
        res.render('batchcode' , {batches})
    }
    catch(e){
        console.log(e);
    }    
})

app.listen('4444' , ()=>{
    console.log(`App running at http://localhost:4444`);
});

