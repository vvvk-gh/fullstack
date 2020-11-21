const {Posts , Users} = require('../db/models');

async function createNewPost(userId , title , body){
    const post = await Posts.create({
        title,
        body,
        userId,
    })

    return post
}

async function findAllPosts(){
    const posts = await Posts.findAll({
        include : [Users]
    })
    return posts
 }

module.exports = {
    createNewPost,
    findAllPosts
}

//Test Code
/* 
async function task(){
    console.log(await createNewPost('1' , 'This is new post' , 'This the post body'));
    console.log(`==================================`);
    console.log(await createNewPost('1' , 'This is some other post' , 'This the someother body'));
    console.log(`==================================`);
    
    const posts = await findAllPosts();
    for(let p of posts){
        console.log(`Author: ${p.user.username}\n ${p.title}\n${p.body}\n `);
    }
    
}

task() */