
const {Post, User} = require('../models');
const fs = require('fs');
//create post
exports.createPost = async (req, res) =>{
    const { userUuid, body} = req.body
    try{
        const user = await User.findOne({ where : { uuid: userUuid } })
        const post = await Post.create({ body,
            userId : user.id,
            imageUrl: req.body && req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`: null})
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
        if(post.imageUrl !== null){
            const filename = post.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () =>{
                post.destroy()
            })
        }
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
    const {body} = req.body
    try{
        const post = await Post.findOne({ where: { uuid }})
        post.body = body
        if(post.imageUrl){
            const filename = post.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () =>{
            })
        }
        post.imageUrl = req.body && req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`:null
        await post.save()
        return res.json(post);
    } catch(err){
        console.log(err)
        return res.status(0).json(err)
    }
};