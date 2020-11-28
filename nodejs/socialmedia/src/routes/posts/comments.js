const route = require('express').Router();

const {
    createComment,
    allCommentsOfPost,
    allCommentsOfUser,
} = require('../../controllers/comments')

route.post('/' , async(req ,res)=>{

 const { userId , postId , title , body } = req.body;   

 if((!userId) ||(!postId) || (!title) || (!body)){
     res.status(401).send({
         error : `userid , postid , title , body are mandatory`
     })
 }


let comment = await createComment(userId , postId , title , body);
res.status(200).send(comment);
});

route.get('/' ,async(req ,res) => {
    const { userId } = req.body
    if((!userId)){
        res.status(403).send({
            error : `Needed userId to get all comments of an user`
        })
    }
    else{
        let comments = await allCommentsOfUser(userId);
        res.status(200).send({comments});
    }
})


module.exports = {
    commentsRoute : route 
}