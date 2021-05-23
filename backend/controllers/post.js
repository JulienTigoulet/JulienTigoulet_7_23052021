const {Post, User} = require('../models');

//create post
exports.createPost = async (req, res) =>{
    const { userUuid, body } = req.body
    try{
        const user = await User.findOne({ where : { uuid: userUuid } })
        const post = await Post.create({ body, userId : user.id })
        return res.json(post)
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
};
//read all posts
exports.ShowAllPost =  async (req, res) =>{
    try{
        const posts = await Post.findAll({ include:'user'})
        return res.json(posts)
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
};
// find one post
exports.findOnePost = async(req, res) =>{
    const uuid = req.params.uuid
    try{
        const post = await Post.findOne({
            where: { uuid },
            include:'comments'
        })
        return res.json(post);
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
};
//delete one post
exports.deletePost = async(req, res) =>{
    const uuid = req.params.uuid
    try{
        const post = await Post.findOne({ where: { uuid } })
        await post.destroy()
        return res.json({message:'publication supprimé'});
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
};
//modify one post
exports.modifyPost = async(req, res) =>{
    const uuid = req.params.uuid
    const { body } = req.body
    try{
        const post = await Post.findOne({ where: { uuid } })
        post.body = body
        await post.save()
        return res.json(post);
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
};