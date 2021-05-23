const {User} = require('../models');
//import bcrypt
const bcrypt = require('bcrypt');

require('dotenv').config();
const db= {
    keyToken: process.env.KEY_TOKEN
};
//create user
exports.signup = async(req, res, next) =>{
    try {
        bcrypt.hash(req.body.password, 10)
        .then(hash =>{
              const user =  new User({
                email: req.body.email,
                password: hash,
                name: req.body.name,
                isAdmin: 0
            });
            user.save()
            return res.json(user)
        });
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
        
};
//read all users
exports.showAllUsers =  async(req, res) =>{
    try{
        const users = await User.findAll()
        return res.json(users);
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
};
// find one user
exports.findOneUser =  async(req, res) =>{
    const uuid = req.params.uuid
    try{
        const user = await User.findOne({
            where: { uuid },
            include:'posts'
        })
        return res.json(user);
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
};

//delete one user
exports.deleteUser = async(req, res) =>{
    const uuid = req.params.uuid
    try{
        const user = await User.findOne({ where: { uuid } })
        await user.destroy()
        return res.json({message:'utilisateur supprimé'});
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
};

