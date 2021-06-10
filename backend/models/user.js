'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Post, {foreignKey:'userId', as:'posts', onDelete: 'cascade', hooks:true});
      models.User.hasMany(models.Comment);
    }
    toJSON(){
      return {...this.get(), id: undefined}
    }
  };
  User.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    password: {
      type: DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg:"L'utilisateur doit avoir un mot de passe"},
        notEmpty : {msg:"Le mots de passe ne doit pas être vide"}
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull : false,
      unique : true,
      validate : {
        notNull : {msg:"L'utilisateur doit avoir un email"},
        notEmpty : {msg:"L'email ne doit pas être vide"},
        isEmail : {msg:"Doit être une adresse email valide"}
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg:"L'utilisateur doit avoir un nom"},
        notEmpty : {msg:"Le nom ne doit pas être vide"}
      }
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
  }, {
    sequelize,
    tableName :'users',
    modelName: 'User',
  });
  return User;
};