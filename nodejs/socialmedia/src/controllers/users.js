const {Users} = require('../db/models')
const {randomUserGenerator} = require('../utils/username')

async function createAnnoUser(){
    const user = await Users.create({
        username : randomUserGenerator(),
    })
    return user
}

async function getUserById(id){
    return await Users.findOne({where : {id}})
}

async function getUserByUsername(username){
    return await Users.findOne({where : {username}})
}

//Test Code
/* async function task(){

    console.log(await createAnnoUser());
    console.log(`----------------------`);
    console.log(await createAnnoUser());
    console.log(`----------------------`);
    console.log(await createAnnoUser());
    console.log(`----------------------`);
    console.log(await createAnnoUser());

}
task(); 
*/
module.exports = {
createAnnoUser,
getUserById,
getUserByUsername,
}