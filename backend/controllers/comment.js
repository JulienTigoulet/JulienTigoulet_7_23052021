const {Comment, Post, User} = require('../models');

//create Comment
exports.createComment = async (req, res) =>{
    const { postUuid, body, userUuid } = req.body
    try{
        const post = await Post.findOne({ where : { uuid: postUuid } })
        const user = await User.findOne({ where: { uuid: userUuid } })
        const comment = await Comment.create({
            body,
            postId : post.id,
            userId : user.id
        })
        return res.json(comment)
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
};
//read all Comments
exports.ShowAllComment =  async (req, res) =>{
    try{
        const comments = await Comment.findAll()
        return res.json(comments)
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
};
// find one Comment
exports.findOneComment = async(req, res) =>{
    const uuid = req.params.uuid
    try{
        const comment = await Comment.findOne({
            where: { uuid },
        })
        return res.json(comment);
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
};
//delete one Comment
exports.deleteComment = async(req, res) =>{
    const uuid = req.params.uuid
    try{
        const comment = await Comment.findOne({ where: { uuid } })
        await comment.destroy()
        return res.json({message:'publication supprimé'});
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
};
//modify one Comment
exports.modifyComment = async(req, res) =>{
    const uuid = req.params.uuid
    const { body } = req.body
    try{
        const comment = await Comment.findOne({ where: { uuid } })
        comment.body = body
        await comment.save()
        return res.json(comment);
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
};