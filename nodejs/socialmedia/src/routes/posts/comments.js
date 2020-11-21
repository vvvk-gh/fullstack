const route = require('express').Router();

const {
    createComment,
    allCommentsOfPost,
    allCommentsOfUser,
} = require('../../controllers/comments')


module.exports = {
    commentsRoute : route 
}