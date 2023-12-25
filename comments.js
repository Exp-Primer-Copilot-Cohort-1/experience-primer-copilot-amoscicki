// Create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var Post = require('../models/post');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config/database');

// Add comment
router.post('/add', (req, res, next) => {
    var newComment = new Comment({
        content: req.body.content,
        post: req.body.post,
        user: req.body.user
    });

    Comment.addComment(newComment, (err, comment) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to add comment' });
        } else {
            res.json({ success: true, msg: 'Comment added' });
        }
    }
    );
}
);
