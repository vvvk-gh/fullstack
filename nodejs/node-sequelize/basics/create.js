const {db , Student} = require('./model');


const task = async() => {
    try{
        await db.sync()
        for(i= 0 ; i<=10 ; i++){
            await Student.create({
                name : (['varun','abhi','sai','kiran','charan',
                'shammi','sk','vulgar vardhan','gl','mowa'])[parseInt(Math.random()*10)],
                age : 10 + parseInt(Math.random()*10),
            });
        }
      
    }
    catch(err){
        console.log(err)
    }

}

task();
