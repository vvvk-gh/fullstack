const route = require('express').Router()

const {
    createAnnoUser,
    getUserById,
    getUserByUsername
} = require('../../controllers/users');


route.get('/:id' , async(req ,res) => {

    let user;
    console.log(req.params.id);

    if(isNaN(parseInt(req.params.id))){
         //if given param is username
        user = await getUserByUsername(req.params.id)
        
    }
    else{
        //if given param is username
        user = await getUserById(req.params.id)
        
    }

    console.log(user);

    if(user){
        res.status(200).send(user);
    }
    else{
        res.status(404).send({
            error : `No such username or userid`
        })
    }

});

route.post('/' , async (req ,res)=>{
    const user = await createAnnoUser();
    res.status(200).send(user);
})


module.exports = {
    userRoute : route 
}