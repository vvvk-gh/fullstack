const {Posts , Users , Comments} = require('../db/models');

async function createComment(userId , postId , title , body){
    const comment = await Comments.create({
        title,
        body,
        userId,
        postId
    })
    return comment; 
}

async function allCommentsOfUser(userId){
    const comments = await Comments.findAll({ 
        include : [Users], 
        where : {userId}, 
    })
    return comments 
}

async function allCommentsOfPost(postId){
    const comments = await Comments.findAll({ 
        include : [Posts] , 
        where : {postId} 
    })
    return comments
}

module.exports = {
    createComment,
    allCommentsOfPost,
    allCommentsOfUser,
}


//Test Code

/* async function task() {
    console.log(await createComment(2 ,2 , 'user2 on post1' , "Comment body by user2 on post 2")) 
    console.log(await createComment(1 ,2 , 'user1 on post2' , "Comment body by user1 on post 2"))
    console.log(await createComment(3 ,2 , 'user3 on post2' , "Comment body by user3 on post 2"))
    console.log(await createComment(4 ,2 , 'user4 on post2' , "Comment body by user4 on post 2"))
   let comments =  await allCommentsOfPost(2);
    
   for( c of comments){
        console.log( `Post Body : ${c.post.body} \n Comment Title : ${c.title} Comment Body : ${c.body}` );
        console.log(`==================`);
    }

   let comments =  await allCommentsOfUser(2);
    for(c of comments){
         console.log(`User Name : ${c.user.username} \n Comment Title : ${c.title}`)
        console.log(`==================================`);
    }
}
task() */