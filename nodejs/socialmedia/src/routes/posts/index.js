const route = require('express').Router()

const { allCommentsOfPost } = require('../../controllers/comments');
const {
    createNewPost,
    findAllPosts
} = require(`../../controllers/posts`);

route.get('/' , async(req , res)=>{
    const posts = await findAllPosts();
    res.status(200).send(posts);
});

route.post('/' , async(req , res) =>{

    const { userId , title , body } = req.body

    if((!userId) || (!title) ||  (!body)){
        return res.set(401).send({
            error : `Need userid , title and  body to create a post`
        })
    }
    
    const post = await createNewPost(userId , title , body)
    res.status(201).send(post);
});


module.exports = {
  postRoute : route  
} 