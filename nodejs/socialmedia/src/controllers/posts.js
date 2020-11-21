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

async function task(){
    console.log(await createNewPost('1' , 'new post by user1' , 'This the post body'));
    console.log(`==================================`);
    console.log(await createNewPost('1' , 'other post by user1' , 'This the someother post body'));
    console.log(`==================================`);
    console.log(await createNewPost('3' , 'new post by user3' , 'This the post body'));
    console.log(`==================================`);
    console.log(await createNewPost('3' , 'other post by user3' , 'This the someother post body'));
    console.log(`==================================`);
    
    const posts = await findAllPosts();
    for(let p of posts){
        console.log(`Author: ${p.user.username}\n ${p.title}\n${p.body}\n `);
    }
    
}

task()