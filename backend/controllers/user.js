const {User} = require('../models');
//import bcrypt
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const db= {
    keyToken: process.env.KEY_TOKEN
};
//create user
exports.signup = async(req, res, next) =>{
    try {
       const hash = await  bcrypt.hash(req.body.password, 10)
        const user =  new User({
            email: req.body.email,
            password: hash,
            name: req.body.name,
            isAdmin: 0
        });
        user.save()
        return res.json(user)
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
        // if(user.posts != null){
        //   posts.forEach(imageUrl => {
        //     const filename = post.imageUrl.split('/images/')[1];
        //     fs.unlink(`images/${filename}`, () =>{
        //       console.log('wtf')
        //     })          
        //   });
        // }
        await user.destroy()
        return res.json({message:'utilisateur supprimé'});
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
};

exports.login = (req, res, next) => {  
    if ( !req.body.email && !req.body.password ) {
      return res.status(400).json({message: "champ manquant"})
  }
    User.findOne({
      where: { email: (req.body.email),}
    })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur inconnu' });
        }
        bcrypt.compare(req.body.password, user.password) 
          .then((valid) => {
            if (!valid) {
              return res.status(401).json({ error: 'mauvais mot de passe' });
            }
            res.status(200).json({
              token: jwt.sign(
                { userId: user.id }, `${db.keyToken}`,
                { expiresIn: '24h' }),
              uuid : user.uuid,
              name : user.name
              });  
          });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };